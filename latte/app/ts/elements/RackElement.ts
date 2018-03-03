module latte {

    /**
     * RackElement
     */
    export class RackElement extends RackElementBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates a new RackElement
         */
        constructor() {
            super();

            // Bind events
            this.btnBack.addEventListener('click', () => { this.onCloseRequest() }, false);
        }

        //region Private Methods
        /**
         * @param {string} text
         * @param {string} type
         * @return {latte.Element<HTMLTableCellElement>}
         */
        private createColumn(text: string, type: string = 'th', className: string = '') {
            const column: Element<HTMLTableCellElement> = new Element<HTMLTableCellElement>(document.createElement(type));
            column.addClass('col-element');
            column.addClass(className);
            column.text = text;

            return column;
        }

        /**
         * @return {latte.Element<HTMLTableRowElement>}
         */
        private createRow() {
            const row = new Element<HTMLTableRowElement>(document.createElement('tr'));
            row.addClass('row-element');

            return row;
        }

        //endregion

        //region Methods
        /**
         * Raises the <c>closeRequest</c> event
         */
        onCloseRequest(){
            if(this._closeRequest){
                this._closeRequest.raise();
            }
        }

        /**
         * Raises the <c>rack</c> event
         */
        onRackChanged(){
            if(this._rackChanged){
                this._rackChanged.raise();
            }

            // TODO:
            if (this.rack != null) {

                this.lblName.text = this.rack.name;
                // Debug: console.log(this.rack);

                // Renderizar tabla
                this.tableHead.clear();
                this.tableBody.clear();

                // Extraer primer nivel y primera ubicación para calcular el número de columnas
                const firstLevel: Level = (this.rack.levels.length > 0) ? this.rack.levels[0] : new Level();
                const heads: Element<HTMLTableCellElement>[] = [];

                heads.push(this.createColumn('', 'th'));

                firstLevel.locations.forEach((location: Location, index: number) => {
                    heads.push(this.createColumn(String.fromCharCode(65 + index), 'th'));
                });

                // Creamos los niveles y ubicaciones para el cuerpo de la tabla
                const rows: Element<HTMLTableRowElement>[] = this.rack.levels.map((level: Level, index: number) => {

                    const row = this.createRow();

                    // Columna para el nombre del nivel
                    row.add(this.createColumn(`N${++index}`,'td'));

                    // Creamos las columnas n+1 por cada renglón
                    const columns: Element<HTMLTableCellElement>[] = level.locations.map((location: Location) => {

                        // Crear nuevo columna
                        const locationWrap = this.createColumn('', 'td', 'location');

                        // Crear nuevo Producto
                        let productElement = new ProductElement();
                        productElement.location = location;
                        productElement.click.add(() => {
                            const view = new LocationEditElement();
                            const dialog = new DialogElement(view);

                            view.location = location;
                            view.txtQuantity.element.select();

                            dialog.success.add(() => {

                                // Validación de cantidad
                                if (Number(view.txtQuantity.value) <= 0) {
                                    return false;
                                }

                                location.quantity = Number(view.txtQuantity.value);
                                location.save(() => {
                                    productElement.quantityElement.text = Culture.formatNumber(location.quantity,2);
                                    dialog.close();
                                });
                            });
                            dialog.show();
                        });

                        locationWrap.tooltip = `Location ID : ${location.recordId}`;
                        locationWrap.add(productElement);

                        return locationWrap;
                    });

                    row.addArray(columns);

                    return row;
                });

                this.tableHead.addArray(heads);
                this.tableBody.addArray(rows.reverse());
            }

        }

        //endregion

        //region Events
        /**
         * Back field for event
         */
        private _rackChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the rack property changes
         *
         * @returns {LatteEvent}
         */
        get rackChanged(): LatteEvent{
            if(!this._rackChanged){
                this._rackChanged = new LatteEvent(this);
            }
            return this._rackChanged;
        }

        /**
         * Back field for event
         */
        private _closeRequest: LatteEvent;
        
        /**
         * Gets an event raised when when the close button is pressed
         *
         * @returns {LatteEvent}
         */
        get closeRequest(): LatteEvent{
            if(!this._closeRequest){
                this._closeRequest = new LatteEvent(this);
            }
            return this._closeRequest;
        }
        //endregion

        //region Properties
        /**
         * Property field
         */
        private _rack: Rack = null;
        
        /**
         * Gets or sets when the value of the rack property changes
         *
         * @returns {Rack}
         */
        get rack(): Rack{
            return this._rack;
        }
        
        /**
         * Gets or sets when the value of the rack property chnages
         *
         * @param {Rack} value
         */
        set rack(value: Rack){
        
            // Check if value changed
            let changed: boolean = value !== this._rack;
            
            // Set value
            this._rack = value;
            
            // Trigger changed event
            if(changed){
                this.onRackChanged();
            }
        }
        //endregion

    }

}