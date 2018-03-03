module latte{
		export class productBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'Product';

		/* Name of Module where record lives */
		_moduleName: string = 'app';

		/**
		 * Database field: int(10) unsigned
		 */
		_idproduct: number = null;

		/**
		 * Gets or sets the value of the idproduct field of type int(10) unsigned
		 */
		get idproduct(): number{
			return this._idproduct;
		}

		/**
		 * Gets or sets the value of the idproduct field of type int(10) unsigned
		 */
		set idproduct(value: number){
			var changed: boolean = value !== this._idproduct
			this._idproduct = value;
			if(changed){ this.onIdproductChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idproductChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idproduct property changes
		 */
		get idproductChanged(): LatteEvent{
			if(!this._idproductChanged){ this._idproductChanged = new LatteEvent(this); }
			return this._idproductChanged;
		}

		/**
		 * Raises the <c>idproductChanged</c> event
		 */
		onIdproductChanged(){
			if(this._idproductChanged){
				this._idproductChanged.raise()
			}
			this.onFieldValueChanged('idproduct', this.idproduct)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idproduct'; }

		/**
		 * Database field: varchar(128)
		 */
		_sku: string = null;

		/**
		 * Gets or sets the value of the sku field of type varchar(128)
		 */
		get sku(): string{
			return this._sku;
		}

		/**
		 * Gets or sets the value of the sku field of type varchar(128)
		 */
		set sku(value: string){
			var changed: boolean = value !== this._sku
			this._sku = value;
			if(changed){ this.onSkuChanged(); }
		}

		/**
		 * Back field for event
		 */
		_skuChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the sku property changes
		 */
		get skuChanged(): LatteEvent{
			if(!this._skuChanged){ this._skuChanged = new LatteEvent(this); }
			return this._skuChanged;
		}

		/**
		 * Raises the <c>skuChanged</c> event
		 */
		onSkuChanged(){
			if(this._skuChanged){
				this._skuChanged.raise()
			}
			this.onFieldValueChanged('sku', this.sku)
		}

		/**
		 * Database field: varchar(128)
		 */
		_name: string = null;

		/**
		 * Gets or sets the value of the name field of type varchar(128)
		 */
		get name(): string{
			return this._name;
		}

		/**
		 * Gets or sets the value of the name field of type varchar(128)
		 */
		set name(value: string){
			var changed: boolean = value !== this._name
			this._name = value;
			if(changed){ this.onNameChanged(); }
		}

		/**
		 * Back field for event
		 */
		_nameChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the name property changes
		 */
		get nameChanged(): LatteEvent{
			if(!this._nameChanged){ this._nameChanged = new LatteEvent(this); }
			return this._nameChanged;
		}

		/**
		 * Raises the <c>nameChanged</c> event
		 */
		onNameChanged(){
			if(this._nameChanged){
				this._nameChanged.raise()
			}
			this.onFieldValueChanged('name', this.name)
		}

		/**
		 * Database field: decimal(15,2)
		 */
		_price: number = null;

		/**
		 * Gets or sets the value of the price field of type decimal(15,2)
		 */
		get price(): number{
			return this._price;
		}

		/**
		 * Gets or sets the value of the price field of type decimal(15,2)
		 */
		set price(value: number){
			var changed: boolean = value !== this._price
			this._price = value;
			if(changed){ this.onPriceChanged(); }
		}

		/**
		 * Back field for event
		 */
		_priceChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the price property changes
		 */
		get priceChanged(): LatteEvent{
			if(!this._priceChanged){ this._priceChanged = new LatteEvent(this); }
			return this._priceChanged;
		}

		/**
		 * Raises the <c>priceChanged</c> event
		 */
		onPriceChanged(){
			if(this._priceChanged){
				this._priceChanged.raise()
			}
			this.onFieldValueChanged('price', this.price)
		}

		/**
		 * Database field: varchar(128)
		 */
		_unit: string = null;

		/**
		 * Gets or sets the value of the unit field of type varchar(128)
		 */
		get unit(): string{
			return this._unit;
		}

		/**
		 * Gets or sets the value of the unit field of type varchar(128)
		 */
		set unit(value: string){
			var changed: boolean = value !== this._unit
			this._unit = value;
			if(changed){ this.onUnitChanged(); }
		}

		/**
		 * Back field for event
		 */
		_unitChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the unit property changes
		 */
		get unitChanged(): LatteEvent{
			if(!this._unitChanged){ this._unitChanged = new LatteEvent(this); }
			return this._unitChanged;
		}

		/**
		 * Raises the <c>unitChanged</c> event
		 */
		onUnitChanged(){
			if(this._unitChanged){
				this._unitChanged.raise()
			}
			this.onFieldValueChanged('unit', this.unit)
		}

		/**
		 * Database field: varchar(128)
		 */
		_image: string = null;

		/**
		 * Gets or sets the value of the image field of type varchar(128)
		 */
		get image(): string{
			return this._image;
		}

		/**
		 * Gets or sets the value of the image field of type varchar(128)
		 */
		set image(value: string){
			var changed: boolean = value !== this._image
			this._image = value;
			if(changed){ this.onImageChanged(); }
		}

		/**
		 * Back field for event
		 */
		_imageChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the image property changes
		 */
		get imageChanged(): LatteEvent{
			if(!this._imageChanged){ this._imageChanged = new LatteEvent(this); }
			return this._imageChanged;
		}

		/**
		 * Raises the <c>imageChanged</c> event
		 */
		onImageChanged(){
			if(this._imageChanged){
				this._imageChanged.raise()
			}
			this.onFieldValueChanged('image', this.image)
		}

		/**
		 * Database field: tinyint(1)
		 */
		_active: number = null;

		/**
		 * Gets or sets the value of the active field of type tinyint(1)
		 */
		get active(): number{
			return this._active;
		}

		/**
		 * Gets or sets the value of the active field of type tinyint(1)
		 */
		set active(value: number){
			var changed: boolean = value !== this._active
			this._active = value;
			if(changed){ this.onActiveChanged(); }
		}

		/**
		 * Back field for event
		 */
		_activeChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the active property changes
		 */
		get activeChanged(): LatteEvent{
			if(!this._activeChanged){ this._activeChanged = new LatteEvent(this); }
			return this._activeChanged;
		}

		/**
		 * Raises the <c>activeChanged</c> event
		 */
		onActiveChanged(){
			if(this._activeChanged){
				this._activeChanged.raise()
			}
			this.onFieldValueChanged('active', this.active)
		}

		/**
		 * Database field: timestamp
		 */
		_created: TimeSpan = null;

		/**
		 * Gets or sets the value of the created field of type timestamp
		 */
		get created(): TimeSpan{
			return this._created;
		}

		/**
		 * Gets or sets the value of the created field of type timestamp
		 */
		set created(value: TimeSpan){
			var changed: boolean = value !== this._created
			this._created = value;
			if(changed){ this.onCreatedChanged(); }
		}

		/**
		 * Back field for event
		 */
		_createdChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the created property changes
		 */
		get createdChanged(): LatteEvent{
			if(!this._createdChanged){ this._createdChanged = new LatteEvent(this); }
			return this._createdChanged;
		}

		/**
		 * Raises the <c>createdChanged</c> event
		 */
		onCreatedChanged(){
			if(this._createdChanged){
				this._createdChanged.raise()
			}
			this.onFieldValueChanged('created', this.created)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idproduct': this.idproduct, 'sku': this.sku, 'name': this.name, 'price': this.price, 'unit': this.unit, 'image': this.image, 'active': this.active, 'created': this.created}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idproduct":"int(10) unsigned","sku":"varchar(128)","name":"varchar(128)","price":"decimal(15,2)","unit":"varchar(128)","image":"varchar(128)","active":"tinyint(1)","created":"timestamp"};
	}

	export class levelBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'Level';

		/* Name of Module where record lives */
		_moduleName: string = 'app';

		/**
		 * Database field: int(10) unsigned
		 */
		_idlevel: number = null;

		/**
		 * Gets or sets the value of the idlevel field of type int(10) unsigned
		 */
		get idlevel(): number{
			return this._idlevel;
		}

		/**
		 * Gets or sets the value of the idlevel field of type int(10) unsigned
		 */
		set idlevel(value: number){
			var changed: boolean = value !== this._idlevel
			this._idlevel = value;
			if(changed){ this.onIdlevelChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idlevelChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idlevel property changes
		 */
		get idlevelChanged(): LatteEvent{
			if(!this._idlevelChanged){ this._idlevelChanged = new LatteEvent(this); }
			return this._idlevelChanged;
		}

		/**
		 * Raises the <c>idlevelChanged</c> event
		 */
		onIdlevelChanged(){
			if(this._idlevelChanged){
				this._idlevelChanged.raise()
			}
			this.onFieldValueChanged('idlevel', this.idlevel)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idlevel'; }

		/**
		 * Database field: int(10) unsigned
		 */
		_idrack: number = null;

		/**
		 * Gets or sets the value of the idrack field of type int(10) unsigned
		 */
		get idrack(): number{
			return this._idrack;
		}

		/**
		 * Gets or sets the value of the idrack field of type int(10) unsigned
		 */
		set idrack(value: number){
			var changed: boolean = value !== this._idrack
			this._idrack = value;
			if(changed){ this.onIdrackChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idrackChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idrack property changes
		 */
		get idrackChanged(): LatteEvent{
			if(!this._idrackChanged){ this._idrackChanged = new LatteEvent(this); }
			return this._idrackChanged;
		}

		/**
		 * Raises the <c>idrackChanged</c> event
		 */
		onIdrackChanged(){
			if(this._idrackChanged){
				this._idrackChanged.raise()
			}
			this.onFieldValueChanged('idrack', this.idrack)
		}

		/**
		 * Database field: timestamp
		 */
		_created: TimeSpan = null;

		/**
		 * Gets or sets the value of the created field of type timestamp
		 */
		get created(): TimeSpan{
			return this._created;
		}

		/**
		 * Gets or sets the value of the created field of type timestamp
		 */
		set created(value: TimeSpan){
			var changed: boolean = value !== this._created
			this._created = value;
			if(changed){ this.onCreatedChanged(); }
		}

		/**
		 * Back field for event
		 */
		_createdChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the created property changes
		 */
		get createdChanged(): LatteEvent{
			if(!this._createdChanged){ this._createdChanged = new LatteEvent(this); }
			return this._createdChanged;
		}

		/**
		 * Raises the <c>createdChanged</c> event
		 */
		onCreatedChanged(){
			if(this._createdChanged){
				this._createdChanged.raise()
			}
			this.onFieldValueChanged('created', this.created)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idlevel': this.idlevel, 'idrack': this.idrack, 'created': this.created}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idlevel":"int(10) unsigned","idrack":"int(10) unsigned","created":"timestamp"};
	}

	export class locationBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'Location';

		/* Name of Module where record lives */
		_moduleName: string = 'app';

		/**
		 * Database field: int(10) unsigned
		 */
		_idlocation: number = null;

		/**
		 * Gets or sets the value of the idlocation field of type int(10) unsigned
		 */
		get idlocation(): number{
			return this._idlocation;
		}

		/**
		 * Gets or sets the value of the idlocation field of type int(10) unsigned
		 */
		set idlocation(value: number){
			var changed: boolean = value !== this._idlocation
			this._idlocation = value;
			if(changed){ this.onIdlocationChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idlocationChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idlocation property changes
		 */
		get idlocationChanged(): LatteEvent{
			if(!this._idlocationChanged){ this._idlocationChanged = new LatteEvent(this); }
			return this._idlocationChanged;
		}

		/**
		 * Raises the <c>idlocationChanged</c> event
		 */
		onIdlocationChanged(){
			if(this._idlocationChanged){
				this._idlocationChanged.raise()
			}
			this.onFieldValueChanged('idlocation', this.idlocation)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idlocation'; }

		/**
		 * Database field: int(10) unsigned
		 */
		_idlevel: number = null;

		/**
		 * Gets or sets the value of the idlevel field of type int(10) unsigned
		 */
		get idlevel(): number{
			return this._idlevel;
		}

		/**
		 * Gets or sets the value of the idlevel field of type int(10) unsigned
		 */
		set idlevel(value: number){
			var changed: boolean = value !== this._idlevel
			this._idlevel = value;
			if(changed){ this.onIdlevelChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idlevelChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idlevel property changes
		 */
		get idlevelChanged(): LatteEvent{
			if(!this._idlevelChanged){ this._idlevelChanged = new LatteEvent(this); }
			return this._idlevelChanged;
		}

		/**
		 * Raises the <c>idlevelChanged</c> event
		 */
		onIdlevelChanged(){
			if(this._idlevelChanged){
				this._idlevelChanged.raise()
			}
			this.onFieldValueChanged('idlevel', this.idlevel)
		}

		/**
		 * Database field: int(10) unsigned
		 */
		_idproduct: number = null;

		/**
		 * Gets or sets the value of the idproduct field of type int(10) unsigned
		 */
		get idproduct(): number{
			return this._idproduct;
		}

		/**
		 * Gets or sets the value of the idproduct field of type int(10) unsigned
		 */
		set idproduct(value: number){
			var changed: boolean = value !== this._idproduct
			this._idproduct = value;
			if(changed){ this.onIdproductChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idproductChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idproduct property changes
		 */
		get idproductChanged(): LatteEvent{
			if(!this._idproductChanged){ this._idproductChanged = new LatteEvent(this); }
			return this._idproductChanged;
		}

		/**
		 * Raises the <c>idproductChanged</c> event
		 */
		onIdproductChanged(){
			if(this._idproductChanged){
				this._idproductChanged.raise()
			}
			this.onFieldValueChanged('idproduct', this.idproduct)
		}

		/**
		 * Database field: double(8,2)
		 */
		_quantity: number = null;

		/**
		 * Gets or sets the value of the quantity field of type double(8,2)
		 */
		get quantity(): number{
			return this._quantity;
		}

		/**
		 * Gets or sets the value of the quantity field of type double(8,2)
		 */
		set quantity(value: number){
			var changed: boolean = value !== this._quantity
			this._quantity = value;
			if(changed){ this.onQuantityChanged(); }
		}

		/**
		 * Back field for event
		 */
		_quantityChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the quantity property changes
		 */
		get quantityChanged(): LatteEvent{
			if(!this._quantityChanged){ this._quantityChanged = new LatteEvent(this); }
			return this._quantityChanged;
		}

		/**
		 * Raises the <c>quantityChanged</c> event
		 */
		onQuantityChanged(){
			if(this._quantityChanged){
				this._quantityChanged.raise()
			}
			this.onFieldValueChanged('quantity', this.quantity)
		}

		/**
		 * Database field: timestamp
		 */
		_created: TimeSpan = null;

		/**
		 * Gets or sets the value of the created field of type timestamp
		 */
		get created(): TimeSpan{
			return this._created;
		}

		/**
		 * Gets or sets the value of the created field of type timestamp
		 */
		set created(value: TimeSpan){
			var changed: boolean = value !== this._created
			this._created = value;
			if(changed){ this.onCreatedChanged(); }
		}

		/**
		 * Back field for event
		 */
		_createdChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the created property changes
		 */
		get createdChanged(): LatteEvent{
			if(!this._createdChanged){ this._createdChanged = new LatteEvent(this); }
			return this._createdChanged;
		}

		/**
		 * Raises the <c>createdChanged</c> event
		 */
		onCreatedChanged(){
			if(this._createdChanged){
				this._createdChanged.raise()
			}
			this.onFieldValueChanged('created', this.created)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idlocation': this.idlocation, 'idlevel': this.idlevel, 'idproduct': this.idproduct, 'quantity': this.quantity, 'created': this.created}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idlocation":"int(10) unsigned","idlevel":"int(10) unsigned","idproduct":"int(10) unsigned","quantity":"double(8,2)","created":"timestamp"};
	}

	export class rackBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'Rack';

		/* Name of Module where record lives */
		_moduleName: string = 'app';

		/**
		 * Database field: int(10) unsigned
		 */
		_idrack: number = null;

		/**
		 * Gets or sets the value of the idrack field of type int(10) unsigned
		 */
		get idrack(): number{
			return this._idrack;
		}

		/**
		 * Gets or sets the value of the idrack field of type int(10) unsigned
		 */
		set idrack(value: number){
			var changed: boolean = value !== this._idrack
			this._idrack = value;
			if(changed){ this.onIdrackChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idrackChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idrack property changes
		 */
		get idrackChanged(): LatteEvent{
			if(!this._idrackChanged){ this._idrackChanged = new LatteEvent(this); }
			return this._idrackChanged;
		}

		/**
		 * Raises the <c>idrackChanged</c> event
		 */
		onIdrackChanged(){
			if(this._idrackChanged){
				this._idrackChanged.raise()
			}
			this.onFieldValueChanged('idrack', this.idrack)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idrack'; }

		/**
		 * Database field: varchar(128)
		 */
		_name: string = null;

		/**
		 * Gets or sets the value of the name field of type varchar(128)
		 */
		get name(): string{
			return this._name;
		}

		/**
		 * Gets or sets the value of the name field of type varchar(128)
		 */
		set name(value: string){
			var changed: boolean = value !== this._name
			this._name = value;
			if(changed){ this.onNameChanged(); }
		}

		/**
		 * Back field for event
		 */
		_nameChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the name property changes
		 */
		get nameChanged(): LatteEvent{
			if(!this._nameChanged){ this._nameChanged = new LatteEvent(this); }
			return this._nameChanged;
		}

		/**
		 * Raises the <c>nameChanged</c> event
		 */
		onNameChanged(){
			if(this._nameChanged){
				this._nameChanged.raise()
			}
			this.onFieldValueChanged('name', this.name)
		}

		/**
		 * Database field: timestamp
		 */
		_created: TimeSpan = null;

		/**
		 * Gets or sets the value of the created field of type timestamp
		 */
		get created(): TimeSpan{
			return this._created;
		}

		/**
		 * Gets or sets the value of the created field of type timestamp
		 */
		set created(value: TimeSpan){
			var changed: boolean = value !== this._created
			this._created = value;
			if(changed){ this.onCreatedChanged(); }
		}

		/**
		 * Back field for event
		 */
		_createdChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the created property changes
		 */
		get createdChanged(): LatteEvent{
			if(!this._createdChanged){ this._createdChanged = new LatteEvent(this); }
			return this._createdChanged;
		}

		/**
		 * Raises the <c>createdChanged</c> event
		 */
		onCreatedChanged(){
			if(this._createdChanged){
				this._createdChanged.raise()
			}
			this.onFieldValueChanged('created', this.created)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idrack': this.idrack, 'name': this.name, 'created': this.created}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idrack":"int(10) unsigned","name":"varchar(128)","created":"timestamp"};

		/*
		 * Remote Method. 

		 */
		static byName(name: string): RemoteCall<Rack>{
			return new RemoteCall<Rack>('app', 'Rack', 'byName', {name: name} );
		}

		/*
		 * Remote Method. 

		 */
		static catalog(): RemoteCall<Rack[]>{
			return new RemoteCall<Rack[]>('app', 'Rack', 'catalog', {} );
		}

		/*
		 * Remote Method. 

		 */
		static register(idproduct: number = 1, nLevels: number = 4, nLocations: number = 15): RemoteCall<Rack>{
			return new RemoteCall<Rack>('app', 'Rack', 'register', {idproduct: idproduct, nLevels: nLevels, nLocations: nLocations} );
		}
	}


}