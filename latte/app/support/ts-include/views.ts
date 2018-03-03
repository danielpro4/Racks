module latte{
	export class DialogElementBase extends Element<HTMLDivElement>{
		private _btnClose:Element<HTMLButtonElement>;
		get btnClose():Element<HTMLButtonElement> {
			if (!this._btnClose) {
				this._btnClose = new Element<HTMLButtonElement>(this.querySelector('[data-property=btnClose]'));
			}
			return this._btnClose;
		}

		private _btnSuccess:Element<HTMLButtonElement>;
		get btnSuccess():Element<HTMLButtonElement> {
			if (!this._btnSuccess) {
				this._btnSuccess = new Element<HTMLButtonElement>(this.querySelector('[data-property=btnSuccess]'));
			}
			return this._btnSuccess;
		}

		private _closeButton:Element<HTMLButtonElement>;
		get closeButton():Element<HTMLButtonElement> {
			if (!this._closeButton) {
				this._closeButton = new Element<HTMLButtonElement>(this.querySelector('[data-property=closeButton]'));
			}
			return this._closeButton;
		}

		private _dialogElement:Element<HTMLDivElement>;
		get dialogElement():Element<HTMLDivElement> {
			if (!this._dialogElement) {
				this._dialogElement = new Element<HTMLDivElement>(this.querySelector('[data-property=dialogElement]'));
			}
			return this._dialogElement;
		}

		private _titleElement:Element<HTMLHeadingElement>;
		get titleElement():Element<HTMLHeadingElement> {
			if (!this._titleElement) {
				this._titleElement = new Element<HTMLHeadingElement>(this.querySelector('[data-property=titleElement]'));
			}
			return this._titleElement;
		}

		private _wrapElement:Element<HTMLElement>;
		get wrapElement():Element<HTMLElement> {
			if (!this._wrapElement) {
				this._wrapElement = new Element<HTMLElement>(this.querySelector('[data-property=wrapElement]'));
			}
			return this._wrapElement;
		}

		private static _Model:Element<HTMLDivElement>;
		static getModel():Element<HTMLDivElement> {
			if (!this._Model) {
				this._Model = new Element<HTMLDivElement>(Element.fromBank('DialogElementBase'));
			}
			return this._Model;
		}

		constructor(){
			super(Element.fromBank('DialogElementBase'));
			this.bind(this, true);
		}
	}
}module latte{
	export class LoaderElementBase extends Element<HTMLDivElement>{
		private static _Model:Element<HTMLDivElement>;
		static getModel():Element<HTMLDivElement> {
			if (!this._Model) {
				this._Model = new Element<HTMLDivElement>(Element.fromBank('LoaderElementBase'));
			}
			return this._Model;
		}

		constructor(){
			super(Element.fromBank('LoaderElementBase'));
			this.bind(this, true);
		}
	}
}module latte{
	export class MainViewBase extends Element<HTMLDivElement>{
		private _wrapperElement:Element<HTMLDivElement>;
		get wrapperElement():Element<HTMLDivElement> {
			if (!this._wrapperElement) {
				this._wrapperElement = new Element<HTMLDivElement>(this.querySelector('[data-property=wrapperElement]'));
			}
			return this._wrapperElement;
		}

		private static _Model:Element<HTMLDivElement>;
		static getModel():Element<HTMLDivElement> {
			if (!this._Model) {
				this._Model = new Element<HTMLDivElement>(Element.fromBank('MainViewBase'));
			}
			return this._Model;
		}

		constructor(){
			super(Element.fromBank('MainViewBase'));
			this.bind(this, true);
		}
	}
}module latte{
	export class RegisterFormBase extends Element<HTMLDivElement>{
		private _btnBack:Element<HTMLButtonElement>;
		get btnBack():Element<HTMLButtonElement> {
			if (!this._btnBack) {
				this._btnBack = new Element<HTMLButtonElement>(this.querySelector('[data-property=btnBack]'));
			}
			return this._btnBack;
		}

		private _btnRegister:Element<HTMLButtonElement>;
		get btnRegister():Element<HTMLButtonElement> {
			if (!this._btnRegister) {
				this._btnRegister = new Element<HTMLButtonElement>(this.querySelector('[data-property=btnRegister]'));
			}
			return this._btnRegister;
		}

		private _btnReset:Element<HTMLButtonElement>;
		get btnReset():Element<HTMLButtonElement> {
			if (!this._btnReset) {
				this._btnReset = new Element<HTMLButtonElement>(this.querySelector('[data-property=btnReset]'));
			}
			return this._btnReset;
		}

		private _txtLevel:Textbox;
		get txtLevel():Textbox {
			if (!this._txtLevel) {
				this._txtLevel = new Textbox(this.querySelector('[data-property=txtLevel]'));
			}
			return this._txtLevel;
		}

		private _txtLevelFeedback:Element<HTMLDivElement>;
		get txtLevelFeedback():Element<HTMLDivElement> {
			if (!this._txtLevelFeedback) {
				this._txtLevelFeedback = new Element<HTMLDivElement>(this.querySelector('[data-property=txtLevelFeedback]'));
			}
			return this._txtLevelFeedback;
		}

		private _txtLocation:Textbox;
		get txtLocation():Textbox {
			if (!this._txtLocation) {
				this._txtLocation = new Textbox(this.querySelector('[data-property=txtLocation]'));
			}
			return this._txtLocation;
		}

		private _txtLocationFeedback:Element<HTMLDivElement>;
		get txtLocationFeedback():Element<HTMLDivElement> {
			if (!this._txtLocationFeedback) {
				this._txtLocationFeedback = new Element<HTMLDivElement>(this.querySelector('[data-property=txtLocationFeedback]'));
			}
			return this._txtLocationFeedback;
		}

		private static _Model:Element<HTMLDivElement>;
		static getModel():Element<HTMLDivElement> {
			if (!this._Model) {
				this._Model = new Element<HTMLDivElement>(Element.fromBank('RegisterFormBase'));
			}
			return this._Model;
		}

		constructor(){
			super(Element.fromBank('RegisterFormBase'));
			this.bind(this, true);
		}
	}
}module latte{
	export class RackElementBase extends Element<HTMLDivElement>{
		private _btnBack:Element<HTMLButtonElement>;
		get btnBack():Element<HTMLButtonElement> {
			if (!this._btnBack) {
				this._btnBack = new Element<HTMLButtonElement>(this.querySelector('[data-property=btnBack]'));
			}
			return this._btnBack;
		}

		private _lblName:Element<HTMLSpanElement>;
		get lblName():Element<HTMLSpanElement> {
			if (!this._lblName) {
				this._lblName = new Element<HTMLSpanElement>(this.querySelector('[data-property=lblName]'));
			}
			return this._lblName;
		}

		private _tableBody:Element<HTMLTableSectionElement>;
		get tableBody():Element<HTMLTableSectionElement> {
			if (!this._tableBody) {
				this._tableBody = new Element<HTMLTableSectionElement>(this.querySelector('[data-property=tableBody]'));
			}
			return this._tableBody;
		}

		private _tableHead:Element<HTMLTableSectionElement>;
		get tableHead():Element<HTMLTableSectionElement> {
			if (!this._tableHead) {
				this._tableHead = new Element<HTMLTableSectionElement>(this.querySelector('[data-property=tableHead]'));
			}
			return this._tableHead;
		}

		private static _Model:Element<HTMLDivElement>;
		static getModel():Element<HTMLDivElement> {
			if (!this._Model) {
				this._Model = new Element<HTMLDivElement>(Element.fromBank('RackElementBase'));
			}
			return this._Model;
		}

		constructor(){
			super(Element.fromBank('RackElementBase'));
			this.bind(this, true);
		}
	}
}module latte{
	export class ProductElementBase extends Element<HTMLDivElement>{
		private _image:Element<HTMLDivElement>;
		get image():Element<HTMLDivElement> {
			if (!this._image) {
				this._image = new Element<HTMLDivElement>(this.querySelector('[data-property=image]'));
			}
			return this._image;
		}

		private _quantityElement:Element<HTMLDivElement>;
		get quantityElement():Element<HTMLDivElement> {
			if (!this._quantityElement) {
				this._quantityElement = new Element<HTMLDivElement>(this.querySelector('[data-property=quantityElement]'));
			}
			return this._quantityElement;
		}

		private static _Model:Element<HTMLDivElement>;
		static getModel():Element<HTMLDivElement> {
			if (!this._Model) {
				this._Model = new Element<HTMLDivElement>(Element.fromBank('ProductElementBase'));
			}
			return this._Model;
		}

		constructor(){
			super(Element.fromBank('ProductElementBase'));
			this.bind(this, true);
		}
	}
}module latte{
	export class LocationEditElementBase extends Element<HTMLDivElement>{
		private _form:Element<HTMLFormElement>;
		get form():Element<HTMLFormElement> {
			if (!this._form) {
				this._form = new Element<HTMLFormElement>(this.querySelector('[data-property=form]'));
			}
			return this._form;
		}

		private _txtQuantity:Textbox;
		get txtQuantity():Textbox {
			if (!this._txtQuantity) {
				this._txtQuantity = new Textbox(this.querySelector('[data-property=txtQuantity]'));
			}
			return this._txtQuantity;
		}

		private static _Model:Element<HTMLDivElement>;
		static getModel():Element<HTMLDivElement> {
			if (!this._Model) {
				this._Model = new Element<HTMLDivElement>(Element.fromBank('LocationEditElementBase'));
			}
			return this._Model;
		}

		constructor(){
			super(Element.fromBank('LocationEditElementBase'));
			this.bind(this, true);
		}
	}
}module latte{
	export class RacksViewBase extends Element<HTMLDivElement>{
		private _bodyElement:Element<HTMLTableSectionElement>;
		get bodyElement():Element<HTMLTableSectionElement> {
			if (!this._bodyElement) {
				this._bodyElement = new Element<HTMLTableSectionElement>(this.querySelector('[data-property=bodyElement]'));
			}
			return this._bodyElement;
		}

		private _btnCreateNew:Element<HTMLButtonElement>;
		get btnCreateNew():Element<HTMLButtonElement> {
			if (!this._btnCreateNew) {
				this._btnCreateNew = new Element<HTMLButtonElement>(this.querySelector('[data-property=btnCreateNew]'));
			}
			return this._btnCreateNew;
		}

		private _btnRefresh:Element<HTMLAnchorElement>;
		get btnRefresh():Element<HTMLAnchorElement> {
			if (!this._btnRefresh) {
				this._btnRefresh = new Element<HTMLAnchorElement>(this.querySelector('[data-property=btnRefresh]'));
			}
			return this._btnRefresh;
		}

		private _rowsElement:Element<HTMLDivElement>;
		get rowsElement():Element<HTMLDivElement> {
			if (!this._rowsElement) {
				this._rowsElement = new Element<HTMLDivElement>(this.querySelector('[data-property=rowsElement]'));
			}
			return this._rowsElement;
		}

		private static _Model:Element<HTMLDivElement>;
		static getModel():Element<HTMLDivElement> {
			if (!this._Model) {
				this._Model = new Element<HTMLDivElement>(Element.fromBank('RacksViewBase'));
			}
			return this._Model;
		}

		constructor(){
			super(Element.fromBank('RacksViewBase'));
			this.bind(this, true);
		}
	}
}