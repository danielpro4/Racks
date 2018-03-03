/// <reference path="app.strings.d.ts" />
/// <reference path="datalatte.d.ts" />
/// <reference path="latte.d.ts" />
/// <reference path="latte.data.d.ts" />
/// <reference path="latte.data.strings.d.ts" />
/// <reference path="latte.element.d.ts" />
/// <reference path="latte.strings.d.ts" />
declare module latte {
    class productBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(10) unsigned
         */
        _idproduct: number;
        /**
         * Gets or sets the value of the idproduct field of type int(10) unsigned
         */
        /**
         * Gets or sets the value of the idproduct field of type int(10) unsigned
         */
        idproduct: number;
        /**
         * Back field for event
         */
        _idproductChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idproduct property changes
         */
        readonly idproductChanged: LatteEvent;
        /**
         * Raises the <c>idproductChanged</c> event
         */
        onIdproductChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: varchar(128)
         */
        _sku: string;
        /**
         * Gets or sets the value of the sku field of type varchar(128)
         */
        /**
         * Gets or sets the value of the sku field of type varchar(128)
         */
        sku: string;
        /**
         * Back field for event
         */
        _skuChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the sku property changes
         */
        readonly skuChanged: LatteEvent;
        /**
         * Raises the <c>skuChanged</c> event
         */
        onSkuChanged(): void;
        /**
         * Database field: varchar(128)
         */
        _name: string;
        /**
         * Gets or sets the value of the name field of type varchar(128)
         */
        /**
         * Gets or sets the value of the name field of type varchar(128)
         */
        name: string;
        /**
         * Back field for event
         */
        _nameChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the name property changes
         */
        readonly nameChanged: LatteEvent;
        /**
         * Raises the <c>nameChanged</c> event
         */
        onNameChanged(): void;
        /**
         * Database field: decimal(15,2)
         */
        _price: number;
        /**
         * Gets or sets the value of the price field of type decimal(15,2)
         */
        /**
         * Gets or sets the value of the price field of type decimal(15,2)
         */
        price: number;
        /**
         * Back field for event
         */
        _priceChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the price property changes
         */
        readonly priceChanged: LatteEvent;
        /**
         * Raises the <c>priceChanged</c> event
         */
        onPriceChanged(): void;
        /**
         * Database field: varchar(128)
         */
        _unit: string;
        /**
         * Gets or sets the value of the unit field of type varchar(128)
         */
        /**
         * Gets or sets the value of the unit field of type varchar(128)
         */
        unit: string;
        /**
         * Back field for event
         */
        _unitChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the unit property changes
         */
        readonly unitChanged: LatteEvent;
        /**
         * Raises the <c>unitChanged</c> event
         */
        onUnitChanged(): void;
        /**
         * Database field: varchar(128)
         */
        _image: string;
        /**
         * Gets or sets the value of the image field of type varchar(128)
         */
        /**
         * Gets or sets the value of the image field of type varchar(128)
         */
        image: string;
        /**
         * Back field for event
         */
        _imageChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the image property changes
         */
        readonly imageChanged: LatteEvent;
        /**
         * Raises the <c>imageChanged</c> event
         */
        onImageChanged(): void;
        /**
         * Database field: tinyint(1)
         */
        _active: number;
        /**
         * Gets or sets the value of the active field of type tinyint(1)
         */
        /**
         * Gets or sets the value of the active field of type tinyint(1)
         */
        active: number;
        /**
         * Back field for event
         */
        _activeChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the active property changes
         */
        readonly activeChanged: LatteEvent;
        /**
         * Raises the <c>activeChanged</c> event
         */
        onActiveChanged(): void;
        /**
         * Database field: timestamp
         */
        _created: TimeSpan;
        /**
         * Gets or sets the value of the created field of type timestamp
         */
        /**
         * Gets or sets the value of the created field of type timestamp
         */
        created: TimeSpan;
        /**
         * Back field for event
         */
        _createdChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the created property changes
         */
        readonly createdChanged: LatteEvent;
        /**
         * Raises the <c>createdChanged</c> event
         */
        onCreatedChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idproduct": string;
            "sku": string;
            "name": string;
            "price": string;
            "unit": string;
            "image": string;
            "active": string;
            "created": string;
        };
    }
    class levelBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(10) unsigned
         */
        _idlevel: number;
        /**
         * Gets or sets the value of the idlevel field of type int(10) unsigned
         */
        /**
         * Gets or sets the value of the idlevel field of type int(10) unsigned
         */
        idlevel: number;
        /**
         * Back field for event
         */
        _idlevelChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idlevel property changes
         */
        readonly idlevelChanged: LatteEvent;
        /**
         * Raises the <c>idlevelChanged</c> event
         */
        onIdlevelChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: int(10) unsigned
         */
        _idrack: number;
        /**
         * Gets or sets the value of the idrack field of type int(10) unsigned
         */
        /**
         * Gets or sets the value of the idrack field of type int(10) unsigned
         */
        idrack: number;
        /**
         * Back field for event
         */
        _idrackChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idrack property changes
         */
        readonly idrackChanged: LatteEvent;
        /**
         * Raises the <c>idrackChanged</c> event
         */
        onIdrackChanged(): void;
        /**
         * Database field: timestamp
         */
        _created: TimeSpan;
        /**
         * Gets or sets the value of the created field of type timestamp
         */
        /**
         * Gets or sets the value of the created field of type timestamp
         */
        created: TimeSpan;
        /**
         * Back field for event
         */
        _createdChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the created property changes
         */
        readonly createdChanged: LatteEvent;
        /**
         * Raises the <c>createdChanged</c> event
         */
        onCreatedChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idlevel": string;
            "idrack": string;
            "created": string;
        };
    }
    class locationBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(10) unsigned
         */
        _idlocation: number;
        /**
         * Gets or sets the value of the idlocation field of type int(10) unsigned
         */
        /**
         * Gets or sets the value of the idlocation field of type int(10) unsigned
         */
        idlocation: number;
        /**
         * Back field for event
         */
        _idlocationChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idlocation property changes
         */
        readonly idlocationChanged: LatteEvent;
        /**
         * Raises the <c>idlocationChanged</c> event
         */
        onIdlocationChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: int(10) unsigned
         */
        _idlevel: number;
        /**
         * Gets or sets the value of the idlevel field of type int(10) unsigned
         */
        /**
         * Gets or sets the value of the idlevel field of type int(10) unsigned
         */
        idlevel: number;
        /**
         * Back field for event
         */
        _idlevelChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idlevel property changes
         */
        readonly idlevelChanged: LatteEvent;
        /**
         * Raises the <c>idlevelChanged</c> event
         */
        onIdlevelChanged(): void;
        /**
         * Database field: int(10) unsigned
         */
        _idproduct: number;
        /**
         * Gets or sets the value of the idproduct field of type int(10) unsigned
         */
        /**
         * Gets or sets the value of the idproduct field of type int(10) unsigned
         */
        idproduct: number;
        /**
         * Back field for event
         */
        _idproductChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idproduct property changes
         */
        readonly idproductChanged: LatteEvent;
        /**
         * Raises the <c>idproductChanged</c> event
         */
        onIdproductChanged(): void;
        /**
         * Database field: double(8,2)
         */
        _quantity: number;
        /**
         * Gets or sets the value of the quantity field of type double(8,2)
         */
        /**
         * Gets or sets the value of the quantity field of type double(8,2)
         */
        quantity: number;
        /**
         * Back field for event
         */
        _quantityChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the quantity property changes
         */
        readonly quantityChanged: LatteEvent;
        /**
         * Raises the <c>quantityChanged</c> event
         */
        onQuantityChanged(): void;
        /**
         * Database field: timestamp
         */
        _created: TimeSpan;
        /**
         * Gets or sets the value of the created field of type timestamp
         */
        /**
         * Gets or sets the value of the created field of type timestamp
         */
        created: TimeSpan;
        /**
         * Back field for event
         */
        _createdChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the created property changes
         */
        readonly createdChanged: LatteEvent;
        /**
         * Raises the <c>createdChanged</c> event
         */
        onCreatedChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idlocation": string;
            "idlevel": string;
            "idproduct": string;
            "quantity": string;
            "created": string;
        };
    }
    class rackBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(10) unsigned
         */
        _idrack: number;
        /**
         * Gets or sets the value of the idrack field of type int(10) unsigned
         */
        /**
         * Gets or sets the value of the idrack field of type int(10) unsigned
         */
        idrack: number;
        /**
         * Back field for event
         */
        _idrackChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idrack property changes
         */
        readonly idrackChanged: LatteEvent;
        /**
         * Raises the <c>idrackChanged</c> event
         */
        onIdrackChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: varchar(128)
         */
        _name: string;
        /**
         * Gets or sets the value of the name field of type varchar(128)
         */
        /**
         * Gets or sets the value of the name field of type varchar(128)
         */
        name: string;
        /**
         * Back field for event
         */
        _nameChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the name property changes
         */
        readonly nameChanged: LatteEvent;
        /**
         * Raises the <c>nameChanged</c> event
         */
        onNameChanged(): void;
        /**
         * Database field: timestamp
         */
        _created: TimeSpan;
        /**
         * Gets or sets the value of the created field of type timestamp
         */
        /**
         * Gets or sets the value of the created field of type timestamp
         */
        created: TimeSpan;
        /**
         * Back field for event
         */
        _createdChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the created property changes
         */
        readonly createdChanged: LatteEvent;
        /**
         * Raises the <c>createdChanged</c> event
         */
        onCreatedChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idrack": string;
            "name": string;
            "created": string;
        };
        static byName(name: string): RemoteCall<Rack>;
        static catalog(): RemoteCall<Rack[]>;
        static register(idproduct?: number, nLevels?: number, nLocations?: number): RemoteCall<Rack>;
    }
}
declare module latte {
    class DialogElementBase extends Element<HTMLDivElement> {
        private _btnClose;
        readonly btnClose: Element<HTMLButtonElement>;
        private _btnSuccess;
        readonly btnSuccess: Element<HTMLButtonElement>;
        private _dialogElement;
        readonly dialogElement: Element<HTMLDivElement>;
        private _titleElement;
        readonly titleElement: Element<HTMLHeadingElement>;
        private _wrapElement;
        readonly wrapElement: Element<HTMLElement>;
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
    class LoaderElementBase extends Element<HTMLDivElement> {
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
    class MainViewBase extends Element<HTMLDivElement> {
        private _wrapperElement;
        readonly wrapperElement: Element<HTMLDivElement>;
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
    class RegisterFormBase extends Element<HTMLDivElement> {
        private _btnBack;
        readonly btnBack: Element<HTMLButtonElement>;
        private _btnRegister;
        readonly btnRegister: Element<HTMLButtonElement>;
        private _btnReset;
        readonly btnReset: Element<HTMLButtonElement>;
        private _txtLevel;
        readonly txtLevel: Textbox;
        private _txtLevelFeedback;
        readonly txtLevelFeedback: Element<HTMLDivElement>;
        private _txtLocation;
        readonly txtLocation: Textbox;
        private _txtLocationFeedback;
        readonly txtLocationFeedback: Element<HTMLDivElement>;
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
    class RackElementBase extends Element<HTMLDivElement> {
        private _btnBack;
        readonly btnBack: Element<HTMLButtonElement>;
        private _lblName;
        readonly lblName: Element<HTMLSpanElement>;
        private _tableBody;
        readonly tableBody: Element<HTMLTableSectionElement>;
        private _tableHead;
        readonly tableHead: Element<HTMLTableSectionElement>;
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
    class ProductElementBase extends Element<HTMLDivElement> {
        private _image;
        readonly image: Element<HTMLDivElement>;
        private _quantityElement;
        readonly quantityElement: Element<HTMLDivElement>;
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
    class LocationEditElementBase extends Element<HTMLDivElement> {
        private _form;
        readonly form: Element<HTMLFormElement>;
        private _txtQuantity;
        readonly txtQuantity: Textbox;
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
    class RacksViewBase extends Element<HTMLDivElement> {
        private _bodyElement;
        readonly bodyElement: Element<HTMLTableSectionElement>;
        private _btnCreateNew;
        readonly btnCreateNew: Element<HTMLButtonElement>;
        private _btnRefresh;
        readonly btnRefresh: Element<HTMLAnchorElement>;
        private _rowsElement;
        readonly rowsElement: Element<HTMLDivElement>;
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
}
declare module latte {
    /**
     * DialogElement
     */
    class DialogElement extends DialogElementBase {
        private static initialized;
        private static stack;
        /**
         * initialize
         */
        private static initialize();
        /**
         * Remove from stack
         * @param d {DialogElement}
         */
        private static removeFromStack(d);
        /**
         * DialogElement
         */
        constructor(element?: Element<HTMLElement>);
        close(): void;
        /**
         * Manejador de eventos para el botón cancelar
         */
        btnClose_click(): void;
        /**
         * Manejador de eventos para el botón success
         */
        btnSuccess_click(): void;
        /**
         * Shows the DialogElement
         */
        show(): void;
        /**
         * Raises the <c>content</c> event
         */
        onContentChanged(): void;
        /**
         * Raises the <c>success</c> event
         */
        onSuccess(): void;
        /**
         * Back field for event
         */
        private _contentChanged;
        /**
         * Gets an event raised when the value of the content property changes
         *
         * @returns {LatteEvent}
         */
        readonly contentChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _success;
        /**
         * Gets an event raised when the button is clicked
         *
         * @returns {LatteEvent}
         */
        readonly success: LatteEvent;
        /**
         * Property field
         */
        private _title;
        /**
         * Gets or sets the title of the dialog
         *
         * @returns {string}
         */
        /**
         * Gets or sets the title of the dialog
         *
         * @param {string} value
         */
        title: string;
        /**
         * Property field
         */
        private _content;
        /**
         * Gets or sets when the content property changes
         *
         * @returns {Element<HTMLElement>}
         */
        /**
         * Gets or sets when the content property changes
         *
         * @param {Element<HTMLElement>} value
         */
        content: Element<HTMLElement>;
    }
}
declare module latte {
    /**
     * LoaderElement
     */
    class LoaderElement extends LoaderElementBase {
        /**
         * LoaderElement
         */
        constructor();
    }
}
declare module latte {
    /**
     * Main Class
     * Your app starts here.
     */
    class Main {
        /**
         * Pointer to the current main view
         */
        static mainView: MainView;
        /**
         * Start your program on the constructor.
         */
        constructor();
        private goMainView();
    }
}
declare module latte {
    /**
     * LocationEditElement
     */
    class LocationEditElement extends LocationEditElementBase {
        /**
         * Creates a new LocationEditElement
         */
        constructor();
        /**
         * Raises the <c>location</c> event
         */
        onLocationChanged(): void;
        /**
         * Back field for event
         */
        private _locationChanged;
        /**
         * Gets an event raised when the value of the location property changes
         *
         * @returns {LatteEvent}
         */
        readonly locationChanged: LatteEvent;
        /**
         * Property field
         */
        private _location;
        /**
         * Gets or sets when the location property chamnges
         *
         * @returns {Location}
         */
        /**
         * Gets or sets when the location property chamnges
         *
         * @param {Location} value
         */
        location: Location;
    }
}
declare module latte {
    /**
     * ProductElement
     */
    class ProductElement extends ProductElementBase {
        /**
         * Creates a new ProductElement
         */
        constructor();
        /**
         * Raises the <c>location</c> event
         */
        onProductChanged(): void;
        /**
         * Raises the <c>click</c> event
         */
        onClick(): void;
        /**
         * Back field for event
         */
        private _locationChanged;
        /**
         * Gets an event raised when the value of the location property changes
         *
         * @returns {LatteEvent}
         */
        readonly locationChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _click;
        /**
         * Gets an event raised when when the user raises the click
         *
         * @returns {LatteEvent}
         */
        readonly click: LatteEvent;
        /**
         * Property field
         */
        private _location;
        /**
         * Gets or sets when the location property changes
         *
         * @returns {Location}
         */
        /**
         * Gets or sets when the location property changes
         *
         * @param {Location} value
         */
        location: Location;
    }
}
declare module latte {
    /**
     * RegisterForm
     */
    class RegisterForm extends RegisterFormBase {
        /**
         * Creates new RegisterForm
         */
        constructor();
        /**
         * Manejador de evento click para el botón reset
         *
         * @param evt
         */
        private btnReset_click(evt);
        /**
         * Manejador de evento click para el botón registrar
         *
         * @param evt
         */
        private btnRegister_click(evt);
        /**
         * Raises the <c>registered</c> event
         */
        onRegistered(rack: Rack): void;
        /**
         * Raises the <c>closeRequest</c> event
         */
        onCloseRequest(): void;
        /**
         * Back field for event
         */
        private _closeRequest;
        /**
         * Gets an event raised when when the close button is pressed
         *
         * @returns {LatteEvent}
         */
        readonly closeRequest: LatteEvent;
        /**
         * Back field for event
         */
        private _registered;
        /**
         * Gets an event raised when when the button register is pressed
         *
         * @returns {LatteEvent}
         */
        readonly registered: LatteEvent;
    }
}
declare module latte {
    /**
     * RackElement
     */
    class RackElement extends RackElementBase {
        /**
         * Creates a new RackElement
         */
        constructor();
        /**
         * @param {string} text
         * @param {string} type
         * @return {latte.Element<HTMLTableCellElement>}
         */
        private createColumn(text, type?, className?);
        /**
         * @return {latte.Element<HTMLTableRowElement>}
         */
        private createRow();
        /**
         * Raises the <c>closeRequest</c> event
         */
        onCloseRequest(): void;
        /**
         * Raises the <c>rack</c> event
         */
        onRackChanged(): void;
        /**
         * Back field for event
         */
        private _rackChanged;
        /**
         * Gets an event raised when the value of the rack property changes
         *
         * @returns {LatteEvent}
         */
        readonly rackChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _closeRequest;
        /**
         * Gets an event raised when when the close button is pressed
         *
         * @returns {LatteEvent}
         */
        readonly closeRequest: LatteEvent;
        /**
         * Property field
         */
        private _rack;
        /**
         * Gets or sets when the value of the rack property changes
         *
         * @returns {Rack}
         */
        /**
         * Gets or sets when the value of the rack property chnages
         *
         * @param {Rack} value
         */
        rack: Rack;
    }
}
declare module latte {
    /**
     * MainView
     */
    class MainView extends MainViewBase {
        /**
         * Creates a new DashboardView
         */
        constructor();
        /**
         * Establece la vista principal de la aplicación.
         *
         * @param {latte.Element<HTMLElement>} el
         */
        present(el: Element<HTMLElement>): void;
        /**
         * Field for registerForm property
         */
        private _registerForm;
        /**
         * Gets the register form instance
         *
         * @returns {RegisterForm}
         */
        readonly registerForm: RegisterForm;
        /**
         * Field for racksView property
         */
        private _racksView;
        /**
         * Gets el componente para mostrar los racks de la vista principal
         *
         * @returns {RacksView}
         */
        readonly racksView: RacksView;
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table level
     */
    class Level extends levelBase {
        /**
         * Array de ubicaciones por nivel
         */
        locations: Location[];
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table product
     */
    class Product extends productBase {
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table location
     */
    class Location extends locationBase {
    }
}
declare module latte {
    /**
     * RacksView
     */
    class RacksView extends RacksViewBase {
        /**
         * RacksView
         */
        constructor();
        /**
         * Crear un botón genérico
         *
         * @param {GenericCallback} cb
         * @param {"Editar"} text
         * @param {string} className
         * @return {latte.Element<HTMLButtonElement>}
         */
        private createButton(cb?, text?, className?);
        /**
         * Manejador de eventos para el botón Crear.
         *
         * @param evt
         */
        btnCreateNew_click(evt: any): void;
        /**
         * Manejador de eventos para el botón actualizar.
         *
         * @param evt
         */
        btnRefresh_click(evt: any): void;
        /**
         * Carga inicial de la vista
         */
        onLoad(): void;
        /**
         * Carga los datos del servidor.
         *
         * @return {latte.RemoteCall<latte.Rack>}
         */
        loadRacks(): RemoteCall<Rack>;
        /**
         * Raises the <c>create</c> event
         */
        onCreate(): void;
        /**
         * Raises the <c>edit</c> event
         */
        onEdit(rack: Rack): void;
        /**
         * Back field for event
         */
        private _create;
        /**
         * Obtiene un evento cuando se da click al botón crear
         *
         * @returns {LatteEvent}
         */
        readonly create: LatteEvent;
        /**
         * Back field for event
         */
        private _edit;
        /**
         * Obtiene un evento para el botón editar
         *
         * @returns {LatteEvent}
         */
        readonly edit: LatteEvent;
        /**
         * Field for loader property
         */
        private _loader;
        /**
         * Gets the loader element
         *
         * @returns {LoaderElement}
         */
        readonly loader: LoaderElement;
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table rack
     */
    class Rack extends rackBase {
        /**
         * Array de niveles
         */
        levels: Level[];
    }
}
