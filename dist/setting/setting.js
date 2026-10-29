System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/avance-obra-escena/src/output-schema.ts"
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/avance-obra-escena/src/output-schema.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIELD_NAMES: () => (/* binding */ FIELD_NAMES),
/* harmony export */   ID_FIELD: () => (/* binding */ ID_FIELD),
/* harmony export */   outputDataSourceJson: () => (/* binding */ outputDataSourceJson)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
// Schema of the widget's output data source: one record per Revit element, columns of avance-elements.json.
// Shared by the setting (which registers the data source in the app config) and the runtime (which fills it).

const ID_FIELD = 'OBJECTID';
// [name, alias, kind]; names match the scene layer fields so the 3D view and the table describe the same element.
const COLUMNS = [
    [ID_FIELD, 'OBJECTID', 'oid'],
    ['OID', 'ObjectID en la capa de escena', 'number'],
    ['Seccion', 'Sección', 'string'],
    ['EstadoAvance', 'Estado de avance', 'string'],
    ['Avance', 'Avance (%)', 'number'],
    ['Actividad', 'Actividad', 'string'],
    ['ActividadNombre', 'Nombre de actividad', 'string'],
    ['Contratista', 'Contratista', 'string'],
    ['Categoria', 'Categoría Revit', 'string'],
    ['Nivel', 'Nivel', 'string'],
    ['Disciplina', 'Disciplina', 'string'],
    ['Modelo', 'Modelo Revit', 'string'],
    ['UE', 'Unidad de ejecución', 'string'],
    ['Family', 'Familia', 'string'],
    ['Type', 'Tipo', 'string'],
    ['IfcGUID', 'IfcGUID', 'string'],
    ['ExtId', 'ID de Revit', 'string'],
    ['FechaInicio', 'Inicio (texto)', 'string'],
    ['FechaFin', 'Fin (texto)', 'string'],
    ['FechaInicioDate', 'Inicio', 'date'],
    ['FechaFinDate', 'Fin', 'date'],
    ['z', 'Cota base (m)', 'number']
];
const TYPES = {
    oid: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number, jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.OID],
    number: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number, jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Double],
    string: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String, jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.String],
    date: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date, jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Date]
};
const FIELD_NAMES = COLUMNS.map(([name]) => name);
function outputDataSourceJson(widgetId, label) {
    const fields = {};
    for (const [name, alias, kind] of COLUMNS) {
        const [type, esriType] = TYPES[kind];
        fields[name] = { jimuName: name, name, alias, type, esriType };
    }
    return {
        id: `${widgetId}_output`,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer,
        label,
        isOutputFromWidget: true,
        isDataInDataSourceInstance: true, // the records live in the browser; no service, no portal item
        schema: { label, idField: ID_FIELD, fields }
    };
}


/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/avance-obra-escena/src/setting/setting.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _output_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../output-schema */ "./your-extensions/widgets/avance-obra-escena/src/output-schema.ts");

/** @jsx jsx */




const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  .note { font-size: 12px; color: var(--ref-palette-neutral-1000); margin: 8px 0 0; line-height: 1.4; }
`;
const Setting = (props) => {
    const { id, config, useMapWidgetIds, onSettingChange } = props;
    // Every change re-registers the output data source, so Chart, Table, Filter and List can always pick it.
    const save = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((change) => {
        var _a, _b, _c;
        const label = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig.widgets[id]) === null || _b === void 0 ? void 0 : _b.label) !== null && _c !== void 0 ? _c : 'Avance de obra (escena)';
        onSettingChange(Object.assign({ id }, change), [(0,_output_schema__WEBPACK_IMPORTED_MODULE_4__.outputDataSourceJson)(id, `Elementos de avance (${label})`)]);
    }, [id, onSettingChange]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        var _a;
        if (!((_a = props.outputDataSources) === null || _a === void 0 ? void 0 : _a.length))
            save({ config });
    }, [props.outputDataSources, config, save]);
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { css: style, className: "widget-setting-avance-obra-escena", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Mapa (opcional)", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: useMapWidgetIds, onSelect: (ids) => { save({ useMapWidgetIds: ids }); } }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "note", children: "Opcional. Sin Mapa, el widget abre en su propio recuadro el web scene \u00ABAvance de obra - PLMB\u00BB del portal de la SDP. Con un widget Mapa (con esa u otra escena con las capas E15, I16 y E16), colorea y filtra las capas de ese Mapa." })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Datos", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", label: "URL de los datos (sitio publicado o serve.mjs local)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: config.serverUrl, onAcceptValue: value => { save({ config: config.set('serverUrl', value.trim().replace(/\/$/, '')) }); } }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "note", children: "La tabla de elementos (avance y fechas) y las huellas prediales se leen de esta URL. El widget crea la fuente de datos \u00ABElementos de avance\u00BB: el\u00EDgela en los widgets de Gr\u00E1fico, Tabla, Filtro o Lista." })] })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hdmFuY2Utb2JyYS1lc2NlbmEvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRHQUE0RztBQUM1Ryw4R0FBOEc7QUFDRTtBQUV6RyxNQUFNLFFBQVEsR0FBRyxVQUFVO0FBRWxDLGtIQUFrSDtBQUNsSCxNQUFNLE9BQU8sR0FBa0U7SUFDN0UsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDLEtBQUssRUFBRSwrQkFBK0IsRUFBRSxRQUFRLENBQUM7SUFDbEQsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUM7SUFDOUMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQztJQUNsQyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDO0lBQ3BDLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxDQUFDO0lBQ3BELENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUM7SUFDeEMsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDO0lBQzFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDNUIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQztJQUN0QyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDO0lBQ3BDLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQztJQUN2QyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQy9CLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7SUFDMUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztJ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Qyw4Q0FBUyxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBSSxHQUM3SSxFQUNiLHVFQUFHLFNBQVMsRUFBQyxNQUFNLDRPQUdmLElBQ1csSUFDYixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE9BQU87QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hdmFuY2Utb2JyYS1lc2NlbmEvc3JjL291dHB1dC1zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXZhbmNlLW9icmEtZXNjZW5hL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNjaGVtYSBvZiB0aGUgd2lkZ2V0J3Mgb3V0cHV0IGRhdGEgc291cmNlOiBvbmUgcmVjb3JkIHBlciBSZXZpdCBlbGVtZW50LCBjb2x1bW5zIG9mIGF2YW5jZS1lbGVtZW50cy5qc29uLlxuLy8gU2hhcmVkIGJ5IHRoZSBzZXR0aW5nICh3aGljaCByZWdpc3RlcnMgdGhlIGRhdGEgc291cmNlIGluIHRoZSBhcHAgY29uZmlnKSBhbmQgdGhlIHJ1bnRpbWUgKHdoaWNoIGZpbGxzIGl0KS5cbmltcG9ydCB7IERhdGFTb3VyY2VUeXBlcywgRXNyaUZpZWxkVHlwZSwgSmltdUZpZWxkVHlwZSwgdHlwZSBEYXRhU291cmNlSnNvbiwgdHlwZSBGaWVsZFNjaGVtYSB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGNvbnN0IElEX0ZJRUxEID0gJ09CSkVDVElEJ1xuXG4vLyBbbmFtZSwgYWxpYXMsIGtpbmRdOyBuYW1lcyBtYXRjaCB0aGUgc2NlbmUgbGF5ZXIgZmllbGRzIHNvIHRoZSAzRCB2aWV3IGFuZCB0aGUgdGFibGUgZGVzY3JpYmUgdGhlIHNhbWUgZWxlbWVudC5cbmNvbnN0IENPTFVNTlM6IEFycmF5PFtzdHJpbmcsIHN0cmluZywgJ29pZCcgfCAnbnVtYmVyJyB8ICdzdHJpbmcnIHwgJ2RhdGUnXT4gPSBbXG4gIFtJRF9GSUVMRCwgJ09CSkVDVElEJywgJ29pZCddLFxuICBbJ09JRCcsICdPYmplY3RJRCBlbiBsYSBjYXBhIGRlIGVzY2VuYScsICdudW1iZXInXSxcbiAgWydTZWNjaW9uJywgJ1NlY2Npw7NuJywgJ3N0cmluZyddLFxuICBbJ0VzdGFkb0F2YW5jZScsICdFc3RhZG8gZGUgYXZhbmNlJywgJ3N0cmluZyddLFxuICBbJ0F2YW5jZScsICdBdmFuY2UgKCUpJywgJ251bWJlciddLFxuICBbJ0FjdGl2aWRhZCcsICdBY3RpdmlkYWQnLCAnc3RyaW5nJ10sXG4gIFsnQWN0aXZpZGFkTm9tYnJlJywgJ05vbWJyZSBkZSBhY3RpdmlkYWQnLCAnc3RyaW5nJ10sXG4gIFsnQ29udHJhdGlzdGEnLCAnQ29udHJhdGlzdGEnLCAnc3RyaW5nJ10sXG4gIFsnQ2F0ZWdvcmlhJywgJ0NhdGVnb3LDrWEgUmV2aXQnLCAnc3RyaW5nJ10sXG4gIFsnTml2ZWwnLCAnTml2ZWwnLCAnc3RyaW5nJ10sXG4gIFsnRGlzY2lwbGluYScsICdEaXNjaXBsaW5hJywgJ3N0cmluZyddLFxuICBbJ01vZGVsbycsICdNb2RlbG8gUmV2aXQnLCAnc3RyaW5nJ10sXG4gIFsnVUUnLCAnVW5pZGFkIGRlIGVqZWN1Y2nDs24nLCAnc3RyaW5nJ10sXG4gIFsnRmFtaWx5JywgJ0ZhbWlsaWEnLCAnc3RyaW5nJ10sXG4gIFsnVHlwZScsICdUaXBvJywgJ3N0cmluZyddLFxuICBbJ0lmY0dVSUQnLCAnSWZjR1VJRCcsICdzdHJpbmcnXSxcbiAgWydFeHRJZCcsICdJRCBkZSBSZXZpdCcsICdzdHJpbmcnXSxcbiAgWydGZWNoYUluaWNpbycsICdJbmljaW8gKHRleHRvKScsICdzdHJpbmcnXSxcbiAgWydGZWNoYUZpbicsICdGaW4gKHRleHRvKScsICdzdHJpbmcnXSxcbiAgWydGZWNoYUluaWNpb0RhdGUnLCAnSW5pY2lvJywgJ2RhdGUnXSxcbiAgWydGZWNoYUZpbkRhdGUnLCAnRmluJywgJ2RhdGUnXSxcbiAgWyd6JywgJ0NvdGEgYmFzZSAobSknLCAnbnVtYmVyJ11cbl1cblxuY29uc3QgVFlQRVMgPSB7XG4gIG9pZDogW0ppbXVGaWVsZFR5cGUuTnVtYmVyLCBFc3JpRmllbGRUeXBlLk9JRF0sXG4gIG51bWJlcjogW0ppbXVGaWVsZFR5cGUuTnVtYmVyLCBFc3JpRmllbGRUeXBlLkRvdWJsZV0sXG4gIHN0cmluZzogW0ppbXVGaWVsZFR5cGUuU3RyaW5nLCBFc3JpRmllbGRUeXBlLlN0cmluZ10sXG4gIGRhdGU6IFtKaW11RmllbGRUeXBlLkRhdGUsIEVzcmlGaWVsZFR5cGUuRGF0ZV1cbn0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IEZJRUxEX05BTUVTID0gQ09MVU1OUy5tYXAoKFtuYW1lXSkgPT4gbmFtZSlcblxuZXhwb3J0IGZ1bmN0aW9uIG91dHB1dERhdGFTb3VyY2VKc29uICh3aWRnZXRJZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKTogRGF0YVNvdXJjZUpzb24ge1xuICBjb25zdCBmaWVsZHM6IHsgW2ppbXVOYW1lOiBzdHJpbmddOiBGaWVsZFNjaGVtYSB9ID0ge31cbiAgZm9yIChjb25zdCBbbmFtZSwgYWxpYXMsIGtpbmRdIG9mIENPTFVNTlMpIHtcbiAgICBjb25zdCBbdHlwZSwgZXNyaVR5cGVdID0gVFlQRVNba2luZF1cbiAgICBmaWVsZHNbbmFtZV0gPSB7IGppbXVOYW1lOiBuYW1lLCBuYW1lLCBhbGlhcywgdHlwZSwgZXNyaVR5cGUgfVxuICB9XG4gIHJldHVybiB7XG4gICAgaWQ6IGAke3dpZGdldElkfV9vdXRwdXRgLFxuICAgIHR5cGU6IERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsXG4gICAgbGFiZWwsXG4gICAgaXNPdXRwdXRGcm9tV2lkZ2V0OiB0cnVlLFxuICAgIGlzRGF0YUluRGF0YVNvdXJjZUluc3RhbmNlOiB0cnVlLCAvLyB0aGUgcmVjb3JkcyBsaXZlIGluIHRoZSBicm93c2VyOyBubyBzZXJ2aWNlLCBubyBwb3J0YWwgaXRlbVxuICAgIHNjaGVtYTogeyBsYWJlbCwgaWRGaWVsZDogSURfRklFTEQsIGZpZWxkcyB9XG4gIH0gYXMgRGF0YVNvdXJjZUpzb25cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MsIGdldEFwcFN0b3JlLCB0eXBlIFVzZURhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgdHlwZSB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdywgTWFwV2lkZ2V0U2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgb3V0cHV0RGF0YVNvdXJjZUpzb24gfSBmcm9tICcuLi9vdXRwdXQtc2NoZW1hJ1xuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgLm5vdGUgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiB2YXIoLS1yZWYtcGFsZXR0ZS1uZXV0cmFsLTEwMDApOyBtYXJnaW46IDhweCAwIDA7IGxpbmUtaGVpZ2h0OiAxLjQ7IH1cbmBcblxuY29uc3QgU2V0dGluZyA9IChwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikgPT4ge1xuICBjb25zdCB7IGlkLCBjb25maWcsIHVzZU1hcFdpZGdldElkcywgb25TZXR0aW5nQ2hhbmdlIH0gPSBwcm9wc1xuXG4gIC8vIEV2ZXJ5IGNoYW5nZSByZS1yZWdpc3RlcnMgdGhlIG91dHB1dCBkYXRhIHNvdXJjZSwgc28gQ2hhcnQsIFRhYmxlLCBGaWx0ZXIgYW5kIExpc3QgY2FuIGFsd2F5cyBwaWNrIGl0LlxuICBjb25zdCBzYXZlID0gUmVhY3QudXNlQ2FsbGJhY2soKGNoYW5nZTogeyBjb25maWc/OiBJTUNvbmZpZywgdXNlTWFwV2lkZ2V0SWRzPzogc3RyaW5nW10sIHVzZURhdGFTb3VyY2VzPzogVXNlRGF0YVNvdXJjZVtdIH0pID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnLndpZGdldHNbaWRdPy5sYWJlbCA/PyAnQXZhbmNlIGRlIG9icmEgKGVzY2VuYSknXG4gICAgb25TZXR0aW5nQ2hhbmdlKHsgaWQsIC4uLmNoYW5nZSB9IGFzIGFueSwgW291dHB1dERhdGFTb3VyY2VKc29uKGlkLCBgRWxlbWVudG9zIGRlIGF2YW5jZSAoJHtsYWJlbH0pYCldKVxuICB9LCBbaWQsIG9uU2V0dGluZ0NoYW5nZV0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByb3BzLm91dHB1dERhdGFTb3VyY2VzPy5sZW5ndGgpIHNhdmUoeyBjb25maWcgfSlcbiAgfSwgW3Byb3BzLm91dHB1dERhdGFTb3VyY2VzLCBjb25maWcsIHNhdmVdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlfSBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1hdmFuY2Utb2JyYS1lc2NlbmFcIj5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIk1hcGEgKG9wY2lvbmFsKVwiPlxuICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3IgdXNlTWFwV2lkZ2V0SWRzPXt1c2VNYXBXaWRnZXRJZHN9IG9uU2VsZWN0PXsoaWRzOiBzdHJpbmdbXSkgPT4geyBzYXZlKHsgdXNlTWFwV2lkZ2V0SWRzOiBpZHMgfSkgfX0gLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJub3RlXCI+XG4gICAgICAgICAgT3BjaW9uYWwuIFNpbiBNYXBhLCBlbCB3aWRnZXQgYWJyZSBlbiBzdSBwcm9waW8gcmVjdWFkcm8gZWwgd2ViIHNjZW5lIMKrQXZhbmNlIGRlIG9icmEgLSBQTE1CwrsgZGVsIHBvcnRhbCBkZSBsYSBTRFAuXG4gICAgICAgICAgQ29uIHVuIHdpZGdldCBNYXBhIChjb24gZXNhIHUgb3RyYSBlc2NlbmEgY29uIGxhcyBjYXBhcyBFMTUsIEkxNiB5IEUxNiksIGNvbG9yZWEgeSBmaWx0cmEgbGFzIGNhcGFzIGRlIGVzZSBNYXBhLlxuICAgICAgICA8L3A+XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiRGF0b3NcIj5cbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz1cIndyYXBcIiBsYWJlbD1cIlVSTCBkZSBsb3MgZGF0b3MgKHNpdGlvIHB1YmxpY2FkbyBvIHNlcnZlLm1qcyBsb2NhbClcIj5cbiAgICAgICAgICA8VGV4dElucHV0IHNpemU9XCJzbVwiIHZhbHVlPXtjb25maWcuc2VydmVyVXJsfSBvbkFjY2VwdFZhbHVlPXt2YWx1ZSA9PiB7IHNhdmUoeyBjb25maWc6IGNvbmZpZy5zZXQoJ3NlcnZlclVybCcsIHZhbHVlLnRyaW0oKS5yZXBsYWNlKC9cXC8kLywgJycpKSB9KSB9fSAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vdGVcIj5cbiAgICAgICAgICBMYSB0YWJsYSBkZSBlbGVtZW50b3MgKGF2YW5jZSB5IGZlY2hhcykgeSBsYXMgaHVlbGxhcyBwcmVkaWFsZXMgc2UgbGVlbiBkZSBlc3RhIFVSTC4gRWwgd2lkZ2V0IGNyZWEgbGEgZnVlbnRlIGRlXG4gICAgICAgICAgZGF0b3MgwqtFbGVtZW50b3MgZGUgYXZhbmNlwrs6IGVsw61nZWxhIGVuIGxvcyB3aWRnZXRzIGRlIEdyw6FmaWNvLCBUYWJsYSwgRmlsdHJvIG8gTGlzdGEuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ1xuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==