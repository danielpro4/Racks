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
    var BindValueType;
    (function (BindValueType) {
        BindValueType[BindValueType["ANY"] = 0] = "ANY";
        BindValueType[BindValueType["NUMBER"] = 1] = "NUMBER";
        BindValueType[BindValueType["BOOLEAN"] = 2] = "BOOLEAN";
        BindValueType[BindValueType["STRING"] = 3] = "STRING";
        BindValueType[BindValueType["DATETIME"] = 4] = "DATETIME";
        BindValueType[BindValueType["TIMESPAN"] = 5] = "TIMESPAN";
    })(BindValueType = latte.BindValueType || (latte.BindValueType = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Enumeration of Keyboard key codes
     */
    var Key;
    (function (Key) {
        /**
         * Backspace key
         *
         * @type {number}
         */
        Key[Key["BACKSPACE"] = 8] = "BACKSPACE";
        /**
         * Tab key
         *
         * @type {number}
         */
        Key[Key["TAB"] = 9] = "TAB";
        /**
         * Enter key
         *
         * @type {number}
         */
        Key[Key["ENTER"] = 13] = "ENTER";
        /**
         * Shift key
         *
         * @type {number}
         */
        Key[Key["SHIFT"] = 16] = "SHIFT";
        /**
         * Control key
         *
         * @type {number}
         */
        Key[Key["CONTROL"] = 17] = "CONTROL";
        /**
         * Alt key
         *
         * @type {number}
         */
        Key[Key["ALT"] = 18] = "ALT";
        /**
         * Backspace key
         *
         * @type {number}
         */
        Key[Key["PAUSE"] = 19] = "PAUSE";
        /**
         * Caps Lock key
         *
         * @type {number}
         */
        Key[Key["CAPS_LOCK"] = 20] = "CAPS_LOCK";
        /**
         * Escape key
         *
         * @type {number}
         */
        Key[Key["ESCAPE"] = 27] = "ESCAPE";
        /**
         * Page up key
         *
         * @type {number}
         */
        Key[Key["PAGE_UP"] = 33] = "PAGE_UP";
        /**
         * Page down key
         *
         * @type {number}
         */
        Key[Key["PAGE_DOWN"] = 34] = "PAGE_DOWN";
        /**
         * End key
         *
         * @type {number}
         */
        Key[Key["END"] = 35] = "END";
        /**
         * Home key
         *
         * @type {number}
         */
        Key[Key["HOME"] = 36] = "HOME";
        /**
         * Left arrow key
         *
         * @type {number}
         */
        Key[Key["ARROW_LEFT"] = 37] = "ARROW_LEFT";
        /**
         * Up arrow key
         *
         * @type {number}
         */
        Key[Key["ARROW_UP"] = 38] = "ARROW_UP";
        /**
         * Right arrow key
         *
         * @type {number}
         */
        Key[Key["ARROW_RIGHT"] = 39] = "ARROW_RIGHT";
        /**
         * Down arrow key
         *
         * @type {number}
         */
        Key[Key["ARROW_DOWN"] = 40] = "ARROW_DOWN";
        /**
         * Insert key
         *
         * @type {number}
         */
        Key[Key["INSERT"] = 45] = "INSERT";
        /**
         * Delete key
         *
         * @type {number}
         */
        Key[Key["DELETE"] = 46] = "DELETE";
        /**
         * Zero key
         *
         * @type {number}
         */
        Key[Key["NUMBER_0"] = 48] = "NUMBER_0";
        /**
         * One key
         *
         * @type {number}
         */
        Key[Key["NUMBER_1"] = 49] = "NUMBER_1";
        /**
         * Two key
         *
         * @type {number}
         */
        Key[Key["NUMBER_2"] = 50] = "NUMBER_2";
        /**
         * Three key
         *
         * @type {number}
         */
        Key[Key["NUMBER_3"] = 51] = "NUMBER_3";
        /**
         * Four key
         *
         * @type {number}
         */
        Key[Key["NUMBER_4"] = 52] = "NUMBER_4";
        /**
         * Five key
         *
         * @type {number}
         */
        Key[Key["NUMBER_5"] = 53] = "NUMBER_5";
        /**
         * Siz key
         *
         * @type {number}
         */
        Key[Key["NUMBER_6"] = 54] = "NUMBER_6";
        /**
         * Seven key
         *
         * @type {number}
         */
        Key[Key["NUMBER_7"] = 55] = "NUMBER_7";
        /**
         * Eight key
         *
         * @type {number}
         */
        Key[Key["NUMBER_8"] = 56] = "NUMBER_8";
        /**
         * Nine key
         *
         * @type {number}
         */
        Key[Key["NUMBER_9"] = 57] = "NUMBER_9";
        /**
         * A key
         *
         * @type {number}
         */
        Key[Key["A"] = 65] = "A";
        /**
         * B key
         *
         * @type {number}
         */
        Key[Key["B"] = 66] = "B";
        /**
         * C key
         *
         * @type {number}
         */
        Key[Key["C"] = 67] = "C";
        /**
         * D key
         *
         * @type {number}
         */
        Key[Key["D"] = 68] = "D";
        /**
         * E key
         *
         * @type {number}
         */
        Key[Key["E"] = 69] = "E";
        /**
         * F key
         *
         * @type {number}
         */
        Key[Key["F"] = 70] = "F";
        /**
         * G key
         *
         * @type {number}
         */
        Key[Key["G"] = 71] = "G";
        /**
         * H key
         *
         * @type {number}
         */
        Key[Key["H"] = 72] = "H";
        /**
         * I key
         *
         * @type {number}
         */
        Key[Key["I"] = 73] = "I";
        /**
         * J key
         *
         * @type {number}
         */
        Key[Key["J"] = 74] = "J";
        /**
         * K key
         *
         * @type {number}
         */
        Key[Key["K"] = 75] = "K";
        /**
         * L key
         *
         * @type {number}
         */
        Key[Key["L"] = 76] = "L";
        /**
         * M key
         *
         * @type {number}
         */
        Key[Key["M"] = 77] = "M";
        /**
         * N key
         *
         * @type {number}
         */
        Key[Key["N"] = 78] = "N";
        /**
         * O key
         *
         * @type {number}
         */
        Key[Key["O"] = 79] = "O";
        /**
         * P key
         *
         * @type {number}
         */
        Key[Key["P"] = 80] = "P";
        /**
         * Q key
         *
         * @type {number}
         */
        Key[Key["Q"] = 81] = "Q";
        /**
         * R key
         *
         * @type {number}
         */
        Key[Key["R"] = 82] = "R";
        /**
         * S key
         *
         * @type {number}
         */
        Key[Key["S"] = 83] = "S";
        /**
         * T key
         *
         * @type {number}
         */
        Key[Key["T"] = 84] = "T";
        /**
         * U key
         *
         * @type {number}
         */
        Key[Key["U"] = 85] = "U";
        /**
         * V key
         *
         * @type {number}
         */
        Key[Key["V"] = 86] = "V";
        /**
         * W key
         *
         * @type {number}
         */
        Key[Key["W"] = 87] = "W";
        /**
         * X key
         *
         * @type {number}
         */
        Key[Key["X"] = 88] = "X";
        /**
         * Y key
         *
         * @type {number}
         */
        Key[Key["Y"] = 89] = "Y";
        /**
         * Z key
         *
         * @type {number}
         */
        Key[Key["Z"] = 90] = "Z";
        /**
         * Left window key
         *
         * @type {number}
         */
        Key[Key["LEFT_WINDOW"] = 91] = "LEFT_WINDOW";
        /**
         * Right window key
         *
         * @type {number}
         */
        Key[Key["RIGHT_WINDOW"] = 92] = "RIGHT_WINDOW";
        /**
         * Select key
         *
         * @type {number}
         */
        Key[Key["SELECT"] = 93] = "SELECT";
        /**
         * Numpad Zero key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_0"] = 96] = "NUMPAD_0";
        /**
         * Numpad One key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_1"] = 97] = "NUMPAD_1";
        /**
         * Numpad two key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_2"] = 98] = "NUMPAD_2";
        /**
         * Numpad 3 key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_3"] = 99] = "NUMPAD_3";
        /**
         * Numpad 4 key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_4"] = 100] = "NUMPAD_4";
        /**
         * Numpad 5 key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_5"] = 101] = "NUMPAD_5";
        /**
         * Numpad 6 key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_6"] = 102] = "NUMPAD_6";
        /**
         * Numpad 7 key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_7"] = 103] = "NUMPAD_7";
        /**
         * Numpad 8 key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_8"] = 104] = "NUMPAD_8";
        /**
         * Numpad 9 key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_9"] = 105] = "NUMPAD_9";
        /**
         * Numpad * key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_MULTIPLY"] = 106] = "NUMPAD_MULTIPLY";
        /**
         * Numpad + key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_ADD"] = 107] = "NUMPAD_ADD";
        /**
         * Numpad - key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_SUBTRACT"] = 109] = "NUMPAD_SUBTRACT";
        /**
         * Numpad . key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_DECIMAL_POINT"] = 110] = "NUMPAD_DECIMAL_POINT";
        /**
         * Numpad / key
         *
         * @type {number}
         */
        Key[Key["NUMPAD_DIVIDE"] = 111] = "NUMPAD_DIVIDE";
        /**
         * F1 key
         *
         * @type {number}
         */
        Key[Key["F1"] = 112] = "F1";
        /**
         * F2 key
         *
         * @type {number}
         */
        Key[Key["F2"] = 113] = "F2";
        /**
         * F3 key
         *
         * @type {number}
         */
        Key[Key["F3"] = 114] = "F3";
        /**
         * F4 key
         *
         * @type {number}
         */
        Key[Key["F4"] = 115] = "F4";
        /**
         * F5 key
         *
         * @type {number}
         */
        Key[Key["F5"] = 116] = "F5";
        /**
         * F6 key
         *
         * @type {number}
         */
        Key[Key["F6"] = 117] = "F6";
        /**
         * F7 key
         *
         * @type {number}
         */
        Key[Key["F7"] = 118] = "F7";
        /**
         * F8 key
         *
         * @type {number}
         */
        Key[Key["F8"] = 119] = "F8";
        /**
         * F9 key
         *
         * @type {number}
         */
        Key[Key["F9"] = 120] = "F9";
        /**
         * F10 key
         *
         * @type {number}
         */
        Key[Key["F10"] = 121] = "F10";
        /**
         * F11 key
         *
         * @type {number}
         */
        Key[Key["F11"] = 122] = "F11";
        /**
         * F12 key
         *
         * @type {number}
         */
        Key[Key["F12"] = 123] = "F12";
        /**
         * Num lock key
         *
         * @type {number}
         */
        Key[Key["NUM_LOCK"] = 144] = "NUM_LOCK";
        /**
         * Scroll lock key
         *
         * @type {number}
         */
        Key[Key["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
        /**
         * , key
         *
         * @type {number}
         */
        Key[Key["SEMI_COLON"] = 186] = "SEMI_COLON";
        /**
         *  = key
         *
         * @type {number}
         */
        Key[Key["EQUAL_SIGN"] = 187] = "EQUAL_SIGN";
        /**
         * , key
         *
         * @type {number}
         */
        Key[Key["COMMA"] = 188] = "COMMA";
        /**
         * - key
         *
         * @type {number}
         */
        Key[Key["DASH"] = 189] = "DASH";
        /**
         * . key
         *
         * @type {number}
         */
        Key[Key["PERIOD"] = 190] = "PERIOD";
        /**
         * / key
         *
         * @type {number}
         */
        Key[Key["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
        /**
         * Grave acccent key
         *
         * @type {number}
         */
        Key[Key["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
        /**
         * [ key
         *
         * @type {number}
         */
        Key[Key["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
        /**
         * \ key
         *
         * @type {number}
         */
        Key[Key["BACK_SLASH"] = 220] = "BACK_SLASH";
        /**
         * ] key
         *
         * @type {number}
         */
        Key[Key["CLOSE_BRACKET"] = 221] = "CLOSE_BRACKET";
        /**
         * ' key
         *
         * @type {number}
         */
        Key[Key["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
        /**
         * Space bar key
         * @type {number}
         */
        Key[Key["SPACEBAR"] = 32] = "SPACEBAR";
    })(Key = latte.Key || (latte.Key = {}));
})(latte || (latte = {}));
/**
 * Created by josemanuel on 12/12/13.
 */
var latte;
(function (latte) {
    var TriBool;
    (function (TriBool) {
        TriBool[TriBool["UNKNOWN"] = 0] = "UNKNOWN";
        TriBool[TriBool["TRUE"] = 1] = "TRUE";
        TriBool[TriBool["FALSE"] = 2] = "FALSE";
    })(TriBool = latte.TriBool || (latte.TriBool = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Enumerates week days
     */
    var WeekDay;
    (function (WeekDay) {
        /**
         * Sunday
         *
         * @type {number}
         */
        WeekDay[WeekDay["SUNDAY"] = 0] = "SUNDAY";
        /**
         * Monday
         *
         * @type {number}
         */
        WeekDay[WeekDay["MONDAY"] = 1] = "MONDAY";
        /**
         * Tuesday
         *
         * @type {number}
         */
        WeekDay[WeekDay["TUESDAY"] = 2] = "TUESDAY";
        /**
         * Wednesday
         *
         * @type {number}
         */
        WeekDay[WeekDay["WEDNESDAY"] = 3] = "WEDNESDAY";
        /**
         * Thursday
         *
         * @type {number}
         */
        WeekDay[WeekDay["THURSDAY"] = 4] = "THURSDAY";
        /**
         * Friday
         *
         * @type {number}
         */
        WeekDay[WeekDay["FRIDAY"] = 5] = "FRIDAY";
        /**
         * Saturday
         *
         * @type {number}
         */
        WeekDay[WeekDay["SATURDAY"] = 6] = "SATURDAY";
    })(WeekDay = latte.WeekDay || (latte.WeekDay = {}));
})(latte || (latte = {}));
/*
 * DataLatte Runtime
 *
 *  Includes:
 *
 *    - Simple javascript inheritance: Class & Class.extend()
 *    - Namespacing: include()
 *
 *
 */
var latte;
(function (latte) {
    /**
     * Saves data about deprecated warns
     */
    var deprecatedWarns = {};
    /**
     * Holds a list of already included plugins
     *
     * @type {Array<string>}
     */
    latte.includedPlugins = {};
    /**
     * Tells if the passed objects are equal in its properties
     *
     * @param {object} a
     * @param {object} b
     */
    function _equalObjects(a, b) {
        if (!_isObject(a) || !_isObject(b))
            throw 'No objects';
        var p;
        for (p in a) {
            if (typeof (b[p]) == 'undefined') {
                return false;
            }
        }
        for (p in a) {
            if (a[p]) {
                switch (typeof (a[p])) {
                    case 'object':
                        if (!a[p].equals(b[p])) {
                            return false;
                        }
                        break;
                    case 'function':
                        if (typeof (b[p]) == 'undefined' ||
                            (p != 'equals' && a[p].toString() != b[p].toString()))
                            return false;
                        break;
                    default:
                        if (a[p] != b[p]) {
                            return false;
                        }
                }
            }
            else {
                if (b[p])
                    return false;
            }
        }
        for (p in b) {
            if (typeof (a[p]) == 'undefined') {
                return false;
            }
        }
        return true;
    }
    latte._equalObjects = _equalObjects;
    ;
    /**
     * Returns a value indicating if the parameter is a number
     *
     * @returns {boolean}
     */
    function _isNumber(param) { return typeof param == 'number'; }
    latte._isNumber = _isNumber;
    ;
    /**
     * Returns a value indicating if the parameter is a boolean
     *
     * @returns {boolean}
     */
    function _isBoolean(param) { return typeof param == 'boolean'; }
    latte._isBoolean = _isBoolean;
    ;
    /**
     * Returns a value indicating if the parameter is a string
     *
     * @returns {boolean}
     */
    function _isString(param) { return typeof param == 'string'; }
    latte._isString = _isString;
    ;
    /**
     * Returns a value indicating if the parameter is an Array, optionally specifies
     * the minimum length required to return a true value
     *
     * @returns {boolean}
     */
    function _isArray(param, minLength) {
        if (minLength === void 0) { minLength = 0; }
        return (param instanceof Array) && param.length >= minLength;
    }
    latte._isArray = _isArray;
    ;
    /**
     * Returns a value indicating if the parameter is a Function
     *
     * @returns {boolean}
     */
    function _isFunction(param) { return typeof param == 'function'; }
    latte._isFunction = _isFunction;
    ;
    /**
     * Returns a value indicating if the parameter is an Object
     *
     * @returns {boolean}
     */
    function _isObject(param) { return typeof param == 'object'; }
    latte._isObject = _isObject;
    ;
    /**
     * Returns a value indicating if the parameter as string represents a numeric value
     *
     * @returns {boolean}
     */
    function _isNumeric(param) {
        var allowed = "1234567890.";
        if (!_isString(param))
            param = String(param);
        if (param.length == 0) {
            return false;
        }
        else {
            for (var i = 0; i < param.length; i++)
                if (allowed.indexOf(param.charAt(i)) < 0)
                    return false;
            return true;
        }
    }
    latte._isNumeric = _isNumeric;
    ;
    /**
     * Gets or sets the latte Url. By default: /latte
     * @private
     */
    function _latteUrl(value) {
        if (_undef(value)) {
            return window['-vendor-latte-url'] || '/latte';
        }
        else {
            window['-vendor-latte-url'] = value;
        }
    }
    latte._latteUrl = _latteUrl;
    /**
     * Returns a value indicating if the specified object is empty of properties
     * @param object
     * @returns {boolean}
     * @private
     */
    function _empty(object) {
        if (!object)
            return true;
        for (var i in object) {
            return false;
        }
        return true;
    }
    latte._empty = _empty;
    /**
     * Returns a value indicating if the parameter is undefined
     *
     * @returns {boolean}
     */
    function _undef(param) { return typeof param == 'undefined'; }
    latte._undef = _undef;
    ;
    /**
     * Logs the specified data if there's a console.
     */
    function log() {
        var any = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            any[_i] = arguments[_i];
        }
        if (!_undef(console) && !_undef(console.log)) {
            if (arguments['length'] == 1) {
                console.log(arguments[0]);
            }
            else {
                console.log(sprintf.apply(this, arguments));
            }
        }
    }
    latte.log = log;
    ;
    /**
     * Merges the two objects
     * @param a
     * @param b
     * @private
     */
    function _merge(a, b) {
        for (var i in a) {
            b[i] = a[i];
        }
        return b;
    }
    latte._merge = _merge;
    /**
     * sprintf for only %s strings
     */
    function sprintf() {
        var any = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            any[_i] = arguments[_i];
        }
        var arg = 1, format = arguments[0], cur, next, result = [];
        for (var i = 0; i < format.length; i++) {
            cur = format.substr(i, 1);
            next = i == format.length - 1 ? '' : format.substr(i + 1, 1);
            if (cur == '%' && next == 's') {
                result.push(arguments[arg++]);
                i++;
            }
            else {
                result.push(cur);
            }
        }
        return result.join('');
    }
    latte.sprintf = sprintf;
    ;
    /**
     * Warns user about deprecated code.
     *
     * @param code
     * @param alternateUse
     */
    function warnDeprecated(code, alternateUse) {
        if (_undef(deprecatedWarns[code]) && console && console.warn) {
            deprecatedWarns[code] = true;
            console.warn(sprintf("latte: %s is deprecated. Please use %s instead", code, alternateUse));
        }
    }
    latte.warnDeprecated = warnDeprecated;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Generic Exception class
     *
     * Usage
     * <example>
     *  if(somethingWrong){
     *      // Throw a simple exception
     *      throw new Ex()
     *  }
     * </example>
     */
    var Ex = /** @class */ (function () {
        /**
         * Creates the exception object
         *
         * @param description
         */
        function Ex(description) {
            if (description === void 0) { description = ""; }
            this.description = description;
        }
        /**
         * Returns the exception as a string.
         *
         * @returns {string}
         */
        Ex.prototype.toString = function () {
            return this.description ? this.description : "Uncaught exception";
        };
        return Ex;
    }());
    latte.Ex = Ex;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/4/15.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Ajax = /** @class */ (function () {
        function Ajax() {
        }
        //region Static
        /**
         * Loads an URL
         * @param url
         * @param success
         * @param error
         */
        Ajax.get = function (url, success, error) {
            if (success === void 0) { success = null; }
            if (error === void 0) { error = null; }
            var xmlhttp;
            if (window['XMLHttpRequest']) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        if (latte._isFunction(success))
                            success(xmlhttp.responseText);
                    }
                    else {
                        if (latte._isFunction(error))
                            error(latte.sprintf("Error %s: %s", xmlhttp.status, url));
                    }
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        };
        /**
         * Loads an URL
         *
         * @param url
         * @param data
         * @param success
         * @param error
         */
        Ajax.post = function (url, data, success, error) {
            if (success === void 0) { success = null; }
            if (error === void 0) { error = null; }
            var req;
            var params = [];
            var query = null;
            if (window['XMLHttpRequest']) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                req = new XMLHttpRequest();
            }
            else {
                // code for IE6, IE5
                req = new ActiveXObject("Microsoft.XMLHTTP");
            }
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        if (latte._isFunction(success))
                            success(req.responseText);
                    }
                    else {
                        if (latte._isFunction(error))
                            error(latte.sprintf("Error %s: %s", req.status, url));
                    }
                }
            };
            var fdata = new FormData();
            //Prepare params
            for (var i in data) {
                fdata.append(i, data[i]);
            }
            req.open("POST", url);
            try {
                req.send(fdata);
            }
            catch (e) { }
        };
        return Ajax;
    }());
    latte.Ajax = Ajax;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Passed to events that could be cancelled after executing a callback
     */
    var CancellableCallbackEvent = /** @class */ (function () {
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function CancellableCallbackEvent() {
            //region Private Methods
            //endregion
            //region Methods
            //endregion
            //region Events
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._callback = null;
        }
        Object.defineProperty(CancellableCallbackEvent.prototype, "callback", {
            /**
             * Gets or sets the callback to check for cancelation
             *
             * @returns {(cancel: boolean) => any}
             */
            get: function () {
                return this._callback;
            },
            /**
             * Gets or sets the callback to check for cancelation
             *
             * @param {(cancel: boolean) => any} value
             */
            set: function (value) {
                this._callback = value;
            },
            enumerable: true,
            configurable: true
        });
        return CancellableCallbackEvent;
    }());
    latte.CancellableCallbackEvent = CancellableCallbackEvent;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     *
     */
    var Collection = /** @class */ (function () {
        //endregion
        /**
         * Initializes the collection
         */
        function Collection(addCallback, removeCallback, context) {
            if (addCallback === void 0) { addCallback = null; }
            if (removeCallback === void 0) { removeCallback = null; }
            if (context === void 0) { context = null; }
            //region Static
            //endregion
            //region Fields
            this.pointer = 0;
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._context = null;
            /**
             * Property field
             */
            this._length = 0;
            if (addCallback) {
                this.addItem.add(addCallback, context);
            }
            if (removeCallback) {
                this.removeItem.add(removeCallback, context);
            }
            this.context = context;
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Adds an element to the collection
         *
         * @param element
         * @param raiseEvent
         */
        Collection.prototype.add = function (element, raiseEvent) {
            if (raiseEvent === void 0) { raiseEvent = true; }
            var e = new latte.CollectionEvent(element, this.length, true);
            // Check for cancellation
            if (e.cancel) {
                return null;
            }
            this[this._length++] = element;
            if (raiseEvent) {
                this.onAddItem(element, this.length);
            }
            return element;
        };
        /**
         * Adds an array of elements
         *
         * @param elements
         * @param raiseEvent
         */
        Collection.prototype.addArray = function (elements, raiseEvent) {
            var _this = this;
            if (raiseEvent === void 0) { raiseEvent = true; }
            if (latte._isArray(elements)) {
                elements.forEach(function (e) { return _this.add(e); });
            }
            return elements;
        };
        /**
         * Adds a collection of elements to the collection
         *
         * @param collection
         * @param raiseEvent
         */
        Collection.prototype.addCollection = function (collection, raiseEvent) {
            if (raiseEvent === void 0) { raiseEvent = true; }
            for (var i = 0; i < collection.length; i++) {
                this.add(collection[i]);
            }
        };
        /**
         * Clears the collection
         */
        Collection.prototype.clear = function () {
            while (this.length > 0) {
                this.removeAt(0);
            }
        };
        /**
         * Returns a value indicating if the specified element is contained in the collection
         * @param element
         */
        Collection.prototype.contains = function (element) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == element)
                    return true;
            }
            return false;
        };
        /**
         * Corrects the collection to be the specified on the arguments, without raising events.
         *
         * @param {T[]} elements
         */
        Collection.prototype.correctItems = function (elements) {
            for (var i = 0; i < this.length; i++)
                delete this[i];
            for (var i = 0; i < elements.length; i++)
                this[i] = elements[i];
            this._length = elements.length;
        };
        /**
         * Iterates through the collection, executing the handler for each item
         * @param handler
         */
        Collection.prototype.each = function (handler) {
            for (var i = 0; i < this.count; i++) {
                handler.call(this.context, this[i], i);
            }
        };
        /**
         * Iterates through the collection, executing the handler for each item
         * @param handler
         */
        Collection.prototype.eachBut = function (exclude, handler) {
            for (var i = 0; i < this.count; i++) {
                if (this[i] != exclude)
                    handler.call(this.context, this[i], i);
            }
        };
        /**
         * Gets the index of the specified element if found. -1 if not found.
         * @param item
         * @returns {number}
         */
        Collection.prototype.indexOf = function (item) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === item) {
                    return i;
                }
            }
            return -1;
        };
        /**
         * Gets the item at the specified position
         * @param index
         * @returns {*}
         */
        Collection.prototype.item = function (index) {
            return this[index];
        };
        /**
         * Returns the object on current pointer and moves the pointer forward.
         * It returns null and resets pointer if end of collection reached.
         * @returns {*}
         */
        Collection.prototype.next = function () {
            if (this.pointer >= this.length) {
                this.pointer = 0;
                return null;
            }
            var elem = this[this.pointer];
            this.pointer++;
            return elem;
        };
        /**
         * Raises the <c>addItem</c> event
         */
        Collection.prototype.onAddItem = function (item, index) {
            if (this._addItem) {
                this._addItem.raise(item, index);
            }
        };
        /**
         * Raises the <c>removeItem</c> event
         */
        Collection.prototype.onRemoveItem = function (item, index) {
            if (this._removeItem) {
                this._removeItem.raise(item, index);
            }
        };
        /**
         * Raises the <c>removingItem</c> event
         */
        Collection.prototype.onRemovingItem = function (e) {
            if (this._removingItem) {
                this._removingItem.raise(e);
            }
        };
        /**
         * Removes the specified item from the collection
         * @param item
         * @param raiseEvent
         */
        Collection.prototype.remove = function (item, raiseEvent) {
            if (raiseEvent === void 0) { raiseEvent = true; }
            var e = new latte.CollectionEvent(item, -1, true);
            // Trigger cancellation item
            this.onRemovingItem(e);
            // Check for cancellation
            if (e.cancel) {
                return null;
            }
            var buffer = [];
            var index = -1;
            var result;
            //region Clear this
            for (var i = 0; i < this.length; i++) {
                var t = this[i];
                delete this[i];
                if (t === item) {
                    result = item;
                    index = i;
                }
                else {
                    buffer.push(t);
                }
            }
            //endregion
            //region Apply buffer
            for (var i = 0; i < buffer.length; i++) {
                this[i] = buffer[i];
            }
            this._length = buffer.length;
            //endregion
            if (index >= 0) {
                if (raiseEvent) {
                    this.onRemoveItem(item, index);
                }
            }
            return result;
        };
        /**
         * Removes the item ath the specified index
         * @param index
         * @param raiseEvent
         */
        Collection.prototype.removeAt = function (index, raiseEvent) {
            if (raiseEvent === void 0) { raiseEvent = true; }
            this.remove(this[index], raiseEvent);
        };
        /**
         * Resets the internal pointer for calls to <c>next()</c> method.
         */
        Collection.prototype.resetPointer = function () {
            this.pointer = 0;
        };
        /**
         * Returns an array representation of the collection
         * @returns {T[]}
         */
        Collection.prototype.toArray = function () {
            var a = [];
            this.each(function (i) { return a.push(i); });
            return a;
        };
        Object.defineProperty(Collection.prototype, "addingItem", {
            /**
             * Gets an event raised when the collection is about to add an item. Its cancellable
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._addingItem) {
                    this._addingItem = new latte.LatteEvent(this);
                }
                return this._addingItem;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>addingItem</c> event
         */
        Collection.prototype.onAddingItem = function (e) {
            if (this._addingItem) {
                this._addingItem.raise(e);
            }
        };
        Object.defineProperty(Collection.prototype, "addItem", {
            /**
             * Gets an event raised when an item is added
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._addItem) {
                    this._addItem = new latte.LatteEvent(this);
                    this._addItem.context = this.context;
                }
                return this._addItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "removeItem", {
            /**
             * Gets an event raised when an item is removed
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._removeItem) {
                    this._removeItem = new latte.LatteEvent(this);
                    this._addItem.context = this.context;
                }
                return this._removeItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "removingItem", {
            /**
             * Gets an event raised when the item is about to be removed
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._removingItem) {
                    this._removingItem = new latte.LatteEvent(this);
                }
                return this._removingItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "context", {
            /**
             * Gets or sets the context to execute methods of collection
             *
             * @returns {any}
             */
            get: function () {
                return this._context;
            },
            /**
             * Gets or sets the context to execute methods of collection
             *
             * @param {any} value
             */
            set: function (value) {
                this._context = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "count", {
            /**
             * Gets the count of elements in collection
             *
             * @returns {number}
             */
            get: function () {
                return this.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "first", {
            /**
             * Gets the first element of the collection
             * @returns {*}
             */
            get: function () {
                return this.length > 0 ? this[0] : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "last", {
            /**
             * Gets the last element of the collection
             * @returns {*}
             */
            get: function () {
                return (this.length > 0 ? this[this.length - 1] : null);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "length", {
            /**
             * Gets the length of the collection
             *
             * @returns {number}
             */
            get: function () {
                return this._length;
            },
            enumerable: true,
            configurable: true
        });
        return Collection;
    }());
    latte.Collection = Collection;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     *
     */
    var CollectionEvent = /** @class */ (function () {
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Initializes the event
         */
        function CollectionEvent(item, itemIndex, cancellable) {
            if (itemIndex === void 0) { itemIndex = -1; }
            if (cancellable === void 0) { cancellable = false; }
            //region Private Methods
            //endregion
            //region Methods
            //endregion
            //region Events
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._cancel = null;
            this._item = item;
            this._cancellable = cancellable;
            this._itemIndex = itemIndex;
        }
        Object.defineProperty(CollectionEvent.prototype, "cancel", {
            /**
             * Gets or sets a value indicating if the event can be cancelled
             *
             * @returns {boolean}
             */
            get: function () {
                return this._cancel;
            },
            /**
             * Gets or sets a value indicating if the event can be cancelled
             *
             * @param {boolean} value
             */
            set: function (value) {
                this._cancel = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CollectionEvent.prototype, "cancellable", {
            /**
             * Gets a value indicating if the event is cancellable
             *
             * @returns {boolean}
             */
            get: function () {
                return this._cancellable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CollectionEvent.prototype, "item", {
            /**
             * Gets the item of the event
             *
             * @returns {any}
             */
            get: function () {
                return this._item;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CollectionEvent.prototype, "itemIndex", {
            /**
             * Gets the index of the item concerning the event
             *
             * @returns {number}
             */
            get: function () {
                return this._itemIndex;
            },
            enumerable: true,
            configurable: true
        });
        return CollectionEvent;
    }());
    latte.CollectionEvent = CollectionEvent;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Represents a color
     **/
    var Color = /** @class */ (function () {
        //endregion
        /**
         * Creates the color from the specified RGB and Aplha components.
         **/
        function Color(r, g, b, a) {
            if (r === void 0) { r = 0; }
            if (g === void 0) { g = 0; }
            if (b === void 0) { b = 0; }
            if (a === void 0) { a = 255; }
            //endregion
            //region Properties
            /**
             *
             **/
            this._a = 255;
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        //region Static
        /**
         * Creates a color from the hexadecimal value.
         * It may contain the <c>#</c> symbol at the beginning of the string.
         **/
        Color.fromHex = function (hexColor) {
            if (latte._isString(hexColor)) {
                if (hexColor.toLowerCase() == 'white') {
                    hexColor = '#FFF';
                }
                if (hexColor.toLowerCase() == 'black') {
                    hexColor = '#000';
                }
                if (hexColor.toLowerCase() == 'gray') {
                    hexColor = '#777';
                }
                if (hexColor.length == 0) {
                    hexColor = '#000';
                }
            }
            // Check is string
            if (!latte._isString(hexColor) || hexColor.length == 0)
                throw new latte.InvalidArgumentEx('hexColor', hexColor);
            // Remove #
            if (hexColor.charAt(0) == '#')
                hexColor = hexColor.substr(1);
            // Check length
            if (!(hexColor.length == 3 || hexColor.length == 6 || hexColor.length == 9))
                throw new latte.InvalidArgumentEx('hexColor', hexColor);
            var c = new latte.Color();
            var toDecimal = function (hex) { return parseInt(hex, 16); };
            // If three digits
            if (hexColor.length == 3) {
                c.r = (toDecimal(hexColor.charAt(0) + hexColor.charAt(0)));
                c.g = (toDecimal(hexColor.charAt(1) + hexColor.charAt(1)));
                c.b = (toDecimal(hexColor.charAt(2) + hexColor.charAt(2)));
            }
            else {
                c.r = (toDecimal(hexColor.charAt(0) + hexColor.charAt(1)));
                c.g = (toDecimal(hexColor.charAt(2) + hexColor.charAt(3)));
                c.b = (toDecimal(hexColor.charAt(4) + hexColor.charAt(5)));
                if (hexColor.length == 9)
                    c.a = (toDecimal(hexColor.charAt(6) + hexColor.charAt(7)));
            }
            return c;
        };
        /**
         * Gets the RGB (Red, Green, Blue) components from a CMYK namespace
         * @param c
         * @param m
         * @param y
         * @param k
         * @returns number[]
         */
        Color.cmykToRgb = function (c, m, y, k) {
            return [
                255 * (1 - c) * (1 - k),
                255 * (1 - m) * (1 - k),
                255 * (1 - y) * (1 - k)
            ];
        };
        /**
         * HSV to RGB color conversion
         *
         * H runs from 0 to 360 degrees
         * S and V run from 0 to 100
         *
         * Ported from the excellent java algorithm by Eugene Vishnevsky at:
         * http://www.cs.rit.edu/~ncs/color/t_convert.html
         */
        Color.hsvToRgb = function (h, s, v) {
            var r, g, b;
            var i;
            var f, p, q, t;
            // Make sure our arguments stay in-range
            h = Math.max(0, Math.min(360, h));
            s = Math.max(0, Math.min(100, s));
            v = Math.max(0, Math.min(100, v));
            // We accept saturation and value arguments from 0 to 100 because that's
            // how Photoshop represents those values. Internally, however, the
            // saturation and value are calculated from a range of 0 to 1. We make
            // That conversion here.
            s /= 100;
            v /= 100;
            if (s == 0) {
                // Achromatic (grey)
                r = g = b = v;
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
            }
            h /= 60; // sector 0 to 5
            i = Math.floor(h);
            f = h - i; // factorial part of h
            p = v * (1 - s);
            q = v * (1 - s * f);
            t = v * (1 - s * (1 - f));
            switch (i) {
                case 0:
                    r = v;
                    g = t;
                    b = p;
                    break;
                case 1:
                    r = q;
                    g = v;
                    b = p;
                    break;
                case 2:
                    r = p;
                    g = v;
                    b = t;
                    break;
                case 3:
                    r = p;
                    g = q;
                    b = v;
                    break;
                case 4:
                    r = t;
                    g = p;
                    b = v;
                    break;
                default:// case 5:
                    r = v;
                    g = p;
                    b = q;
            }
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        };
        /**
         * Gets the CMYK (Cyan, Magenta, Yellow and Key Black) components from a RGB namespace
         * @param red
         * @param green
         * @param blue
         * @returns {number[]}
         */
        Color.rgbToCmyk = function (red, green, blue) {
            var r = red / 255;
            var g = green / 255;
            var b = blue / 255;
            var k = 1 - Math.max(r, g, b);
            var ck = 1 - k;
            return [
                (1 - r - k) / ck,
                (1 - g - k) / ck,
                (1 - b - k) / ck,
                k
            ];
        };
        /**
         * Gets the HSV (Hue, Saturation, Value) components from a RGB namespace
         * @param red
         * @param green
         * @param blue
         * @returns {number[]}
         */
        Color.rgbToHsv = function (red, green, blue) {
            var rr, gg, bb;
            var r = red / 255;
            var g = green / 255;
            var b = blue / 255;
            var h = 0;
            var s = 0;
            var v = Math.max(r, g, b);
            var diff = v - Math.min(r, g, b);
            var diffc = function (c) { return (v - c) / 6 / diff + 1 / 2; };
            if (diff == 0) {
                h = s = 0;
            }
            else {
                s = diff / v;
                rr = diffc(r);
                gg = diffc(g);
                bb = diffc(b);
                if (r === v) {
                    h = bb - gg;
                }
                else if (g === v) {
                    h = (1 / 3) + rr - bb;
                }
                else if (b === v) {
                    h = (2 / 3) + gg - rr;
                }
            }
            if (h < 0) {
                h += 1;
            }
            else if (h > 1) {
                h -= 1;
            }
            return [
                Math.round(h * 360),
                Math.round(s * 100),
                Math.round(v * 100)
            ];
        };
        Object.defineProperty(Color, "black", {
            /**
             * Gets the black color
             */
            get: function () {
                if (!this._black) {
                    this._black = new Color(0, 0, 0);
                }
                return this._black;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color, "white", {
            /**
             * Gets the white color
             */
            get: function () {
                if (!this._white) {
                    this._white = new Color(255, 255, 255);
                }
                return this._white;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color, "red", {
            /**
             * Gets the red color
             */
            get: function () {
                if (!this._red) {
                    this._red = new Color(255, 0, 0);
                }
                return this._red;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color, "green", {
            /**
             * Gets the green color
             */
            get: function () {
                if (!this._green) {
                    this._green = new Color(0, 128, 0);
                }
                return this._green;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color, "blue", {
            /**
             * Gets the blue color
             */
            get: function () {
                if (!this._blue) {
                    this._blue = new Color(0, 0, 255);
                }
                return this._blue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color, "transparent", {
            /**
             * Gets the transparent color
             */
            get: function () {
                if (!this._transparent) {
                    this._transparent = new Color(0, 0, 0, 0);
                }
                return this._transparent;
            },
            enumerable: true,
            configurable: true
        });
        //region Methods
        /**
         * Returns the color as a hex string
         **/
        Color.prototype.toHexString = function () {
            var d = function (s) { if (s.length == 1)
                return '0' + s; return s; };
            if (this.a != 255) {
                return '#' + d(this.r.toString(16)) + d(this.g.toString(16)) + d(this.b.toString(16)) + d(this.a.toString(16));
            }
            else {
                return '#' + d(this.r.toString(16)) + d(this.g.toString(16)) + d(this.b.toString(16));
            }
        };
        /**
         * Returns the color as a string
         **/
        Color.prototype.toString = function () {
            if (this.isTransparent) {
                return 'transparent';
            }
            else if (this.a != 255) {
                return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
            }
            else {
                return this.toHexString();
            }
        };
        Object.defineProperty(Color.prototype, "a", {
            /**
             * Gets r sets the Alpha component of color, from 0 to 255
             * @returns {number}
             */
            get: function () {
                return this._a;
            },
            /**
             * Gets or sets the Aplha component of color, from 0 to 255.
             **/
            set: function (value) {
                if (value < 0 || value > 255)
                    throw new latte.InvalidArgumentEx('value', value);
                this._a = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "b", {
            /**
             * Gets or sets the Blue component of color, from 0 to 255.
             **/
            get: function () {
                return this._b;
            },
            /**
             * Gets or sets the Blue component of color, from 0 to 255.
             **/
            set: function (value) {
                if (value < 0 || value > 255)
                    throw new latte.InvalidArgumentEx('value', value);
                this._b = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "c", {
            /**
             * Gets or sets the Cyan component of the CMKYK namespace
             *
             * @returns {number}
             */
            get: function () {
                return (1 - (this.r / 255) - this.k) / (1 - this.k);
            },
            /**
             * Gets or sets the Cyan component of the CMKYK namespace
             *
             * @returns {number}
             */
            set: function (value) {
                this.r = 255 * (1 - value) * (1 - this.k);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "g", {
            /**
             * Gets or sets the Green component of color, from 0 to 255.
             **/
            get: function () {
                return this._g;
            },
            /**
             * Gets or sets the Green component of color, from 0 to 255.
             **/
            set: function (value) {
                if (value < 0 || value > 255)
                    throw new latte.InvalidArgumentEx('value', value);
                this._g = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "k", {
            /**
             * Gets the K (Black Key) component of the CMKYK namespace
             *
             * @returns {number}
             */
            get: function () {
                return 1 - Math.max(this.r / 255, this.g / 255, this.b / 255);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "m", {
            /**
             * Gets the Magenta component of the CMYK namespace
             *
             * @returns {number}
             */
            get: function () {
                return (1 - (this.g / 255) - this.k) / (1 - this.k);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "y", {
            /**
             * Gets the Yellow component of the CMYK namespace
             *
             * @returns {number}
             */
            get: function () {
                return (1 - (this.b / 255) - this.k) / (1 - this.k);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns a copy of the color with the specified alpha between 0 and 255.
         *
         * @param alpha
         */
        Color.prototype.fade = function (alpha) {
            return new Color(this.r, this.g, this.b, alpha);
        };
        /**
         * Returns a copy of the color with the specified alpha between 0 and 1.
         *
         * @param alpha
         */
        Color.prototype.fadeFloat = function (alpha) {
            return new Color(this.r, this.g, this.b, alpha * 255);
        };
        Object.defineProperty(Color.prototype, "isDark", {
            /**
             * Gets a value indicating if the color is a dark color, by checking its perceived luminosity
             *
             * @returns {boolean}
             */
            get: function () {
                return this.perceivedLuminosity > 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "isLight", {
            /**
             * Gets a value indicating if the color is a light color, by checking its perceived luminosity
             *
             * @returns {boolean}
             */
            get: function () {
                return this.perceivedLuminosity <= 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "isTransparent", {
            /**
             * Gets a value indicating if the color is transparent.
             **/
            get: function () {
                return this.a === 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "perceivedLuminosity", {
            /**
             * Returns the perceived luminosity (https://en.wikipedia.org/wiki/Luminous_intensity)
             *
             *
             * @returns {number}
             */
            get: function () {
                // Preceived Luminosity
                var a = 1 - (this.r * 0.299 + this.g * 0.587 + this.b * 0.114) / 255;
                return a;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "r", {
            /**
             * Gets or sets the Red component of color, from 0 to 255.
             **/
            get: function () {
                return this._r;
            },
            /**
             * Gets or sets the Red component of color, from 0 to 255.
             **/
            set: function (value) {
                if (value < 0 || value > 255)
                    throw new latte.InvalidArgumentEx('value', value);
                this._r = value;
            },
            enumerable: true,
            configurable: true
        });
        return Color;
    }());
    latte.Color = Color;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     *
     */
    var Country = /** @class */ (function () {
        function Country() {
        }
        /**
         * Gets options for a select of country
         * @returns {{[p: string]: string}}
         */
        Country.getCountrySelectOptions = function () {
            var r = {};
            Country.codes.forEach(function (code) {
                r[code] = Country[code].name;
            });
            return r;
        };
        /**
         * Gets options for a select of country phone code
         * @returns {{[p: string]: string}}
         */
        Country.getCountryPhoneSelectOptions = function () {
            var r = {};
            Country.codes.forEach(function (code) {
                var p = Country[code].phone;
                r[p] = latte.sprintf("%s (%s)", Country[code].name, p);
            });
            return r;
        };
        //region Static
        /**
         * Gets the country codes
         */
        Country.codes = [
            'AF', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD',
            'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BR', 'IO', 'VG', 'BN', 'BG', 'BF', 'BI', 'KH',
            'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CK', 'CR', 'HR', 'CU', 'CW', 'CY', 'CZ', 'CD',
            'DK', 'DJ', 'DM', 'DO', 'TL', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'PF', 'GA', 'GM', 'GE',
            'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ',
            'IE', 'IM', 'IL', 'IT', 'CI', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'XK', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY',
            'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME',
            'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'KP', 'MP', 'NO', 'OM', 'PK', 'PW',
            'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'CG', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF',
            'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'KR', 'SS', 'ES', 'LK',
            'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'VI',
            'UG', 'UA', 'AE', 'GB', 'US', 'UY', 'UZ', 'VU', 'VA', 'VE', 'VN', 'WF', 'EH', 'YE', 'ZM', 'ZW'
        ];
        Country.AF = { name: 'Afghanistan', phone: '93', code: 'AFG', shortCode: 'AF' };
        Country.AL = { name: 'Albania', phone: '355', code: 'ALB', shortCode: 'AL' };
        Country.DZ = { name: 'Algeria', phone: '213', code: 'DZA', shortCode: 'DZ' };
        Country.AS = { name: 'American Samoa', phone: '1-684', code: 'ASM', shortCode: 'AS' };
        Country.AD = { name: 'Andorra', phone: '376', code: 'AND', shortCode: 'AD' };
        Country.AO = { name: 'Angola', phone: '244', code: 'AGO', shortCode: 'AO' };
        Country.AI = { name: 'Anguilla', phone: '1-264', code: 'AIA', shortCode: 'AI' };
        Country.AQ = { name: 'Antarctica', phone: '672', code: 'ATA', shortCode: 'AQ' };
        Country.AG = { name: 'Antigua and Barbuda', phone: '1-268', code: 'ATG', shortCode: 'AG' };
        Country.AR = { name: 'Argentina', phone: '54', code: 'ARG', shortCode: 'AR' };
        Country.AM = { name: 'Armenia', phone: '374', code: 'ARM', shortCode: 'AM' };
        Country.AW = { name: 'Aruba', phone: '297', code: 'ABW', shortCode: 'AW' };
        Country.AU = { name: 'Australia', phone: '61', code: 'AUS', shortCode: 'AU' };
        Country.AT = { name: 'Austria', phone: '43', code: 'AUT', shortCode: 'AT' };
        Country.AZ = { name: 'Azerbaijan', phone: '994', code: 'AZE', shortCode: 'AZ' };
        Country.BS = { name: 'Bahamas', phone: '1-242', code: 'BHS', shortCode: 'BS' };
        Country.BH = { name: 'Bahrain', phone: '973', code: 'BHR', shortCode: 'BH' };
        Country.BD = { name: 'Bangladesh', phone: '880', code: 'BGD', shortCode: 'BD' };
        Country.BB = { name: 'Barbados', phone: '1-246', code: 'BRB', shortCode: 'BB' };
        Country.BY = { name: 'Belarus', phone: '375', code: 'BLR', shortCode: 'BY' };
        Country.BE = { name: 'Belgium', phone: '32', code: 'BEL', shortCode: 'BE' };
        Country.BZ = { name: 'Belize', phone: '501', code: 'BLZ', shortCode: 'BZ' };
        Country.BJ = { name: 'Benin', phone: '229', code: 'BEN', shortCode: 'BJ' };
        Country.BM = { name: 'Bermuda', phone: '1-441', code: 'BMU', shortCode: 'BM' };
        Country.BT = { name: 'Bhutan', phone: '975', code: 'BTN', shortCode: 'BT' };
        Country.BO = { name: 'Bolivia', phone: '591', code: 'BOL', shortCode: 'BO' };
        Country.BA = { name: 'Bosnia and Herzegovina', phone: '387', code: 'BIH', shortCode: 'BA' };
        Country.BW = { name: 'Botswana', phone: '267', code: 'BWA', shortCode: 'BW' };
        Country.BR = { name: 'Brazil', phone: '55', code: 'BRA', shortCode: 'BR' };
        Country.IO = { name: 'British Indian Ocean Territory', phone: '246', code: 'IOT', shortCode: 'IO' };
        Country.VG = { name: 'British Virgin Islands', phone: '1-284', code: 'VGB', shortCode: 'VG' };
        Country.BN = { name: 'Brunei', phone: '673', code: 'BRN', shortCode: 'BN' };
        Country.BG = { name: 'Bulgaria', phone: '359', code: 'BGR', shortCode: 'BG' };
        Country.BF = { name: 'Burkina Faso', phone: '226', code: 'BFA', shortCode: 'BF' };
        Country.BI = { name: 'Burundi', phone: '257', code: 'BDI', shortCode: 'BI' };
        Country.KH = { name: 'Cambodia', phone: '855', code: 'KHM', shortCode: 'KH' };
        Country.CM = { name: 'Cameroon', phone: '237', code: 'CMR', shortCode: 'CM' };
        Country.CA = { name: 'Canada', phone: '1', code: 'CAN', shortCode: 'CA' };
        Country.CV = { name: 'Cape Verde', phone: '238', code: 'CPV', shortCode: 'CV' };
        Country.KY = { name: 'Cayman Islands', phone: '1-345', code: 'CYM', shortCode: 'KY' };
        Country.CF = { name: 'Central African Republic', phone: '236', code: 'CAF', shortCode: 'CF' };
        Country.TD = { name: 'Chad', phone: '235', code: 'TCD', shortCode: 'TD' };
        Country.CL = { name: 'Chile', phone: '56', code: 'CHL', shortCode: 'CL' };
        Country.CN = { name: 'China', phone: '86', code: 'CHN', shortCode: 'CN' };
        Country.CX = { name: 'Christmas Island', phone: '61', code: 'CXR', shortCode: 'CX' };
        Country.CC = { name: 'Cocos Islands', phone: '61', code: 'CCK', shortCode: 'CC' };
        Country.CO = { name: 'Colombia', phone: '57', code: 'COL', shortCode: 'CO' };
        Country.KM = { name: 'Comoros', phone: '269', code: 'COM', shortCode: 'KM' };
        Country.CK = { name: 'Cook Islands', phone: '682', code: 'COK', shortCode: 'CK' };
        Country.CR = { name: 'Costa Rica', phone: '506', code: 'CRI', shortCode: 'CR' };
        Country.HR = { name: 'Croatia', phone: '385', code: 'HRV', shortCode: 'HR' };
        Country.CU = { name: 'Cuba', phone: '53', code: 'CUB', shortCode: 'CU' };
        Country.CW = { name: 'Curacao', phone: '599', code: 'CUW', shortCode: 'CW' };
        Country.CY = { name: 'Cyprus', phone: '357', code: 'CYP', shortCode: 'CY' };
        Country.CZ = { name: 'Czech Republic', phone: '420', code: 'CZE', shortCode: 'CZ' };
        Country.CD = { name: 'Democratic Republic of the Congo', phone: '243', code: 'COD', shortCode: 'CD' };
        Country.DK = { name: 'Denmark', phone: '45', code: 'DNK', shortCode: 'DK' };
        Country.DJ = { name: 'Djibouti', phone: '253', code: 'DJI', shortCode: 'DJ' };
        Country.DM = { name: 'Dominica', phone: '1-767', code: 'DMA', shortCode: 'DM' };
        Country.DO = { name: 'Dominican Republic', phone: '1-809, 1-829, 1-849', code: 'DOM', shortCode: 'DO' };
        Country.TL = { name: 'East Timor', phone: '670', code: 'TLS', shortCode: 'TL' };
        Country.EC = { name: 'Ecuador', phone: '593', code: 'ECU', shortCode: 'EC' };
        Country.EG = { name: 'Egypt', phone: '20', code: 'EGY', shortCode: 'EG' };
        Country.SV = { name: 'El Salvador', phone: '503', code: 'SLV', shortCode: 'SV' };
        Country.GQ = { name: 'Equatorial Guinea', phone: '240', code: 'GNQ', shortCode: 'GQ' };
        Country.ER = { name: 'Eritrea', phone: '291', code: 'ERI', shortCode: 'ER' };
        Country.EE = { name: 'Estonia', phone: '372', code: 'EST', shortCode: 'EE' };
        Country.ET = { name: 'Ethiopia', phone: '251', code: 'ETH', shortCode: 'ET' };
        Country.FK = { name: 'Falkland Islands', phone: '500', code: 'FLK', shortCode: 'FK' };
        Country.FO = { name: 'Faroe Islands', phone: '298', code: 'FRO', shortCode: 'FO' };
        Country.FJ = { name: 'Fiji', phone: '679', code: 'FJI', shortCode: 'FJ' };
        Country.FI = { name: 'Finland', phone: '358', code: 'FIN', shortCode: 'FI' };
        Country.FR = { name: 'France', phone: '33', code: 'FRA', shortCode: 'FR' };
        Country.PF = { name: 'French Polynesia', phone: '689', code: 'PYF', shortCode: 'PF' };
        Country.GA = { name: 'Gabon', phone: '241', code: 'GAB', shortCode: 'GA' };
        Country.GM = { name: 'Gambia', phone: '220', code: 'GMB', shortCode: 'GM' };
        Country.GE = { name: 'Georgia', phone: '995', code: 'GEO', shortCode: 'GE' };
        Country.DE = { name: 'Germany', phone: '49', code: 'DEU', shortCode: 'DE' };
        Country.GH = { name: 'Ghana', phone: '233', code: 'GHA', shortCode: 'GH' };
        Country.GI = { name: 'Gibraltar', phone: '350', code: 'GIB', shortCode: 'GI' };
        Country.GR = { name: 'Greece', phone: '30', code: 'GRC', shortCode: 'GR' };
        Country.GL = { name: 'Greenland', phone: '299', code: 'GRL', shortCode: 'GL' };
        Country.GD = { name: 'Grenada', phone: '1-473', code: 'GRD', shortCode: 'GD' };
        Country.GU = { name: 'Guam', phone: '1-671', code: 'GUM', shortCode: 'GU' };
        Country.GT = { name: 'Guatemala', phone: '502', code: 'GTM', shortCode: 'GT' };
        Country.GG = { name: 'Guernsey', phone: '44-1481', code: 'GGY', shortCode: 'GG' };
        Country.GN = { name: 'Guinea', phone: '224', code: 'GIN', shortCode: 'GN' };
        Country.GW = { name: 'Guinea-Bissau', phone: '245', code: 'GNB', shortCode: 'GW' };
        Country.GY = { name: 'Guyana', phone: '592', code: 'GUY', shortCode: 'GY' };
        Country.HT = { name: 'Haiti', phone: '509', code: 'HTI', shortCode: 'HT' };
        Country.HN = { name: 'Honduras', phone: '504', code: 'HND', shortCode: 'HN' };
        Country.HK = { name: 'Hong Kong', phone: '852', code: 'HKG', shortCode: 'HK' };
        Country.HU = { name: 'Hungary', phone: '36', code: 'HUN', shortCode: 'HU' };
        Country.IS = { name: 'Iceland', phone: '354', code: 'ISL', shortCode: 'IS' };
        Country.IN = { name: 'India', phone: '91', code: 'IND', shortCode: 'IN' };
        Country.ID = { name: 'Indonesia', phone: '62', code: 'IDN', shortCode: 'ID' };
        Country.IR = { name: 'Iran', phone: '98', code: 'IRN', shortCode: 'IR' };
        Country.IQ = { name: 'Iraq', phone: '964', code: 'IRQ', shortCode: 'IQ' };
        Country.IE = { name: 'Ireland', phone: '353', code: 'IRL', shortCode: 'IE' };
        Country.IM = { name: 'Isle of Man', phone: '44-1624', code: 'IMN', shortCode: 'IM' };
        Country.IL = { name: 'Israel', phone: '972', code: 'ISR', shortCode: 'IL' };
        Country.IT = { name: 'Italy', phone: '39', code: 'ITA', shortCode: 'IT' };
        Country.CI = { name: 'Ivory Coast', phone: '225', code: 'CIV', shortCode: 'CI' };
        Country.JM = { name: 'Jamaica', phone: '1-876', code: 'JAM', shortCode: 'JM' };
        Country.JP = { name: 'Japan', phone: '81', code: 'JPN', shortCode: 'JP' };
        Country.JE = { name: 'Jersey', phone: '44-1534', code: 'JEY', shortCode: 'JE' };
        Country.JO = { name: 'Jordan', phone: '962', code: 'JOR', shortCode: 'JO' };
        Country.KZ = { name: 'Kazakhstan', phone: '7', code: 'KAZ', shortCode: 'KZ' };
        Country.KE = { name: 'Kenya', phone: '254', code: 'KEN', shortCode: 'KE' };
        Country.KI = { name: 'Kiribati', phone: '686', code: 'KIR', shortCode: 'KI' };
        Country.XK = { name: 'Kosovo', phone: '383', code: 'XKX', shortCode: 'XK' };
        Country.KW = { name: 'Kuwait', phone: '965', code: 'KWT', shortCode: 'KW' };
        Country.KG = { name: 'Kyrgyzstan', phone: '996', code: 'KGZ', shortCode: 'KG' };
        Country.LA = { name: 'Laos', phone: '856', code: 'LAO', shortCode: 'LA' };
        Country.LV = { name: 'Latvia', phone: '371', code: 'LVA', shortCode: 'LV' };
        Country.LB = { name: 'Lebanon', phone: '961', code: 'LBN', shortCode: 'LB' };
        Country.LS = { name: 'Lesotho', phone: '266', code: 'LSO', shortCode: 'LS' };
        Country.LR = { name: 'Liberia', phone: '231', code: 'LBR', shortCode: 'LR' };
        Country.LY = { name: 'Libya', phone: '218', code: 'LBY', shortCode: 'LY' };
        Country.LI = { name: 'Liechtenstein', phone: '423', code: 'LIE', shortCode: 'LI' };
        Country.LT = { name: 'Lithuania', phone: '370', code: 'LTU', shortCode: 'LT' };
        Country.LU = { name: 'Luxembourg', phone: '352', code: 'LUX', shortCode: 'LU' };
        Country.MO = { name: 'Macau', phone: '853', code: 'MAC', shortCode: 'MO' };
        Country.MK = { name: 'Macedonia', phone: '389', code: 'MKD', shortCode: 'MK' };
        Country.MG = { name: 'Madagascar', phone: '261', code: 'MDG', shortCode: 'MG' };
        Country.MW = { name: 'Malawi', phone: '265', code: 'MWI', shortCode: 'MW' };
        Country.MY = { name: 'Malaysia', phone: '60', code: 'MYS', shortCode: 'MY' };
        Country.MV = { name: 'Maldives', phone: '960', code: 'MDV', shortCode: 'MV' };
        Country.ML = { name: 'Mali', phone: '223', code: 'MLI', shortCode: 'ML' };
        Country.MT = { name: 'Malta', phone: '356', code: 'MLT', shortCode: 'MT' };
        Country.MH = { name: 'Marshall Islands', phone: '692', code: 'MHL', shortCode: 'MH' };
        Country.MR = { name: 'Mauritania', phone: '222', code: 'MRT', shortCode: 'MR' };
        Country.MU = { name: 'Mauritius', phone: '230', code: 'MUS', shortCode: 'MU' };
        Country.YT = { name: 'Mayotte', phone: '262', code: 'MYT', shortCode: 'YT' };
        Country.MX = { name: 'Mexico', phone: '52', code: 'MEX', shortCode: 'MX' };
        Country.FM = { name: 'Micronesia', phone: '691', code: 'FSM', shortCode: 'FM' };
        Country.MD = { name: 'Moldova', phone: '373', code: 'MDA', shortCode: 'MD' };
        Country.MC = { name: 'Monaco', phone: '377', code: 'MCO', shortCode: 'MC' };
        Country.MN = { name: 'Mongolia', phone: '976', code: 'MNG', shortCode: 'MN' };
        Country.ME = { name: 'Montenegro', phone: '382', code: 'MNE', shortCode: 'ME' };
        Country.MS = { name: 'Montserrat', phone: '1-664', code: 'MSR', shortCode: 'MS' };
        Country.MA = { name: 'Morocco', phone: '212', code: 'MAR', shortCode: 'MA' };
        Country.MZ = { name: 'Mozambique', phone: '258', code: 'MOZ', shortCode: 'MZ' };
        Country.MM = { name: 'Myanmar', phone: '95', code: 'MMR', shortCode: 'MM' };
        Country.NA = { name: 'Namibia', phone: '264', code: 'NAM', shortCode: 'NA' };
        Country.NR = { name: 'Nauru', phone: '674', code: 'NRU', shortCode: 'NR' };
        Country.NP = { name: 'Nepal', phone: '977', code: 'NPL', shortCode: 'NP' };
        Country.NL = { name: 'Netherlands', phone: '31', code: 'NLD', shortCode: 'NL' };
        Country.AN = { name: 'Netherlands Antilles', phone: '599', code: 'ANT', shortCode: 'AN' };
        Country.NC = { name: 'New Caledonia', phone: '687', code: 'NCL', shortCode: 'NC' };
        Country.NZ = { name: 'New Zealand', phone: '64', code: 'NZL', shortCode: 'NZ' };
        Country.NI = { name: 'Nicaragua', phone: '505', code: 'NIC', shortCode: 'NI' };
        Country.NE = { name: 'Niger', phone: '227', code: 'NER', shortCode: 'NE' };
        Country.NG = { name: 'Nigeria', phone: '234', code: 'NGA', shortCode: 'NG' };
        Country.NU = { name: 'Niue', phone: '683', code: 'NIU', shortCode: 'NU' };
        Country.KP = { name: 'North Korea', phone: '850', code: 'PRK', shortCode: 'KP' };
        Country.MP = { name: 'Northern Mariana Islands', phone: '1-670', code: 'MNP', shortCode: 'MP' };
        Country.NO = { name: 'Norway', phone: '47', code: 'NOR', shortCode: 'NO' };
        Country.OM = { name: 'Oman', phone: '968', code: 'OMN', shortCode: 'OM' };
        Country.PK = { name: 'Pakistan', phone: '92', code: 'PAK', shortCode: 'PK' };
        Country.PW = { name: 'Palau', phone: '680', code: 'PLW', shortCode: 'PW' };
        Country.PS = { name: 'Palestine', phone: '970', code: 'PSE', shortCode: 'PS' };
        Country.PA = { name: 'Panama', phone: '507', code: 'PAN', shortCode: 'PA' };
        Country.PG = { name: 'Papua New Guinea', phone: '675', code: 'PNG', shortCode: 'PG' };
        Country.PY = { name: 'Paraguay', phone: '595', code: 'PRY', shortCode: 'PY' };
        Country.PE = { name: 'Peru', phone: '51', code: 'PER', shortCode: 'PE' };
        Country.PH = { name: 'Philippines', phone: '63', code: 'PHL', shortCode: 'PH' };
        Country.PN = { name: 'Pitcairn', phone: '64', code: 'PCN', shortCode: 'PN' };
        Country.PL = { name: 'Poland', phone: '48', code: 'POL', shortCode: 'PL' };
        Country.PT = { name: 'Portugal', phone: '351', code: 'PRT', shortCode: 'PT' };
        Country.PR = { name: 'Puerto Rico', phone: '1-787, 1-939', code: 'PRI', shortCode: 'PR' };
        Country.QA = { name: 'Qatar', phone: '974', code: 'QAT', shortCode: 'QA' };
        Country.CG = { name: 'Republic of the Congo', phone: '242', code: 'COG', shortCode: 'CG' };
        Country.RE = { name: 'Reunion', phone: '262', code: 'REU', shortCode: 'RE' };
        Country.RO = { name: 'Romania', phone: '40', code: 'ROU', shortCode: 'RO' };
        Country.RU = { name: 'Russia', phone: '7', code: 'RUS', shortCode: 'RU' };
        Country.RW = { name: 'Rwanda', phone: '250', code: 'RWA', shortCode: 'RW' };
        Country.BL = { name: 'Saint Barthelemy', phone: '590', code: 'BLM', shortCode: 'BL' };
        Country.SH = { name: 'Saint Helena', phone: '290', code: 'SHN', shortCode: 'SH' };
        Country.KN = { name: 'Saint Kitts and Nevis', phone: '1-869', code: 'KNA', shortCode: 'KN' };
        Country.LC = { name: 'Saint Lucia', phone: '1-758', code: 'LCA', shortCode: 'LC' };
        Country.MF = { name: 'Saint Martin', phone: '590', code: 'MAF', shortCode: 'MF' };
        Country.PM = { name: 'Saint Pierre and Miquelon', phone: '508', code: 'SPM', shortCode: 'PM' };
        Country.VC = { name: 'Saint Vincent and the Grenadines', phone: '1-784', code: 'VCT', shortCode: 'VC' };
        Country.WS = { name: 'Samoa', phone: '685', code: 'WSM', shortCode: 'WS' };
        Country.SM = { name: 'San Marino', phone: '378', code: 'SMR', shortCode: 'SM' };
        Country.ST = { name: 'Sao Tome and Principe', phone: '239', code: 'STP', shortCode: 'ST' };
        Country.SA = { name: 'Saudi Arabia', phone: '966', code: 'SAU', shortCode: 'SA' };
        Country.SN = { name: 'Senegal', phone: '221', code: 'SEN', shortCode: 'SN' };
        Country.RS = { name: 'Serbia', phone: '381', code: 'SRB', shortCode: 'RS' };
        Country.SC = { name: 'Seychelles', phone: '248', code: 'SYC', shortCode: 'SC' };
        Country.SL = { name: 'Sierra Leone', phone: '232', code: 'SLE', shortCode: 'SL' };
        Country.SG = { name: 'Singapore', phone: '65', code: 'SGP', shortCode: 'SG' };
        Country.SX = { name: 'Sint Maarten', phone: '1-721', code: 'SXM', shortCode: 'SX' };
        Country.SK = { name: 'Slovakia', phone: '421', code: 'SVK', shortCode: 'SK' };
        Country.SI = { name: 'Slovenia', phone: '386', code: 'SVN', shortCode: 'SI' };
        Country.SB = { name: 'Solomon Islands', phone: '677', code: 'SLB', shortCode: 'SB' };
        Country.SO = { name: 'Somalia', phone: '252', code: 'SOM', shortCode: 'SO' };
        Country.ZA = { name: 'South Africa', phone: '27', code: 'ZAF', shortCode: 'ZA' };
        Country.KR = { name: 'South Korea', phone: '82', code: 'KOR', shortCode: 'KR' };
        Country.SS = { name: 'South Sudan', phone: '211', code: 'SSD', shortCode: 'SS' };
        Country.ES = { name: 'Spain', phone: '34', code: 'ESP', shortCode: 'ES' };
        Country.LK = { name: 'Sri Lanka', phone: '94', code: 'LKA', shortCode: 'LK' };
        Country.SD = { name: 'Sudan', phone: '249', code: 'SDN', shortCode: 'SD' };
        Country.SR = { name: 'Suriname', phone: '597', code: 'SUR', shortCode: 'SR' };
        Country.SJ = { name: 'Svalbard and Jan Mayen', phone: '47', code: 'SJM', shortCode: 'SJ' };
        Country.SZ = { name: 'Swaziland', phone: '268', code: 'SWZ', shortCode: 'SZ' };
        Country.SE = { name: 'Sweden', phone: '46', code: 'SWE', shortCode: 'SE' };
        Country.CH = { name: 'Switzerland', phone: '41', code: 'CHE', shortCode: 'CH' };
        Country.SY = { name: 'Syria', phone: '963', code: 'SYR', shortCode: 'SY' };
        Country.TW = { name: 'Taiwan', phone: '886', code: 'TWN', shortCode: 'TW' };
        Country.TJ = { name: 'Tajikistan', phone: '992', code: 'TJK', shortCode: 'TJ' };
        Country.TZ = { name: 'Tanzania', phone: '255', code: 'TZA', shortCode: 'TZ' };
        Country.TH = { name: 'Thailand', phone: '66', code: 'THA', shortCode: 'TH' };
        Country.TG = { name: 'Togo', phone: '228', code: 'TGO', shortCode: 'TG' };
        Country.TK = { name: 'Tokelau', phone: '690', code: 'TKL', shortCode: 'TK' };
        Country.TO = { name: 'Tonga', phone: '676', code: 'TON', shortCode: 'TO' };
        Country.TT = { name: 'Trinidad and Tobago', phone: '1-868', code: 'TTO', shortCode: 'TT' };
        Country.TN = { name: 'Tunisia', phone: '216', code: 'TUN', shortCode: 'TN' };
        Country.TR = { name: 'Turkey', phone: '90', code: 'TUR', shortCode: 'TR' };
        Country.TM = { name: 'Turkmenistan', phone: '993', code: 'TKM', shortCode: 'TM' };
        Country.TC = { name: 'Turks and Caicos Islands', phone: '1-649', code: 'TCA', shortCode: 'TC' };
        Country.TV = { name: 'Tuvalu', phone: '688', code: 'TUV', shortCode: 'TV' };
        Country.VI = { name: 'U.S. Virgin Islands', phone: '1-340', code: 'VIR', shortCode: 'VI' };
        Country.UG = { name: 'Uganda', phone: '256', code: 'UGA', shortCode: 'UG' };
        Country.UA = { name: 'Ukraine', phone: '380', code: 'UKR', shortCode: 'UA' };
        Country.AE = { name: 'United Arab Emirates', phone: '971', code: 'ARE', shortCode: 'AE' };
        Country.GB = { name: 'United Kingdom', phone: '44', code: 'GBR', shortCode: 'GB' };
        Country.US = { name: 'United States', phone: '1', code: 'USA', shortCode: 'US' };
        Country.UY = { name: 'Uruguay', phone: '598', code: 'URY', shortCode: 'UY' };
        Country.UZ = { name: 'Uzbekistan', phone: '998', code: 'UZB', shortCode: 'UZ' };
        Country.VU = { name: 'Vanuatu', phone: '678', code: 'VUT', shortCode: 'VU' };
        Country.VA = { name: 'Vatican', phone: '379', code: 'VAT', shortCode: 'VA' };
        Country.VE = { name: 'Venezuela', phone: '58', code: 'VEN', shortCode: 'VE' };
        Country.VN = { name: 'Vietnam', phone: '84', code: 'VNM', shortCode: 'VN' };
        Country.WF = { name: 'Wallis and Futuna', phone: '681', code: 'WLF', shortCode: 'WF' };
        Country.EH = { name: 'Western Sahara', phone: '212', code: 'ESH', shortCode: 'EH' };
        Country.YE = { name: 'Yemen', phone: '967', code: 'YEM', shortCode: 'YE' };
        Country.ZM = { name: 'Zambia', phone: '260', code: 'ZMB', shortCode: 'ZM' };
        Country.ZW = { name: 'Zimbabwe', phone: '263', code: 'ZWE', shortCode: 'ZW' };
        return Country;
    }());
    latte.Country = Country;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 2/6/14.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Culture = /** @class */ (function () {
        //endregion
        /**
         *
         */
        function Culture() {
            //endregion
            //region Fields
            /**
             * Short date format
             */
            this.shortDateFormat = 'dd/MM/yyyy';
            /**
             * Long date format
             */
            this.longDateFormat = 'dddd, d de MMMM de YYYY';
            /**
             * Amount of decimals to show in currency format
             */
            this.currencyDecimals = 2;
            /**
             * Separator of decimals for currency
             */
            this.numberDecimalsSeparator = '.';
            /**
             * Thousands separator for currency
             */
            this.numberThousandsSeparator = ',';
            /**
             * Symbol to use in currency
             */
            this.currencySymbol = '$';
            /**
             * Regular expression for validating floating point numbers
             * @type {RegExp}
             */
            this.floatValidator = /^[\d,]+([.][\d]+)?$/;
            /**
             * Regular expression for validating integer numbers
             * @type {RegExp}
             */
            this.intValidator = /^[\d,]+$/;
        }
        Object.defineProperty(Culture, "current", {
            /**
             * Gets or sets the current culture of the system
             *
             * @returns {Culture}
             */
            get: function () {
                if (!Culture._current) {
                    Culture._current = Culture.enUs;
                }
                return this._current;
            },
            /**
             * Gets or sets the current culture of the system
             *
             * @param {Culture} value
             */
            set: function (value) {
                this._current = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Culture, "esEs", {
            /**
             * Gets the Español-Mexico Culture
             *
             * @returns {Culture}
             */
            get: function () {
                if (!Culture._esEs) {
                    var _zeroPad = function (n) { return n <= 9 ? '0' + n.toString() : n.toString(); };
                    Culture._esEs = new Culture();
                    Culture._esEs.currencyDecimals = 2;
                    Culture._esEs.numberDecimalsSeparator = ',';
                    Culture._esEs.numberThousandsSeparator = '.';
                    Culture._esEs.currencySymbol = '$';
                    Culture._esEs.shortDateFormat = 'dd/MMM/yyyy';
                    Culture._esEs.longDateFormat = 'dddd, d de MMMM de yyyy';
                    Culture._esEs.floatValidator = /^[\d.]+([,][\d]+)?$/;
                    Culture._esEs.intValidator = /^[\d.]+$/;
                    Culture._esEs.onFormatShortDate = function (d) {
                        return latte.sprintf("%s/%s/%s", _zeroPad(d.day), d.monthStringShort, d.year);
                    };
                    Culture._esEs.onFormatLongDate = function (d) {
                        return latte.sprintf("%s, %s de %s de %s", d.dayOfWeekString, d.day, d.monthString, d.year);
                    };
                }
                return Culture._esEs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Culture, "esMx", {
            /**
             * Gets the Español-Mexico Culture
             *
             * @returns {Culture}
             */
            get: function () {
                if (!Culture._esMx) {
                    var _zeroPad = function (n) { return n <= 9 ? '0' + n.toString() : n.toString(); };
                    Culture._esMx = new Culture();
                    Culture._esMx.currencyDecimals = 2;
                    Culture._esMx.numberDecimalsSeparator = '.';
                    Culture._esMx.numberThousandsSeparator = ',';
                    Culture._esMx.currencySymbol = '$';
                    Culture._esMx.shortDateFormat = 'dd/MMM/yyyy';
                    Culture._esMx.longDateFormat = 'dddd, d de MMMM de yyyy';
                    Culture._esMx.onFormatShortDate = function (d) {
                        return latte.sprintf("%s/%s/%s", _zeroPad(d.day), d.monthStringShort, d.year);
                    };
                    Culture._esMx.onFormatLongDate = function (d) {
                        return latte.sprintf("%s, %s de %s de %s", d.dayOfWeekString, d.day, d.monthString, d.year);
                    };
                }
                return Culture._esMx;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Culture, "enUs", {
            /**
             * Gets the English-USA Culture
             *
             * @returns {Culture}
             */
            get: function () {
                if (!Culture._enUs) {
                    var _zeroPad = function (n) { return n <= 9 ? '0' + n.toString() : n.toString(); };
                    Culture._enUs = new Culture();
                    Culture._enUs.currencyDecimals = 2;
                    Culture._enUs.numberDecimalsSeparator = '.';
                    Culture._enUs.numberThousandsSeparator = ',';
                    Culture._enUs.currencySymbol = '$';
                    Culture._enUs.shortDateFormat = 'MMM/dd/yyyy';
                    Culture._enUs.longDateFormat = 'dddd, MMMM d yyyy';
                    Culture._enUs.onFormatShortDate = function (d) {
                        return latte.sprintf("%s/%s/%s", d.monthStringShort, _zeroPad(d.day), d.year);
                    };
                    Culture._enUs.onFormatLongDate = function (d) {
                        return latte.sprintf("%s, %s %s %s", d.dayOfWeekString, d.monthString, d.day, d.year);
                    };
                }
                return Culture._enUs;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Formats currency using the current culture
         * @param n
         * @returns {string}
         */
        Culture.formatCurrency = function (n) {
            return Culture.current.onFormatCurrency(n);
        };
        /**
         * Returns the date as a short format
         * @param d
         */
        Culture.formatShortDate = function (d) {
            return Culture.current.onFormatShortDate(d);
        };
        /**
         * Returns the date as a short format
         * @param d
         */
        Culture.formatLongDate = function (d) {
            return Culture.current.onFormatLongDate(d);
        };
        /**
         * Formats a number using the current Culture
         * @param n
         * @param decimals
         * @param symbol
         * @returns {string}
         */
        Culture.formatNumber = function (n, decimals, symbol) {
            if (decimals === void 0) { decimals = 0; }
            if (symbol === void 0) { symbol = ''; }
            return Culture.current.onFormatNumber(n, decimals, symbol);
        };
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Returns the specified number as a currency
         * @param n
         */
        Culture.prototype.onFormatCurrency = function (n) {
            return this.onFormatNumber(n, this.currencyDecimals, this.currencySymbol);
        };
        /**
         * Formats the specified number
         * @param n
         * @param decimals
         * @param symbol
         * @returns {string}
         */
        Culture.prototype.onFormatNumber = function (n, decimals, symbol) {
            if (decimals === void 0) { decimals = 0; }
            if (symbol === void 0) { symbol = ''; }
            var point = this.numberDecimalsSeparator; //if no decimal separator is passed we use the dot as default decimal separator (we MUST use a decimal separator)
            //if you don't want to use a thousands separator you can pass empty string as thousands_sep value
            var separator = this.numberThousandsSeparator;
            var sign = (n < 0) ? '-' : '';
            //extracting the absolute value of the integer part of the number and converting to string
            var round = parseInt(Math.abs(n).toFixed(decimals)) + '';
            var length = round.length;
            var offset = ((length) > 3) ? length % 3 : 0;
            var a = sign;
            var b = symbol;
            var c = (offset ? round.substr(0, offset) + separator : '');
            var d = round.substr(offset).replace(/(\d{3})(?=\d)/g, "$1" + separator);
            //[Hack]
            var e = (decimals ? point + (Math.abs(n) - parseInt(round)).toFixed(decimals).slice(2) : '');
            return a + b + c + d + e;
        };
        /**
         * Returns the date as a long format
         * @param d
         */
        Culture.prototype.onFormatLongDate = function (d) {
            return "NotImplemented";
        };
        /**
         * Returns the date as a short format
         * @param d
         */
        Culture.prototype.onFormatShortDate = function (d) {
            return "NotImplemented";
        };
        //region Static
        /**
         * Property field
         */
        Culture._current = null;
        return Culture;
    }());
    latte.Culture = Culture;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Represents a specific date and time
     **/
    var DateTime = /** @class */ (function () {
        //endregion
        /**
         * Creates the DateTime object
         **/
        function DateTime(year, month, day, hour, minute, second, millisecond) {
            if (year === void 0) { year = 1; }
            if (month === void 0) { month = 1; }
            if (day === void 0) { day = 1; }
            if (hour === void 0) { hour = 0; }
            if (minute === void 0) { minute = null; }
            if (second === void 0) { second = null; }
            if (millisecond === void 0) { millisecond = null; }
            // Calculate days
            var days = DateTime.absoluteDays(year, month, day);
            // Calculate TimeSpan
            this._span = new latte.TimeSpan(days, hour, minute, second, millisecond);
        }
        /**
         * Returns the absolute number of days on the specified day-month-year
         **/
        DateTime.absoluteDays = function (year, month, day) {
            var div = function (a, b) { return Math.floor(a / b); };
            var arr = DateTime.isLeapYear(year) ?
                [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366] :
                [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
            var num = year - 1;
            var num2 = ((((((num * 365) + div(num, 4)) - div(num, 100)) + div(num, 400)) + arr[month - 1]) + day) - 1;
            return num2;
        };
        /**
         * Returns the amount of days in the specified month of the specified year
         **/
        DateTime.daysInMonth = function (year, month) {
            if (DateTime.isLeapYear(year)) {
                return DateTime.monthDaysLeapYear[month];
            }
            else {
                return DateTime.monthDays[month];
            }
        };
        /**
         * Returns a DateTime object from the specifed date and time components
         **/
        DateTime.fromDateAndTime = function (date, time) {
            if (!(date instanceof DateTime))
                throw new latte.InvalidArgumentEx('date');
            if (!(time instanceof latte.TimeSpan))
                throw new latte.InvalidArgumentEx('time');
            return new DateTime(date.year, date.month, date.day, time.hours, time.minutes, time.seconds, time.milliseconds);
        };
        /**
         * Returns a DateTime object from the specified amount of milliseconds
         **/
        DateTime.fromMilliseconds = function (milliseconds) {
            var d = new DateTime();
            d._span = latte.TimeSpan.fromMilliseconds(milliseconds);
            return d;
        };
        /**
         * Creates a DateTime object from the specified string.
         String should be in the format <c>yyyy-mm-dd hh:mm:ss</c>
         **/
        DateTime.fromString = function (dateTimeString) {
            if (!latte._isString(dateTimeString))
                throw new latte.InvalidArgumentEx('dateTimeString', dateTimeString);
            if (dateTimeString.length === 0)
                return new DateTime();
            var year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0;
            var parts = dateTimeString.split(' ');
            var dateParts = parts.length > 0 ? parts[0].split('-') : [];
            var timeParts = parts.length > 1 ? parts[1].split(':') : [];
            if (dateParts.length === 3) {
                year = parseInt(dateParts[0], 10);
                month = parseInt(dateParts[1], 10);
                day = parseInt(dateParts[2], 10);
            }
            if (timeParts.length === 3) {
                hour = parseInt(timeParts[0], 10);
                minute = parseInt(timeParts[1], 10);
                second = parseInt(timeParts[2], 10);
            }
            if (year <= 0)
                year = 1;
            if (month <= 0)
                month = 1;
            if (day <= 0)
                day = 1;
            return new DateTime(year, month, day, hour, minute, second);
        };
        /**
         * Returns a value indicating if the specified year is leap year
         **/
        DateTime.isLeapYear = function (year) {
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                return true;
            }
            return false;
        };
        Object.defineProperty(DateTime, "now", {
            /**
             * Gets a DateTime representing the current millisecond
             **/
            get: function () {
                var d = new Date();
                return new DateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime, "today", {
            /**
             * Gets a DateTime representing the current day without time component
             **/
            get: function () {
                var d = new Date();
                return new DateTime(d.getFullYear(), d.getMonth() + 1, d.getDate());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime, "tomorrow", {
            /**
             * Gets a DateTime representing the day of tomorrow without time component
             **/
            get: function () {
                var d = new Date();
                return (new DateTime(d.getFullYear(), d.getMonth() + 1, d.getDate())).addDays(1);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime, "epoch", {
            /**
             * Gets the unix epoch
             * @returns {latte.DateTime}
             */
            get: function () {
                return new DateTime(1970, 1, 1);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime, "yesterday", {
            /**
             * Gets a DateTime representing the day of yesterday without time component
             **/
            get: function () {
                var d = new Date();
                return (new DateTime(d.getFullYear(), d.getMonth() + 1, d.getDate())).addDays(-1);
            },
            enumerable: true,
            configurable: true
        });
        //region Private Methods
        /**
         * Prepends a zero to the number if lower than 10
         **/
        DateTime.prototype._zeroPad = function (n) {
            return n <= 9 ? '0' + n.toString() : n.toString();
        };
        /**
         * Returns the specified element of date.
         Possible values for <c>what</c> are: <c>year</c> | <c>month</c> | <c>dayyear</c> | <c>day</c>
         **/
        DateTime.prototype.fromTimeSpan = function (what) {
            var div = function (a, b) { return Math.floor(a / b); };
            var num2 = this._span.days;
            var num3 = div(num2, 146097);
            num2 -= num3 * 146097;
            var num4 = div(num2, 36524);
            if (num4 == 4) {
                num4 = 3;
            }
            num2 -= num4 * 36524;
            var num5 = div(num2, 1461);
            num2 -= num5 * 1461;
            var num6 = div(num2, 365);
            if (num6 == 4) {
                num6 = 3;
            }
            if (what == "year") {
                return (((((num3 * 400) + (num4 * 100)) + (num5 * 4)) + num6) + 1);
            }
            num2 -= num6 * 365;
            if (what == "dayyear") {
                return (num2 + 1);
            }
            var arr = ((num6 == 3) && ((num5 != 24) || (num4 == 3))) ?
                [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366] :
                [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
            var index = num2 >> 6;
            while (num2 >= arr[index]) {
                index++;
            }
            if (what == "month") {
                return index;
            }
            return ((num2 - arr[index - 1]) + 1);
        };
        //endregion
        //region Methods
        /**
         * Returns the result of adding the specified timespan to this date
         **/
        DateTime.prototype.add = function (timespan) {
            return DateTime.fromMilliseconds(this._span.millis + timespan.millis);
        };
        /**
         * Returns the result of adding the specified amount of days to this date
         **/
        DateTime.prototype.addDays = function (days) {
            return DateTime.fromMilliseconds(this._span.millis + days * 86400000);
        };
        /**
         * Returns the result of adding the specified amount of hours to this date
         **/
        DateTime.prototype.addHours = function (hours) {
            return DateTime.fromMilliseconds(this._span.millis + hours * 3600000);
        };
        /**
         * Returns the result of adding the specified amount of milliseconds to this date
         **/
        DateTime.prototype.addMilliseconds = function (milliseconds) {
            return DateTime.fromMilliseconds(this._span.millis + milliseconds);
        };
        /**
         * Returns the result of adding the specified amount of minutes to this date
         **/
        DateTime.prototype.addMinutes = function (minutes) {
            return DateTime.fromMilliseconds(this._span.millis + minutes * 60000);
        };
        /**
         * Returns the result of adding the specified amount of months to this date
         **/
        DateTime.prototype.addMonths = function (months) {
            var year = this.year;
            var month = this.month;
            var day = this.day;
            var newMonth = month - 1 + months;
            if (newMonth < 0) {
                month = 12 + (newMonth + 1) % 12;
                year += Math.ceil((newMonth - 11) / 12);
            }
            else {
                month = newMonth % 12 + 1;
                year += Math.floor(newMonth / 12);
            }
            if (year < 1 || year > 9999) {
                throw new latte.InvalidArgumentEx('months');
            }
            else {
                var daysInMonth = DateTime.daysInMonth(year, month);
                if (day > daysInMonth)
                    day = daysInMonth;
                return new DateTime(year, month, day);
            }
        };
        /**
         * Returns the result of adding the specified amount of seconds to this date
         **/
        DateTime.prototype.addSeconds = function (seconds) {
            return new DateTime(this._span.millis + seconds * 1000);
        };
        /**
         * Returns the result of adding the specified amount of years to this date
         **/
        DateTime.prototype.addYears = function (years) {
            return this.addMonths(years * 12);
        };
        /**
         * Returns the result of comparing this datetime to the specified datetime
         **/
        DateTime.prototype.compareTo = function (datetime) {
            return this._span.compareTo(datetime._span);
        };
        /**
         * Gets a value indicating if the specified datetime is equals to this datetime
         **/
        DateTime.prototype.equals = function (datetime) {
            return this._span.equals(datetime._span);
        };
        /**
         * Returns a value indicating if the date is contained in the range specified by the arguments
         **/
        DateTime.prototype.onRange = function (start, end) {
            return this.compareTo(start) >= 0 && this.compareTo(end) <= 0;
        };
        /**
         * Returns the result of subtracting the specified datetime to this datetime
         **/
        DateTime.prototype.subtractDate = function (datetime) {
            if (!(datetime instanceof DateTime))
                throw new latte.InvalidArgumentEx('datetime');
            return latte.TimeSpan.fromMilliseconds(this._span.millis - datetime._span.millis);
        };
        /**
         * Returns the result of subtracting the specified timespan to this datetime
         **/
        DateTime.prototype.subtractTime = function (timespan) {
            if (!(timespan instanceof latte.TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            return DateTime.fromMilliseconds(this._span.millis - timespan.millis);
        };
        /**
         * Returns a relative representatio of the date, like "Yesterday 10:00AM"
         **/
        DateTime.prototype.toRelativeString = function (withTime) {
            if (withTime === void 0) { withTime = false; }
            var now = DateTime.now;
            var today = DateTime.today;
            var yesterday = DateTime.yesterday;
            var tomorrow = DateTime.tomorrow;
            var timePart = this._zeroPad(this.hour) + ':' + this._zeroPad(this.minute);
            var datePart = "";
            var d = this.date;
            var t = this.timeOfDay;
            var diff;
            if (this.date.equals(today)) {
                diff = now.timeOfDay.subtract(t);
                var hours = Math.ceil(diff.totalHours);
                var minutes = Math.ceil(diff.totalMinutes);
                if (diff.totalSeconds < 60) {
                    return strings.justNow;
                }
                else if (diff.totalMinutes == 1) {
                    return strings.oneMinuteAgo;
                }
                else if (minutes < 60) {
                    return latte.sprintf(strings.SMinutesAgo, minutes);
                }
                else if (hours == 1) {
                    return strings.oneHourAgo;
                }
                else {
                    return latte.sprintf(strings.SHoursAgo, hours);
                }
            }
            else if (d.equals(tomorrow)) {
                datePart = strings.tomorrow;
            }
            else if (d.equals(yesterday)) {
                datePart = strings.yesterday;
            }
            else if (this.compareTo(today) < 0) {
                timePart = '';
                diff = today.subtractDate(this);
                var days = Math.ceil(diff.totalDays);
                var weeks = Math.ceil(days / 7);
                var years = Math.ceil(weeks / 51);
                if (days < 7) {
                    datePart = latte.sprintf(strings.SDaysAgo, days);
                }
                else if (weeks == 1) {
                    datePart = strings.oneWeekAgo;
                }
                else if (weeks < 51) {
                    datePart = latte.sprintf(strings.SWeeksAgo, weeks);
                }
                else if (years == 1) {
                    datePart = strings.oneYearAgo;
                }
                else {
                    datePart = latte.sprintf(strings.SYearsAgo, years);
                }
            }
            else if (this.compareTo(today) > 0) {
                timePart = '';
                diff = today.subtractDate(this);
                var weekd = this.dayOfWeekString;
                var days = Math.abs(Math.ceil(diff.totalDays));
                var weeks = Math.ceil(days / 7);
                var years = Math.ceil(weeks / 51);
                if (days < 8) {
                    datePart = latte.sprintf(strings.nextWeekDayS, weekd);
                }
                else if (weeks < 51) {
                    datePart = latte.sprintf(strings.SWeeksFromNow, weeks);
                }
                else if (years == 1) {
                    datePart = strings.oneYearFromNow;
                }
                else {
                    datePart = latte.sprintf(strings.SYearsFromNow, years);
                }
            }
            else {
                return this.toString();
            }
            if ((this.minute == 0 && this.hour == 0) || withTime === false) {
                timePart = '';
            }
            return timePart ? datePart + ' ' + timePart : datePart;
        };
        /**
         * Returns a formatted string
         **/
        DateTime.prototype.toFormattedString = function (format) {
            if (format === void 0) { format = null; }
            return latte.Culture.formatShortDate(this);
        };
        /**
         * Gets the DateTime as a string
         **/
        DateTime.prototype.toString = function (includeTime) {
            if (includeTime === void 0) { includeTime = true; }
            if (isNaN(this.year))
                return '';
            var t = this.timeOfDay;
            var r = this.year + '-' + this._zeroPad(this.month) + '-' + this._zeroPad(this.day);
            if (includeTime) {
                r += ' ' + this._zeroPad(t.hours) + ":" + this._zeroPad(t.minutes) + ':'
                    + this._zeroPad(t.seconds);
            }
            return r;
        };
        /**
         * Gets a value of the object
         * @returns {number}
         */
        DateTime.prototype.valueOf = function () {
            if (!this.thisEpoch) {
                return 0;
            }
            else {
                return this._span.millis;
            }
        };
        Object.defineProperty(DateTime.prototype, "day", {
            //endregion
            //region Properties
            /**
             * Gets the day of this datetime
             **/
            get: function () {
                return this.fromTimeSpan("day");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "dayOfWeek", {
            /**
             * Gets the day of week this datetime. Sunday is 0 and Saturday is 6.
             **/
            get: function () {
                return (this._span.days + 1) % 7;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "dayOfWeekString", {
            /**
             * Gets the name of the day of the week
             * @returns {*}
             */
            get: function () {
                var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
                return strings[days[this.dayOfWeek]];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "dayOfWeekStringShort", {
            /**
             * Gets the name of the day of the week
             * @returns {*}
             */
            get: function () {
                var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
                return strings[days[this.dayOfWeek] + 'Short'];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "dayOfWeekStringInitial", {
            /**
             * Gets the name of the day of the week
             * @returns {*}
             */
            get: function () {
                var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
                return strings[days[this.dayOfWeek] + 'Initial'];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "dayOfYear", {
            /**
             * Gets the day of year datetime
             **/
            get: function () {
                return this.fromTimeSpan("dayyear");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "comparer", {
            /**
             * Gets the comparer value of the date
             *
             * @returns {number}
             */
            get: function () {
                return this._span.totalMilliseconds;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "date", {
            /**
             * Returns just the date component of this datetime
             **/
            get: function () {
                return new DateTime(this.year, this.month, this.day);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "hour", {
            /**
             * Gets the hour of the datetime
             **/
            get: function () {
                return this._span.hours;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "millisecond", {
            /**
             * Gets the millisecond of the date
             **/
            get: function () {
                return this._span.milliseconds;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "minute", {
            /**
             * Gets the minute of the time
             **/
            get: function () {
                return this._span.minutes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "month", {
            /**
             * Gets the month of the date
             **/
            get: function () {
                return this.fromTimeSpan("month");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "monthString", {
            /**
             * Gets the name of the month of the date
             **/
            get: function () {
                return strings["january february march april may june july august september october november december".split(" ")[this.month - 1]];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "monthStringShort", {
            /**
             * Gets the name of the month of the date
             **/
            get: function () {
                return strings["january february march april may june july august september october november december".split(" ")[(this.month - 1)] + 'Short'];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "monthStringInitial", {
            /**
             * Gets the name of the month of the date
             **/
            get: function () {
                return strings["january february march april may june july august september october november december".split(" ")[(this.month - 1)] + 'Initial'];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "second", {
            /**
             * Gets the second of the date
             **/
            get: function () {
                return this._span.seconds;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "timeOfDay", {
            /**
             * Gets the time component of this datetime
             **/
            get: function () {
                return latte.TimeSpan.fromMilliseconds(this._span.millis % 86400000);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "thisEpoch", {
            /**
             * Gets a value indicating if the date is after the unix epoch
             *
             * @returns {boolean}
             */
            get: function () {
                return this.compareTo(new DateTime(2, 1, 1)) > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "weekOfYear", {
            /**
             * Gets the week number of date. First week of year is 1
             **/
            get: function () {
                var oneJan = new DateTime(this.year, 1, 1);
                return Math.ceil((this.dayOfYear + oneJan.dayOfWeek) / 7);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "year", {
            /**
             * Gets the year of the date
             **/
            get: function () {
                return this.fromTimeSpan("year");
            },
            enumerable: true,
            configurable: true
        });
        //region Static
        /**
         * Amount of days in months of a non-leap year
         **/
        DateTime.monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /**
         * Amount of days in months of leap year
         **/
        DateTime.monthDaysLeapYear = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return DateTime;
    }());
    latte.DateTime = DateTime;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var EventHandler = /** @class */ (function () {
        function EventHandler(handler, context) {
            this.handler = handler;
            this.context = context;
        }
        return EventHandler;
    }());
    latte.EventHandler = EventHandler;
    /**
     * Manages events and event handlers
     */
    var LatteEvent = /** @class */ (function () {
        /**
         *
         * @param context Context where
         */
        function LatteEvent(context) {
            this.context = context;
            this.handlers = [];
        }
        Object.defineProperty(LatteEvent.prototype, "handlerAdded", {
            /**
             * Gets the event for handler adding
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._handlerAdded) {
                    this._handlerAdded = new latte.LatteEvent(this);
                }
                return this._handlerAdded;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Adds a handler to the event
         * @param handler
         */
        LatteEvent.prototype.add = function (handler, context) {
            //            var c = context === null ? this.context : context;
            if (context === void 0) { context = null; }
            this.handlers.push(new EventHandler(handler, context));
            this.onHandlerAdded(handler);
        };
        /**
         * Raises the <c>handlerAdded</c> event
         * @param handler
         */
        LatteEvent.prototype.onHandlerAdded = function (handler) {
            this.handlerAdded.raise(handler);
        };
        /**
         * Raises the actual event handlers.
         * @param parameter
         * @returns {*}
         */
        LatteEvent.prototype.raise = function () {
            var parameter = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                parameter[_i] = arguments[_i];
            }
            var args = arguments;
            // Call each handler
            for (var i = 0; i < this.handlers.length; i++) {
                var evh = this.handlers[i];
                if (!evh.handler)
                    continue;
                var result = evh.handler.apply(evh.context || this.context, args);
                if (typeof result == 'boolean') {
                    return result;
                }
            }
        };
        /**
         * Removes the specified handler
         * @param {Function} handler
         */
        LatteEvent.prototype.remove = function (handler) {
            var index = -1;
            this.handlers.forEach(function (h, i) {
                if (h.handler == handler) {
                    index = i;
                }
            });
            if (index >= 0) {
                this.handlers.splice(index, 1);
            }
        };
        return LatteEvent;
    }());
    latte.LatteEvent = LatteEvent;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Exception thrown when an argument of the function was invalid.
     *
     * Usage:
     * <example>
     *
     * function pow(a){
     *
     *      if(typeof a != 'number')
     *          // Inform user that the parameter was invalid
     *          throw new InvalidArgumentEx('a');
     *
     *      return a * a;
     *
     * }
     *
     * </example>
     */
    var InvalidArgumentEx = /** @class */ (function (_super) {
        __extends(InvalidArgumentEx, _super);
        /**
         * Creates the exception
         *
         * @param argument
         * @param value
         */
        function InvalidArgumentEx(argument, value) {
            if (argument === void 0) { argument = ""; }
            if (value === void 0) { value = ""; }
            var _this = _super.call(this) || this;
            _this.argument = argument;
            _this.value = value;
            return _this;
        }
        /**
         * Returns a string explaining the exception
         *
         * @returns {string}
         */
        InvalidArgumentEx.prototype.toString = function () {
            return "Invalid argument: " +
                (this.argument ? this.argument : '<no argument specified>') +
                (!this.value ? " ( " + this.value + ")" : '');
        };
        return InvalidArgumentEx;
    }(latte.Ex));
    latte.InvalidArgumentEx = InvalidArgumentEx;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Exception thrown when an argument of the function was invalid.
     *
     * Usage:
     * <example>
     *
     * function pow(a){
     *
     *      throw new latte.InvalidCallEx('pow')
     *
     * }
     *
     * </example>
     */
    var InvalidCallEx = /** @class */ (function (_super) {
        __extends(InvalidCallEx, _super);
        /**
         * Creates the Exception
         * @param method
         */
        function InvalidCallEx(method) {
            if (method === void 0) { method = null; }
            var _this = _super.call(this) || this;
            _this.method = method;
            return _this;
        }
        /**
         * Returns a string explaining the exception
         *
         * @returns {string}
         */
        InvalidCallEx.prototype.toString = function () {
            return "Invalid call: " +
                (this.method ? this.method : '<no method specified>');
        };
        return InvalidCallEx;
    }(latte.Ex));
    latte.InvalidCallEx = InvalidCallEx;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/26/15.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var LoadInfo = /** @class */ (function () {
        //endregion
        //region Fields
        //endregion
        /**
         * @private
         */
        function LoadInfo() {
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._loadingText = null;
        }
        Object.defineProperty(LoadInfo, "instance", {
            /**
             * Gets the load mechanism singleton.
             *
             * @returns {LoadMechanism}
             */
            get: function () {
                if (!this._instance) {
                    this._instance = new LoadInfo();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Ends a loading process
         */
        LoadInfo.prototype.end = function () {
            this.onLoadingEnd();
        };
        /**
         * Raises the <c>loadingStart</c> event
         */
        LoadInfo.prototype.onLoadingStart = function () {
            if (this._loadingStart) {
                this._loadingStart.raise();
            }
            else {
                //log("Loading: " + this.loadingText);
            }
        };
        /**
         * Raises the <c>loadingEnd</c> event
         */
        LoadInfo.prototype.onLoadingEnd = function () {
            if (this._loadingEnd) {
                this._loadingEnd.raise();
            }
            else {
                //log(this.loadingText  + "-> Done.");
            }
        };
        /**
         * Raises the <c>loadingText</c> event
         */
        LoadInfo.prototype.onLoadingTextChanged = function () {
            if (this._loadingTextChanged) {
                this._loadingTextChanged.raise();
            }
        };
        /**
         * Starts a loading process
         * @param text
         */
        LoadInfo.prototype.start = function (text) {
            this.loadingText = text;
            this.onLoadingStart();
        };
        Object.defineProperty(LoadInfo.prototype, "loadingStart", {
            /**
             * Gets an event raised when the loading starts
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._loadingStart) {
                    this._loadingStart = new latte.LatteEvent(this);
                }
                return this._loadingStart;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoadInfo.prototype, "loadingEnd", {
            /**
             * Gets an event raised when the loading ends
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._loadingEnd) {
                    this._loadingEnd = new latte.LatteEvent(this);
                }
                return this._loadingEnd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoadInfo.prototype, "loadingTextChanged", {
            /**
             * Gets an event raised when the value of the loadingText property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._loadingTextChanged) {
                    this._loadingTextChanged = new latte.LatteEvent(this);
                }
                return this._loadingTextChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoadInfo.prototype, "loadingText", {
            /**
             * Gets or sets the text of the load information
             *
             * @returns {string}
             */
            get: function () {
                return this._loadingText;
            },
            /**
             * Gets or sets the text of the load information
             *
             * @param {string} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._loadingText;
                // Set value
                this._loadingText = value;
                // Trigger changed event
                if (changed) {
                    this.onLoadingTextChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        return LoadInfo;
    }());
    latte.LoadInfo = LoadInfo;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/12/14.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Point = /** @class */ (function () {
        //endregion
        //region Fields
        //endregion
        /**
         * Creates a new point, optionally
         */
        function Point(x, y) {
            if (x === void 0) { x = null; }
            if (y === void 0) { y = null; }
            /**
             * Property field
             */
            this._x = null;
            /**
             * Property field
             */
            this._y = null;
            if (x !== null) {
                this._x = x;
            }
            if (y !== null) {
                this._y = y;
            }
        }
        //region Static
        /**
         * Gets the distance between two points
         * @param a
         * @param b
         */
        Point.distance = function (a, b) {
            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        };
        /**
         * Returns an empty point
         * @returns {latte.Point}
         */
        Point.empty = function () {
            return new Point(null, null);
        };
        /**
         * Returns a point situated on the origin
         * @returns {latte.Point}
         */
        Point.origin = function () {
            return new Point(0, 0);
        };
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets the distance to the specified point
         * @param {latte.Point} p
         * @returns {number}
         */
        Point.prototype.distanceTo = function (p) {
            return Point.distance(this, p);
        };
        /**
         * Gets a value indicating if the passed point is equals to this one
         * @param {latte.Point} p
         * @returns {boolean}
         */
        Point.prototype.equals = function (p) {
            return this.x == p.x && p.y == this.y;
        };
        /**
         * Returns the offset operation of the point
         *
         * @param x
         * @param y
         * @returns {latte.Point}
         */
        Point.prototype.offset = function (x, y) {
            return new Point(this.x + x, this.y + y);
        };
        /**
         * Gets string representation of the point
         * @returns {string}
         */
        Point.prototype.toString = function () {
            return latte.sprintf("Point(%s, %s)", this._x, this._y);
        };
        Object.defineProperty(Point.prototype, "isEmpty", {
            //endregion
            //region Events
            //endregion
            //region Properties
            /**
             * Gets a value indicating if the point is empty (No value has been set)
             *
             * @returns {boolean}
             */
            get: function () {
                return this._x == null || this._y == null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Point.prototype, "x", {
            /**
             * Gets or sets the x coordinate
             *
             * @returns {number}
             */
            get: function () {
                return this._x;
            },
            /**
             * Gets or sets the x coordinate
             *
             * @param {number} value
             */
            set: function (value) {
                this._x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Point.prototype, "y", {
            /**
             * Gets or sets the y coordinate
             *
             * @returns {number}
             */
            get: function () {
                return this._y;
            },
            /**
             * Gets or sets the y coordinate
             *
             * @param {number} value
             */
            set: function (value) {
                this._y = value;
            },
            enumerable: true,
            configurable: true
        });
        return Point;
    }());
    latte.Point = Point;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Reprsents a Rectangle
     **/
    var Rectangle = /** @class */ (function () {
        /**
         * Creates a rectangle with the specified left, top, width and height.
         **/
        function Rectangle(left, top, width, height) {
            if (left === void 0) { left = 0; }
            if (top === void 0) { top = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            this.top = top;
            this.left = left;
            this.width = width;
            this.height = height;
        }
        /**
         * Creates a rectangle with the specified left, right, top and bottom.
         **/
        Rectangle.fromLRTB = function (left, right, top, bottom) {
            var r = new Rectangle(left, top);
            r.right = right;
            r.bottom = bottom;
            return r;
        };
        /**
         * Creates a rectangle from the specified object (top, left, width, height)
         * @param obj
         */
        Rectangle.fromObject = function (obj) {
            return new Rectangle(obj.left, obj.top, obj.width, obj.height);
        };
        /**
         * Creates a rectangle from the specified object (top, left, width, height)
         * @param obj
         */
        Rectangle.fromObjectLFTB = function (obj) {
            return Rectangle.fromLRTB(obj.left, obj.right, obj.top, obj.bottom);
        };
        /**
         * Creates a rectangle of the specified rectangle
         * @param {HTMLElement} e
         * @returns {latte.Rectangle}
         */
        Rectangle.fromElement = function (e) {
            return Rectangle.fromObject(e.getBoundingClientRect());
        };
        /**
         * Returns a rectangle of positive width and height, by changing its coordinates and preserving width and height
         */
        Rectangle.prototype.absolute = function () {
            var width = Math.abs(this.width);
            var height = Math.abs(this.height);
            var left = this.width < 0 ? this.right : this.left;
            var top = this.height < 0 ? this.bottom : this.top;
            return new Rectangle(left, top, width, height);
        };
        /**
         * Returns the result of centering this into the specified container
         **/
        Rectangle.prototype.centerOn = function (container) {
            var c = new Rectangle(container.left + (container.width - this.width) / 2, container.top + (container.height - this.height) / 2, this.width, this.height);
            return c;
        };
        /**
         * Gets a value indicating if the specified point is contained
         **/
        Rectangle.prototype.contains = function (x, y) {
            return this.left <= x && x <= this.right && this.top <= y && y <= this.bottom;
        };
        /**
         * Gets a value indicating if the rectangle is contained inside this rectangle
         **/
        Rectangle.prototype.containsRectangle = function (rectangle) {
            return this.contains(rectangle.left, rectangle.top) && this.contains(rectangle.right, rectangle.bottom);
        };
        /**
         * Compares this rectangle with the specified rectangle and returns the result
         * @param r
         * @returns {boolean}
         */
        Rectangle.prototype.equals = function (r) {
            if (!r)
                return false;
            return this.left == r.left && this.top == this.top && this.width == r.width && this.height == r.height;
        };
        /**
         * Returns the result of inflating the rectangle vertically and horizontally on each edge.
         **/
        Rectangle.prototype.inflate = function (horizontal, vertical) {
            // Check arguments
            if (!latte._isNumber(horizontal))
                throw new latte.InvalidArgumentEx('horizontal', horizontal);
            if (!latte._isNumber(vertical))
                throw new latte.InvalidArgumentEx('vertical', vertical);
            return Rectangle.fromLRTB(this.left - horizontal, this.right + horizontal, this.top - vertical, this.bottom + vertical);
        };
        /**
         * Returns the rectangle result of intersecting this with passed rectangle
         **/
        Rectangle.prototype.intersection = function (rectangle) {
            var a = this;
            var b = rectangle;
            var x1 = Math.max(a.left, b.left);
            var x2 = Math.min(a.right, b.right);
            var y1 = Math.max(a.top, b.top);
            var y2 = Math.min(a.bottom, b.bottom);
            if (function (x2) { return x1 && y2 >= y1; }) {
                return new Rectangle(x1, y1, x2 - x1, y2 - y1);
            }
            return new Rectangle();
        };
        /**
         * Gets a value indicating if the rectangle intersects specified rectangle
         **/
        Rectangle.prototype.intersects = function (rectangle) {
            var thisX = this.left;
            var thisY = this.top;
            var thisW = this.width;
            var thisH = this.height;
            var rectX = rectangle.left;
            var rectY = rectangle.top;
            var rectW = rectangle.width;
            var rectH = rectangle.height;
            return (rectX < thisX + thisW) && (thisX < (rectX + rectW)) && (rectY < thisY + thisH) && (thisY < rectY + rectH);
        };
        /**
         * Returns a scaled rectangle
         * @param width
         */
        Rectangle.prototype.scaleToHeight = function (height) {
            return new Rectangle(this.left, this.top, height * this.width / this.height, height);
        };
        /**
         * Returns a scaled rectangle
         * @param width
         */
        Rectangle.prototype.scaleToWidth = function (width) {
            return new Rectangle(this.left, this.top, width, width * this.height / this.width);
        };
        /**
         * Returns a string describing the rectangle
         **/
        Rectangle.prototype.toString = function () {
            return "Rectangle: " + [this._left, this._top, this._width, this._height].join(', ');
        };
        /**
         * Gets a rectangle representing the union of this rectangle and the passed one
         **/
        Rectangle.prototype.union = function (rectangle) {
            return Rectangle.fromLRTB(Math.min(this.left, rectangle.left), Math.max(this.right, rectangle.right), Math.min(this.top, rectangle.top), Math.max(this.bottom, rectangle.bottom));
        };
        Object.defineProperty(Rectangle.prototype, "area", {
            /**
             * Gets the area of the rectangle
             *
             * @returns {number}
             */
            get: function () {
                return this.width * this.height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "bottom", {
            /**
             * Gets or sets the right side of the rectangle
             **/
            get: function () {
                return this._top + this._height;
            },
            /**
             * Gets or sets the right side of the rectangle
             **/
            set: function (value) {
                this._height = value - this._top;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "center", {
            /**
             * Gets or sets the center of the rectangle
             * @returns {latte.Point}
             */
            get: function () {
                return new latte.Point(this.left + this.width / 2, this.top + this.height / 2);
            },
            /**
             * Gets or sets the center of the rectangle
             * @param value
             */
            set: function (value) {
                this.left = value.x - this.width / 2;
                this.top = value.y - this.height / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "height", {
            /**
             * Gets or sets the height of the rectangle
             **/
            get: function () {
                return this._height;
            },
            /**
             * Gets or sets the height of the rectangle
             **/
            set: function (value) {
                this._height = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "isEmpty", {
            /**
             * Gets a value indicating if the rectangle is empty
             *
             * @returns {boolean}
             */
            get: function () {
                return this.area == 0 && this.left == 0 && this.top == 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "left", {
            /**
             * Gets or sets the left of the rectangle
             **/
            get: function () {
                return this._left;
            },
            /**
             * Gets or sets the left of the rectangle
             **/
            set: function (value) {
                this._left = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "location", {
            /**
             * Gets the location of the rectangle
             *
             * @returns {Point}
             */
            get: function () {
                return new latte.Point(this.left, this.top);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "right", {
            /**
             * Gets or sets the right side of the rectangle
             **/
            get: function () {
                return this._left + this._width;
            },
            /**
             * Gets or sets the right side of the rectangle
             **/
            set: function (value) {
                this._width = value - this._left;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "size", {
            /**
             * Gets the size of the rectangle
             *
             * @returns {Size}
             */
            get: function () {
                return new latte.Size(this.width, this.height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "tag", {
            /**
             * Gets or sets a tag
             * @returns {any}
             */
            get: function () {
                return this._tag;
            },
            /**
             * Gets or sets a tag
             * @param value
             */
            set: function (value) {
                this._tag = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "top", {
            /**
             * Gets or sets the top of the rectangle
             **/
            get: function () {
                return this._top;
            },
            /**
             * Gets or sets the top of the rectangle
             **/
            set: function (value) {
                this._top = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "width", {
            /**
             * Gets or sets the width of the rectangle
             **/
            get: function () {
                return this._width;
            },
            /**
             * Gets or sets the width of the rectangle
             **/
            set: function (value) {
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });
        return Rectangle;
    }());
    latte.Rectangle = Rectangle;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/12/14.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Size = /** @class */ (function () {
        //endregion
        //region Fields
        //endregion
        /**
         * Creates a new Size, optionally sets its Width and Height components
         */
        function Size(width, height) {
            if (width === void 0) { width = null; }
            if (height === void 0) { height = null; }
            /**
             * Property field
             */
            this._height = null;
            /**
             * Property field
             */
            this._width = null;
            if (width !== null) {
                this._width = width;
            }
            if (height !== null) {
                this._height = height;
            }
        }
        //region Static
        /**
         * Returns an empty size
         * @returns {latte.Size}
         */
        Size.empty = function () {
            return new Size(null, null);
        };
        /**
         * Returns a size of zero width and zero height
         * @returns {latte.Point}
         */
        Size.zero = function () {
            return new Size(0, 0);
        };
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets a value indicating if the size contains the specified size.
         * @param size
         */
        Size.prototype.contains = function (size) {
            return this.width >= size.width && this.height >= size.height;
        };
        /**
         * Inflates the size on the specified width and height
         *
         * @param width
         * @param height
         * @returns {latte.Size}
         */
        Size.prototype.inflate = function (width, height) {
            return new Size(this.width + width, this.height + height);
        };
        /**
         * Inflates the size uniformly
         * @param wide
         */
        Size.prototype.inflateUniform = function (wide) {
            return new Size(this.width + wide, this.height + wide);
        };
        /**
         * Gets a scaled Size that fits in the specified target.
         * @param target
         */
        Size.prototype.scaleToFit = function (target) {
            var dh = target.width * this.height / this.width;
            if (dh > target.height) {
                return new Size(target.height * this.width / this.height, target.height);
            }
            return new Size(target.width, dh);
        };
        /**
         * Gets a scaled Size that fills the specified target.
         * @param target
         */
        Size.prototype.scaleToFill = function (target) {
            var dh = target.width * this.height / this.width;
            if (dh <= target.height) {
                return new Size(target.height * this.width / this.height, target.height);
            }
            return new Size(target.width, dh);
        };
        /**
         * Gets string representation of the size
         * @returns {string}
         */
        Size.prototype.toString = function () {
            return latte.sprintf("Size(%s, %s)", this._width, this._height);
        };
        Object.defineProperty(Size.prototype, "area", {
            //endregion
            //region Events
            //endregion
            //region Properties
            /**
             * Gets the area represented by the size
             *
             * @returns {number}
             */
            get: function () {
                return this.width * this.height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "isEmpty", {
            /**
             * Gets a value indicating if the size has no compnents assigned or initialized
             *
             * @returns {boolean}
             */
            get: function () {
                return this._height == null && this._width == null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "isHorizontal", {
            /**
             * Gets a value indicating if the size is horizontal
             *
             * @returns {boolean}
             */
            get: function () {
                return this.width > this.height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "isSquare", {
            /**
             * Gets a value indicating if the size is a square
             *
             * @returns {boolean}
             */
            get: function () {
                return this.width == this.height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "isVertical", {
            /**
             * Gets a value indicating if the size is vertical
             *
             * @returns {boolean}
             */
            get: function () {
                return this.height > this.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "height", {
            /**
             * Gets the Height component of the size
             *
             * @returns {number}
             */
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "width", {
            /**
             * Gets the Width component of the size
             *
             * @returns {number}
             */
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        return Size;
    }());
    latte.Size = Size;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Represents a time interval.
     **/
    var TimeSpan = /** @class */ (function () {
        /**
         * Creates the TimeSpan with the specified parameters. Parameters not specified will be asumed to be zero.
         **/
        function TimeSpan(days, hours, minutes, seconds, milliseconds) {
            if (days === void 0) { days = 0; }
            if (hours === void 0) { hours = 0; }
            if (minutes === void 0) { minutes = 0; }
            if (seconds === void 0) { seconds = 0; }
            if (milliseconds === void 0) { milliseconds = 0; }
            this.millis = 0;
            this.millis = (days * 86400 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
        }
        /**
         * Creates a TimeSpan from the specified amount of days
         **/
        TimeSpan.fromDays = function (days) {
            return new TimeSpan(days);
        };
        /**
         * Creates a TimeSpan from the specified amount of hours
         **/
        TimeSpan.fromHours = function (hours) {
            return new TimeSpan(0, hours);
        };
        /**
         * Creates a TimeSpan from the specified amount of milliseconds
         **/
        TimeSpan.fromMilliseconds = function (milliseconds) {
            var t = new TimeSpan();
            t.millis = milliseconds;
            return t;
        };
        /**
         * Creates a TimeSpan from the specified amount of minutes
         **/
        TimeSpan.fromMinutes = function (minutes) {
            return new TimeSpan(0, 0, minutes);
        };
        /**
         * Creates a TimeSpan from the specified amount of seconds
         **/
        TimeSpan.fromSeconds = function (seconds) {
            return new TimeSpan(0, 0, 0, seconds);
        };
        /**
         * Creates a TimeSpan object from the specified string.
         String should be in the format <c>hh:mm:ss</c>
         **/
        TimeSpan.fromString = function (timeString) {
            var parts = timeString.split(':');
            var hours = parts.length > 0 && latte._isNumeric(parts[0]) ? parseInt(parts[0], 10) : 0;
            var minutes = parts.length > 1 && latte._isNumeric(parts[1]) ? parseInt(parts[1], 10) : 0;
            var seconds = parts.length > 2 && latte._isNumeric(parts[2]) ? parseInt(parts[2], 10) : 0;
            return new TimeSpan(0, hours, minutes, seconds);
        };
        /**
         * Gets a timespan with the time passed since the specified date and time
         * @param d
         */
        TimeSpan.timeSince = function (d) {
            return latte.DateTime.now.subtractDate(d);
        };
        /**
         * Makes math rounding depending on the sign of the milliseconds
         **/
        TimeSpan.prototype._rounder = function (number) {
            if (this.millis < 0)
                return Math.ceil(number);
            return Math.floor(number);
        };
        /**
         * Prepends a zero to the number if lower than 10
         **/
        TimeSpan.prototype._zeroPad = function (n) {
            return n <= 9 ? '0' + n.toString() : n.toString();
        };
        /**
         * Returns the result of adding the specified timespan to this timespan
         **/
        TimeSpan.prototype.add = function (timespan) {
            if (!(timespan instanceof TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            return TimeSpan.fromMilliseconds(this.millis + timespan.millis);
        };
        /**
         * Returns the result of adding the specified amount of hours to this timespan
         **/
        TimeSpan.prototype.addHours = function (hours) {
            return this.add(new TimeSpan(0, hours));
        };
        /**
         * Returns the result of adding the specified amount of minutes to this timespan
         **/
        TimeSpan.prototype.addMinutes = function (minutes) {
            return this.add(new TimeSpan(0, 0, minutes));
        };
        /**
         * Returns the result of adding the specified amount of seconds to this timespan
         **/
        TimeSpan.prototype.addSeconds = function (seconds) {
            return this.add(new TimeSpan(0, 0, 0, seconds));
        };
        /**
         * Returns the result of comparing this timespan against the provided timespan
         **/
        TimeSpan.prototype.compareTo = function (timespan) {
            if (!(timespan instanceof TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            if (this.millis > timespan.millis)
                return 1;
            if (this.millis == timespan.millis)
                return 0;
            if (this.millis < timespan.millis)
                return -1;
            throw new latte.Ex();
        };
        /**
         * Returns a timespan representing the actual duration of the timespan
         **/
        TimeSpan.prototype.duration = function () {
            return new TimeSpan(Math.abs(this.millis));
        };
        /**
         * Returns a value indicating if this timespan represents the same than the specified timespan
         **/
        TimeSpan.prototype.equals = function (timespan) {
            if (!(timespan instanceof TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            return this.millis == timespan.millis;
        };
        /**
         * Negates the timespan duration
         **/
        TimeSpan.prototype.negate = function () {
            this.millis *= -1;
        };
        /**
         * Returns the result of subtracting the specified timespan to this timespan
         **/
        TimeSpan.prototype.subtract = function (timespan) {
            if (!(timespan instanceof TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            return TimeSpan.fromMilliseconds(this.millis - timespan.millis);
        };
        /**
         * Returns this timespan as a string
         **/
        TimeSpan.prototype.toString = function (includeMilliseconds) {
            if (includeMilliseconds === void 0) { includeMilliseconds = false; }
            return (this.millis < 0 ? '-' : '') +
                (this.days ? this.days + ' ' : '') +
                this._zeroPad(this.hours) + ":" +
                this._zeroPad(this.minutes) +
                (this.seconds ? ':' + this._zeroPad(this.seconds) : '') +
                (includeMilliseconds ? '.' + Math.abs(this.milliseconds) : '');
        };
        /**
         * Returns the timespan as a shor string, e.g. 5 minutes or 5m
         * @param shortNames
         */
        TimeSpan.prototype.toShortString = function (shortNames) {
            if (shortNames === void 0) { shortNames = false; }
            var suf = shortNames ? 'Short' : '';
            if (this.totalSeconds < 1) {
                return latte.sprintf(strings['Smillis' + suf], this.totalMilliseconds);
            }
            else if (this.totalMinutes < 1) {
                var seconds = Math.round(this.totalSeconds);
                return latte.sprintf(strings[(seconds == 1 ? 'oneSecond' : 'Sseconds') + suf], seconds);
            }
            else if (this.totalHours < 1) {
                var minutes = Math.round(this.totalMinutes);
                return latte.sprintf(strings[(minutes == 1 ? 'oneMinute' : 'Sminutes') + suf], minutes);
            }
            else {
                var hours = Math.round(this.totalHours);
                return latte.sprintf(strings[(hours == 1 ? 'oneHour' : 'Shours') + suf], latte.Culture.formatNumber(hours));
            }
        };
        /**
         * Gets the timespan as a number
         * @returns {number}
         */
        TimeSpan.prototype.valueOf = function () {
            return this.millis;
        };
        Object.defineProperty(TimeSpan.prototype, "days", {
            /**
             * Gets the days component of the time interval represented by this object
             **/
            get: function () {
                return this._rounder(this.millis / 86400000);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "hours", {
            /**
             * Gets the hours component of the time interval represented by this object
             **/
            get: function () {
                return this._rounder((this.millis % (24 * 3600 * 1000)) / (3600 * 1000));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "isEmpty", {
            /**
             * Gets a value indicating if the total time this timespan represents is zero
             **/
            get: function () {
                return this.millis == 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "milliseconds", {
            /**
             * Gets the milliseconds component of the time interval represented by this object
             **/
            get: function () {
                return this._rounder(this.millis % 1000);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "minutes", {
            /**
             * Gets the minutes component of the time interval represented by this object
             **/
            get: function () {
                return this._rounder((this.millis % (3600 * 1000)) / (60 * 1000));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "seconds", {
            /**
             * Gets the seconds component of the time interval represented by this object
             **/
            get: function () {
                return this._rounder((this.millis % 60000) / 1000);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "totalDays", {
            /**
             * Gets the value of this timespan expressed in whole and fractional days
             **/
            get: function () {
                //                     86400000
                return this.millis / (86400000);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "totalHours", {
            /**
             * Gets the value of this timespan expressed in whole and fractional hours
             **/
            get: function () {
                return this.millis / (3600000);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "totalMilliseconds", {
            /**
             * Gets the value of this timespan expressed in milliseconds
             **/
            get: function () {
                return this.millis;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "totalMinutes", {
            /**
             * Gets the value of this timespan expressed in whole and fractional minutes
             **/
            get: function () {
                return this.millis / (60 * 1000);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "totalSeconds", {
            /**
             * Gets the value of this timespan expressed in whole and fractional seconds
             **/
            get: function () {
                return this.millis / 1000;
            },
            enumerable: true,
            configurable: true
        });
        return TimeSpan;
    }());
    latte.TimeSpan = TimeSpan;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * Executes an action every specified amount of milliseconds
     **/
    var Timer = /** @class */ (function () {
        /**
         * Creates a timer that will call <c>callback</c> every specified amount of
         <c>milliseconds</c> on the specified <c>context</c>.
         **/
        function Timer(callback, milliseconds, context) {
            this.callback = callback;
            this.milliseconds = milliseconds;
            this.context = context;
        }
        Object.defineProperty(Timer.prototype, "callback", {
            /**
             * Gets or sets the function who will be called every tick
             **/
            get: function () {
                return this._callback;
            },
            /**
             * Gets or sets the function who will be called every tick
             **/
            set: function (value) {
                this._callback = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Timer.prototype, "context", {
            /**
             * Gets or sets the context in which the function is executed
             **/
            get: function () {
                return this._context;
            },
            /**
             * Gets or sets the context in which the function is executed
             **/
            set: function (value) {
                this._context = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Timer.prototype, "milliseconds", {
            /**
             * Gets or sets the milliseconds to sleep between calls
             **/
            get: function () {
                return this._milliseconds;
            },
            /**
             * Gets or sets the milliseconds to sleep between calls
             **/
            set: function (value) {
                this._milliseconds = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Pauses the timer
         **/
        Timer.prototype.pause = function () {
            this._paused = true;
        };
        /**
         * Starts ticking
         **/
        Timer.prototype.start = function () {
            var _this = this;
            if (this._paused === false)
                return;
            this._paused = false;
            setTimeout(function () { _this.tick(); }, this.milliseconds);
        };
        /**
         * Ticks the timer. Executes the callback and programs next tick.
         **/
        Timer.prototype.tick = function () {
            var _this = this;
            // If paused, bye bye!
            if (this._paused === true)
                return;
            // Call callback
            this.callback.apply(this.context);
            // Program next tick
            setTimeout(function () { _this.tick(); }, this.milliseconds);
        };
        return Timer;
    }());
    latte.Timer = Timer;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var HEvent = /** @class */ (function () {
        function HEvent() {
        }
        return HEvent;
    }());
    latte.HEvent = HEvent;
})(latte || (latte = {}));
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/support/ts-include/datalatte.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/support/ts-include/latte.strings.d.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/BindValueType.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/ICall.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/ICountry.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/IDataRemoteCall.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/IEntityMeta.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/IInput.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/IMessage.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/IRemoteResponse.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/ISave.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/ISaveContainer.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Key.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/TriBool.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/WeekDay.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/latte.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Ex.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Ajax.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/CancellableCallbackEvent.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Collection.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/CollectionEvent.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Color.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Country.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Culture.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/DateTime.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Event.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/InvaldArgumentEx.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/InvalidCallEx.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/LoadInfo.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Point.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Rectangle.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Size.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/TimeSpan.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/Timer.ts" />
/// <reference path="/Users/daniel/Projects/Racks/latte/latte/ts/TypeEvent.ts" /> 
