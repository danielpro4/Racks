module latte {

    /**
     * LocationEditElement
     */
    export class LocationEditElement extends LocationEditElementBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates a new LocationEditElement
         */
        constructor() {
            super();

            // Attach Events
            this.form.addEventListener('submit', (evt) => {
                evt.preventDefault();

            }, false);

            this.txtQuantity.element.focus();
            this.txtQuantity.element.select();
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Raises the <c>location</c> event
         */
        onLocationChanged() {
            if (this._locationChanged) {
                this._locationChanged.raise();
            }

            if (this.location) {
                this.txtQuantity.value = Culture.formatNumber(this.location.quantity, 2);
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
        get locationChanged(): LatteEvent {
            if (!this._locationChanged) {
                this._locationChanged = new LatteEvent(this);
            }
            return this._locationChanged;
        }

        //endregion

        //region Properties
        /**
         * Property field
         */
        private _location: Location = null;

        /**
         * Gets or sets when the location property chamnges
         *
         * @returns {Location}
         */
        get location(): Location {
            return this._location;
        }

        /**
         * Gets or sets when the location property chamnges
         *
         * @param {Location} value
         */
        set location(value: Location) {
            // Check if value changed
            let changed: boolean = value !== this._location;

            // Set value
            this._location = value;

            // Trigger changed event
            if (changed) {
                this.onLocationChanged();
            }
        }

        //endregion

    }

}