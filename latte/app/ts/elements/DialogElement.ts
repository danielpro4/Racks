module latte {

    /**
     * DialogElement
     */
    export class DialogElement extends DialogElementBase {

        //region Static

        private static initialized = false;
        private static stack:DialogElement[] = [];

        /**
         * initialize
         */
        private static initialize() {

            if (DialogElement.initialized) return;

            //region Escape key
            window.addEventListener('keyup', (e:any) => {
                if (e.keyCode == 27) { /* ESCAPE */
                    if (DialogElement.stack.length > 0) {
                        DialogElement.stack[DialogElement.stack.length - 1].close();
                    }
                }
            });

            DialogElement.initialized = true;
        }

        /**
         * Remove from stack
         * @param d {DialogElement}
         */
        private static removeFromStack(d:DialogElement) {
            var a:DialogElement[] = [];

            for (var i = 0; i < DialogElement.stack.length; i++) {
                if (DialogElement.stack[i] != d) {
                    a.push(DialogElement.stack[i]);
                }
            }

            DialogElement.stack = a;
        }
        //endregion

        //region Fields
        //endregion

        /**
         * DialogElement
         */
        constructor(element:Element<HTMLElement> = null) {
            super();

            DialogElement.initialize();
            DialogElement.stack.push(this);

            // Add listener
            this.addEventListener('click', function (evt) {
                evt.stopPropagation();
            }, false);

            if (element) {
                this.content = element;
            }

        }

        //region Private Methods
        //endregion

        //region Methods

        close() {
            this.removeFromParent();
        }

        /**
         * Manejador de eventos para el botón cancelar
         */
        btnClose_click() {
            this.close();
        }

        /**
         * Manejador de eventos para el botón success
         */
        btnSuccess_click() {
            this.onSuccess();
        }

        /**
         * Shows the DialogElement
         */
        show() {
            let fadeIn = false;

            this.appendTo(document.body);

            if (fadeIn) {
                this.fadeIn(0.2, () => {});

            } else {
                this.dialogElement.style.top = '0%';

                (new Animation(0, 20, 0.3, (value: number) => {
                    this.dialogElement.style.top = value + '%'
                })).start();
            }

        }

        /**
         * Raises the <c>content</c> event
         */
        onContentChanged(){
            if(this._contentChanged){
                this._contentChanged.raise();
            }

            this.wrapElement.add(this.content);
        }

        /**
         * Raises the <c>success</c> event
         */
        onSuccess(){
            if(this._success){
                this._success.raise();
            }
        }

        //endregion

        //region Events
        /**
         * Back field for event
         */
        private _contentChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the content property changes
         *
         * @returns {LatteEvent}
         */
        get contentChanged(): LatteEvent{
            if(!this._contentChanged){
                this._contentChanged = new LatteEvent(this);
            }
            return this._contentChanged;
        }

        /**
         * Back field for event
         */
        private _success: LatteEvent;

        /**
         * Gets an event raised when the button is clicked
         *
         * @returns {LatteEvent}
         */
        get success(): LatteEvent{
            if(!this._success){
                this._success = new LatteEvent(this);
            }
            return this._success;
        }
        //endregion

        //region Properties

        /**
         * Property field
         */
        private _title: string = null;

        /**
         * Gets or sets the title of the dialog
         *
         * @returns {string}
         */
        get title(): string {
            return this._title;
        }

        /**
         * Gets or sets the title of the dialog
         *
         * @param {string} value
         */
        set title(value: string) {
            this._title = value;

            if (value) {
                this.titleElement.text = value;
            }
        }

        /**
         * Property field
         */
        private _content: Element<HTMLElement> = null;

        /**
         * Gets or sets when the content property changes
         *
         * @returns {Element<HTMLElement>}
         */
        get content(): Element<HTMLElement>{
            return this._content;
        }

        /**
         * Gets or sets when the content property changes
         *
         * @param {Element<HTMLElement>} value
         */
        set content(value: Element<HTMLElement>){
            // Check if value changed
            let changed: boolean = value !== this._content;

            // Set value
            this._content = value;

            // Trigger changed event
            if(changed){
                this.onContentChanged();
            }
        }
        //endregion

    }

}