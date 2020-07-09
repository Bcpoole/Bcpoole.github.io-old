(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~f075b844"],{

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ "BEPO":
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/*! exports provided: debug, testing, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"debug\\\":true,\\\"testing\\\":true}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkVQTy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///BEPO\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\r\nvar App = (function () {\r\n    function App() {\r\n        this.message = 'Hello World!';\r\n    }\r\n    App.prototype.configureRouter = function (config, router) {\r\n        config.options.pushState = true;\r\n        config.map([\r\n            { route: ['', 'welcome'], name: 'welcome', title: 'Welcome', moduleId: 'pages/welcome' },\r\n            { route: ['resume'], name: 'resume', title: 'Resume', moduleId: 'pages/resume', nav: true }\r\n        ]);\r\n    };\r\n    return App;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHsgUm91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nID0gJ0hlbGxvIFdvcmxkISc7XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBjb25maWcub3B0aW9ucy5wdXNoU3RhdGUgPSB0cnVlO1xuXG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsICd3ZWxjb21lJ10sIG5hbWU6ICd3ZWxjb21lJywgdGl0bGU6ICdXZWxjb21lJywgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJ3BhZ2VzL3dlbGNvbWUnKSB9LFxuICAgICAgeyByb3V0ZTogWydyZXN1bWUnXSwgbmFtZTogJ3Jlc3VtZScsIHRpdGxlOiAnUmVzdW1lJywgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJ3BhZ2VzL3Jlc3VtZScpLCBuYXY6IHRydWUgfVxuICAgIF0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBVUE7QUFSQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"JPst\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".container {\\n  margin-top: 2rem;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuY3NzP2YwMTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app.css\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<template>\\n  <require from=\\\"./app.css\\\"></require>\\n  <require from=\\\"./components/header\\\"></require>\\n  <header></header>\\n  <div class=\\\"container\\\">\\n    <router-view></router-view>\\n  </div>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgPHJlcXVpcmUgZnJvbT1cXFwiLi9hcHAuY3NzXFxcIj48L3JlcXVpcmU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL2NvbXBvbmVudHMvaGVhZGVyXFxcIj48L3JlcXVpcmU+XFxuICA8aGVhZGVyPjwvaGVhZGVyPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "components/header":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-router */ \"4ysu\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\nvar Header = (function () {\r\n    function Header(router) {\r\n        this.router = router;\r\n        this.appTitle = \"Brandon Poole\";\r\n    }\r\n    Header = __decorate([\r\n        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__[\"autoinject\"],\r\n        __metadata(\"design:paramtypes\", [aurelia_router__WEBPACK_IMPORTED_MODULE_1__[\"Router\"]])\r\n    ], Header);\r\n    return Header;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHM/YWYzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIEhlYWRlciB7XG4gIGFwcFRpdGxlID0gXCJCcmFuZG9uIFBvb2xlXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBRkE7QUFHQTtBQUpBO0FBREE7QUFJQTtBQUhBO0FBS0E7QUFBQTtBQUxBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///components/header\n");

/***/ }),

/***/ "components/header.html":
/*!************************************!*\
  !*** ./src/components/header.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n  <nav class=\\\"navbar navbar-expand navbar-dark bg-primary justify-content-between\\\">\\n    <a class=\\\"navbar-brand mb-0 h1\\\" href=\\\"#\\\">\\n      <i class=\\\"fa fa-home\\\"></i>\\n      <span>${appTitle}</span>\\n    </a>\\n    <button class=\\\"navbar-toggler\\\" type=\\\"button\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navbarSupportedContent\\\"\\n      aria-controls=\\\"navbarSupportedContent\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\">\\n      <span class=\\\"navbar-toggler-icon\\\"></span>\\n    </button>\\n    <ul class=\\\"navbar-nav mr-auto\\\">\\n      <li class=\\\"nav-item ${item.isActive ? 'active' : ''}\\\" repeat.for=\\\"item of router.navigation\\\">\\n        <a class=\\\"nav-link\\\" href.bind=\\\"item.href\\\">${item.title}</a>\\n      </li>\\n    </ul>\\n  </nav>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIuaHRtbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5odG1sPzMyYmIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXG4gIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1kYXJrIGJnLXByaW1hcnkganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kIG1iLTAgaDFcXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1ob21lXFxcIj48L2k+XFxuICAgICAgPHNwYW4+JHthcHBUaXRsZX08L3NwYW4+XFxuICAgIDwvYT5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZXJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcXFwiXFxuICAgICAgYXJpYS1jb250cm9scz1cXFwibmF2YmFyU3VwcG9ydGVkQ29udGVudFxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtbGFiZWw9XFxcIlRvZ2dsZSBuYXZpZ2F0aW9uXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZXItaWNvblxcXCI+PC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2IG1yLWF1dG9cXFwiPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW0gJHtpdGVtLmlzQWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31cXFwiIHJlcGVhdC5mb3I9XFxcIml0ZW0gb2Ygcm91dGVyLm5hdmlnYXRpb25cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiBocmVmLmJpbmQ9XFxcIml0ZW0uaHJlZlxcXCI+JHtpdGVtLnRpdGxlfTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9uYXY+XFxuPC90ZW1wbGF0ZT5cXG5cIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///components/header.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ \"BEPO\");\nvar _config_environment_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/environment.json */ \"BEPO\", 1);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ \"fxB9\");\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nfunction configure(aurelia) {\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .feature('resources/index');\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .plugin('aurelia-animator-css');\r\n    aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"debug\"] ? 'debug' : 'warn');\r\n    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"testing\"]) {\r\n        aurelia.use.plugin('aurelia-testing');\r\n    }\r\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVyZWxpYSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAqIGFzIGVudmlyb25tZW50IGZyb20gJy4uL2NvbmZpZy9lbnZpcm9ubWVudC5qc29uJztcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZShQTEFURk9STS5tb2R1bGVOYW1lKCdyZXNvdXJjZXMvaW5kZXgnKSk7XG5cbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAucGx1Z2luKFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWFuaW1hdG9yLWNzc1wiKSk7XG5cbiAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKGVudmlyb25tZW50LmRlYnVnID8gJ2RlYnVnJyA6ICd3YXJuJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oUExBVEZPUk0ubW9kdWxlTmFtZSgnYXVyZWxpYS10ZXN0aW5nJykpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2FwcCcpKSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "pages/resume":
/*!*****************************!*\
  !*** ./src/pages/resume.ts ***!
  \*****************************/
/*! exports provided: Resume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Resume\", function() { return Resume; });\nvar Resume = (function () {\r\n    function Resume() {\r\n    }\r\n    return Resume;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcmVzdW1lLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc3VtZS50cz8yZjVmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXN1bWUge1xuXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///pages/resume\n");

/***/ }),

/***/ "pages/resume.css":
/*!******************************!*\
  !*** ./src/pages/resume.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"JPst\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"iframe {\\n  height: 1000px;\\n  width: 1200px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcmVzdW1lLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9yZXN1bWUuY3NzP2Y1ODYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImlmcmFtZSB7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG4gIHdpZHRoOiAxMjAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///pages/resume.css\n");

/***/ }),

/***/ "pages/resume.html":
/*!*******************************!*\
  !*** ./src/pages/resume.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<template>\\n  <require from=\\\"./resume.css\\\"></require>\\n  <section align=\\\"center\\\">\\n    <iframe src=\\\"http://docs.google.com/gview?url=Bcpoole.github.io/assets/Resume.pdf&embedded=true\\\" frameborder=\\\"0\\\" />\\n  </section>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcmVzdW1lLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmVzdW1lLmh0bWw/YjNkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgPHJlcXVpcmUgZnJvbT1cXFwiLi9yZXN1bWUuY3NzXFxcIj48L3JlcXVpcmU+XFxuICA8c2VjdGlvbiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cXG4gICAgPGlmcmFtZSBzcmM9XFxcImh0dHA6Ly9kb2NzLmdvb2dsZS5jb20vZ3ZpZXc/dXJsPUJjcG9vbGUuZ2l0aHViLmlvL2Fzc2V0cy9SZXN1bWUucGRmJmVtYmVkZGVkPXRydWVcXFwiIGZyYW1lYm9yZGVyPVxcXCIwXFxcIiAvPlxcbiAgPC9zZWN0aW9uPlxcbjwvdGVtcGxhdGU+XFxuXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///pages/resume.html\n");

/***/ }),

/***/ "pages/welcome":
/*!******************************!*\
  !*** ./src/pages/welcome.ts ***!
  \******************************/
/*! exports provided: Welcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Welcome\", function() { return Welcome; });\nvar Welcome = (function () {\r\n    function Welcome() {\r\n        this.githubLink = 'https://github.com/Bcpoole';\r\n        this.linkedinLink = 'https://www.linkedin.com/pub/brandon-poole/61/29a/b75';\r\n    }\r\n    return Welcome;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvd2VsY29tZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy93ZWxjb21lLnRzPzJiNDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdlbGNvbWUge1xuICBnaXRodWJMaW5rID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9CY3Bvb2xlJztcbiAgbGlua2VkaW5MaW5rID0gJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9wdWIvYnJhbmRvbi1wb29sZS82MS8yOWEvYjc1Jztcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///pages/welcome\n");

/***/ }),

/***/ "pages/welcome.css":
/*!*******************************!*\
  !*** ./src/pages/welcome.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"JPst\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"img {\\n  height: 300px;\\n  width: 300px;\\n  margin:25px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvd2VsY29tZS5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvd2VsY29tZS5jc3M/NWZkMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaW1nIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXJnaW46MjVweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pages/welcome.css\n");

/***/ }),

/***/ "pages/welcome.html":
/*!********************************!*\
  !*** ./src/pages/welcome.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<template>\\n  <require from=\\\"./welcome.css\\\"></require>\\n  <section class=\\\"au-animate\\\">\\n    <h2>About Me</h2>\\n    <div>\\n      <p>I'm a Data Engineer who's been using Scala + Apache Spark since January 2017. First it was at a startup named\\n        Drawbridge where\\n        I worked on the Core Graph and Business Intelligence teams creating data pipelining and infrastructure tooling.\\n        Drawbridge was acquired June 2019 by LinkedIn as part of their LinkedIn Marketing Solutions where I now work on\\n        the Data Quality team still under Drawbridge. My other work and passion is infrastructure tooling, having\\n        created querying and sampling frameworks, maintained and enhanced build pipelines, and other fun things.\\n      </p>\\n      <p>I graduated from the University of Alabama in December 2016 with a Bachleors in Comptuer Science. While there I\\n        co-oped at Johnson Outdoors Marine\\n        Electronics (Eufaula, AL) and interned at 42six Solutions (Columbia, MD) and 84.51​°​ (Cincinnati, OH).\\n      </p>\\n      <p>84.51​°​ does consumer data analytics for Kroger and I served as an App Developer Intern. My team works on\\n        creating\\n        Angular 2 web apps with Java backend with Java and C# services that make using our science services easier for\\n        our\\n        analysts.\\n      </p>\\n      <p>42six Solutions is a public contractor startup that was acquired by CSC (now CSRA) prior to my joining. One of\\n        the projects I worked on\\n        was a week­long hackathon using the openFDA API for a FDA contract. The other project I worked on was setting up\\n        and implementing a Hadoop cluster and web app for the FAA.\\n      </p>\\n      <p>My co­op was working as a Process/Test Engineer Co­op at Johnson Outdoors Marine Electronics, a\\n        division of Johnson Outdoors Inc. (NASDAQ: JOUT). I mainly dealt with creating/updating C# applications that\\n        manage\\n        different types of data through Microsoft SQL Server. These applications were usually WPF using MVVM\\n        architectural\\n        pattern through the Caliburn.Micro framework.\\n      </p>\\n      <p>During my free time I hobby in Rust, DM for Dungeons and Dragons 5E, listen to fantasy audiobooks, and cook.\\n      </p>\\n    </div>\\n    <div align=\\\"center\\\">\\n      <a href=\\\"${githubLink}\\\" class=\\\"fa fa-github fa-3x fa-fw\\\" style=\\\"text-decoration: none\\\"></a>\\n      <a href=\\\"${linkedinLink}\\\" class=\\\"fa fa-linkedin-square fa-3x fa-fw\\\" style=\\\"text-decoration: none\\\"></a>\\n    </div>\\n  </section>\\n  <section align=\\\"center\\\">\\n    <img src=\\\"https://Bcpoole.github.io/assets/me.jpg\\\"></img>\\n  </section>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvd2VsY29tZS5odG1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3dlbGNvbWUuaHRtbD9iNWRjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL3dlbGNvbWUuY3NzXFxcIj48L3JlcXVpcmU+XFxuICA8c2VjdGlvbiBjbGFzcz1cXFwiYXUtYW5pbWF0ZVxcXCI+XFxuICAgIDxoMj5BYm91dCBNZTwvaDI+XFxuICAgIDxkaXY+XFxuICAgICAgPHA+SSdtIGEgRGF0YSBFbmdpbmVlciB3aG8ncyBiZWVuIHVzaW5nIFNjYWxhICsgQXBhY2hlIFNwYXJrIHNpbmNlIEphbnVhcnkgMjAxNy4gRmlyc3QgaXQgd2FzIGF0IGEgc3RhcnR1cCBuYW1lZFxcbiAgICAgICAgRHJhd2JyaWRnZSB3aGVyZVxcbiAgICAgICAgSSB3b3JrZWQgb24gdGhlIENvcmUgR3JhcGggYW5kIEJ1c2luZXNzIEludGVsbGlnZW5jZSB0ZWFtcyBjcmVhdGluZyBkYXRhIHBpcGVsaW5pbmcgYW5kIGluZnJhc3RydWN0dXJlIHRvb2xpbmcuXFxuICAgICAgICBEcmF3YnJpZGdlIHdhcyBhY3F1aXJlZCBKdW5lIDIwMTkgYnkgTGlua2VkSW4gYXMgcGFydCBvZiB0aGVpciBMaW5rZWRJbiBNYXJrZXRpbmcgU29sdXRpb25zIHdoZXJlIEkgbm93IHdvcmsgb25cXG4gICAgICAgIHRoZSBEYXRhIFF1YWxpdHkgdGVhbSBzdGlsbCB1bmRlciBEcmF3YnJpZGdlLiBNeSBvdGhlciB3b3JrIGFuZCBwYXNzaW9uIGlzIGluZnJhc3RydWN0dXJlIHRvb2xpbmcsIGhhdmluZ1xcbiAgICAgICAgY3JlYXRlZCBxdWVyeWluZyBhbmQgc2FtcGxpbmcgZnJhbWV3b3JrcywgbWFpbnRhaW5lZCBhbmQgZW5oYW5jZWQgYnVpbGQgcGlwZWxpbmVzLCBhbmQgb3RoZXIgZnVuIHRoaW5ncy5cXG4gICAgICA8L3A+XFxuICAgICAgPHA+SSBncmFkdWF0ZWQgZnJvbSB0aGUgVW5pdmVyc2l0eSBvZiBBbGFiYW1hIGluIERlY2VtYmVyIDIwMTYgd2l0aCBhIEJhY2hsZW9ycyBpbiBDb21wdHVlciBTY2llbmNlLiBXaGlsZSB0aGVyZSBJXFxuICAgICAgICBjby1vcGVkIGF0IEpvaG5zb24gT3V0ZG9vcnMgTWFyaW5lXFxuICAgICAgICBFbGVjdHJvbmljcyAoRXVmYXVsYSwgQUwpIGFuZCBpbnRlcm5lZCBhdCA0MnNpeCBTb2x1dGlvbnMgKENvbHVtYmlhLCBNRCkgYW5kIDg0LjUx4oCLwrDigIsgKENpbmNpbm5hdGksIE9IKS5cXG4gICAgICA8L3A+XFxuICAgICAgPHA+ODQuNTHigIvCsOKAiyBkb2VzIGNvbnN1bWVyIGRhdGEgYW5hbHl0aWNzIGZvciBLcm9nZXIgYW5kIEkgc2VydmVkIGFzIGFuIEFwcCBEZXZlbG9wZXIgSW50ZXJuLiBNeSB0ZWFtIHdvcmtzIG9uXFxuICAgICAgICBjcmVhdGluZ1xcbiAgICAgICAgQW5ndWxhciAyIHdlYiBhcHBzIHdpdGggSmF2YSBiYWNrZW5kIHdpdGggSmF2YSBhbmQgQyMgc2VydmljZXMgdGhhdCBtYWtlIHVzaW5nIG91ciBzY2llbmNlIHNlcnZpY2VzIGVhc2llciBmb3JcXG4gICAgICAgIG91clxcbiAgICAgICAgYW5hbHlzdHMuXFxuICAgICAgPC9wPlxcbiAgICAgIDxwPjQyc2l4IFNvbHV0aW9ucyBpcyBhIHB1YmxpYyBjb250cmFjdG9yIHN0YXJ0dXAgdGhhdCB3YXMgYWNxdWlyZWQgYnkgQ1NDIChub3cgQ1NSQSkgcHJpb3IgdG8gbXkgam9pbmluZy4gT25lIG9mXFxuICAgICAgICB0aGUgcHJvamVjdHMgSSB3b3JrZWQgb25cXG4gICAgICAgIHdhcyBhIHdlZWvCrWxvbmcgaGFja2F0aG9uIHVzaW5nIHRoZSBvcGVuRkRBIEFQSSBmb3IgYSBGREEgY29udHJhY3QuIFRoZSBvdGhlciBwcm9qZWN0IEkgd29ya2VkIG9uIHdhcyBzZXR0aW5nIHVwXFxuICAgICAgICBhbmQgaW1wbGVtZW50aW5nIGEgSGFkb29wIGNsdXN0ZXIgYW5kIHdlYiBhcHAgZm9yIHRoZSBGQUEuXFxuICAgICAgPC9wPlxcbiAgICAgIDxwPk15IGNvwq1vcCB3YXMgd29ya2luZyBhcyBhIFByb2Nlc3MvVGVzdCBFbmdpbmVlciBDb8Ktb3AgYXQgSm9obnNvbiBPdXRkb29ycyBNYXJpbmUgRWxlY3Ryb25pY3MsIGFcXG4gICAgICAgIGRpdmlzaW9uIG9mIEpvaG5zb24gT3V0ZG9vcnMgSW5jLiAoTkFTREFROiBKT1VUKS4gSSBtYWlubHkgZGVhbHQgd2l0aCBjcmVhdGluZy91cGRhdGluZyBDIyBhcHBsaWNhdGlvbnMgdGhhdFxcbiAgICAgICAgbWFuYWdlXFxuICAgICAgICBkaWZmZXJlbnQgdHlwZXMgb2YgZGF0YSB0aHJvdWdoIE1pY3Jvc29mdCBTUUwgU2VydmVyLiBUaGVzZSBhcHBsaWNhdGlvbnMgd2VyZSB1c3VhbGx5IFdQRiB1c2luZyBNVlZNXFxuICAgICAgICBhcmNoaXRlY3R1cmFsXFxuICAgICAgICBwYXR0ZXJuIHRocm91Z2ggdGhlIENhbGlidXJuLk1pY3JvIGZyYW1ld29yay5cXG4gICAgICA8L3A+XFxuICAgICAgPHA+RHVyaW5nIG15IGZyZWUgdGltZSBJIGhvYmJ5IGluIFJ1c3QsIERNIGZvciBEdW5nZW9ucyBhbmQgRHJhZ29ucyA1RSwgbGlzdGVuIHRvIGZhbnRhc3kgYXVkaW9ib29rcywgYW5kIGNvb2suXFxuICAgICAgPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cXG4gICAgICA8YSBocmVmPVxcXCIke2dpdGh1Ykxpbmt9XFxcIiBjbGFzcz1cXFwiZmEgZmEtZ2l0aHViIGZhLTN4IGZhLWZ3XFxcIiBzdHlsZT1cXFwidGV4dC1kZWNvcmF0aW9uOiBub25lXFxcIj48L2E+XFxuICAgICAgPGEgaHJlZj1cXFwiJHtsaW5rZWRpbkxpbmt9XFxcIiBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW4tc3F1YXJlIGZhLTN4IGZhLWZ3XFxcIiBzdHlsZT1cXFwidGV4dC1kZWNvcmF0aW9uOiBub25lXFxcIj48L2E+XFxuICAgIDwvZGl2PlxcbiAgPC9zZWN0aW9uPlxcbiAgPHNlY3Rpb24gYWxpZ249XFxcImNlbnRlclxcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJodHRwczovL0JjcG9vbGUuZ2l0aHViLmlvL2Fzc2V0cy9tZS5qcGdcXFwiPjwvaW1nPlxcbiAgPC9zZWN0aW9uPlxcbjwvdGVtcGxhdGU+XFxuXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///pages/welcome.html\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\nfunction configure(config) {\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC50cz83NDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ })

},[[0,"runtime~app","vendors~2a42e354","vendors~be6b90b8","vendors~0ba1d959","vendors~556c66f2","vendors~72fdf3f2","vendors~50e8d500","vendors~ecff2e3d","vendors~9e0f4621","vendors~203e0718"]]]);