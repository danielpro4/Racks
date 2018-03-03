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
    /**
     *
     */
    var DataBindActor = /** @class */ (function () {
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the actor
         *
         * If no propertyChanged event is passed, the "propertyChanged" event will be automatically seeked.
         *
         */
        function DataBindActor(actor, propertyName, propertyType, propertyChanged) {
            if (propertyType === void 0) { propertyType = latte.BindValueType.STRING; }
            if (propertyChanged === void 0) { propertyChanged = null; }
            this._actor = actor;
            this._propertyName = propertyName;
            this._propertyType = propertyType;
            if (!this.propertyChanged) {
                var name_1 = propertyName + "Changed";
                if (actor[name_1] instanceof latte.LatteEvent) {
                    this._propertyChanged = actor[name_1];
                }
            }
            else {
                this._propertyChanged = propertyChanged;
            }
        }
        Object.defineProperty(DataBindActor.prototype, "actor", {
            /**
             * Gets the actor of the bind
             *
             * @returns {any}
             */
            get: function () {
                return this._actor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataBindActor.prototype, "propertyChanged", {
            /**
             * Gets the event of property change
             *
             * @returns {LatteEvent}
             */
            get: function () {
                return this._propertyChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataBindActor.prototype, "propertyName", {
            /**
             * Gets the name of the property
             *
             * @returns {string}
             */
            get: function () {
                return this._propertyName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataBindActor.prototype, "propertyType", {
            /**
             * Gets the type of the property
             *
             * @returns {BindType}
             */
            get: function () {
                return this._propertyType;
            },
            enumerable: true,
            configurable: true
        });
        return DataBindActor;
    }());
    latte.DataBindActor = DataBindActor;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Initialize, then call value property to obtain coerced value
     */
    var DataBindCoercion = /** @class */ (function () {
        function DataBindCoercion() {
        }
        //region Static
        /**
         * Performs the coercion
         * @param value
         * @param {latte.BindValueType} sourceType
         * @param {latte.BindValueType} targetType
         * @returns {any}
         */
        DataBindCoercion.coerce = function (value, sourceType, targetType) {
            // Ensure value is what type it should be
            value = DataBindCoercion.ensureType(value, sourceType);
            switch (targetType) {
                case latte.BindValueType.ANY: return value;
                case latte.BindValueType.STRING:
                    if (sourceType == latte.BindValueType.DATETIME && value instanceof latte.DateTime) {
                        return value.toString();
                    }
                    else {
                        return String(value);
                    }
                case latte.BindValueType.BOOLEAN:
                    if (sourceType == latte.BindValueType.NUMBER) {
                        return value > 0;
                    }
                    else {
                        return !!value;
                    }
                case latte.BindValueType.NUMBER:
                    if (sourceType == latte.BindValueType.BOOLEAN) {
                        return value ? 1 : 0;
                    }
                    else {
                        return value;
                    }
                case latte.BindValueType.DATETIME:
                    if (sourceType == latte.BindValueType.STRING) {
                        return latte.DateTime.fromString(value);
                    }
                    else {
                        return value;
                    }
            }
        };
        /**
         * Ensures the specified value is of the specified type
         * @param value
         * @param {latte.BindValueType} type
         */
        DataBindCoercion.ensureType = function (value, type) {
            switch (type) {
                case latte.BindValueType.ANY: return value;
                case latte.BindValueType.STRING: return String(value || '');
                case latte.BindValueType.BOOLEAN: return !!value;
                case latte.BindValueType.NUMBER: return parseFloat(value || 0);
            }
            return value;
        };
        /**
         * Parses the type
         * @param {string} typeAsString
         */
        DataBindCoercion.parseType = function (typeAsString) {
            if (typeAsString === void 0) { typeAsString = ''; }
            var s = String(typeAsString).trim().toLowerCase();
            switch (s) {
                case 'html':
                case 'text':
                case 'password':
                case 'string': return latte.BindValueType.STRING;
                case 'record':
                case 'flags':
                case 'number':
                case 'float':
                case 'integer': return latte.BindValueType.NUMBER;
                case 'switch':
                case 'boolean': return latte.BindValueType.BOOLEAN;
                case 'date':
                case 'datetime': return latte.BindValueType.DATETIME;
                case 'time': return latte.BindValueType.TIMESPAN;
            }
            return latte.BindValueType.ANY;
        };
        return DataBindCoercion;
    }());
    latte.DataBindCoercion = DataBindCoercion;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var _isString = latte._isString;
    /**
     * Represents a DataRecord on App
     **/
    var DataRecord = /** @class */ (function () {
        //endregion
        /**
         * Creates the record
         **/
        function DataRecord() {
            /**
             * Arbitrary collection of tags
             */
            this.tags = {};
            /**
             * Property field
             */
            this._recordId = null;
            /**
             * Initialize empty the fields of record
             */
            var metadata = this.getMetadata();
            if (metadata && latte._isObject(metadata.fields)) {
                for (var i in metadata.fields) {
                    this[i] = '';
                }
            }
        }
        /**
         * Scans the passed Object and converts available packed records to latte.DataRecord
         instances
         **/
        DataRecord.scanAndConvert = function (obj) {
            if (obj && latte._isObject(obj) || latte._isArray(obj)) {
                if (latte.DataRecord.isPackedRecord(obj)) {
                    obj = latte.DataRecord.fromServerObject(obj);
                }
                else {
                    for (var i in obj) {
                        obj[i] = latte.DataRecord.scanAndConvert(obj[i]);
                    }
                }
            }
            return obj;
        };
        /**
         * Sets the default records namespace, and injects common code into records.
         **/
        DataRecord.setDefaultRecordsNamespace = function (namespace) {
            latte.DataRecord._defaultRecordsNamespace = namespace;
            for (var symbol in namespace) {
                // Set record name
                namespace[symbol].recordType = symbol;
                // Copy static methods
                namespace[symbol].fromServerObject = latte.DataRecord.fromServerObject;
                namespace[symbol].fromServerObjects = latte.DataRecord.fromServerObjects;
            }
        };
        /**
         * Creates a record from the specified name and id. If no id is specified, empty record will arrive.
         **/
        DataRecord.fromName = function (name, id, callback) {
            var m = new latte.Message('latte.data', 'DataLatteUa', 'recordSelect', { name: name, id: id })
                .send(function (record) {
                // Execute callback with record
                callback(record);
            });
            return m;
        };
        /**
         * Converts a server given Object to a Record of the specified type, if no type specified <c>DataRecord</c> will be used.
         **/
        DataRecord.fromServerObject = function (obj, classType) {
            if (classType === void 0) { classType = null; }
            var dns = latte.DataRecord._defaultRecordsNamespace ? latte.DataRecord._defaultRecordsNamespace : (latte._isObject(window[DataRecord.recordsNamespaceName]) ? window[DataRecord.recordsNamespaceName] : null);
            var rt = obj.recordType;
            var type = latte._isFunction(classType) ? classType : (latte._isFunction(dns[rt]) ? dns[rt] : DataRecord);
            var record = new type();
            var i, j;
            if (!latte.DataRecord.isPackedRecord(obj)) {
                throw new latte.Ex();
            }
            for (i in obj.fields) {
                var nativeType = type['nativeTypes'] ? type['nativeTypes'][i] || 'varchar' : 'varchar';
                record[i] = DataRecord.unserializeNativeValue(obj.fields[i], nativeType);
            }
            record.recordType = obj.recordType;
            record.recordId = parseInt(obj.recordId);
            if (obj.metadata) {
                // Metadata, if any
                record.metadata = obj.metadata || {};
            }
            // If record contains properties
            if (!latte._undef(obj['properties'])) {
                for (i in obj.properties) {
                    // If property is an array
                    if (latte._isArray(obj.properties[i])) {
                        // Check if contains records
                        for (j = 0; j < obj.properties[i].length; j++) {
                            obj.properties[i][j] = latte.DataRecord.fromServerObject(obj.properties[i][j]);
                        }
                    }
                    // If property is a record
                    if (obj.properties[i] && obj.properties[i]['type'] == 'DataRecord') {
                        // Unpack
                        record[i] = latte.DataRecord.fromServerObject(obj.properties[i]);
                    }
                    else {
                        // Or, Assign as it is
                        record[i] = obj.properties[i];
                    }
                }
            }
            return record;
        };
        /**
         * Converts a server given array of Object to a Records array
         **/
        DataRecord.fromServerObjects = function (array, classType) {
            if (classType === void 0) { classType = null; }
            if (!latte._isArray(array))
                throw new latte.InvalidArgumentEx('array', array);
            var a = [];
            for (var i = 0; i < array.length; i++) {
                a.push(latte.DataRecord.fromServerObject(array[i], classType));
            }
            return a;
        };
        /**
         * Returns a value indicating if the passed Object
         is a packed Object
         **/
        DataRecord.isPackedRecord = function (object) {
            return latte._isObject(object)
                && object.type == 'DataRecord'
                && !latte._undef(object.recordType);
        };
        /**
         * Serializes the native value
         * @param value
         * @param nativeType
         * @returns {any}
         */
        DataRecord.serializeNativeValue = function (value, nativeType) {
            var parts = nativeType.split('(');
            var name = parts[0].toLowerCase();
            var size = parts.length > 1 ? parseInt(parts[1].replace(')', '')) : -1;
            var dictionary = {
                'bit': 'int',
                'tinyint': 'int',
                'bool': 'int',
                'boolean': 'int',
                'smallint': 'int',
                'mediumint': 'int',
                'int': 'int',
                'integer': 'int',
                'bigint': 'int',
                'decimal': 'float',
                'dec': 'float',
                'double': 'float',
                'double precision': 'float',
                'float': 'float',
                'year': 'int',
                'date': 'DateTime',
                'datetime': 'DateTime',
                'timestamp': 'TimeSpan',
                'time': 'TimeSpan',
                'char': 'string',
                'varchar': 'string',
                'text': 'string',
                'mediumtext': 'string',
                'enum': 'string'
            };
            var t = dictionary[name] || 'string';
            if (name == 'int' && size == 1) {
                return value ? "1" : "0";
            }
            var v = value === null ? '' : String(value);
            return v;
        };
        /**
         * Unserializes the native value
         * @param value
         * @param nativeType
         */
        DataRecord.unserializeNativeValue = function (value, nativeType) {
            if (value === null) {
                return null;
            }
            var parts = nativeType.split('(');
            var name = parts[0].toLowerCase();
            var size = parts.length > 1 ? parseInt(parts[1].replace(')', '')) : -1;
            var dictionary = {
                'bit': 'int',
                'tinyint': 'int',
                'bool': 'int',
                'boolean': 'int',
                'smallint': 'int',
                'mediumint': 'int',
                'int': 'int',
                'integer': 'int',
                'bigint': 'int',
                'decimal': 'float',
                'dec': 'float',
                'double': 'float',
                'double precision': 'float',
                'float': 'float',
                'year': 'int',
                'date': 'DateTime',
                'datetime': 'DateTime',
                'timestamp': 'TimeSpan',
                'time': 'TimeSpan',
                'char': 'string',
                'varchar': 'string',
                'text': 'string',
                'mediumtext': 'string',
                'enum': 'string'
            };
            var t = dictionary[name] || 'string';
            if (name == 'int' && size == 1) {
                t = 'boolean';
            }
            switch (t) {
                case 'boolean': return !!parseInt(value, 10);
                case 'int': return parseInt(value, 10);
                case 'float': return parseFloat(value);
                case 'DateTime': return latte.DateTime.fromString(value);
                case 'TimeSpan': return latte.TimeSpan.fromString(value);
                case 'string': return String(value);
            }
            return String(value);
        };
        //region Methods
        /**
         * Adds a bind to a property
         * @param {string} property
         * @param {any} target
         * @param {string} targetProperty
         * @param {any} type
         *
         */
        DataRecord.prototype.addBind = function (property, target, targetProperty, type) {
            if (type === void 0) { type = latte.BindValueType.ANY; }
            if (!this._binds) {
                this._binds = [];
            }
            var a = new latte.DataBindActor(this, property, latte.DataBindCoercion.parseType(this.onGetFieldTypes()[property]));
            var b = new latte.DataBindActor(target, targetProperty, _isString(type) ? latte.DataBindCoercion.parseType(type) : type);
            var bind = new latte.ValueDataBind(a, b);
            this._binds.push(bind);
            return bind;
        };
        /**
         * Clears all the binds of the element
         */
        DataRecord.prototype.clearBinds = function () {
            if (this._binds) {
                this._binds.forEach(function (b) { return b.uninstall(); });
            }
            this._binds = null;
        };
        /**
         * Copies the data
         * @param r
         */
        DataRecord.prototype.copyFieldsDataFrom = function (r) {
            var fields = r.onGetFields();
            for (var i in fields) {
                this[i] = fields[i];
            }
        };
        /**
         * Gets the fields of the record, with values
         **/
        DataRecord.prototype.getFields = function () {
            var def = this.onGetFields();
            if (def) {
                return def;
            }
            else {
                var f = {};
                var metadata = this.getMetadata();
                if (metadata && metadata.fields) {
                    for (var i in metadata.fields) {
                        f[i] = this[i] || null;
                    }
                }
                return f;
            }
        };
        /**
         * Can be overriden to return dynamically generated metadata
         **/
        DataRecord.prototype.getMetadata = function () {
            return this.metadata;
        };
        /**
         * Gets the fields of the record, with values serialized.
         */
        DataRecord.prototype.getSerializedFields = function () {
            var def = this.onGetFields();
            var rt = latte[this._recordType];
            if (def) {
                for (var i in def) {
                    var nativeType = rt['nativeTypes'] ? rt['nativeTypes'][i] : 'varchar';
                    def[i] = DataRecord.serializeNativeValue(def[i], nativeType) || null;
                }
                return def;
            }
            else {
                var f = {};
                var metadata = this.getMetadata();
                if (metadata && metadata.fields) {
                    for (var i in metadata.fields) {
                        var nativeType = rt['nativeTypes'] ? rt['nativeTypes'][i] : 'varchar';
                        f[i] = DataRecord.serializeNativeValue(this[i], nativeType) || null;
                    }
                }
                return f;
            }
        };
        /**
         * Sends an insert message to the server
         **/
        DataRecord.prototype.insert = function (callback) {
            return this.insertCall().send(function () {
                if (latte._isFunction(callback)) {
                    callback();
                }
            });
        };
        /**
         * Gets the remote call for insertion
         *
         * @returns {latte.RemoteCall}
         */
        DataRecord.prototype.insertCall = function () {
            var _this = this;
            var values = this.getSerializedFields();
            // Change null values to empty values
            for (var i in values) {
                if (values[i] === null) {
                    values[i] = '';
                }
            }
            // Create call
            var call = new latte.RemoteCall(this.moduleName, 'DataLatteUa', 'recordInsert', { name: this.recordType, fields: values });
            // Catch auto-id
            call.success.add(function (data) {
                _this.recordId = parseInt(data, 10);
                _this[_this.onGetRecordIdName()] = _this.recordId;
            });
            return call;
        };
        /**
         * Returns a value indicating if the record is inserted, based on the existence of id
         **/
        DataRecord.prototype.inserted = function () {
            return this.recordId > 0;
        };
        /**
         * Raises the <c>fieldValueChanged</c> event
         */
        DataRecord.prototype.onFieldValueChanged = function (field, value) {
            if (this._fieldValueChanged) {
                this._fieldValueChanged.raise(field, value);
            }
        };
        /**
         * Raises the <c>formCreating</c> event
         */
        DataRecord.prototype.onFormCreating = function (dataRecordFormItem) {
            if (this._formCreating) {
                this._formCreating.raise(dataRecordFormItem);
            }
        };
        /**
         * Raises the <c>formCreated</c> event
         */
        DataRecord.prototype.onFormCreated = function (dataRecordFormItem) {
            if (this._formCreated) {
                this._formCreated.raise(dataRecordFormItem);
            }
        };
        /**
         * Gets the fields of the record with its data.
         */
        DataRecord.prototype.onGetFields = function () {
            return null;
        };
        /**
         *  Gets a dictionary with the TypeScript type of each property
         * @returns {any}
         */
        DataRecord.prototype.onGetFieldTypes = function () {
            return null;
        };
        /**
         * Gets the name of the id field
         * @returns {undefined}
         */
        DataRecord.prototype.onGetRecordIdName = function () {
            return undefined;
        };
        /**
         * Raises the <c>recordId</c> event
         */
        DataRecord.prototype.onRecordIdChanged = function () {
            if (this._recordIdChanged) {
                this._recordIdChanged.raise();
            }
        };
        /**
         * Sends a DELETE request to the server
         **/
        DataRecord.prototype.remove = function (callback) {
            if (callback === void 0) { callback = null; }
            return this.removeCall().send(function () {
                if (latte._isFunction(callback)) {
                    callback();
                }
            });
        };
        /**
         * Removes binds of the specified target
         * @param target
         */
        DataRecord.prototype.removeBindsOf = function (target) {
            var list = [];
            this._binds.forEach(function (b) {
                if (b.actorB.actor == target) {
                    b.uninstall();
                }
                else {
                    list.push(b);
                }
            });
            this._binds = list;
        };
        /**
         * Gets the call for removing this record
         * @returns {latte.RemoteCall}
         */
        DataRecord.prototype.removeCall = function () {
            return new latte.RemoteCall(this.moduleName, 'DataLatteUa', 'recordDelete', { name: this.recordType, id: this.recordId });
        };
        /**
         * Inserts or updates the record
         **/
        DataRecord.prototype.save = function (callback) {
            if (callback === void 0) { callback = null; }
            return this.saveCall().send(function () {
                if (latte._isFunction(callback)) {
                    callback();
                }
            });
        };
        /**
         * Gets the insert or update call for record
         */
        DataRecord.prototype.saveCall = function () {
            if (this.recordId) {
                return this.updateCall();
            }
            else {
                return this.insertCall();
            }
        };
        /**
         * Represents the person as a string
         * @returns {string}
         */
        DataRecord.prototype.toString = function () {
            if (_isString(this['name'])) {
                return this['name'];
            }
            else if (_isString(this['text'])) {
                return this['text'];
            }
            else {
                return latte.sprintf("[%s: %s]", this.recordType, this.recordId);
            }
        };
        /**
         * Sends an update message to the record
         **/
        DataRecord.prototype.update = function (callback) {
            return this.updateCall().send(function () {
                if (latte._isFunction(callback)) {
                    callback();
                }
            });
        };
        /**
         * Gets the call for updating the record
         *
         * @returns {latte.RemoteCall<string>}
         */
        DataRecord.prototype.updateCall = function () {
            var values = this.getSerializedFields();
            // Change null values to empty values
            for (var i in values) {
                if (values[i] === null) {
                    values[i] = '';
                }
            }
            // Create call
            var call = new latte.RemoteCall(this.moduleName, 'DataLatteUa', 'recordUpdate', { name: this.recordType, id: this.recordId, fields: values });
            return call;
        };
        Object.defineProperty(DataRecord.prototype, "formCreating", {
            /**
             * Gets an event raised when a DataRecordFormItem about the record is being created
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._formCreating) {
                    this._formCreating = new latte.LatteEvent(this);
                }
                return this._formCreating;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataRecord.prototype, "formCreated", {
            /**
             * Gets an event raised when a DataRecordFormItem about the record has been created
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._formCreated) {
                    this._formCreated = new latte.LatteEvent(this);
                }
                return this._formCreated;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataRecord.prototype, "fieldValueChanged", {
            /**
             * Gets an event raised when the value of a field is changed
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._fieldValueChanged) {
                    this._fieldValueChanged = new latte.LatteEvent(this);
                }
                return this._fieldValueChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataRecord.prototype, "recordIdChanged", {
            /**
             * Gets an event raised when the value of the recordId property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._recordIdChanged) {
                    this._recordIdChanged = new latte.LatteEvent(this);
                }
                return this._recordIdChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataRecord.prototype, "moduleName", {
            /**
             * Gets or sets the name of the module where record is contained
             *
             * @returns {string}
             */
            get: function () {
                return this._moduleName;
            },
            /**
             * Gets or sets the name of the module where record is contained
             *
             * @param {string} value
             */
            set: function (value) {
                this._moduleName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataRecord.prototype, "recordId", {
            /**
             * Gets or sets the record id
             *
             * @returns {number}
             */
            get: function () {
                return this._recordId;
            },
            /**
             * Gets or sets the record id
             *
             * @param {number} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._recordId;
                // Set value
                this._recordId = value;
                // Trigger changed event
                if (changed) {
                    this.onRecordIdChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataRecord.prototype, "recordType", {
            /**
             * Gets or sets the record type
             **/
            get: function () {
                return this._recordType;
            },
            /**
             * Gets or sets the record type
             **/
            set: function (value) {
                this._recordType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataRecord.prototype, "tag", {
            /**
             * Gets or sets an arbitrary value for the record
             **/
            get: function () {
                return this._tag;
            },
            /**
             * Gets or sets an arbitrary value for the record
             **/
            set: function (value) {
                this._tag = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Name of object where records are stored
         */
        DataRecord.recordsNamespaceName = 'latte';
        return DataRecord;
    }());
    latte.DataRecord = DataRecord;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Represents a collection of records
     */
    var DataRecordCollection = /** @class */ (function (_super) {
        __extends(DataRecordCollection, _super);
        /**
         * Creates the collection of the specified type.
         * Optionally specifies handlers for adding and removing items, and a
         * context to call as closure of events.
         *
         * @param addCallback
         * @param removeCallback
         * @param context
         */
        function DataRecordCollection(addCallback, removeCallback, context) {
            if (addCallback === void 0) { addCallback = null; }
            if (removeCallback === void 0) { removeCallback = null; }
            if (context === void 0) { context = null; }
            return _super.call(this, addCallback, removeCallback, context) || this;
        }
        /**
         * Finds the record of the specified <c>id</c>
         *
         * @param id
         * @returns {null}
         */
        DataRecordCollection.prototype.byId = function (id) {
            return null;
        };
        return DataRecordCollection;
    }(latte.Collection));
    latte.DataRecordCollection = DataRecordCollection;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Represents a set of structured data
     **/
    var DataSet = /** @class */ (function () {
        /**
         * Creates the dataset
         **/
        function DataSet() {
            this.columns = new latte.Collection();
            this.rows = new latte.Collection();
        }
        /**
         * Creates a <c>DataSet</c> from the dataset specified as a JSON object
         **/
        DataSet.fromServerObject = function (dataset) {
            var d = new DataSet();
            var i;
            for (i in dataset.fields) {
                d.columns.add(new latte.DataSetColumn(dataset.fields[i].name, DataSet.fromServerType(dataset.fields[i].type), dataset.fields[i].length));
            }
            // Add rows
            if (latte._isArray(dataset.rows)) {
                for (i = 0; i < dataset.rows.length; i++) {
                    var arr = dataset.rows[i];
                    var ds = new latte.DataSetRow(arr);
                    d.rows.add(ds);
                }
            }
            return d;
        };
        /**
         * Converts the type sent by server to a type compatible with <c>InputItem</c>
         **/
        DataSet.fromServerType = function (type) {
            switch (type) {
                case 'int':
                    type = 'integer';
                    break;
                case 'blob':
                    type = 'string';
                    break;
            }
            return type;
        };
        /**
         * Gets the index of the column by passing the name of the column
         **/
        DataSet.prototype.getColumnIndex = function (columnName) {
            var col = null;
            var i = 0;
            while ((col = this.columns.next())) {
                if (col.name.toLowerCase() == columnName.toLowerCase()) {
                    this.columns.resetPointer();
                    return i;
                }
                i++;
            }
            return null;
        };
        /**
         * Gets the data as an array of arrays
         **/
        DataSet.prototype.getDataArray = function () {
            var a = [];
            for (var i = 0; i < this.rows.count; i++)
                a.push(this.rows.item(i).getDataArray(this.columns.count));
            return a;
        };
        /**
         * Gets the value of the specified column at the specified row index
         **/
        DataSet.prototype.getValue = function (columnName, rowIndex) {
            var columnIndex;
            if ((columnIndex = this.getColumnIndex(columnName))) {
                return this.getValueAt(columnIndex, rowIndex);
            }
            else {
                throw new latte.InvalidArgumentEx(columnName);
            }
        };
        /**
         * Gets the value at the specified position
         **/
        DataSet.prototype.getValueAt = function (columnIndex, rowIndex) {
            if (this.rows.count > rowIndex && this.rows.item(rowIndex).hasValueAt(columnIndex))
                return this.rows.item(rowIndex).getValueAt(columnIndex);
            else
                return null;
        };
        /**
         * Sets the value at the specified position
         **/
        DataSet.prototype.setValue = function (columnName, rowIndex, value) {
            var columnIndex;
            if ((columnIndex = this.getColumnIndex(columnName))) {
                return this.setValueAt(columnIndex, rowIndex, value);
            }
            return this;
        };
        /**
         * Sets the value at the specified position
         **/
        DataSet.prototype.setValueAt = function (columnIndex, rowIndex, value) {
            if (this.rows.count > rowIndex && this.rows.item(rowIndex).hasValueAt(columnIndex))
                this.rows.item(rowIndex).setValueAt(columnIndex, value);
            else if (this.rows.count <= rowIndex)
                throw new latte.InvalidArgumentEx('rowIndex', rowIndex);
            else
                throw new latte.InvalidArgumentEx('columnIndex', columnIndex);
            return this;
        };
        return DataSet;
    }());
    latte.DataSet = DataSet;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Represents a column of data for <c>DataSet</c>
     **/
    var DataSetColumn = /** @class */ (function () {
        /**
         * Creates the column.
         Optionally specifies its name, type and length.
         **/
        function DataSetColumn(name, type, length) {
            if (name === void 0) { name = ''; }
            if (type === void 0) { type = ''; }
            if (length === void 0) { length = 0; }
            this.optionsChanged = new latte.LatteEvent(this);
            this.name = name;
            this.type = type;
            this.length = length;
        }
        Object.defineProperty(DataSetColumn.prototype, "length", {
            /**
             * Gets or sets the length of the column values.
             **/
            get: function () {
                return this._length;
            },
            /**
             * Gets or sets the length of the column values.
             **/
            set: function (value) {
                this._length = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataSetColumn.prototype, "name", {
            /**
             * Gets or sets the name of the column.
             **/
            get: function () {
                return this._name;
            },
            /**
             * Gets or sets the name of the column.
             **/
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>optionsChanged</c> event.
         **/
        DataSetColumn.prototype.onOptionsChanged = function () {
            this.optionsChanged.raise();
        };
        Object.defineProperty(DataSetColumn.prototype, "options", {
            /**
             * Gets or sets the options of the column.
             **/
            get: function () {
                return this._options;
            },
            /**
             * Gets or sets the options of the column.
             **/
            set: function (value /*(any|Array)*/) {
                this._options = value;
                this.onOptionsChanged();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataSetColumn.prototype, "tag", {
            /**
             * Gets or sets a generic tag value for the object
             **/
            get: function () {
                return this._tag;
            },
            /**
             * Gets or sets a generic tag value for the object
             **/
            set: function (value) {
                this._tag = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataSetColumn.prototype, "type", {
            /**
             * Gets or sets the type of the column values.
             **/
            get: function () {
                return this._type;
            },
            /**
             * Gets or sets the type of the column values.
             **/
            set: function (value) {
                this._type = value;
            },
            enumerable: true,
            configurable: true
        });
        return DataSetColumn;
    }());
    latte.DataSetColumn = DataSetColumn;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Represents a row of data for <c>DataSet</c>
     **/
    var DataSetRow = /** @class */ (function () {
        /**
         * Creates the row of data. Optionally sets the array of data
         **/
        function DataSetRow(data) {
            if (data === void 0) { data = []; }
            this.data = data;
            if (data)
                this.data = data;
            else
                this.data = [];
        }
        /**
         * Gets the data as an array of specified positions. Undefined positions will be set to null
         **/
        DataSetRow.prototype.getDataArray = function (columns) {
            var a = [];
            for (var i = 0; i < columns; i++)
                if (latte._undef(this.data[i]))
                    a[i] = null;
                else
                    a[i] = this.data[i];
            return a;
        };
        /**
         * Gets a value indicating if there is a value at the specified index
         **/
        DataSetRow.prototype.hasValueAt = function (index) {
            return !latte._undef(this.data[index]);
        };
        Object.defineProperty(DataSetRow.prototype, "readOnly", {
            /**
             * Gets or sets a value indicating if the row is read-only
             **/
            get: function () {
                return this._readOnly;
            },
            /**
             * Gets or sets a value indicating if the row is read-only
             **/
            set: function (value) {
                this._readOnly = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataSetRow.prototype, "tag", {
            /**
             * Gets or sets the value at the specified position
             **/
            get: function () {
                return this._tag;
            },
            /**
             * Gets or sets the value at the specified position
             **/
            set: function (value) {
                this._tag = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Gets or sets the value at the specified position
         **/
        DataSetRow.prototype.getValueAt = function (index) {
            return this.data[index];
        };
        /**
         * Gets or sets the value at the specified position
         **/
        DataSetRow.prototype.setValueAt = function (index, value) {
            this.data[index] = value;
        };
        return DataSetRow;
    }());
    latte.DataSetRow = DataSetRow;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Sends messages to objects on server.
     * <example>
     * // ( 1 )
     * // Execute method Person::computeAge() on person with id 1
     * var m1 = new Message('Person', 'computeAge', {}, 1);
     *
     * m1.send(function(){
     *   // Log result of computeAge()
     *   log(this.data);
     * });
     *
     * // ( 2 )
     * // Execute *static* method Person::count()
     * var m2 = new Message('Person', 'count');
     *
     * m2.send(function(){
     *   // Log result of count()
     *   log(this.data);
     * });
     *
     * </example>
     *
     * @class
     */
    var Message = /** @class */ (function () {
        //endregion
        /**
         * Creates the message with the specified call
         **/
        function Message(moduleName, className, method, methodArgs, id) {
            if (moduleName === void 0) { moduleName = null; }
            if (className === void 0) { className = null; }
            if (method === void 0) { method = null; }
            if (methodArgs === void 0) { methodArgs = null; }
            if (id === void 0) { id = 0; }
            /**
             *
             */
            this._calls = [];
            // Add first standard call
            if (className !== null) {
                this.calls.push(new latte.RemoteCall(moduleName, className, method, methodArgs, id));
            }
        }
        Object.defineProperty(Message, "pathToRequest", {
            /**
             * Path where requests are made
             */
            get: function () {
                return latte._latteUrl() + "/request.php";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Directly sends an array of calls
         * @param calls
         * @returns {latte.Message}
         */
        Message.sendCalls = function (calls, callback) {
            if (callback === void 0) { callback = null; }
            var m = new Message();
            m.addCalls(calls);
            if (callback)
                m.responseArrived.add(callback);
            m.send();
            if (callback && calls.filter(function (c) { return !!c; }).length == 0) {
                callback();
            }
            return m;
        };
        Object.defineProperty(Message, "networkAvailable", {
            /**
             * Gets or sets a value indicating if the Network is currently available
             *
             * @returns {boolean}
             */
            get: function () {
                return Message._networkAvailable;
            },
            /**
             * Gets or sets a value indicating if the Network is currently available
             *
             * @param {boolean} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== Message._networkAvailable;
                // Set value
                Message._networkAvailable = value;
                // Trigger changed event
                if (changed) {
                    Message.onNetworkAvailableChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message, "networkAvailableChanged", {
            /**
             * Gets an event raised when the value of the networkAvailable property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!Message._networkAvailableChanged) {
                    Message._networkAvailableChanged = new latte.LatteEvent(Message);
                }
                return Message._networkAvailableChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>networkAvailable</c> event
         */
        Message.onNetworkAvailableChanged = function () {
            if (Message._networkAvailableChanged) {
                Message._networkAvailableChanged.raise();
            }
        };
        //region Methods
        /**
         * Adds calls to the calls array
         * @param calls
         */
        Message.prototype.addCalls = function (calls) {
            var filtered = [];
            for (var i = 0; i < calls.length; i++) {
                if (calls[i]) {
                    filtered.push(calls[i]);
                }
            }
            this._calls = this._calls.concat(filtered);
        };
        /**
         * Reacts to data arrived
         **/
        Message.prototype.dataArrived = function (data) {
            var parsed = false;
            var result = null;
            this._working = false;
            /// Assign response
            this.response = data;
            /// Network is available
            Message.networkAvailable = true;
            /// Raise received handler
            this.onResponseArrived();
            // Check if data arrived
            if (data.length == 0) {
                this.onFailed("Empty response from server");
            }
            // Try to parse JSON
            try {
                // log(data)
                result = JSON.parse(data);
                parsed = true;
            }
            catch (ex) { }
            if (parsed && latte._isArray(result)) {
                if (result.length !== this.calls.length) {
                    this.onFailed("Different amount of response than calls");
                }
                // Report response for each sent call
                for (var i = 0; i < this.calls.length; i++) {
                    this.calls[i].respond(result[i]);
                }
            }
            else {
                /// Raise failed event
                this.onFailed("Can't parse or response is not an array.");
            }
        };
        /**
         * Raises the failed event
         **/
        Message.prototype.onFailed = function (errorDescription) {
            // Dump error
            latte.log(errorDescription);
            latte.log("On call(s):");
            for (var i = 0; i < this.calls.length; i++) {
                var call = this.calls[i];
                if (call) {
                    latte.log(call.toString());
                }
            }
            latte.log(this.response);
            if (this._failed instanceof latte.LatteEvent) {
                this.failed.raise();
            }
            if (latte._isFunction(Message.globalFailed)) {
                Message.globalFailed.call(this, errorDescription);
            }
        };
        /**
         * Raises the networkFailed event
         **/
        Message.prototype.onNetworkFailed = function () {
            /// Networks appears to be unavailable
            Message.networkAvailable = false;
            /// Raise event
            if (this._networkFailed) {
                this._networkFailed.raise();
            }
            // If no retryLeader
            if (Message._retryLeader === null) {
                // I am the retry leader
                Message._retryLeader = this;
            }
            else if (Message._retryLeader !== this) {
                // This used to Add me to pendent messages and good bye.
                return;
            }
            //            this.onNetworkFailed();
            /// Ensure loader is there
            latte.LoadInfo.instance.start(strings.reconnecting);
            /// If message was critical
            if (this.critical) {
                /// TODO: Hook document unload because a message send is pendent.
            }
            /// If first try
            if (Message._retryTime == 0) {
                // Initialize retry time to 5 seconds
                Message._retryTime = 5;
            }
            else {
                // Duplicate last retry time, topped to 5 minutes
                Message._retryTime = Math.min(latte.TimeSpan.fromMinutes(5).totalSeconds, Message._retryTime * 2);
            }
            // Initialize countdown
            Message._retryCountdown = Message._retryTime;
            // Announce countdown
            latte.LoadInfo.instance.loadingText = (latte.sprintf(strings.reconnectingInS, latte.TimeSpan.fromSeconds(Message._retryCountdown).toString()));
            if (Message._retryTimer)
                Message._retryTimer.pause();
            /// Set timer to countdown
            Message._retryTimer = new latte.Timer(function () {
                Message._retryCountdown--;
                // Retry now?
                if (Message._retryCountdown == 0) {
                    latte.LoadInfo.instance.loadingText = strings.reconnecting;
                    Message.networkAvailable = true;
                    this.send();
                }
                else if (Message._retryCountdown < 0) {
                    Message._retryTimer.pause();
                    latte.LoadInfo.instance.end();
                }
                else {
                    /// Retry time text
                    latte.LoadInfo.instance.loadingText = (latte.sprintf(strings.reconnectingInS, latte.TimeSpan.fromSeconds(Message._retryCountdown).toString()));
                }
            }, 1000, this);
            Message._retryTimer.start();
        };
        /**
         * Raises the responseArrived event
         **/
        Message.prototype.onResponseArrived = function () {
            if (this._responseArrived) {
                this.responseArrived.raise();
            }
        };
        /**
         * Raises the <c>sent</c> event
         **/
        Message.prototype.onSent = function () {
            if (this._sent) {
                this.sent.raise();
            }
            Message.log.push(this);
            if (Message.log.length > 50) {
                Message.log.shift();
            }
        };
        /**
         * Sends the message. Optionally adds event handlers for <c>succeeded</c> and <c>failed</c> events
         **/
        Message.prototype.send = function (success, failure) {
            var _this = this;
            if (success === void 0) { success = null; }
            if (failure === void 0) { failure = null; }
            if (success || failure) {
                if (this.calls.length !== 1) {
                    throw new latte.Ex("Can't assign handlers when more than one call in message");
                }
                else {
                    if (success) {
                        this.calls[0].success.add(success);
                    }
                    if (failure) {
                        this.calls[0].failure.add(failure);
                    }
                }
            }
            this._working = true;
            // Gather calls
            var calls = [];
            for (var i = 0; i < this.calls.length; i++) {
                var call = this.calls[i];
                if (call) {
                    calls.push(call.marshall());
                }
            }
            //log(sprintf("Call: %s, %s", DateTime.now.toString(), JSON.stringify(calls)));
            latte.Ajax.post(Message.pathToRequest, {
                action: 'ajax-rpc',
                calls: JSON.stringify(calls)
            }, function (data) {
                /*
                 * FOR SOME ULTRA WEIRD REASON
                 * Sometimes DATA IS ARRIVING WITH AN "undefined" prefix
                 * */
                // if(data.indexOf('undefined') === 0){
                //     data = data.substr(9);
                // }
                _this.dataArrived(data);
            }, function (error) {
                _this._working = false;
                //log("Message.send() [Error]: " + error);
                _this.onNetworkFailed();
            });
            this.onSent();
            return this;
        };
        /**
         * Gets a value indcating if the message is in progress
         **/
        Message.prototype.working = function () {
            return this._working;
        };
        Object.defineProperty(Message.prototype, "calls", {
            //endregion
            //region Properties
            /**
             * Gets the calls this message will make
             *
             * @returns {Array<RemoteCall>}
             */
            get: function () {
                return this._calls;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message.prototype, "failed", {
            /**
             * Gets an event raised when the message fails by network issues or server issues
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._failed) {
                    this._failed = new latte.LatteEvent(this);
                }
                return this._failed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message.prototype, "networkFailed", {
            /**
             * Gets an event raised when the network fails
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._networkFailed) {
                    this._networkFailed = new latte.LatteEvent(this);
                }
                return this._networkFailed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message.prototype, "responseArrived", {
            /**
             * Gets an event raised when the response arrives
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._responseArrived) {
                    this._responseArrived = new latte.LatteEvent(this);
                }
                return this._responseArrived;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message.prototype, "sent", {
            /**
             * Gets an event raised when the message is sent
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._sent) {
                    this._sent = new latte.LatteEvent(this);
                }
                return this._sent;
            },
            enumerable: true,
            configurable: true
        });
        //region Static
        Message.log = [];
        //region Network Availability
        /**
         * Property field
         */
        Message._networkAvailable = true;
        return Message;
    }());
    latte.Message = Message;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Represents a call to a remote procedure
     */
    var RemoteCall = /** @class */ (function () {
        //endregion
        /**
         * Creates the procedure with optional parameters
         * @param moduleName
         * @param className
         * @param method
         * @param params
         * @param id
         * @param returns
         */
        function RemoteCall(moduleName, className, method, params, id, returns) {
            if (moduleName === void 0) { moduleName = null; }
            if (className === void 0) { className = null; }
            if (method === void 0) { method = null; }
            if (params === void 0) { params = null; }
            if (id === void 0) { id = 0; }
            if (returns === void 0) { returns = null; }
            //region Fields
            this._className = null;
            this._method = null;
            this._id = 0;
            this._params = null;
            this._returns = null;
            this._success = null;
            this._failure = null;
            /**
             * Property field
             */
            this._something = null;
            /**
             * Property field
             */
            this._moduleName = null;
            if (moduleName)
                this.moduleName = moduleName;
            if (className)
                this.className = className;
            if (method)
                this.method = method;
            if (params)
                this.params = params;
            if (id)
                this.id = id;
            if (returns)
                this.returns = returns;
        }
        //region Methods
        /**
         * Gets the marshalled call
         */
        RemoteCall.prototype.marshall = function () {
            return {
                moduleName: this.moduleName,
                className: this.className,
                method: this.method,
                id: this.id,
                params: this.params
            };
        };
        /**
         * Raises the <c>failure</c> event
         */
        RemoteCall.prototype.onFailure = function (errorDescription, errorCode) {
            if (this._failure instanceof latte.LatteEvent) {
                this._failure.raise(errorDescription, errorCode);
            }
        };
        /**
         * Raises the <c>success</c> event
         * @param data
         */
        RemoteCall.prototype.onSuccess = function (data) {
            if (this._success instanceof latte.LatteEvent) {
                this._success.raise(data);
            }
        };
        /**
         * Reports a response from server to the call
         *
         * @param responseData
         */
        RemoteCall.prototype.respond = function (responseData) {
            var response = new latte.RemoteResponse(this, responseData);
            this.response = response;
        };
        /**
         * Creates a Message object and sends the call, additionally handlers for success and failure may be added.
         */
        RemoteCall.prototype.send = function (success, failure) {
            if (success === void 0) { success = null; }
            if (failure === void 0) { failure = null; }
            this.withHandlers(success, failure);
            // Create message
            var m = new latte.Message();
            // Add this call to message
            m.calls.push(this);
            // Send the message
            m.send();
            return m;
        };
        /**
         * Creates a Message object and sends the call, showing a loader with the specified text
         * @param loaderText
         * @param success
         * @param failure
         */
        RemoteCall.prototype.sendWithLoader = function (loaderText, success, failure) {
            if (success === void 0) { success = null; }
            if (failure === void 0) { failure = null; }
            var m = this.send(success, failure);
            latte.LoadInfo.instance.start(loaderText);
            m.responseArrived.add(function () {
                latte.LoadInfo.instance.end();
            });
            return m;
        };
        /**
         * Gets a string representation of the call
         * @returns {*|string}
         */
        RemoteCall.prototype.toString = function () {
            var idpart = this.id > 0 ? latte.sprintf("<%s>", this.id) : '';
            var paramspart = [];
            for (var i in this.params) {
                var a = this.params[i];
                paramspart.push(i + ' = ' + (latte._isArray(a) || latte._isObject(a) ? JSON.stringify(a) : String(a)));
            }
            return latte.sprintf("%s%s.%s(%s)", this.className, idpart, this.method, paramspart.join(', '));
        };
        /**
         * Adds handlers for success and/or failure and returns the call object
         * @param success
         * @param failure
         * @returns {latte.RemoteCall}
         */
        RemoteCall.prototype.withHandlers = function (success, failure) {
            if (success === void 0) { success = null; }
            if (failure === void 0) { failure = null; }
            // Add success handler
            if (success) {
                this.success.add(success);
            }
            // Add failed handler
            if (failure) {
                this.failure.add(failure);
            }
            return this;
        };
        Object.defineProperty(RemoteCall.prototype, "className", {
            //endregion
            //region Properties
            /**
             * Gets or sets the name of the class where the procedure is located
             * @returns {string}
             */
            get: function () {
                return this._className;
            },
            /**
             * Gets or sets the name of the class where the procedure is located
             * @param value
             */
            set: function (value) {
                this._className = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteCall.prototype, "method", {
            /**
             * Gets or sets the name of the remote procedure to be called
             * @returns {string}
             */
            get: function () {
                return this._method;
            },
            /**
             * Gets or sets the name of the remote procedure to be called
             * @param value
             */
            set: function (value) {
                this._method = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteCall.prototype, "failure", {
            /**
             * Gets an event raised when the call fails
             * @returns {LatteEvent}
             */
            get: function () {
                if (!(this._failure instanceof latte.LatteEvent)) {
                    this._failure = new latte.LatteEvent(this);
                }
                return this._failure;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteCall.prototype, "something", {
            /**
             * Gets or sets something
             *
             * @returns {string}
             */
            get: function () {
                return this._something;
            },
            /**
             * Gets or sets something
             *
             * @param {string} value
             */
            set: function (value) {
                this._something = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteCall.prototype, "moduleName", {
            /**
             * Gets or sets the module name
             *
             * @returns {string}
             */
            get: function () {
                return this._moduleName;
            },
            /**
             * Gets or sets the module name
             *
             * @param {string} value
             */
            set: function (value) {
                this._moduleName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteCall.prototype, "id", {
            /**
             * Gets or sets the id of the object instance where procedure should be called
             * @returns {number}
             */
            get: function () {
                return this._id;
            },
            /**
             * Gets or sets the id of the object instance where procedure should be called
             * @param value
             */
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteCall.prototype, "params", {
            /**
             * Gets or sets an object representing the parameters to use when calling the remote procedure
             * @returns {*}
             */
            get: function () {
                return this._params;
            },
            /**
             * Gets or sets an object representing the parameters to use when calling the remote procedure
             * @param value
             */
            set: function (value) {
                this._params = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteCall.prototype, "response", {
            /**
             * Gets or sets the response of the message
             *
             * @returns {RemoteResponse}
             */
            get: function () {
                return this._response;
            },
            /**
             * Gets or sets the response of the message
             *
             * @param value
             */
            set: function (value) {
                this._response = value;
                if (value.logs.length > 0) {
                    latte.log(latte.sprintf("Log: " + this.toString()));
                    for (var i = 0; i < value.logs.length; i++) {
                        latte.log('    ' + value.logs[i]);
                    }
                }
                if (value.warnings.length > 0) {
                    latte.log("Warnings: " + latte.sprintf(this.toString()));
                    for (var i = 0; i < value.warnings.length; i++) {
                        if (console && console.warn) {
                            console.warn('    ' + value.warnings[i]);
                        }
                        else {
                            latte.log('    ' + value.warnings[i]);
                        }
                    }
                }
                if (value.success) {
                    this.onSuccess(value.data);
                    //}else{
                    //    this.onFailure(value.errorCode, value.errorDescription);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteCall.prototype, "returns", {
            /**
             * Gets or sets the type of data returned by the remote procedure
             * @param value
             */
            get: function () {
                return this._returns;
            },
            /**
             * Gets or sets the type of data returned by the remote procedure
             * @param value
             */
            set: function (value) {
                this._returns = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteCall.prototype, "success", {
            /**
             * Gets an event raised when message arrives successfully
             */
            get: function () {
                if (!(this._success instanceof latte.LatteEvent)) {
                    this._success = new latte.LatteEvent(this);
                }
                return this._success;
            },
            enumerable: true,
            configurable: true
        });
        return RemoteCall;
    }());
    latte.RemoteCall = RemoteCall;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     *
     */
    var RemoteResponse = /** @class */ (function () {
        //endregion
        /**
         * Creates the response
         * @param call
         * @param responseText
         */
        function RemoteResponse(call, response) {
            //region Fields
            this._call = null;
            this._errorCode = -1;
            this._errorDescription = null;
            this._success = false;
            /**
             * Property field
             */
            this._logs = [];
            /**
             * Property field
             */
            this._warnings = [];
            this._call = call;
            this._response = response;
            this.unmarshall();
        }
        //region Private Methods
        /**
         * Unpacks the response text to indicate attributes
         */
        RemoteResponse.prototype.unmarshall = function () {
            for (var i in this.response) {
                this['_' + i] = this.response[i];
            }
            // log("Response: ")
            // log(this.response)
            if (this.success === true) {
                this._data = latte.DataRecord.scanAndConvert(this.data);
            }
            else {
                latte.log("Error on call: " + this.call.toString());
                latte.log(latte.sprintf("(%s) - %s", this.errorCode, this.errorDescription));
                this.call.onFailure(this.errorDescription, String(this.errorCode));
            }
        };
        Object.defineProperty(RemoteResponse.prototype, "call", {
            //endregion
            //region Properties
            /**
             * Gets the call who originated this response
             * @returns {RemoteCall}
             */
            get: function () {
                return this._call;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteResponse.prototype, "errorCode", {
            /**
             * Gets the error code returned (if any)
             * @returns {number}
             */
            get: function () {
                return this._errorCode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteResponse.prototype, "errorDescription", {
            /**
             * Gets the error description returned (if any)
             * @returns {string}
             */
            get: function () {
                return this._errorDescription;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteResponse.prototype, "logs", {
            /**
             * Gets or sets the logs array in response
             *
             * @returns {Array<string>}
             */
            get: function () {
                return this._logs;
            },
            /**
             * Gets or sets the logs array in response
             *
             * @param {Array<string>} value
             */
            set: function (value) {
                this._logs = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteResponse.prototype, "response", {
            /**
             * Gets the literal response from server
             * @returns {string}
             */
            get: function () {
                return this._response;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteResponse.prototype, "data", {
            /**
             * Gets
             * @returns {T}
             */
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteResponse.prototype, "success", {
            /**
             * Gets a value indicating if the call was a success
             * @returns {boolean}
             */
            get: function () {
                return this._success;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RemoteResponse.prototype, "warnings", {
            /**
             * Gets or sets
             *
             * @returns {Array<string>}
             */
            get: function () {
                return this._warnings;
            },
            /**
             * Gets or sets
             *
             * @param {Array<string>} value
             */
            set: function (value) {
                this._warnings = value;
            },
            enumerable: true,
            configurable: true
        });
        return RemoteResponse;
    }());
    latte.RemoteResponse = RemoteResponse;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Binds two values bi-directionally
     */
    var ValueDataBind = /** @class */ (function () {
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the bi-directional bind
         */
        function ValueDataBind(a, b) {
            var _this = this;
            this._actorA = a;
            this._actorB = b;
            // Install two singe binds
            this._bindA = new latte.ValueSingleDataBind(a, b);
            this._bindB = new latte.ValueSingleDataBind(b, a);
            this.bindA.willApply.add(function () {
                _this.bindB.skipNextApply = true;
            });
            this.bindB.willApply.add(function () {
                _this.bindA.skipNextApply = true;
            });
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Uninstall the
         */
        ValueDataBind.prototype.uninstall = function () {
            this.bindA.uninstall();
            this.bindB.uninstall();
        };
        Object.defineProperty(ValueDataBind.prototype, "actorA", {
            /**
             * Gets the A actor
             *
             * @returns {DataBindActor}
             */
            get: function () {
                return this._actorA;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueDataBind.prototype, "actorB", {
            /**
             * Gets the B actor
             *
             * @returns {DataBindActor}
             */
            get: function () {
                return this._actorB;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueDataBind.prototype, "bindA", {
            /**
             * Gets the A bind
             *
             * @returns {ValueSingleDataBind}
             */
            get: function () {
                return this._bindA;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueDataBind.prototype, "bindB", {
            /**
             * Gets the B Bind
             *
             * @returns {ValueSingleDataBind}
             */
            get: function () {
                return this._bindB;
            },
            enumerable: true,
            configurable: true
        });
        return ValueDataBind;
    }());
    latte.ValueDataBind = ValueDataBind;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Binds one source to
     */
    var ValueSingleDataBind = /** @class */ (function () {
        //endregion
        /**
         * Creates the bind
         */
        function ValueSingleDataBind(sourceActor, targetActor) {
            /**
             * Property field
             */
            this._skipNextApply = false;
            this._sourceActor = sourceActor;
            this._targetActor = targetActor;
            // Install the bind
            this.install();
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Updates the target's value
         */
        ValueSingleDataBind.prototype.apply = function () {
            if (this.skipNextApply) {
                this.skipNextApply = false;
                return;
            }
            this.onWillApply();
            var sourceValue = this.sourceActor.actor[this.sourceActor.propertyName];
            var targetValue = latte.DataBindCoercion.coerce(sourceValue, this.sourceActor.propertyType, this.targetActor.propertyType);
            this.targetActor.actor[this.targetActor.propertyName] = targetValue;
            this.onApplied();
        };
        /**
         * Installs the bind
         */
        ValueSingleDataBind.prototype.install = function () {
            var _this = this;
            // Uninstall in case of repeated call
            this.uninstall();
            var s = this.sourceActor;
            // Catch value change on source
            if (s.propertyChanged instanceof latte.LatteEvent) {
                // Handle valueChanged Event
                this.lastHandleApplied = function () {
                    _this.apply();
                };
                // Assign handler
                s.propertyChanged.add(this.lastHandleApplied);
            }
            this.apply();
        };
        /**
         * Raises the <c>applied</c> event
         */
        ValueSingleDataBind.prototype.onApplied = function () {
            if (this._applied) {
                this._applied.raise();
            }
        };
        /**
         * Raises the <c>willApply</c> event
         */
        ValueSingleDataBind.prototype.onWillApply = function () {
            if (this._willApply) {
                this._willApply.raise();
            }
        };
        /**
         * Uninstalls the bind
         */
        ValueSingleDataBind.prototype.uninstall = function () {
            if (this.lastHandleApplied) {
                this.sourceActor.propertyChanged.remove(this.lastHandleApplied);
            }
        };
        Object.defineProperty(ValueSingleDataBind.prototype, "applied", {
            /**
             * Gets an event raised when the value has been applied to the target
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._applied) {
                    this._applied = new latte.LatteEvent(this);
                }
                return this._applied;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueSingleDataBind.prototype, "willApply", {
            /**
             * Gets an event raised when the bind will apply the value
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._willApply) {
                    this._willApply = new latte.LatteEvent(this);
                }
                return this._willApply;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueSingleDataBind.prototype, "sourceActor", {
            /**
             * Gets the source actor data
             *
             * @returns {DataBindActor}
             */
            get: function () {
                return this._sourceActor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueSingleDataBind.prototype, "skipNextApply", {
            /**
             * Gets or sets a value indicating if the next apply should be ignored
             *
             * @returns {boolean}
             */
            get: function () {
                return this._skipNextApply;
            },
            /**
             * Gets or sets a value indicating if the next apply should be ignored
             *
             * @param {boolean} value
             */
            set: function (value) {
                this._skipNextApply = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueSingleDataBind.prototype, "targetActor", {
            /**
             * Gets the target actor data
             *
             * @returns {DataBindActor}
             */
            get: function () {
                return this._targetActor;
            },
            enumerable: true,
            configurable: true
        });
        return ValueSingleDataBind;
    }());
    latte.ValueSingleDataBind = ValueSingleDataBind;
})(latte || (latte = {}));
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/support/ts-include/datalatte.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/support/ts-include/latte.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/support/ts-include/latte.data.strings.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/support/ts-include/latte.strings.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/IRecordMeta.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/DataBindActor.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/DataBindCoercion.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/DataRecord.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/DataRecordCollection.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/DataSet.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/DataSetColumn.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/DataSetRow.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/Message.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/RemoteCall.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/RemoteResponse.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/ValueDataBind.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte.data/ts/ValueSingleDataBind.ts" /> 
