module latte {

    import Product = latte.Product;

    /**
     * ProductElement
     */
    export class ProductElement extends ProductElementBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates a new ProductElement
         */
        constructor() {
            super();

            // Attach events for this element
            this.addEventListener('click', (evt) => {
                if (evt.preventDefault) {
                    evt.preventDefault();
                }

                this.onClick();

            }, false);
        }
        
        //region Methods
        /**
         * Raises the <c>location</c> event
         */
        onProductChanged(){
            if(this._locationChanged){
                this._locationChanged.raise();
            }

            if (this.location) {
                this.quantityElement.text = Culture.formatNumber(this.location.quantity, 2);
            }
        }
      
        /**
         * Raises the <c>click</c> event
         */
        onClick(){
            if(this._click){
                this._click.raise();
            }
        }
        //endregion

        //region Events
        /**
         * Back field for event
         */
        private _locationChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the location property changes
         *
         * @returns {LatteEvent}
         */
        get locationChanged(): LatteEvent{
            if(!this._locationChanged){
                this._locationChanged = new LatteEvent(this);
            }
            return this._locationChanged;
        }
        
        /**
         * Back field for event
         */
        private _click: LatteEvent;

        /**
         * Gets an event raised when when the user raises the click
         *
         * @returns {LatteEvent}
         */
        get click(): LatteEvent{
            if(!this._click){
                this._click = new LatteEvent(this);
            }
            return this._click;
        }
        //endregion

        //region Properties
        /**
         * Property field
         */
        private _location: Location = null;
        
        /**
         * Gets or sets when the location property changes
         *
         * @returns {Location}
         */
        get location(): Location{
            return this._location;
        }
        
        /**
         * Gets or sets when the location property changes
         *
         * @param {Location} value
         */
        set location(value: Location){
        
            // Check if value changed
            let changed: boolean = value !== this._location;
            
            // Set value
            this._location = value;
            
            // Trigger changed event
            if(changed){
                this.onProductChanged();
            }
        }
        
        //endregion

    }

}