(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/system/role/add"],{

/***/ 133:
/*!*********************************************************************************!*\
  !*** D:/A_www/34/uni-admin 基础框架/main.js?{"page":"pages%2Fsystem%2Frole%2Fadd"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 6);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _add = _interopRequireDefault(__webpack_require__(/*! ./pages/system/role/add.vue */ 134));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_add.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/uni.mp.esm.js */ 5)["createPage"]))

/***/ }),

/***/ 134:
/*!************************************************************!*\
  !*** D:/A_www/34/uni-admin 基础框架/pages/system/role/add.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_3ff253ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=3ff253ff& */ 135);
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ 137);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 25);

var renderjs




/* normalize component */

var component = Object(_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_3ff253ff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_3ff253ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _add_vue_vue_type_template_id_3ff253ff___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/system/role/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 135:
/*!*******************************************************************************************!*\
  !*** D:/A_www/34/uni-admin 基础框架/pages/system/role/add.vue?vue&type=template&id=3ff253ff& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_template_id_3ff253ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add.vue?vue&type=template&id=3ff253ff& */ 136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_template_id_3ff253ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_template_id_3ff253ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_template_id_3ff253ff___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_template_id_3ff253ff___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 136:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A_www/34/uni-admin 基础框架/pages/system/role/add.vue?vue&type=template&id=3ff253ff& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniForms: function() {
      return Promise.all(/*! import() | uni_modules/uni-forms/components/uni-forms/uni-forms */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-forms/components/uni-forms/uni-forms.vue */ 244))
    },
    uniFormsItem: function() {
      return Promise.all(/*! import() | uni_modules/uni-forms/components/uni-forms-item/uni-forms-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue */ 252))
    },
    uniEasyinput: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput */ "uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue */ 312))
    },
    uniDataCheckbox: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox */ "uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue */ 326))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.$t("common.button.submit")
  var m1 = _vm.$t("common.button.back")
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 137:
/*!*************************************************************************************!*\
  !*** D:/A_www/34/uni-admin 基础框架/pages/system/role/add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../soft/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add.vue?vue&type=script&lang=js& */ 138);
/* harmony import */ var _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 138:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A_www/34/uni-admin 基础框架/pages/system/role/add.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























var _uniIdRoles = __webpack_require__(/*! @/js_sdk/validator/uni-id-roles.js */ 139);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var db = uniCloud.database();
var dbCmd = db.command;
var dbCollectionName = 'uni-id-roles';

function getValidator(fields) {
  var result = {};
  for (var key in _uniIdRoles.validator) {
    if (fields.includes(key)) {
      result[key] = _uniIdRoles.validator[key];
    }
  }
  return result;
}var _default =

{
  data: function data() {
    var formData = {
      "role_id": "",
      "role_name": "",
      "permission": [],
      "comment": "",
      "create_date": null };

    return {
      formData: formData,
      formOptions: {},
      rules: _objectSpread({},
      getValidator(Object.keys(formData))) };


  },
  onReady: function onReady() {
    this.$refs.form.setRules(this.rules);
  },
  methods: {
    /**
              * 触发表单提交
              */
    submit: function submit() {var _this = this;
      uni.showLoading({
        mask: true });

      this.$refs.form.validate().then(function (res) {
        _this.submitForm(res);
      }).catch(function () {
        uni.hideLoading();
      });
    },

    submitForm: function submitForm(value) {var _this2 = this;
      // 使用 clientDB 提交数据
      db.collection(dbCollectionName).add(value).then(function (res) {
        uni.showToast({
          title: '新增成功' });

        _this2.getOpenerEventChannel().emit('refreshData');
        setTimeout(function () {return uni.navigateBack();}, 500);
      }).catch(function (err) {
        uni.showModal({
          content: err.message || '请求服务失败',
          showCancel: false });

      }).finally(function () {
        uni.hideLoading();
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 29)["default"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/uni.api.esm.js */ 1)["default"]))

/***/ })

},[[133,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/system/role/add.js.map