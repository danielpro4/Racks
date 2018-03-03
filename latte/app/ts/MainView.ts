module latte {

    /**
     * MainView
     */
    export class MainView extends MainViewBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates a new DashboardView
         */
        constructor() {
            super();

            // Initialize the View
            this.present(this.racksView);
        }

        //endregion

        //region Methods
        /**
         * Establece la vista principal de la aplicación.
         *
         * @param {latte.Element<HTMLElement>} el
         */
        present(el: Element<HTMLElement>) {

            if (el instanceof RacksView) {
                el.loadRacks().send();
            }

            this.wrapperElement.setContent(el);
        }
        //endregion

        //region Properties

        /**
         * Field for registerForm property
         */
        private _registerForm: RegisterForm;

        /**
         * Gets the register form instance
         *
         * @returns {RegisterForm}
         */
        get registerForm(): RegisterForm {
            if (!this._registerForm) {
                let lazy = this._registerForm = new RegisterForm();

                lazy.registered.add((rack: Rack) => {
                    if (rack instanceof Rack) {
                        const rackElement = new RackElement();
                        rackElement.rack = rack;
                        rackElement.closeRequest.add(() => {
                            this.present(this.racksView);
                        });

                        this.present(rackElement);
                    }
                });

                lazy.closeRequest.add(() => {
                    this.present(this.racksView);
                });
            }
            return this._registerForm;
        }

        /**
         * Field for racksView property
         */
        private _racksView: RacksView;

        /**
         * Gets el componente para mostrar los racks de la vista principal
         *
         * @returns {RacksView}
         */
        get racksView(): RacksView {
            if (!this._racksView) {
                let lazy = this._racksView = new RacksView();

                lazy.create.add(() => {
                    this.present(this.registerForm);
                });

                lazy.edit.add((rack: Rack) => {
                    // Obtenemos el rack del servidor por nombre
                    Rack.byName(rack.name).send((record: Rack) => {
                        const rackElement = new RackElement();
                        rackElement.rack = record;
                        rackElement.closeRequest.add(() => {
                            this.present(this.racksView);
                        });

                        this.present(rackElement);
                    });
                });
            }
            return this._racksView;
        }
        //endregion
    }

}