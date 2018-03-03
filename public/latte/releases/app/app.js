var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var latte;
(function (latte) {
    var productBase = /** @class */ (function (_super) {
        __extends(productBase, _super);
        function productBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /* Name of Php record */
            _this._recordType = 'Product';
            /* Name of Module where record lives */
            _this._moduleName = 'app';
            /**
             * Database field: int(10) unsigned
             */
            _this._idproduct = null;
            /**
             * Database field: varchar(128)
             */
            _this._sku = null;
            /**
             * Database field: varchar(128)
             */
            _this._name = null;
            /**
             * Database field: decimal(15,2)
             */
            _this._price = null;
            /**
             * Database field: varchar(128)
             */
            _this._unit = null;
            /**
             * Database field: varchar(128)
             */
            _this._image = null;
            /**
             * Database field: tinyint(1)
             */
            _this._active = null;
            /**
             * Database field: timestamp
             */
            _this._created = null;
            return _this;
        }
        Object.defineProperty(productBase.prototype, "idproduct", {
            /**
             * Gets or sets the value of the idproduct field of type int(10) unsigned
             */
            get: function () {
                return this._idproduct;
            },
            /**
             * Gets or sets the value of the idproduct field of type int(10) unsigned
             */
            set: function (value) {
                var changed = value !== this._idproduct;
                this._idproduct = value;
                if (changed) {
                    this.onIdproductChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(productBase.prototype, "idproductChanged", {
            /**
             * Gets an event raised when the value of the idproduct property changes
             */
            get: function () {
                if (!this._idproductChanged) {
                    this._idproductChanged = new latte.LatteEvent(this);
                }
                return this._idproductChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idproductChanged</c> event
         */
        productBase.prototype.onIdproductChanged = function () {
            if (this._idproductChanged) {
                this._idproductChanged.raise();
            }
            this.onFieldValueChanged('idproduct', this.idproduct);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        productBase.prototype.onGetRecordIdName = function () { return 'idproduct'; };
        Object.defineProperty(productBase.prototype, "sku", {
            /**
             * Gets or sets the value of the sku field of type varchar(128)
             */
            get: function () {
                return this._sku;
            },
            /**
             * Gets or sets the value of the sku field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._sku;
                this._sku = value;
                if (changed) {
                    this.onSkuChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(productBase.prototype, "skuChanged", {
            /**
             * Gets an event raised when the value of the sku property changes
             */
            get: function () {
                if (!this._skuChanged) {
                    this._skuChanged = new latte.LatteEvent(this);
                }
                return this._skuChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>skuChanged</c> event
         */
        productBase.prototype.onSkuChanged = function () {
            if (this._skuChanged) {
                this._skuChanged.raise();
            }
            this.onFieldValueChanged('sku', this.sku);
        };
        Object.defineProperty(productBase.prototype, "name", {
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            get: function () {
                return this._name;
            },
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._name;
                this._name = value;
                if (changed) {
                    this.onNameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(productBase.prototype, "nameChanged", {
            /**
             * Gets an event raised when the value of the name property changes
             */
            get: function () {
                if (!this._nameChanged) {
                    this._nameChanged = new latte.LatteEvent(this);
                }
                return this._nameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>nameChanged</c> event
         */
        productBase.prototype.onNameChanged = function () {
            if (this._nameChanged) {
                this._nameChanged.raise();
            }
            this.onFieldValueChanged('name', this.name);
        };
        Object.defineProperty(productBase.prototype, "price", {
            /**
             * Gets or sets the value of the price field of type decimal(15,2)
             */
            get: function () {
                return this._price;
            },
            /**
             * Gets or sets the value of the price field of type decimal(15,2)
             */
            set: function (value) {
                var changed = value !== this._price;
                this._price = value;
                if (changed) {
                    this.onPriceChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(productBase.prototype, "priceChanged", {
            /**
             * Gets an event raised when the value of the price property changes
             */
            get: function () {
                if (!this._priceChanged) {
                    this._priceChanged = new latte.LatteEvent(this);
                }
                return this._priceChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>priceChanged</c> event
         */
        productBase.prototype.onPriceChanged = function () {
            if (this._priceChanged) {
                this._priceChanged.raise();
            }
            this.onFieldValueChanged('price', this.price);
        };
        Object.defineProperty(productBase.prototype, "unit", {
            /**
             * Gets or sets the value of the unit field of type varchar(128)
             */
            get: function () {
                return this._unit;
            },
            /**
             * Gets or sets the value of the unit field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._unit;
                this._unit = value;
                if (changed) {
                    this.onUnitChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(productBase.prototype, "unitChanged", {
            /**
             * Gets an event raised when the value of the unit property changes
             */
            get: function () {
                if (!this._unitChanged) {
                    this._unitChanged = new latte.LatteEvent(this);
                }
                return this._unitChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>unitChanged</c> event
         */
        productBase.prototype.onUnitChanged = function () {
            if (this._unitChanged) {
                this._unitChanged.raise();
            }
            this.onFieldValueChanged('unit', this.unit);
        };
        Object.defineProperty(productBase.prototype, "image", {
            /**
             * Gets or sets the value of the image field of type varchar(128)
             */
            get: function () {
                return this._image;
            },
            /**
             * Gets or sets the value of the image field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._image;
                this._image = value;
                if (changed) {
                    this.onImageChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(productBase.prototype, "imageChanged", {
            /**
             * Gets an event raised when the value of the image property changes
             */
            get: function () {
                if (!this._imageChanged) {
                    this._imageChanged = new latte.LatteEvent(this);
                }
                return this._imageChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>imageChanged</c> event
         */
        productBase.prototype.onImageChanged = function () {
            if (this._imageChanged) {
                this._imageChanged.raise();
            }
            this.onFieldValueChanged('image', this.image);
        };
        Object.defineProperty(productBase.prototype, "active", {
            /**
             * Gets or sets the value of the active field of type tinyint(1)
             */
            get: function () {
                return this._active;
            },
            /**
             * Gets or sets the value of the active field of type tinyint(1)
             */
            set: function (value) {
                var changed = value !== this._active;
                this._active = value;
                if (changed) {
                    this.onActiveChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(productBase.prototype, "activeChanged", {
            /**
             * Gets an event raised when the value of the active property changes
             */
            get: function () {
                if (!this._activeChanged) {
                    this._activeChanged = new latte.LatteEvent(this);
                }
                return this._activeChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>activeChanged</c> event
         */
        productBase.prototype.onActiveChanged = function () {
            if (this._activeChanged) {
                this._activeChanged.raise();
            }
            this.onFieldValueChanged('active', this.active);
        };
        Object.defineProperty(productBase.prototype, "created", {
            /**
             * Gets or sets the value of the created field of type timestamp
             */
            get: function () {
                return this._created;
            },
            /**
             * Gets or sets the value of the created field of type timestamp
             */
            set: function (value) {
                var changed = value !== this._created;
                this._created = value;
                if (changed) {
                    this.onCreatedChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(productBase.prototype, "createdChanged", {
            /**
             * Gets an event raised when the value of the created property changes
             */
            get: function () {
                if (!this._createdChanged) {
                    this._createdChanged = new latte.LatteEvent(this);
                }
                return this._createdChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>createdChanged</c> event
         */
        productBase.prototype.onCreatedChanged = function () {
            if (this._createdChanged) {
                this._createdChanged.raise();
            }
            this.onFieldValueChanged('created', this.created);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        productBase.prototype.onGetFields = function () { return { 'idproduct': this.idproduct, 'sku': this.sku, 'name': this.name, 'price': this.price, 'unit': this.unit, 'image': this.image, 'active': this.active, 'created': this.created }; };
        /**
        * Declares the native types of the record.
        **/
        productBase.nativeTypes = { "idproduct": "int(10) unsigned", "sku": "varchar(128)", "name": "varchar(128)", "price": "decimal(15,2)", "unit": "varchar(128)", "image": "varchar(128)", "active": "tinyint(1)", "created": "timestamp" };
        return productBase;
    }(latte.DataRecord));
    latte.productBase = productBase;
    var levelBase = /** @class */ (function (_super) {
        __extends(levelBase, _super);
        function levelBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /* Name of Php record */
            _this._recordType = 'Level';
            /* Name of Module where record lives */
            _this._moduleName = 'app';
            /**
             * Database field: int(10) unsigned
             */
            _this._idlevel = null;
            /**
             * Database field: int(10) unsigned
             */
            _this._idrack = null;
            /**
             * Database field: timestamp
             */
            _this._created = null;
            return _this;
        }
        Object.defineProperty(levelBase.prototype, "idlevel", {
            /**
             * Gets or sets the value of the idlevel field of type int(10) unsigned
             */
            get: function () {
                return this._idlevel;
            },
            /**
             * Gets or sets the value of the idlevel field of type int(10) unsigned
             */
            set: function (value) {
                var changed = value !== this._idlevel;
                this._idlevel = value;
                if (changed) {
                    this.onIdlevelChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(levelBase.prototype, "idlevelChanged", {
            /**
             * Gets an event raised when the value of the idlevel property changes
             */
            get: function () {
                if (!this._idlevelChanged) {
                    this._idlevelChanged = new latte.LatteEvent(this);
                }
                return this._idlevelChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idlevelChanged</c> event
         */
        levelBase.prototype.onIdlevelChanged = function () {
            if (this._idlevelChanged) {
                this._idlevelChanged.raise();
            }
            this.onFieldValueChanged('idlevel', this.idlevel);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        levelBase.prototype.onGetRecordIdName = function () { return 'idlevel'; };
        Object.defineProperty(levelBase.prototype, "idrack", {
            /**
             * Gets or sets the value of the idrack field of type int(10) unsigned
             */
            get: function () {
                return this._idrack;
            },
            /**
             * Gets or sets the value of the idrack field of type int(10) unsigned
             */
            set: function (value) {
                var changed = value !== this._idrack;
                this._idrack = value;
                if (changed) {
                    this.onIdrackChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(levelBase.prototype, "idrackChanged", {
            /**
             * Gets an event raised when the value of the idrack property changes
             */
            get: function () {
                if (!this._idrackChanged) {
                    this._idrackChanged = new latte.LatteEvent(this);
                }
                return this._idrackChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idrackChanged</c> event
         */
        levelBase.prototype.onIdrackChanged = function () {
            if (this._idrackChanged) {
                this._idrackChanged.raise();
            }
            this.onFieldValueChanged('idrack', this.idrack);
        };
        Object.defineProperty(levelBase.prototype, "created", {
            /**
             * Gets or sets the value of the created field of type timestamp
             */
            get: function () {
                return this._created;
            },
            /**
             * Gets or sets the value of the created field of type timestamp
             */
            set: function (value) {
                var changed = value !== this._created;
                this._created = value;
                if (changed) {
                    this.onCreatedChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(levelBase.prototype, "createdChanged", {
            /**
             * Gets an event raised when the value of the created property changes
             */
            get: function () {
                if (!this._createdChanged) {
                    this._createdChanged = new latte.LatteEvent(this);
                }
                return this._createdChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>createdChanged</c> event
         */
        levelBase.prototype.onCreatedChanged = function () {
            if (this._createdChanged) {
                this._createdChanged.raise();
            }
            this.onFieldValueChanged('created', this.created);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        levelBase.prototype.onGetFields = function () { return { 'idlevel': this.idlevel, 'idrack': this.idrack, 'created': this.created }; };
        /**
        * Declares the native types of the record.
        **/
        levelBase.nativeTypes = { "idlevel": "int(10) unsigned", "idrack": "int(10) unsigned", "created": "timestamp" };
        return levelBase;
    }(latte.DataRecord));
    latte.levelBase = levelBase;
    var locationBase = /** @class */ (function (_super) {
        __extends(locationBase, _super);
        function locationBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /* Name of Php record */
            _this._recordType = 'Location';
            /* Name of Module where record lives */
            _this._moduleName = 'app';
            /**
             * Database field: int(10) unsigned
             */
            _this._idlocation = null;
            /**
             * Database field: int(10) unsigned
             */
            _this._idlevel = null;
            /**
             * Database field: int(10) unsigned
             */
            _this._idproduct = null;
            /**
             * Database field: double(8,2)
             */
            _this._quantity = null;
            /**
             * Database field: timestamp
             */
            _this._created = null;
            return _this;
        }
        Object.defineProperty(locationBase.prototype, "idlocation", {
            /**
             * Gets or sets the value of the idlocation field of type int(10) unsigned
             */
            get: function () {
                return this._idlocation;
            },
            /**
             * Gets or sets the value of the idlocation field of type int(10) unsigned
             */
            set: function (value) {
                var changed = value !== this._idlocation;
                this._idlocation = value;
                if (changed) {
                    this.onIdlocationChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(locationBase.prototype, "idlocationChanged", {
            /**
             * Gets an event raised when the value of the idlocation property changes
             */
            get: function () {
                if (!this._idlocationChanged) {
                    this._idlocationChanged = new latte.LatteEvent(this);
                }
                return this._idlocationChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idlocationChanged</c> event
         */
        locationBase.prototype.onIdlocationChanged = function () {
            if (this._idlocationChanged) {
                this._idlocationChanged.raise();
            }
            this.onFieldValueChanged('idlocation', this.idlocation);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        locationBase.prototype.onGetRecordIdName = function () { return 'idlocation'; };
        Object.defineProperty(locationBase.prototype, "idlevel", {
            /**
             * Gets or sets the value of the idlevel field of type int(10) unsigned
             */
            get: function () {
                return this._idlevel;
            },
            /**
             * Gets or sets the value of the idlevel field of type int(10) unsigned
             */
            set: function (value) {
                var changed = value !== this._idlevel;
                this._idlevel = value;
                if (changed) {
                    this.onIdlevelChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(locationBase.prototype, "idlevelChanged", {
            /**
             * Gets an event raised when the value of the idlevel property changes
             */
            get: function () {
                if (!this._idlevelChanged) {
                    this._idlevelChanged = new latte.LatteEvent(this);
                }
                return this._idlevelChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idlevelChanged</c> event
         */
        locationBase.prototype.onIdlevelChanged = function () {
            if (this._idlevelChanged) {
                this._idlevelChanged.raise();
            }
            this.onFieldValueChanged('idlevel', this.idlevel);
        };
        Object.defineProperty(locationBase.prototype, "idproduct", {
            /**
             * Gets or sets the value of the idproduct field of type int(10) unsigned
             */
            get: function () {
                return this._idproduct;
            },
            /**
             * Gets or sets the value of the idproduct field of type int(10) unsigned
             */
            set: function (value) {
                var changed = value !== this._idproduct;
                this._idproduct = value;
                if (changed) {
                    this.onIdproductChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(locationBase.prototype, "idproductChanged", {
            /**
             * Gets an event raised when the value of the idproduct property changes
             */
            get: function () {
                if (!this._idproductChanged) {
                    this._idproductChanged = new latte.LatteEvent(this);
                }
                return this._idproductChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idproductChanged</c> event
         */
        locationBase.prototype.onIdproductChanged = function () {
            if (this._idproductChanged) {
                this._idproductChanged.raise();
            }
            this.onFieldValueChanged('idproduct', this.idproduct);
        };
        Object.defineProperty(locationBase.prototype, "quantity", {
            /**
             * Gets or sets the value of the quantity field of type double(8,2)
             */
            get: function () {
                return this._quantity;
            },
            /**
             * Gets or sets the value of the quantity field of type double(8,2)
             */
            set: function (value) {
                var changed = value !== this._quantity;
                this._quantity = value;
                if (changed) {
                    this.onQuantityChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(locationBase.prototype, "quantityChanged", {
            /**
             * Gets an event raised when the value of the quantity property changes
             */
            get: function () {
                if (!this._quantityChanged) {
                    this._quantityChanged = new latte.LatteEvent(this);
                }
                return this._quantityChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>quantityChanged</c> event
         */
        locationBase.prototype.onQuantityChanged = function () {
            if (this._quantityChanged) {
                this._quantityChanged.raise();
            }
            this.onFieldValueChanged('quantity', this.quantity);
        };
        Object.defineProperty(locationBase.prototype, "created", {
            /**
             * Gets or sets the value of the created field of type timestamp
             */
            get: function () {
                return this._created;
            },
            /**
             * Gets or sets the value of the created field of type timestamp
             */
            set: function (value) {
                var changed = value !== this._created;
                this._created = value;
                if (changed) {
                    this.onCreatedChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(locationBase.prototype, "createdChanged", {
            /**
             * Gets an event raised when the value of the created property changes
             */
            get: function () {
                if (!this._createdChanged) {
                    this._createdChanged = new latte.LatteEvent(this);
                }
                return this._createdChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>createdChanged</c> event
         */
        locationBase.prototype.onCreatedChanged = function () {
            if (this._createdChanged) {
                this._createdChanged.raise();
            }
            this.onFieldValueChanged('created', this.created);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        locationBase.prototype.onGetFields = function () { return { 'idlocation': this.idlocation, 'idlevel': this.idlevel, 'idproduct': this.idproduct, 'quantity': this.quantity, 'created': this.created }; };
        /**
        * Declares the native types of the record.
        **/
        locationBase.nativeTypes = { "idlocation": "int(10) unsigned", "idlevel": "int(10) unsigned", "idproduct": "int(10) unsigned", "quantity": "double(8,2)", "created": "timestamp" };
        return locationBase;
    }(latte.DataRecord));
    latte.locationBase = locationBase;
    var rackBase = /** @class */ (function (_super) {
        __extends(rackBase, _super);
        function rackBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /* Name of Php record */
            _this._recordType = 'Rack';
            /* Name of Module where record lives */
            _this._moduleName = 'app';
            /**
             * Database field: int(10) unsigned
             */
            _this._idrack = null;
            /**
             * Database field: varchar(128)
             */
            _this._name = null;
            /**
             * Database field: timestamp
             */
            _this._created = null;
            return _this;
        }
        Object.defineProperty(rackBase.prototype, "idrack", {
            /**
             * Gets or sets the value of the idrack field of type int(10) unsigned
             */
            get: function () {
                return this._idrack;
            },
            /**
             * Gets or sets the value of the idrack field of type int(10) unsigned
             */
            set: function (value) {
                var changed = value !== this._idrack;
                this._idrack = value;
                if (changed) {
                    this.onIdrackChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(rackBase.prototype, "idrackChanged", {
            /**
             * Gets an event raised when the value of the idrack property changes
             */
            get: function () {
                if (!this._idrackChanged) {
                    this._idrackChanged = new latte.LatteEvent(this);
                }
                return this._idrackChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idrackChanged</c> event
         */
        rackBase.prototype.onIdrackChanged = function () {
            if (this._idrackChanged) {
                this._idrackChanged.raise();
            }
            this.onFieldValueChanged('idrack', this.idrack);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        rackBase.prototype.onGetRecordIdName = function () { return 'idrack'; };
        Object.defineProperty(rackBase.prototype, "name", {
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            get: function () {
                return this._name;
            },
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._name;
                this._name = value;
                if (changed) {
                    this.onNameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(rackBase.prototype, "nameChanged", {
            /**
             * Gets an event raised when the value of the name property changes
             */
            get: function () {
                if (!this._nameChanged) {
                    this._nameChanged = new latte.LatteEvent(this);
                }
                return this._nameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>nameChanged</c> event
         */
        rackBase.prototype.onNameChanged = function () {
            if (this._nameChanged) {
                this._nameChanged.raise();
            }
            this.onFieldValueChanged('name', this.name);
        };
        Object.defineProperty(rackBase.prototype, "created", {
            /**
             * Gets or sets the value of the created field of type timestamp
             */
            get: function () {
                return this._created;
            },
            /**
             * Gets or sets the value of the created field of type timestamp
             */
            set: function (value) {
                var changed = value !== this._created;
                this._created = value;
                if (changed) {
                    this.onCreatedChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(rackBase.prototype, "createdChanged", {
            /**
             * Gets an event raised when the value of the created property changes
             */
            get: function () {
                if (!this._createdChanged) {
                    this._createdChanged = new latte.LatteEvent(this);
                }
                return this._createdChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>createdChanged</c> event
         */
        rackBase.prototype.onCreatedChanged = function () {
            if (this._createdChanged) {
                this._createdChanged.raise();
            }
            this.onFieldValueChanged('created', this.created);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        rackBase.prototype.onGetFields = function () { return { 'idrack': this.idrack, 'name': this.name, 'created': this.created }; };
        /*
         * Remote Method.

         */
        rackBase.byName = function (name) {
            return new latte.RemoteCall('app', 'Rack', 'byName', { name: name });
        };
        /*
         * Remote Method.

         */
        rackBase.catalog = function () {
            return new latte.RemoteCall('app', 'Rack', 'catalog', {});
        };
        /*
         * Remote Method.

         */
        rackBase.register = function (idproduct, nLevels, nLocations) {
            if (idproduct === void 0) { idproduct = 1; }
            if (nLevels === void 0) { nLevels = 4; }
            if (nLocations === void 0) { nLocations = 15; }
            return new latte.RemoteCall('app', 'Rack', 'register', { idproduct: idproduct, nLevels: nLevels, nLocations: nLocations });
        };
        /**
        * Declares the native types of the record.
        **/
        rackBase.nativeTypes = { "idrack": "int(10) unsigned", "name": "varchar(128)", "created": "timestamp" };
        return rackBase;
    }(latte.DataRecord));
    latte.rackBase = rackBase;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var DialogElementBase = /** @class */ (function (_super) {
        __extends(DialogElementBase, _super);
        function DialogElementBase() {
            var _this = _super.call(this, latte.Element.fromBank('DialogElementBase')) || this;
            _this.bind(_this, true);
            return _this;
        }
        Object.defineProperty(DialogElementBase.prototype, "btnClose", {
            get: function () {
                if (!this._btnClose) {
                    this._btnClose = new latte.Element(this.querySelector('[data-property=btnClose]'));
                }
                return this._btnClose;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogElementBase.prototype, "btnSuccess", {
            get: function () {
                if (!this._btnSuccess) {
                    this._btnSuccess = new latte.Element(this.querySelector('[data-property=btnSuccess]'));
                }
                return this._btnSuccess;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogElementBase.prototype, "closeButton", {
            get: function () {
                if (!this._closeButton) {
                    this._closeButton = new latte.Element(this.querySelector('[data-property=closeButton]'));
                }
                return this._closeButton;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogElementBase.prototype, "dialogElement", {
            get: function () {
                if (!this._dialogElement) {
                    this._dialogElement = new latte.Element(this.querySelector('[data-property=dialogElement]'));
                }
                return this._dialogElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogElementBase.prototype, "titleElement", {
            get: function () {
                if (!this._titleElement) {
                    this._titleElement = new latte.Element(this.querySelector('[data-property=titleElement]'));
                }
                return this._titleElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogElementBase.prototype, "wrapElement", {
            get: function () {
                if (!this._wrapElement) {
                    this._wrapElement = new latte.Element(this.querySelector('[data-property=wrapElement]'));
                }
                return this._wrapElement;
            },
            enumerable: true,
            configurable: true
        });
        DialogElementBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('DialogElementBase'));
            }
            return this._Model;
        };
        return DialogElementBase;
    }(latte.Element));
    latte.DialogElementBase = DialogElementBase;
})(latte || (latte = {}));
(function (latte) {
    var LoaderElementBase = /** @class */ (function (_super) {
        __extends(LoaderElementBase, _super);
        function LoaderElementBase() {
            var _this = _super.call(this, latte.Element.fromBank('LoaderElementBase')) || this;
            _this.bind(_this, true);
            return _this;
        }
        LoaderElementBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('LoaderElementBase'));
            }
            return this._Model;
        };
        return LoaderElementBase;
    }(latte.Element));
    latte.LoaderElementBase = LoaderElementBase;
})(latte || (latte = {}));
(function (latte) {
    var MainViewBase = /** @class */ (function (_super) {
        __extends(MainViewBase, _super);
        function MainViewBase() {
            var _this = _super.call(this, latte.Element.fromBank('MainViewBase')) || this;
            _this.bind(_this, true);
            return _this;
        }
        Object.defineProperty(MainViewBase.prototype, "wrapperElement", {
            get: function () {
                if (!this._wrapperElement) {
                    this._wrapperElement = new latte.Element(this.querySelector('[data-property=wrapperElement]'));
                }
                return this._wrapperElement;
            },
            enumerable: true,
            configurable: true
        });
        MainViewBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('MainViewBase'));
            }
            return this._Model;
        };
        return MainViewBase;
    }(latte.Element));
    latte.MainViewBase = MainViewBase;
})(latte || (latte = {}));
(function (latte) {
    var RegisterFormBase = /** @class */ (function (_super) {
        __extends(RegisterFormBase, _super);
        function RegisterFormBase() {
            var _this = _super.call(this, latte.Element.fromBank('RegisterFormBase')) || this;
            _this.bind(_this, true);
            return _this;
        }
        Object.defineProperty(RegisterFormBase.prototype, "btnBack", {
            get: function () {
                if (!this._btnBack) {
                    this._btnBack = new latte.Element(this.querySelector('[data-property=btnBack]'));
                }
                return this._btnBack;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegisterFormBase.prototype, "btnRegister", {
            get: function () {
                if (!this._btnRegister) {
                    this._btnRegister = new latte.Element(this.querySelector('[data-property=btnRegister]'));
                }
                return this._btnRegister;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegisterFormBase.prototype, "btnReset", {
            get: function () {
                if (!this._btnReset) {
                    this._btnReset = new latte.Element(this.querySelector('[data-property=btnReset]'));
                }
                return this._btnReset;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegisterFormBase.prototype, "txtLevel", {
            get: function () {
                if (!this._txtLevel) {
                    this._txtLevel = new latte.Textbox(this.querySelector('[data-property=txtLevel]'));
                }
                return this._txtLevel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegisterFormBase.prototype, "txtLevelFeedback", {
            get: function () {
                if (!this._txtLevelFeedback) {
                    this._txtLevelFeedback = new latte.Element(this.querySelector('[data-property=txtLevelFeedback]'));
                }
                return this._txtLevelFeedback;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegisterFormBase.prototype, "txtLocation", {
            get: function () {
                if (!this._txtLocation) {
                    this._txtLocation = new latte.Textbox(this.querySelector('[data-property=txtLocation]'));
                }
                return this._txtLocation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegisterFormBase.prototype, "txtLocationFeedback", {
            get: function () {
                if (!this._txtLocationFeedback) {
                    this._txtLocationFeedback = new latte.Element(this.querySelector('[data-property=txtLocationFeedback]'));
                }
                return this._txtLocationFeedback;
            },
            enumerable: true,
            configurable: true
        });
        RegisterFormBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('RegisterFormBase'));
            }
            return this._Model;
        };
        return RegisterFormBase;
    }(latte.Element));
    latte.RegisterFormBase = RegisterFormBase;
})(latte || (latte = {}));
(function (latte) {
    var RackElementBase = /** @class */ (function (_super) {
        __extends(RackElementBase, _super);
        function RackElementBase() {
            var _this = _super.call(this, latte.Element.fromBank('RackElementBase')) || this;
            _this.bind(_this, true);
            return _this;
        }
        Object.defineProperty(RackElementBase.prototype, "btnBack", {
            get: function () {
                if (!this._btnBack) {
                    this._btnBack = new latte.Element(this.querySelector('[data-property=btnBack]'));
                }
                return this._btnBack;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RackElementBase.prototype, "lblName", {
            get: function () {
                if (!this._lblName) {
                    this._lblName = new latte.Element(this.querySelector('[data-property=lblName]'));
                }
                return this._lblName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RackElementBase.prototype, "tableBody", {
            get: function () {
                if (!this._tableBody) {
                    this._tableBody = new latte.Element(this.querySelector('[data-property=tableBody]'));
                }
                return this._tableBody;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RackElementBase.prototype, "tableHead", {
            get: function () {
                if (!this._tableHead) {
                    this._tableHead = new latte.Element(this.querySelector('[data-property=tableHead]'));
                }
                return this._tableHead;
            },
            enumerable: true,
            configurable: true
        });
        RackElementBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('RackElementBase'));
            }
            return this._Model;
        };
        return RackElementBase;
    }(latte.Element));
    latte.RackElementBase = RackElementBase;
})(latte || (latte = {}));
(function (latte) {
    var ProductElementBase = /** @class */ (function (_super) {
        __extends(ProductElementBase, _super);
        function ProductElementBase() {
            var _this = _super.call(this, latte.Element.fromBank('ProductElementBase')) || this;
            _this.bind(_this, true);
            return _this;
        }
        Object.defineProperty(ProductElementBase.prototype, "image", {
            get: function () {
                if (!this._image) {
                    this._image = new latte.Element(this.querySelector('[data-property=image]'));
                }
                return this._image;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductElementBase.prototype, "quantityElement", {
            get: function () {
                if (!this._quantityElement) {
                    this._quantityElement = new latte.Element(this.querySelector('[data-property=quantityElement]'));
                }
                return this._quantityElement;
            },
            enumerable: true,
            configurable: true
        });
        ProductElementBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('ProductElementBase'));
            }
            return this._Model;
        };
        return ProductElementBase;
    }(latte.Element));
    latte.ProductElementBase = ProductElementBase;
})(latte || (latte = {}));
(function (latte) {
    var LocationEditElementBase = /** @class */ (function (_super) {
        __extends(LocationEditElementBase, _super);
        function LocationEditElementBase() {
            var _this = _super.call(this, latte.Element.fromBank('LocationEditElementBase')) || this;
            _this.bind(_this, true);
            return _this;
        }
        Object.defineProperty(LocationEditElementBase.prototype, "form", {
            get: function () {
                if (!this._form) {
                    this._form = new latte.Element(this.querySelector('[data-property=form]'));
                }
                return this._form;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LocationEditElementBase.prototype, "txtQuantity", {
            get: function () {
                if (!this._txtQuantity) {
                    this._txtQuantity = new latte.Textbox(this.querySelector('[data-property=txtQuantity]'));
                }
                return this._txtQuantity;
            },
            enumerable: true,
            configurable: true
        });
        LocationEditElementBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('LocationEditElementBase'));
            }
            return this._Model;
        };
        return LocationEditElementBase;
    }(latte.Element));
    latte.LocationEditElementBase = LocationEditElementBase;
})(latte || (latte = {}));
(function (latte) {
    var RacksViewBase = /** @class */ (function (_super) {
        __extends(RacksViewBase, _super);
        function RacksViewBase() {
            var _this = _super.call(this, latte.Element.fromBank('RacksViewBase')) || this;
            _this.bind(_this, true);
            return _this;
        }
        Object.defineProperty(RacksViewBase.prototype, "bodyElement", {
            get: function () {
                if (!this._bodyElement) {
                    this._bodyElement = new latte.Element(this.querySelector('[data-property=bodyElement]'));
                }
                return this._bodyElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RacksViewBase.prototype, "btnCreateNew", {
            get: function () {
                if (!this._btnCreateNew) {
                    this._btnCreateNew = new latte.Element(this.querySelector('[data-property=btnCreateNew]'));
                }
                return this._btnCreateNew;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RacksViewBase.prototype, "btnRefresh", {
            get: function () {
                if (!this._btnRefresh) {
                    this._btnRefresh = new latte.Element(this.querySelector('[data-property=btnRefresh]'));
                }
                return this._btnRefresh;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RacksViewBase.prototype, "rowsElement", {
            get: function () {
                if (!this._rowsElement) {
                    this._rowsElement = new latte.Element(this.querySelector('[data-property=rowsElement]'));
                }
                return this._rowsElement;
            },
            enumerable: true,
            configurable: true
        });
        RacksViewBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('RacksViewBase'));
            }
            return this._Model;
        };
        return RacksViewBase;
    }(latte.Element));
    latte.RacksViewBase = RacksViewBase;
})(latte || (latte = {}));
var latte;
(function (latte) {
    window['latte']['globalViewsBank'] = latte._merge(window['latte']['globalViewsBank'] || {}, {
        "DialogElementBase": "<div class=\"dialog-layover\" data-class=\"DialogElementBase\">\n    <div class=\"dialog-element\" data-property=\"dialogElement\">\n        <div class=\"modal-content\">\n            <header class=\"modal-header\">\n                <h5 data-property=\"titleElement\">Editar objeto del Rack</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" data-property=\"closeButton\">\n                    <span aria-hidden=\"true\">&#xD7;</span>\n                </button>\n            </header>\n\n            <main class=\"modal-body\" data-property=\"wrapElement\"></main>\n\n            <footer class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" data-property=\"btnClose\">Descartar cambios</button>\n                <button class=\"btn btn-primary\" data-property=\"btnSuccess\">Guardar cambios</button>\n            </footer>\n        </div>\n    </div>\n</div>",
        "LoaderElementBase": "<div class=\"layover-loader\" data-class=\"LoaderElementBase\">\n    <img src=\"/design/imgs/loader.svg\" width=\"90px\" height=\"90px\">\n</div>",
        "MainViewBase": "<div class=\"main-view\" data-class=\"MainViewBase\">\n    <div class=\"container\">\n        <div class=\"wrapper\" data-property=\"wrapperElement\"></div>\n    </div>\n</div>",
        "RegisterFormBase": "<div class=\"register-element\" data-class=\"RegisterFormBase\">\n    <header class=\"py-5 text-center\">\n        <div class=\"clearfix\">\n            <button class=\"btn btn-primary float-left\" data-property=\"btnBack\">Regresar</button>\n            <h5>Crear Rack</h5>\n        </div>\n        <hr>\n    </header>\n    <main>\n        <form class=\"register-form\">\n            <div class=\"row\">\n                <div class=\"col-md-6 mb-3\">\n                    <label for=\"iptLevel\">Niveles</label>\n                    <input type=\"text\" class=\"form-control\" id=\"iptLevel\" data-property=\"txtLevel\" placeholder=\"N&#xFA;mero de niveles\" value=\"4\" required>\n                    <div class=\"invalid-feedback\" data-property=\"txtLevelFeedback\">\n                        El n&#xFA;mero de niveles es inv&#xE1;lido\n                    </div>\n                </div>\n                <div class=\"col-md-6 mb-3\">\n                    <label for=\"iptLocation\">Ubicaciones</label>\n                    <input type=\"text\" class=\"form-control\" id=\"iptLocation\" data-property=\"txtLocation\" placeholder=\"N&#xFA;mero de ubicaciones\" value=\"15\" required>\n                    <div class=\"invalid-feedback\" data-property=\"txtLocationFeedback\">\n                        El n&#xFA;mero de ubicaiones es inv&#xE1;lido\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6 mb-3\"></div>\n                <div class=\"col-md-3 mb-3\">\n                    <button class=\"btn btn-secondary btn-block\" data-property=\"btnReset\">Descartar cambios</button>\n                </div>\n                <div class=\"col-md-3 mb-3\">\n                    <button class=\"btn btn-primary btn-block\" data-property=\"btnRegister\">Generar rack</button>\n                </div>\n            </div>\n        </form> <!-- ./ RegisterFormBase -->\n    </main>\n</div>",
        "RackElementBase": "<div class=\"rack-element\" data-class=\"RackElementBase\">\n    <header class=\"py-5 text-center\">\n        <div class=\"clearfix\">\n            <button class=\"btn btn-primary float-left\" data-property=\"btnBack\">Regresar</button>\n            <h5>Administrar Rack: <span data-property=\"lblName\"></span></h5>\n        </div>\n        <hr>\n    </header>\n    <main class=\"main\">\n        <table class=\"table table-bordered\">\n            <thead data-property=\"tableHead\"></thead>\n            <tbody data-property=\"tableBody\"></tbody>\n        </table>\n    </main>\n</div>",
        "ProductElementBase": "<div class=\"product-element\" data-class=\"ProductElementBase\">\n    <div class=\"img\" data-property=\"image\">\n        <img src=\"/design/imgs/product.jpg\" alt=\"Producto\" class=\"img-fluid\">\n    </div>\n    <div class=\"quantity\" data-property=\"quantityElement\">80</div>\n</div>",
        "LocationEditElementBase": "<div class=\"location-element\" data-class=\"LocationEditElementBase\">\n    <form class=\"register-form\" data-property=\"form\" autocomplete=\"off\">\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-3\">\n                <label for=\"iptQuantity\">Cantidad</label>\n                <input type=\"text\" class=\"form-control\" id=\"iptQuantity\" data-property=\"txtQuantity\" placeholder=\"N&#xFA;mero de niveles\" value=\"0\" required autofocus>\n                <div class=\"invalid-feedback\">\n                    Niveles son requeridos.\n                </div>\n            </div>\n        </div>\n    </form>\n</div>",
        "RacksViewBase": "<div class=\"main-view\" data-class=\"RacksViewBase\">\n    <div class=\"container\">\n        <header class=\"py-5 mb-3\">\n            <div class=\"clearfix\">\n                <h5>Administraci&#xF3;n de Racks</h5>\n                <p class=\"text-sm-left\">M&#xF3;dulo para Consultar, crear, actualizar y eliminar racks del sistema</p>\n                <button class=\"btn btn-primary btn-sm float-right\" data-property=\"btnCreateNew\">Crear nuevo Rack</button>\n            </div>\n            <hr>\n        </header>\n\n        <main class=\"main\">\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr class=\"\">\n                    <th>Nombre</th>\n                    <th width=\"160\">Opciones</th>\n                </tr>\n                </thead>\n                <tbody data-property=\"bodyElement\">\n                    <tr>\n                        <td colspan=\"2\">\n                            <p class=\"m-3 text-center\">No hay elementos que mostrar</p>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </main>\n\n        <footer class=\"clearfix\">\n            <div class=\"float-left\" data-property=\"rowsElement\">2</div>\n            <a class=\"float-right\" href=\"javascript:void(0)\" data-property=\"btnRefresh\">Actualizar</a>\n        </footer>\n    </div>\n</div>"
    });
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * DialogElement
     */
    var DialogElement = /** @class */ (function (_super) {
        __extends(DialogElement, _super);
        //endregion
        //region Fields
        //endregion
        /**
         * DialogElement
         */
        function DialogElement(element) {
            if (element === void 0) { element = null; }
            var _this = _super.call(this) || this;
            //endregion
            //region Properties
            /**
             * Property field
             */
            _this._title = null;
            /**
             * Property field
             */
            _this._content = null;
            DialogElement.initialize();
            DialogElement.stack.push(_this);
            // Add listener
            _this.addEventListener('click', function (evt) {
                evt.stopPropagation();
            }, false);
            if (element) {
                _this.content = element;
            }
            _this.closeButton.addEventListener('click', function () {
                _this.close();
            }, false);
            return _this;
        }
        /**
         * initialize
         */
        DialogElement.initialize = function () {
            if (DialogElement.initialized)
                return;
            //region Escape key
            window.addEventListener('keyup', function (e) {
                if (e.keyCode == 27) {
                    if (DialogElement.stack.length > 0) {
                        DialogElement.stack[DialogElement.stack.length - 1].close();
                    }
                }
            });
            DialogElement.initialized = true;
        };
        /**
         * Remove from stack
         * @param d {DialogElement}
         */
        DialogElement.removeFromStack = function (d) {
            var a = [];
            for (var i = 0; i < DialogElement.stack.length; i++) {
                if (DialogElement.stack[i] != d) {
                    a.push(DialogElement.stack[i]);
                }
            }
            DialogElement.stack = a;
        };
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Close view
         */
        DialogElement.prototype.close = function () {
            this.removeFromParent();
        };
        /**
         * Manejador de eventos para el botón cancelar
         */
        DialogElement.prototype.btnClose_click = function () {
            this.close();
        };
        /**
         * Manejador de eventos para el botón success
         */
        DialogElement.prototype.btnSuccess_click = function () {
            this.onSuccess();
        };
        /**
         * Shows the DialogElement
         */
        DialogElement.prototype.show = function () {
            var _this = this;
            var fadeIn = false;
            this.appendTo(document.body);
            if (fadeIn) {
                this.fadeIn(0.2, function () { });
            }
            else {
                this.dialogElement.style.top = '0%';
                (new latte.Animation(0, 20, 0.3, function (value) {
                    _this.dialogElement.style.top = value + '%';
                })).start();
            }
        };
        /**
         * Raises the <c>content</c> event
         */
        DialogElement.prototype.onContentChanged = function () {
            if (this._contentChanged) {
                this._contentChanged.raise();
            }
            this.wrapElement.add(this.content);
        };
        /**
         * Raises the <c>success</c> event
         */
        DialogElement.prototype.onSuccess = function () {
            if (this._success) {
                this._success.raise();
            }
        };
        Object.defineProperty(DialogElement.prototype, "contentChanged", {
            /**
             * Gets an event raised when the value of the content property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._contentChanged) {
                    this._contentChanged = new latte.LatteEvent(this);
                }
                return this._contentChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogElement.prototype, "success", {
            /**
             * Gets an event raised when the button is clicked
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._success) {
                    this._success = new latte.LatteEvent(this);
                }
                return this._success;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogElement.prototype, "title", {
            /**
             * Gets or sets the title of the dialog
             *
             * @returns {string}
             */
            get: function () {
                return this._title;
            },
            /**
             * Gets or sets the title of the dialog
             *
             * @param {string} value
             */
            set: function (value) {
                this._title = value;
                if (value) {
                    this.titleElement.text = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogElement.prototype, "content", {
            /**
             * Gets or sets when the content property changes
             *
             * @returns {Element<HTMLElement>}
             */
            get: function () {
                return this._content;
            },
            /**
             * Gets or sets when the content property changes
             *
             * @param {Element<HTMLElement>} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._content;
                // Set value
                this._content = value;
                // Trigger changed event
                if (changed) {
                    this.onContentChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        //region Static
        DialogElement.initialized = false;
        DialogElement.stack = [];
        return DialogElement;
    }(latte.DialogElementBase));
    latte.DialogElement = DialogElement;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Main Class
     * Your app starts here.
     */
    var Main = /** @class */ (function () {
        /**
         * Start your program on the constructor.
         */
        function Main() {
            // Show main view
            this.goMainView();
        }
        Main.prototype.goMainView = function () {
            var view = new latte.MainView();
            var mountPoint = document.querySelector('#root');
            mountPoint.appendChild(view.element);
            Main.mainView = view;
        };
        return Main;
    }());
    latte.Main = Main;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * LocationEditElement
     */
    var LocationEditElement = /** @class */ (function (_super) {
        __extends(LocationEditElement, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates a new LocationEditElement
         */
        function LocationEditElement() {
            var _this = _super.call(this) || this;
            //endregion
            //region Properties
            /**
             * Property field
             */
            _this._location = null;
            // Attach Events
            _this.form.addEventListener('submit', function (evt) {
                evt.preventDefault();
            }, false);
            _this.txtQuantity.element.focus();
            _this.txtQuantity.element.select();
            return _this;
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Raises the <c>location</c> event
         */
        LocationEditElement.prototype.onLocationChanged = function () {
            if (this._locationChanged) {
                this._locationChanged.raise();
            }
            if (this.location) {
                this.txtQuantity.value = latte.Culture.formatNumber(this.location.quantity, 2);
            }
        };
        Object.defineProperty(LocationEditElement.prototype, "locationChanged", {
            /**
             * Gets an event raised when the value of the location property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._locationChanged) {
                    this._locationChanged = new latte.LatteEvent(this);
                }
                return this._locationChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LocationEditElement.prototype, "location", {
            /**
             * Gets or sets when the location property chamnges
             *
             * @returns {Location}
             */
            get: function () {
                return this._location;
            },
            /**
             * Gets or sets when the location property chamnges
             *
             * @param {Location} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._location;
                // Set value
                this._location = value;
                // Trigger changed event
                if (changed) {
                    this.onLocationChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        return LocationEditElement;
    }(latte.LocationEditElementBase));
    latte.LocationEditElement = LocationEditElement;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * RackElement
     */
    var RackElement = /** @class */ (function (_super) {
        __extends(RackElement, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates a new RackElement
         */
        function RackElement() {
            var _this = _super.call(this) || this;
            //endregion
            //region Properties
            /**
             * Property field
             */
            _this._rack = null;
            // Bind events
            _this.btnBack.addEventListener('click', function () { _this.onCloseRequest(); }, false);
            return _this;
        }
        //region Private Methods
        /**
         * @param {string} text
         * @param {string} type
         * @return {latte.Element<HTMLTableCellElement>}
         */
        RackElement.prototype.createColumn = function (text, type, className) {
            if (type === void 0) { type = 'th'; }
            if (className === void 0) { className = ''; }
            var column = new latte.Element(document.createElement(type));
            column.addClass('col-element');
            column.addClass(className);
            column.text = text;
            return column;
        };
        /**
         * @return {latte.Element<HTMLTableRowElement>}
         */
        RackElement.prototype.createRow = function () {
            var row = new latte.Element(document.createElement('tr'));
            row.addClass('row-element');
            return row;
        };
        //endregion
        //region Methods
        /**
         * Raises the <c>closeRequest</c> event
         */
        RackElement.prototype.onCloseRequest = function () {
            if (this._closeRequest) {
                this._closeRequest.raise();
            }
        };
        /**
         * Raises the <c>rack</c> event
         */
        RackElement.prototype.onRackChanged = function () {
            var _this = this;
            if (this._rackChanged) {
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
                var firstLevel = (this.rack.levels.length > 0) ? this.rack.levels[0] : new latte.Level();
                var heads_1 = [];
                heads_1.push(this.createColumn('', 'th'));
                firstLevel.locations.forEach(function (location, index) {
                    heads_1.push(_this.createColumn(String.fromCharCode(65 + index), 'th'));
                });
                // Creamos los niveles y ubicaciones para el cuerpo de la tabla
                var rows = this.rack.levels.map(function (level, index) {
                    var row = _this.createRow();
                    // Columna para el nombre del nivel
                    row.add(_this.createColumn("N" + ++index, 'td'));
                    // Creamos las columnas n+1 por cada renglón
                    var columns = level.locations.map(function (location) {
                        // Crear nuevo columna
                        var locationWrap = _this.createColumn('', 'td', 'location');
                        // Crear nuevo Producto
                        var productElement = new latte.ProductElement();
                        productElement.location = location;
                        productElement.click.add(function () {
                            var view = new latte.LocationEditElement();
                            var dialog = new latte.DialogElement(view);
                            view.location = location;
                            view.txtQuantity.element.select();
                            dialog.success.add(function () {
                                // Validación de cantidad
                                if (Number(view.txtQuantity.value) < 0) {
                                    return false;
                                }
                                location.quantity = Number(view.txtQuantity.value);
                                location.save(function () {
                                    productElement.quantityElement.text = latte.Culture.formatNumber(location.quantity, 2);
                                    dialog.close();
                                });
                            });
                            dialog.show();
                        });
                        locationWrap.tooltip = "Location ID : " + location.recordId;
                        locationWrap.add(productElement);
                        return locationWrap;
                    });
                    row.addArray(columns);
                    return row;
                });
                this.tableHead.addArray(heads_1);
                this.tableBody.addArray(rows.reverse());
            }
        };
        Object.defineProperty(RackElement.prototype, "rackChanged", {
            /**
             * Gets an event raised when the value of the rack property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._rackChanged) {
                    this._rackChanged = new latte.LatteEvent(this);
                }
                return this._rackChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RackElement.prototype, "closeRequest", {
            /**
             * Gets an event raised when when the close button is pressed
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._closeRequest) {
                    this._closeRequest = new latte.LatteEvent(this);
                }
                return this._closeRequest;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RackElement.prototype, "rack", {
            /**
             * Gets or sets when the value of the rack property changes
             *
             * @returns {Rack}
             */
            get: function () {
                return this._rack;
            },
            /**
             * Gets or sets when the value of the rack property chnages
             *
             * @param {Rack} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._rack;
                // Set value
                this._rack = value;
                // Trigger changed event
                if (changed) {
                    this.onRackChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        return RackElement;
    }(latte.RackElementBase));
    latte.RackElement = RackElement;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * ProductElement
     */
    var ProductElement = /** @class */ (function (_super) {
        __extends(ProductElement, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates a new ProductElement
         */
        function ProductElement() {
            var _this = _super.call(this) || this;
            //endregion
            //region Properties
            /**
             * Property field
             */
            _this._location = null;
            // Attach events for this element
            _this.addEventListener('click', function (evt) {
                if (evt.preventDefault) {
                    evt.preventDefault();
                }
                _this.onClick();
            }, false);
            return _this;
        }
        //region Methods
        /**
         * Raises the <c>location</c> event
         */
        ProductElement.prototype.onProductChanged = function () {
            if (this._locationChanged) {
                this._locationChanged.raise();
            }
            if (this.location) {
                this.quantityElement.text = latte.Culture.formatNumber(this.location.quantity, 2);
            }
        };
        /**
         * Raises the <c>click</c> event
         */
        ProductElement.prototype.onClick = function () {
            if (this._click) {
                this._click.raise();
            }
        };
        Object.defineProperty(ProductElement.prototype, "locationChanged", {
            /**
             * Gets an event raised when the value of the location property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._locationChanged) {
                    this._locationChanged = new latte.LatteEvent(this);
                }
                return this._locationChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductElement.prototype, "click", {
            /**
             * Gets an event raised when when the user raises the click
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._click) {
                    this._click = new latte.LatteEvent(this);
                }
                return this._click;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductElement.prototype, "location", {
            /**
             * Gets or sets when the location property changes
             *
             * @returns {Location}
             */
            get: function () {
                return this._location;
            },
            /**
             * Gets or sets when the location property changes
             *
             * @param {Location} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._location;
                // Set value
                this._location = value;
                // Trigger changed event
                if (changed) {
                    this.onProductChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        return ProductElement;
    }(latte.ProductElementBase));
    latte.ProductElement = ProductElement;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * RegisterForm
     */
    var RegisterForm = /** @class */ (function (_super) {
        __extends(RegisterForm, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates new RegisterForm
         */
        function RegisterForm() {
            var _this = _super.call(this) || this;
            // Bind events
            _this.btnBack.addEventListener('click', function () { _this.onCloseRequest(); }, false);
            return _this;
        }
        //region Private Methods
        /**
         * Manejador de evento click para el botón reset
         *
         * @param evt
         */
        RegisterForm.prototype.btnReset_click = function (evt) {
            if (evt.preventDefault) {
                evt.preventDefault();
            }
            this.txtLevel.value = String(4);
            this.txtLocation.value = String(15);
        };
        /**
         * Manejador de evento click para el botón registrar
         *
         * @param evt
         */
        RegisterForm.prototype.btnRegister_click = function (evt) {
            var _this = this;
            if (evt.preventDefault) {
                evt.preventDefault();
            }
            // Extraemos los valores de la vista
            var nLevels = Number(this.txtLevel.value);
            var nLocations = Number(this.txtLocation.value);
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
            var nColumns = Math.ceil(nLocations / nLevels);
            // Llama a un método Ajax para registrar un nuevo rack
            latte.Rack.register(1, nLevels, nColumns).send(function (rack) {
                // Lanzamos un evento <c>registered</c> después del registro con el nuevo rack creado
                _this.onRegistered(rack);
            });
        };
        //endregion
        //region Methods
        /**
         * Raises the <c>registered</c> event
         */
        RegisterForm.prototype.onRegistered = function (rack) {
            if (this._registered) {
                this._registered.raise(rack);
            }
        };
        /**
         * Raises the <c>closeRequest</c> event
         */
        RegisterForm.prototype.onCloseRequest = function () {
            if (this._closeRequest) {
                this._closeRequest.raise();
            }
        };
        Object.defineProperty(RegisterForm.prototype, "closeRequest", {
            /**
             * Gets an event raised when when the close button is pressed
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._closeRequest) {
                    this._closeRequest = new latte.LatteEvent(this);
                }
                return this._closeRequest;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegisterForm.prototype, "registered", {
            /**
             * Gets an event raised when when the button register is pressed
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._registered) {
                    this._registered = new latte.LatteEvent(this);
                }
                return this._registered;
            },
            enumerable: true,
            configurable: true
        });
        return RegisterForm;
    }(latte.RegisterFormBase));
    latte.RegisterForm = RegisterForm;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * LoaderElement
     */
    var LoaderElement = /** @class */ (function (_super) {
        __extends(LoaderElement, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * LoaderElement
         */
        function LoaderElement() {
            return _super.call(this) || this;
        }
        return LoaderElement;
    }(latte.LoaderElementBase));
    latte.LoaderElement = LoaderElement;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table level
     */
    var Level = /** @class */ (function (_super) {
        __extends(Level, _super);
        function Level() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Level;
    }(latte.levelBase));
    latte.Level = Level;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * RacksView
     */
    var RacksView = /** @class */ (function (_super) {
        __extends(RacksView, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * RacksView
         */
        function RacksView() {
            return _super.call(this) || this;
        }
        //region Private Methods
        /**
         * Crear un botón genérico
         *
         * @param {GenericCallback} cb
         * @param {"Editar"} text
         * @param {string} className
         * @return {latte.Element<HTMLButtonElement>}
         */
        RacksView.prototype.createButton = function (cb, text, className) {
            if (cb === void 0) { cb = null; }
            if (text === void 0) { text = 'Editar'; }
            if (className === void 0) { className = 'btn-secondary'; }
            var buttonElement = new latte.Element(document.createElement('button'));
            buttonElement.element.classList.add('btn', 'mr-1', 'btn-sm', className);
            buttonElement.text = text;
            buttonElement.element.addEventListener('click', function (evt) {
                evt.preventDefault();
                if (latte._isFunction(cb)) {
                    cb();
                }
            }, false);
            return buttonElement;
        };
        //endregion
        //region Methods
        /**
         * Manejador de eventos para el botón Crear.
         *
         * @param evt
         */
        RacksView.prototype.btnCreateNew_click = function (evt) {
            evt.preventDefault();
            // Lanzamos el event create
            this.onCreate();
        };
        /**
         * Manejador de eventos para el botón actualizar.
         *
         * @param evt
         */
        RacksView.prototype.btnRefresh_click = function (evt) {
            evt.preventDefault();
            this.loadRacks().send();
        };
        /**
         * Carga inicial de la vista
         */
        RacksView.prototype.onLoad = function () {
            this.loadRacks().send();
        };
        /**
         * Carga los datos del servidor.
         *
         * @return {latte.RemoteCall<latte.Rack>}
         */
        RacksView.prototype.loadRacks = function () {
            var _this = this;
            this.loader.visible = true;
            return latte.Rack.catalog().withHandlers(function (racks) {
                _this.loader.visible = false;
                _this.bodyElement.clear();
                if (racks.length > 0) {
                    var elements = racks.map(function (rack) {
                        var row = new latte.Element(document.createElement('tr'));
                        // Columna para colocar el nombre del rack
                        var column = new latte.Element(document.createElement('td'));
                        column.text = rack.recordId + "-" + rack.name;
                        //  Columna para colocar los botónes de acción
                        var column2 = new latte.Element(document.createElement('td'));
                        var btnEdit = _this.createButton(function () {
                            // Lanza el evento editar
                            _this.onEdit(rack);
                        }, 'Editar', 'btn-secondary');
                        var btnDelete = _this.createButton(function () {
                            // Lanza el evento editar
                            var dialog = new latte.DialogElement();
                            dialog.title = "Eliminar rack";
                            dialog.btnClose.text = "Cancelar";
                            dialog.btnSuccess.text = "Sí, eliminar";
                            dialog.wrapElement.text = "\u00BFSeguro que desea eliminar el rack <b>" + rack.name + "</b>?";
                            dialog.success.add(function () {
                                rack.remove(function () {
                                    _this.loadRacks().send();
                                });
                                dialog.close();
                            });
                            dialog.show();
                        }, 'Eliminar', 'btn-danger');
                        // Ensanblar vista
                        column2.addArray([btnEdit, btnDelete]);
                        row.addArray([column, column2]);
                        return row;
                    });
                    _this.bodyElement.addArray(elements);
                }
                if (racks.length == 1) {
                    _this.rowsElement.text = racks.length + " elemento";
                }
                else {
                    _this.rowsElement.text = racks.length + " elementos";
                }
            }, function () { });
        };
        /**
         * Raises the <c>create</c> event
         */
        RacksView.prototype.onCreate = function () {
            if (this._create) {
                this._create.raise();
            }
        };
        /**
         * Raises the <c>edit</c> event
         */
        RacksView.prototype.onEdit = function (rack) {
            if (this._edit) {
                this._edit.raise(rack);
            }
        };
        Object.defineProperty(RacksView.prototype, "create", {
            /**
             * Obtiene un evento cuando se da click al botón crear
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._create) {
                    this._create = new latte.LatteEvent(this);
                }
                return this._create;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RacksView.prototype, "edit", {
            /**
             * Obtiene un evento para el botón editar
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._edit) {
                    this._edit = new latte.LatteEvent(this);
                }
                return this._edit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RacksView.prototype, "loader", {
            /**
             * Gets the loader element
             *
             * @returns {LoaderElement}
             */
            get: function () {
                if (!this._loader) {
                    this._loader = new latte.LoaderElement();
                    this.add(this._loader);
                }
                return this._loader;
            },
            enumerable: true,
            configurable: true
        });
        return RacksView;
    }(latte.RacksViewBase));
    latte.RacksView = RacksView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * MainView
     */
    var MainView = /** @class */ (function (_super) {
        __extends(MainView, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates a new DashboardView
         */
        function MainView() {
            var _this = _super.call(this) || this;
            // Initialize the View
            _this.present(_this.racksView);
            return _this;
        }
        //endregion
        //region Methods
        /**
         * Establece la vista principal de la aplicación.
         *
         * @param {latte.Element<HTMLElement>} el
         */
        MainView.prototype.present = function (el) {
            if (el instanceof latte.RacksView) {
                el.loadRacks().send();
            }
            this.wrapperElement.setContent(el);
        };
        Object.defineProperty(MainView.prototype, "registerForm", {
            /**
             * Gets the register form instance
             *
             * @returns {RegisterForm}
             */
            get: function () {
                var _this = this;
                if (!this._registerForm) {
                    var lazy = this._registerForm = new latte.RegisterForm();
                    lazy.registered.add(function (rack) {
                        if (rack instanceof latte.Rack) {
                            var rackElement = new latte.RackElement();
                            rackElement.rack = rack;
                            rackElement.closeRequest.add(function () {
                                _this.present(_this.racksView);
                            });
                            _this.present(rackElement);
                        }
                    });
                    lazy.closeRequest.add(function () {
                        _this.present(_this.racksView);
                    });
                }
                return this._registerForm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MainView.prototype, "racksView", {
            /**
             * Gets el componente para mostrar los racks de la vista principal
             *
             * @returns {RacksView}
             */
            get: function () {
                var _this = this;
                if (!this._racksView) {
                    var lazy = this._racksView = new latte.RacksView();
                    lazy.create.add(function () {
                        _this.present(_this.registerForm);
                    });
                    lazy.edit.add(function (rack) {
                        // Obtenemos el rack del servidor por nombre
                        latte.Rack.byName(rack.name).send(function (record) {
                            var rackElement = new latte.RackElement();
                            rackElement.rack = record;
                            rackElement.closeRequest.add(function () {
                                _this.present(_this.racksView);
                            });
                            _this.present(rackElement);
                        });
                    });
                }
                return this._racksView;
            },
            enumerable: true,
            configurable: true
        });
        return MainView;
    }(latte.MainViewBase));
    latte.MainView = MainView;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table rack
     */
    var Rack = /** @class */ (function (_super) {
        __extends(Rack, _super);
        function Rack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Rack;
    }(latte.rackBase));
    latte.Rack = Rack;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table product
     */
    var Product = /** @class */ (function (_super) {
        __extends(Product, _super);
        function Product() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Product;
    }(latte.productBase));
    latte.Product = Product;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table location
     */
    var Location = /** @class */ (function (_super) {
        __extends(Location, _super);
        function Location() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Location;
    }(latte.locationBase));
    latte.Location = Location;
})(latte || (latte = {}));
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/app.strings.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/datalatte.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/latte.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/latte.data.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/latte.data.strings.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/latte.element.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/latte.strings.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/records.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/views.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/support/ts-include/views_bank.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/elements/DialogElement.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/Main.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/elements/LocationEditElement.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/elements/RackElement.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/elements/ProductElement.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/elements/RegisterForm.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/elements/LoaderElement.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/records/Level.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/racks/RacksView.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/MainView.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/records/Rack.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/records/Product.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/app/ts/records/Location.ts" /> 
