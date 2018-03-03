module latte {

    /**
     * Main Class
     * Your app starts here.
     */
    export class Main {

        /**
         * Pointer to the current main view
         */
        public static mainView: MainView;

        /**
         * Start your program on the constructor.
         */
        constructor() {
            // Show main view
            this.goMainView();
        }

        private goMainView(): void {

            const view = new MainView();
            const mountPoint: HTMLElement = <HTMLElement>document.querySelector('#root');

            mountPoint.appendChild(view.element);

            Main.mainView = view;
        }
    }

}