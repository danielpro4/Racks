module latte {

    /**
     * RacksView
     */
    export class RacksView extends RacksViewBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * RacksView
         */
        constructor() {
            super();
        }

        //region Private Methods
        /**
         * Crear un botón genérico
         *
         * @param {GenericCallback} cb
         * @param {"Editar"} text
         * @param {string} className
         * @return {latte.Element<HTMLButtonElement>}
         */
        private createButton(cb: GenericCallback = null, text: string = 'Editar', className = 'btn-secondary') {
            const buttonElement: Element<HTMLButtonElement> = new Element<HTMLButtonElement>(document.createElement('button'));
            buttonElement.element.classList.add('btn', 'mr-1', 'btn-sm', className);
            buttonElement.text = text;
            buttonElement.element.addEventListener('click', (evt) => {
                evt.preventDefault();

                if (_isFunction(cb)) {
                    cb();
                }
            }, false);

            return buttonElement;
        }
        //endregion

        //region Methods
        /**
         * Manejador de eventos para el botón Crear.
         *
         * @param evt
         */
        btnCreateNew_click(evt) {
            evt.preventDefault();

            // Lanzamos el event create
            this.onCreate();
        }

        /**
         * Manejador de eventos para el botón actualizar.
         *
         * @param evt
         */
        btnRefresh_click(evt) {
            evt.preventDefault();

            this.loadRacks().send();
        }

        /**
         * Carga inicial de la vista
         */
        onLoad() {
            this.loadRacks().send();
        }

        /**
         * Carga los datos del servidor.
         *
         * @return {latte.RemoteCall<latte.Rack>}
         */
        loadRacks(): RemoteCall<Rack> {
            this.loader.visible = true;

            return Rack.catalog().withHandlers((racks: Rack[]) => {
                this.loader.visible = false;

                this.bodyElement.clear();

                if (racks.length > 0) {
                    const elements = racks.map((rack: Rack) => {
                        const row = new Element<HTMLTableRowElement>(document.createElement('tr'));

                        // Columna para colocar el nombre del rack
                        const column: Element<HTMLTableCellElement> = new Element<HTMLTableCellElement>(document.createElement('td'));
                        column.text = `${rack.recordId}-${rack.name}`;

                        //  Columna para colocar los botónes de acción
                        const column2: Element<HTMLTableCellElement> = new Element<HTMLTableCellElement>(document.createElement('td'));

                        const btnEdit = this.createButton(() => {
                            // Lanza el evento editar
                            this.onEdit(rack)
                        }, 'Editar', 'btn-secondary');

                        const btnDelete = this.createButton(() => {
                            // Lanza el evento editar

                            const dialog = new DialogElement();
                            dialog.title = "Eliminar rack";
                            dialog.btnClose.text = "Cancelar";
                            dialog.btnSuccess.text = "Sí, eliminar";
                            dialog.wrapElement.text = `¿Seguro que desea eliminar el rack <b>${rack.name}</b>?`;
                            dialog.success.add(() => {
                                rack.remove(() => {
                                    this.loadRacks().send();
                                });

                                dialog.close();
                            });
                            dialog.show();

                        }, 'Eliminar', 'btn-danger');

                        // Ensanblar vista
                        column2.addArray([btnEdit, btnDelete]);
                        row.addArray([column, column2]);

                        return row;
                    });

                    this.bodyElement.addArray(elements);
                }

                if (racks.length == 1) {
                    this.rowsElement.text = `${racks.length} elemento`;
                } else {
                    this.rowsElement.text = `${racks.length} elementos`;
                }

            }, () => {});
        }

        /**
         * Raises the <c>create</c> event
         */
        onCreate(){
            if(this._create){
                this._create.raise();
            }
        }

        /**
         * Raises the <c>edit</c> event
         */
        onEdit(rack: Rack){
            if(this._edit){
                this._edit.raise(rack);
            }
        }
        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _create: LatteEvent;

        /**
         * Obtiene un evento cuando se da click al botón crear
         *
         * @returns {LatteEvent}
         */
        get create(): LatteEvent{
            if(!this._create){
                this._create = new LatteEvent(this);
            }
            return this._create;
        }

        /**
         * Back field for event
         */
        private _edit: LatteEvent;

        /**
         * Obtiene un evento para el botón editar
         *
         * @returns {LatteEvent}
         */
        get edit(): LatteEvent{
            if(!this._edit){
                this._edit = new LatteEvent(this);
            }
            return this._edit;
        }
        //endregion

        //region Properties
        /**
         * Field for loader property
         */
        private _loader: LoaderElement;

        /**
         * Gets the loader element
         *
         * @returns {LoaderElement}
         */
        get loader(): LoaderElement {
            if (!this._loader) {
                this._loader = new LoaderElement();

                this.add(this._loader);
            }
            return this._loader;
        }

        //endregion

    }

}