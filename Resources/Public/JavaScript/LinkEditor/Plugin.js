/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = readFromConsumerApi;
function readFromConsumerApi(key) {
    return function () {
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {
            var _window$NeosHostPlu;

            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);
        }

        throw new Error('You are trying to read from a consumer api that hasn\'t been initialized yet!');
    };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().CkEditor5;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(5);

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _linkEditorPlugin = __webpack_require__(9);

var _linkEditorPlugin2 = _interopRequireDefault(_linkEditorPlugin);

var _LinkEditorOptions = __webpack_require__(13);

var _LinkEditorOptions2 = _interopRequireDefault(_LinkEditorOptions);

var _plowJs = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addPlugin = function addPlugin(Plugin, isEnabled) {
    return function (ckEditorConfiguration, options) {
        if (!isEnabled || isEnabled(options.editorOptions, options)) {
            ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
            return (0, _plowJs.$add)("plugins", Plugin, ckEditorConfiguration);
        }
        return ckEditorConfiguration;
    };
};

(0, _neosUiExtensibility2.default)("DIU.Neos.LinkEditor", {}, function (globalRegistry) {
    var config = globalRegistry.get("ckEditor5").get("config");
    config.set("linkEditor", addPlugin(_linkEditorPlugin2.default, function (a) {
        return (0, _plowJs.$get)("linking.linkEditor", a);
    }));

    var containerRegistry = globalRegistry.get("containers");

    containerRegistry.set("LinkInput/OptionsPanel/LinkEditorOptions", _LinkEditorOptions2.default);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createConsumerApi = undefined;

var _createConsumerApi = __webpack_require__(6);

var _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);

var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('manifest');
exports.createConsumerApi = _createConsumerApi2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createConsumerApi;

var _package = __webpack_require__(7);

var _manifest = __webpack_require__(8);

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};

function createConsumerApi(manifests, exposureMap) {
    var api = {};

    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });

    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));

    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
    Object.defineProperty(window['@Neos:HostPluginAPI'], 'VERSION', createReadOnlyValue(_package.version));
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"name":"@neos-project/neos-ui-extensibility","version":"1.4.1","description":"Extensibility mechanisms for the Neos CMS UI","main":"./src/index.js","scripts":{"prebuild":"check-dependencies && yarn clean","test":"yarn jest -- -w 2 --coverage","test:watch":"yarn jest -- --watch","build":"exit 0","build:watch":"exit 0","clean":"rimraf ./lib ./dist","lint":"eslint src","jest":"NODE_ENV=test jest"},"devDependencies":{"@neos-project/babel-preset-neos-ui":"1.4.1","@neos-project/jest-preset-neos-ui":"1.4.1"},"dependencies":{"@neos-project/build-essentials":"1.4.1","@neos-project/positional-array-sorter":"1.4.1","babel-core":"^6.13.2","babel-eslint":"^7.1.1","babel-loader":"^7.1.2","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-object-rest-spread":"^6.20.1","babel-plugin-webpack-alias":"^2.1.1","babel-preset-es2015":"^6.13.2","babel-preset-react":"^6.3.13","babel-preset-stage-0":"^6.3.13","chalk":"^1.1.3","css-loader":"^0.28.4","file-loader":"^1.1.5","json-loader":"^0.5.4","postcss-loader":"^2.0.10","react-dev-utils":"^0.5.0","style-loader":"^0.21.0"},"bin":{"neos-react-scripts":"./bin/neos-react-scripts.js"},"jest":{"preset":"@neos-project/jest-preset-neos-ui"}}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (manifests) {
    return function (identifier, options, bootstrap) {
        manifests.push(_defineProperty({}, identifier, {
            options: options,
            bootstrap: bootstrap
        }));
    };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ckeditor5Exports = __webpack_require__(1);

var _linkAttributeCommand = __webpack_require__(10);

var _linkAttributeCommand2 = _interopRequireDefault(_linkAttributeCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkEditorPlugin = function (_Plugin) {
    _inherits(LinkEditorPlugin, _Plugin);

    function LinkEditorPlugin() {
        _classCallCheck(this, LinkEditorPlugin);

        return _possibleConstructorReturn(this, (LinkEditorPlugin.__proto__ || Object.getPrototypeOf(LinkEditorPlugin)).apply(this, arguments));
    }

    _createClass(LinkEditorPlugin, [{
        key: "init",
        value: function init() {
            var editor = this.editor;
            editor.model.schema.extend("$text", {
                allowAttributes: ["location", "category", "interactiontype"]
            });

            // location
            editor.conversion.for("downcast").attributeToElement({
                model: "location",
                view: function view(location, writer) {
                    var linkElement = writer.createAttributeElement("a", { "data-location": location }, { priority: 5 });
                    return linkElement;
                }
            });
            editor.conversion.for("upcast").elementToAttribute({
                view: {
                    name: "a",
                    attributes: {
                        "data-location": true
                    }
                },
                model: {
                    key: "location",
                    value: function value(viewElement) {
                        return viewElement.getAttribute("data-location");
                    }
                }
            });

            // category
            editor.conversion.for("downcast").attributeToElement({
                model: "category",
                view: function view(category, writer) {
                    var linkElement = writer.createAttributeElement("a", { "data-category": category }, { priority: 5 });
                    return linkElement;
                }
            });
            editor.conversion.for("upcast").elementToAttribute({
                view: {
                    name: "a",
                    attributes: {
                        "data-category": true
                    }
                },
                model: {
                    key: "category",
                    value: function value(viewElement) {
                        return viewElement.getAttribute("data-category");
                    }
                }
            });

            // interactiontype
            editor.conversion.for("downcast").attributeToElement({
                model: "interactiontype",
                view: function view(interactiontype, writer) {
                    var linkElement = writer.createAttributeElement("a", { "data-interactiontype": interactiontype }, { priority: 5 });
                    return linkElement;
                }
            });
            editor.conversion.for("upcast").elementToAttribute({
                view: {
                    name: "a",
                    attributes: {
                        "data-interactiontype": true
                    }
                },
                model: {
                    key: "interactiontype",
                    value: function value(viewElement) {
                        return viewElement.getAttribute("data-interactiontype");
                    }
                }
            });

            editor.commands.add("location", new _linkAttributeCommand2.default(this.editor, "location"));
            editor.commands.add("category", new _linkAttributeCommand2.default(this.editor, "category"));
            editor.commands.add("interactiontype", new _linkAttributeCommand2.default(this.editor, "interactiontype"));
        }
    }], [{
        key: "pluginName",
        get: function get() {
            return "LinkEditor";
        }
    }]);

    return LinkEditorPlugin;
}(_ckeditor5Exports.Plugin);

exports.default = LinkEditorPlugin;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ckeditor5Exports = __webpack_require__(1);

var _findLinkRange = __webpack_require__(11);

var _findLinkRange2 = _interopRequireDefault(_findLinkRange);

var _toMap = __webpack_require__(12);

var _toMap2 = _interopRequireDefault(_toMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkAttributeCommand = function (_Command) {
    _inherits(LinkAttributeCommand, _Command);

    function LinkAttributeCommand(editor, attributeKey) {
        _classCallCheck(this, LinkAttributeCommand);

        var _this = _possibleConstructorReturn(this, (LinkAttributeCommand.__proto__ || Object.getPrototypeOf(LinkAttributeCommand)).call(this, editor));

        _this.attributeKey = attributeKey;
        return _this;
    }

    _createClass(LinkAttributeCommand, [{
        key: "refresh",
        value: function refresh() {
            var model = this.editor.model;
            var doc = model.document;

            this.value = doc.selection.getAttribute(this.attributeKey);
            this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, this.attributeKey);
        }
    }, {
        key: "execute",
        value: function execute(value) {
            var _this2 = this;

            var model = this.editor.model;
            var doc = model.document;
            var selection = doc.selection;
            var toggleMode = value === undefined;
            value = toggleMode ? !this.value : value;

            model.change(function (writer) {
                if (toggleMode && !value) {
                    var rangesToUnset = selection.isCollapsed ? [(0, _findLinkRange2.default)(selection.getFirstPosition(), selection.getAttribute("linkHref"), model)] : selection.getRanges();
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = rangesToUnset[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var range = _step.value;

                            writer.removeAttribute(_this2.attributeKey, range);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                } else if (selection.isCollapsed) {
                    var position = selection.getFirstPosition();

                    if (selection.hasAttribute("linkHref")) {
                        var linkRange = (0, _findLinkRange2.default)(selection.getFirstPosition(), selection.getAttribute("linkHref"), model);
                        if (value === false) {
                            writer.removeAttribute(_this2.attributeKey, linkRange);
                        } else {
                            writer.setAttribute(_this2.attributeKey, value, linkRange);
                            writer.setSelection(linkRange);
                        }
                    } else if (value !== "") {
                        var attributes = (0, _toMap2.default)(selection.getAttributes());
                        attributes.set(_this2.attributeKey, value);
                        var node = writer.createText(value, attributes);
                        writer.insert(node, position);
                        writer.setSelection(Range.createOn(node));
                    }
                } else {
                    var ranges = model.schema.getValidRanges(selection.getRanges(), _this2.attributeKey);

                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = ranges[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _range = _step2.value;

                            if (value === false) {
                                writer.removeAttribute(_this2.attributeKey, _range);
                            } else {
                                writer.setAttribute(_this2.attributeKey, value, _range);
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            });
        }
    }]);

    return LinkAttributeCommand;
}(_ckeditor5Exports.Command);

exports.default = LinkAttributeCommand;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = findLinkRange;
function findLinkRange(position, value, model) {
    return model.createRange(_findBound(position, value, true, model), _findBound(position, value, false, model));
}

function _findBound(position, value, lookBack, model) {
    var node = position.textNode || (lookBack ? position.nodeBefore : position.nodeAfter);

    var lastNode = null;

    while (node && node.getAttribute("linkHref") == value) {
        lastNode = node;
        node = lookBack ? node.previousSibling : node.nextSibling;
    }

    return lastNode ? model.createPositionAt(lastNode, lookBack ? "before" : "after") : position;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = objectToMap;
function objectToMap(obj) {
    var map = new Map();

    for (var key in obj) {
        map.set(key, obj[key]);
    }

    return map;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(16);

var _plowJs = __webpack_require__(2);

var _reactUiComponents = __webpack_require__(17);

var _neosUiCkeditor5Bindings = __webpack_require__(18);

var _neosUiReduxStore = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var categoryOptions = [{ group: 'clickout', label: 'click' }, { group: 'clickout', label: 'clickout' }, { group: 'clickout', label: 'clickout_ep' }, { group: 'clickout', label: 'clickout_wlw' }, { group: 'interaction', label: 'interaction_search' }, { group: 'interaction', label: 'interaction_contact_phone' }, { group: 'interaction', label: 'interaction_contact_mail' }, { group: 'interaction', label: 'interaction_social' }, { group: 'interaction', label: 'interaction' }];

var locationOptions = [{ group: 'module', label: 'contact_module' }, { group: 'module', label: 'offer_module' }, { group: 'module', label: 'video_module' }, { group: 'other', label: 'navigation' }, { group: 'other', label: 'content' }, { group: 'other', label: 'footer' }, { group: 'other', label: 'stage' }, { group: 'other', label: 'sidebar' }];

var interactiontypeOptions = [{ group: 'share', label: 'share_facebook' }, { group: 'share', label: 'share_youtube' }, { group: 'share', label: 'share_xing' }, { group: 'share', label: 'share_linkedin' }, { group: 'share', label: 'share_twitter' }, { group: 'follow', label: 'follow_facebook' }, { group: 'follow', label: 'follow_youtube' }, { group: 'follow', label: 'follow_xing' }, { group: 'follow', label: 'follow_linkedin' }, { group: 'follow', label: 'follow_twitter' }, { group: 'lead', label: 'lead_cdo_step1' }, { group: 'lead', label: 'lead_cdo_step2' }, { group: 'lead', label: 'lead_cdo_step3' }, { group: 'lead', label: 'lead_cdo_step4' }, { group: 'lead', label: 'lead_lyc' }, { group: 'lead', label: 'lead_form_start' }, { group: 'lead', label: 'lead_form_confirm' }, { group: 'lead', label: 'lead_phone' }, { group: 'lead', label: 'lead_mail' }, { group: 'lead', label: 'lead_button' }, { group: 'job', label: 'job_interest' }, { group: 'job', label: 'job_application' }, { group: 'newsletter', label: 'newsletter_send' }, { group: 'newsletter', label: 'newsletter_start' }, { group: 'traffic', label: 'traffic_button' }, { group: 'traffic', label: 'traffic_logo' }, { group: 'teaser', label: 'teaser_article_button' }, { group: 'teaser', label: 'teaser_career_jobboard_button' }, { group: 'teaser', label: 'teaser_career_tech-product_button' }, { group: 'teaser', label: 'teaser_career_data-bi_button' }, { group: 'teaser', label: 'teaser_career_sales-marketing-button' }, { group: 'teaser', label: 'teaser_career_hr-finance_button' }, { group: 'video', label: 'video_open' }, { group: 'video', label: 'video_play' }, { group: 'video', label: 'video_pause' }, { group: 'video', label: 'video_25' }, { group: 'video', label: 'video_50' }, { group: 'video', label: 'video_75' }, { group: 'video', label: 'video_watch_to_end' }, { group: 'link', label: 'link' }, { group: 'link', label: 'result_link' }, { group: 'other', label: 'corpcomm_mail' }, { group: 'other', label: 'customer_login' }, { group: 'other', label: 'start_search' }, { group: 'other', label: 'recruiting_mail' }, { group: 'other', label: 'reference' }];

var LinkEditorOptions = (_dec = (0, _reactRedux.connect)((0, _plowJs.$transform)({
    formattingUnderCursor: _neosUiReduxStore.selectors.UI.ContentCanvas.formattingUnderCursor
})), _dec(_class = (_temp = _class2 = function (_PureComponent) {
    _inherits(LinkEditorOptions, _PureComponent);

    function LinkEditorOptions() {
        _classCallCheck(this, LinkEditorOptions);

        return _possibleConstructorReturn(this, (LinkEditorOptions.__proto__ || Object.getPrototypeOf(LinkEditorOptions)).apply(this, arguments));
    }

    _createClass(LinkEditorOptions, [{
        key: "getLocation",
        value: function getLocation() {
            return (0, _plowJs.$get)("location", this.props.formattingUnderCursor) || "";
        }
    }, {
        key: "getCategory",
        value: function getCategory() {
            return (0, _plowJs.$get)("category", this.props.formattingUnderCursor) || "";
        }
    }, {
        key: "getInteractiontype",
        value: function getInteractiontype() {
            return (0, _plowJs.$get)("interactiontype", this.props.formattingUnderCursor) || "";
        }
    }, {
        key: "render",
        value: function render() {
            return (0, _plowJs.$get)('linkEditor', this.props.options) && _react2.default.createElement(
                "div",
                { style: { flexGrow: 1 } },
                _react2.default.createElement(
                    "div",
                    { style: { padding: 8 } },
                    "Interaction Type",
                    _react2.default.createElement(_reactUiComponents.SelectBox, {
                        options: interactiontypeOptions,
                        optionValueField: "label",
                        value: this.getInteractiontype(),
                        onValueChange: function onValueChange(value) {
                            (0, _neosUiCkeditor5Bindings.executeCommand)("interactiontype", value, false);
                        },
                        placeholder: "Choose interactiontype",
                        allowEmpty: true
                    })
                ),
                _react2.default.createElement(
                    "div",
                    { style: { padding: 8 } },
                    "Category",
                    _react2.default.createElement(_reactUiComponents.SelectBox, {
                        options: categoryOptions,
                        optionValueField: "label",
                        value: this.getCategory(),
                        onValueChange: function onValueChange(value) {
                            (0, _neosUiCkeditor5Bindings.executeCommand)("category", value, false);
                        },
                        placeholder: "Choose category",
                        allowEmpty: true
                    })
                ),
                _react2.default.createElement(
                    "div",
                    { style: { padding: 8 } },
                    "Location",
                    _react2.default.createElement(_reactUiComponents.SelectBox, {
                        options: locationOptions,
                        optionValueField: "label",
                        value: this.getLocation(),
                        onValueChange: function onValueChange(value) {
                            (0, _neosUiCkeditor5Bindings.executeCommand)("location", value, false);
                        },
                        placeholder: "Choose location",
                        allowEmpty: true
                    })
                )
            );
        }
    }]);

    return LinkEditorOptions;
}(_react.PureComponent), _class2.propTypes = {
    formattingUnderCursor: _propTypes2.default.object,
    options: _propTypes2.default.object
}, _temp)) || _class);
exports.default = LinkEditorOptions;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().CkEditorApi;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore;

/***/ })
/******/ ]);
//# sourceMappingURL=Plugin.js.map