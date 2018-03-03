module latte {

    import RackElement = latte.RackElement;

    /**
     * RegisterForm
     */
    export class RegisterForm extends RegisterFormBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates new RegisterForm
         */
        constructor() {
            super();

            // Bind events
            this.btnBack.addEventListener('click', () => { this.onCloseRequest() }, false);
        }

        //region Private Methods

        /**
         * Manejador de evento click para el botón reset
         *
         * @param evt
         */
        private btnReset_click(evt) {
            if (evt.preventDefault) {
                evt.preventDefault();
            }

            this.txtLevel.value = String(4);
            this.txtLocation.value = String(15);
        }

        /**
         * Manejador de evento click para el botón registrar
         *
         * @param evt
         */
        private btnRegister_click(evt) {
            if (evt.preventDefault) {
                evt.preventDefault();
            }

            // Extraemos los valores de la vista
            const nLevels: number = Number(this.txtLevel.value);
            const nLocations: number = Number(this.txtLocation.value);

            if (nLevels <= 0) {
                this.txtLevel.blink();
                this.txtLevelFeedback.element.style.display = 'block';
                return false;
            }

            if (nLocations <= 0) {
                this.txtLocation.blink();
                this.txtLocationFeedback.element.style.display = 'block';
                return false;
            }

            // Reset state
            this.txtLevelFeedback.element.style.display = 'none';
            this.txtLocationFeedback.element.style.display = 'none';

            // Cálculamos el número de columnas
            const nColumns = Math.ceil(nLocations / nLevels);

            // Llama a un método Ajax para registrar un nuevo rack
            Rack.register(1, nLevels, nColumns).send((rack: Rack) => {
                // Lanzamos un evento <c>registered</c> después del registro con el nuevo rack creado
                this.onRegistered(rack);
            });
        }

        //endregion

        //region Methods
        /**
         * Raises the <c>registered</c> event
         */
        onRegistered(rack: Rack) {
            if (this._registered) {
                this._registered.raise(rack);
            }
        }

        /**
         * Raises the <c>closeRequest</c> event
         */
        onCloseRequest(){
            if(this._closeRequest){
                this._closeRequest.raise();
            }
        }

        //endregion

        //region Events
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

        /**
         * Back field for event
         */
        private _registered: LatteEvent;

        /**
         * Gets an event raised when when the button register is pressed
         *
         * @returns {LatteEvent}
         */
        get registered(): LatteEvent {
            if (!this._registered) {
                this._registered = new LatteEvent(this);
            }
            return this._registered;
        }

        //endregion

        //region Properties
        //endregion

    }

}