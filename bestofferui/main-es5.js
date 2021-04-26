function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@angular/compiler/src sync recursive":
  /*!*************************************************!*\
    !*** ./node_modules/@angular/compiler/src sync ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCompilerSrcSyncRecursive(module, exports) {
    function webpackEmptyContext(req) {
      var e = new Error("Cannot find module '" + req + "'");
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    }

    webpackEmptyContext.keys = function () {
      return [];
    };

    webpackEmptyContext.resolve = webpackEmptyContext;
    module.exports = webpackEmptyContext;
    webpackEmptyContext.id = "./node_modules/@angular/compiler/src sync recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./default-page/default-page.component */
    "./src/app/default-page/default-page.component.ts");
    /* harmony import */


    var _seller_seller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./seller/seller.component */
    "./src/app/seller/seller.component.ts");
    /* harmony import */


    var _item_list_item_bids_item_bids_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./item-list/item-bids/item-bids.component */
    "./src/app/item-list/item-bids/item-bids.component.ts");
    /* harmony import */


    var _buyer_buyer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./buyer/buyer.component */
    "./src/app/buyer/buyer.component.ts");
    /* harmony import */


    var _item_list_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item-list/item-edit/item-edit.component */
    "./src/app/item-list/item-edit/item-edit.component.ts");
    /* harmony import */


    var _bid_tasks_bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./bid-tasks/bid-edit/bid-edit.component */
    "./src/app/bid-tasks/bid-edit/bid-edit.component.ts");

    var routes = [{
      path: '',
      component: _default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__["DefaultPageComponent"],
      pathMatch: 'full'
    }, {
      path: 'seller',
      component: _seller_seller_component__WEBPACK_IMPORTED_MODULE_3__["SellerComponent"],
      children: [{
        path: 'item/bids/:itemID',
        component: _item_list_item_bids_item_bids_component__WEBPACK_IMPORTED_MODULE_4__["ItemBidsComponent"]
      }, {
        path: 'item/new',
        component: _item_list_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_6__["ItemEditComponent"]
      }, {
        path: 'bidtask/:taskID',
        component: _bid_tasks_bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_7__["BidEditComponent"]
      }]
    }, {
      path: 'buyer',
      component: _buyer_buyer_component__WEBPACK_IMPORTED_MODULE_5__["BuyerComponent"],
      children: [{
        path: 'bidtask/:taskID',
        component: _bid_tasks_bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_7__["BidEditComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'bestofferui';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.navigate(['/']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 25,
      vars: 0,
      consts: [[1, "toolbar"], ["height", "95%", "alt", "InterSystems Logo", "src", "assets/ISC-small.jpg", 2, "margin-right", "15px", "margin-left", "5px"], [1, "title"], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/intersystems", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], [1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/icons8-home-24.png", "alt", "Home"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 1, "navtab"], ["routerLink", "/seller"], ["routerLink", "/buyer"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to BestOffer Bidding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Buyer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".toolbar[_ngcontent-%COMP%] {\n  height: 60px;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  background-color: #195ad2;\n  color: white;\n  font-weight: 600;\n}\n\n.navtab[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  font-weight: bold;\n  width: 50%;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-family: cursive;\n  font-style: italic;\n  font-size: 50px;\n  color: gold;\n}\n\n.bfselect[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n\n.navbar-nav[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\n  background-color: burlywood ;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: lightcyan;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk1YWQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uYXZ0YWIge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogZ29sZDtcbn1cblxuLmJmc2VsZWN0IHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4ubmF2YmFyLW5hdj4uYWN0aXZlPiBhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2QgO1xufVxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcbn1cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogODJweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.config.ts":
  /*!*******************************!*\
    !*** ./src/app/app.config.ts ***!
    \*******************************/

  /*! exports provided: AppConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfig", function () {
      return AppConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppConfig = /*#__PURE__*/function () {
      function AppConfig(http) {
        _classCallCheck(this, AppConfig);

        this.http = http;
      }

      _createClass(AppConfig, [{
        key: "load",
        value: function load() {
          var _this = this;

          var configFile = 'assets/config.json';
          return new Promise(function (resolve, reject) {
            _this.http.get(configFile).toPromise().then(function (response) {
              AppConfig.config = response;
              resolve();
            })["catch"](function (response) {
              reject('Could not load config file "assets/config.json"');
            });
          });
        }
      }]);

      return AppConfig;
    }();

    AppConfig.ɵfac = function AppConfig_Factory(t) {
      return new (t || AppConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppConfig,
      factory: AppConfig.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: initializeApp, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeApp", function () {
      return initializeApp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _default_page_default_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./default-page/default-page.component */
    "./src/app/default-page/default-page.component.ts");
    /* harmony import */


    var _seller_seller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./seller/seller.component */
    "./src/app/seller/seller.component.ts");
    /* harmony import */


    var _buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./buyer/buyer.component */
    "./src/app/buyer/buyer.component.ts");
    /* harmony import */


    var _item_list_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./item-list/item-edit/item-edit.component */
    "./src/app/item-list/item-edit/item-edit.component.ts");
    /* harmony import */


    var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./item-list/item-list.component */
    "./src/app/item-list/item-list.component.ts");
    /* harmony import */


    var _bid_tasks_bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./bid-tasks/bid-edit/bid-edit.component */
    "./src/app/bid-tasks/bid-edit/bid-edit.component.ts");
    /* harmony import */


    var _item_list_item_bids_item_bids_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./item-list/item-bids/item-bids.component */
    "./src/app/item-list/item-bids/item-bids.component.ts");
    /* harmony import */


    var _item_list_item_row_item_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./item-list/item-row/item-row.component */
    "./src/app/item-list/item-row/item-row.component.ts");
    /* harmony import */


    var _filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./filter.pipe */
    "./src/app/filter.pipe.ts");
    /* harmony import */


    var _bid_tasks_bid_tasks_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./bid-tasks/bid-tasks.component */
    "./src/app/bid-tasks/bid-tasks.component.ts");
    /* harmony import */


    var _bid_tasks_bid_task_row_bid_task_row_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./bid-tasks/bid-task-row/bid-task-row.component */
    "./src/app/bid-tasks/bid-task-row/bid-task-row.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");

    function initializeApp(appConfig) {
      return function () {
        return appConfig.load();
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _app_config__WEBPACK_IMPORTED_MODULE_18__["AppConfig"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: initializeApp,
        deps: [_app_config__WEBPACK_IMPORTED_MODULE_18__["AppConfig"]],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _default_page_default_page_component__WEBPACK_IMPORTED_MODULE_6__["DefaultPageComponent"], _seller_seller_component__WEBPACK_IMPORTED_MODULE_7__["SellerComponent"], _buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__["BuyerComponent"], _item_list_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_9__["ItemEditComponent"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_10__["ItemListComponent"], _bid_tasks_bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_11__["BidEditComponent"], _item_list_item_bids_item_bids_component__WEBPACK_IMPORTED_MODULE_12__["ItemBidsComponent"], _item_list_item_row_item_row_component__WEBPACK_IMPORTED_MODULE_13__["ItemRowComponent"], _filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"], _bid_tasks_bid_tasks_component__WEBPACK_IMPORTED_MODULE_15__["BidTasksComponent"], _bid_tasks_bid_task_row_bid_task_row_component__WEBPACK_IMPORTED_MODULE_16__["BidTaskRowComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _default_page_default_page_component__WEBPACK_IMPORTED_MODULE_6__["DefaultPageComponent"], _seller_seller_component__WEBPACK_IMPORTED_MODULE_7__["SellerComponent"], _buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__["BuyerComponent"], _item_list_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_9__["ItemEditComponent"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_10__["ItemListComponent"], _bid_tasks_bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_11__["BidEditComponent"], _item_list_item_bids_item_bids_component__WEBPACK_IMPORTED_MODULE_12__["ItemBidsComponent"], _item_list_item_row_item_row_component__WEBPACK_IMPORTED_MODULE_13__["ItemRowComponent"], _filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"], _bid_tasks_bid_tasks_component__WEBPACK_IMPORTED_MODULE_15__["BidTasksComponent"], _bid_tasks_bid_task_row_bid_task_row_component__WEBPACK_IMPORTED_MODULE_16__["BidTaskRowComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _app_config__WEBPACK_IMPORTED_MODULE_18__["AppConfig"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: initializeApp,
            deps: [_app_config__WEBPACK_IMPORTED_MODULE_18__["AppConfig"]],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/bid-tasks/bid-edit/bid-edit.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/bid-tasks/bid-edit/bid-edit.component.ts ***!
    \**********************************************************/

  /*! exports provided: BidEditComponent */

  /***/
  function srcAppBidTasksBidEditBidEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidEditComponent", function () {
      return BidEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_bid_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/bid-action.service */
    "./src/app/services/bid-action.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BidEditComponent_span_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("previous bid (", ctx_r0.previousBid, ")");
      }
    }

    function BidEditComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var action_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", action_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", action_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", action_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r2);
      }
    }

    var BidEditComponent = /*#__PURE__*/function () {
      function BidEditComponent(bidActionService, activeRoute, router) {
        _classCallCheck(this, BidEditComponent);

        this.bidActionService = bidActionService;
        this.activeRoute = activeRoute;
        this.router = router;
      }

      _createClass(BidEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.activeRoute.params.subscribe(function (params) {
            _this2.selectedBidIndex = +params['taskID'];
            _this2.isSeller = params['isSeller'] === 'true';

            _this2.FormInit();
          });
          this.FormInit();
        }
      }, {
        key: "FormInit",
        value: function FormInit() {
          var _this3 = this;

          this.currentBid = this.bidActionService.bidTasks[this.selectedBidIndex];

          if (this.currentBid.AgreedCostOfItem && !this.isSeller) {
            this.currentBid.BidAmount = this.currentBid.AgreedCostOfItem;
          } else {
            if (this.currentBid.BidAmount > 0 && !this.isSeller) {
              this.previousBid = this.currentBid.BidAmount;
              this.currentBid.BidAmount = null;
            }
          } // minimum bid is 10% below value


          this.minimumBid = this.currentBid.Value - this.currentBid.Value * .10;
          this.currentBid.Action = this.currentBid.Actions[0];
          this.currentBid.BidAmount;
          this.bidForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'Seller': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentBid.SellerName),
            'Item': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentBid.Item),
            'Value': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentBid.Value),
            'Weight': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentBid.Weight),
            'Bid': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentBid.BidAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(this.minimumBid)]),
            'CounterBid': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentBid.CounterBidAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(this.minimumBid)]),
            'Action': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentBid.Action, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
          this.bidForm.controls['Bid'].disable();
          this.bidForm.controls['CounterBid'].disable();

          if (this.isSeller) {
            if (this.currentBid.Action === 'CounterBid') {
              this.bidForm.controls['CounterBid'].enable(); // will be enabled if counter bid action selected
            }
          } else {
            if (this.currentBid.Action === 'Bid') {
              this.bidForm.controls['Bid'].enable();
            }
          }

          this.bidForm.controls['Action'].valueChanges.subscribe(function (action) {
            if (action === 'CounterBid') {
              _this3.bidForm.controls['CounterBid'].enable();
            } else {
              _this3.bidForm.controls['CounterBid'].disable();
            }

            if (action === 'Bid') {
              _this3.bidForm.controls['Bid'].enable();
            } else {
              _this3.bidForm.controls['Bid'].disable();
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          this.currentBid.BidAmount = this.bidForm.controls['Bid'].value;
          this.currentBid.CounterBidAmount = this.bidForm.controls['CounterBid'].value;
          this.currentBid.Action = this.bidForm.controls['Action'].value;
          this.bidActionService.updateBid(this.currentBid).then(function (resp) {
            _this4.bidActionService.bidTasks.splice(_this4.selectedBidIndex, 1);

            _this4.bidActionService.bidActionsChanged.next(_this4.bidActionService.bidTasks);

            _this4.onCancel();
          }, function (err) {
            alert(err.error.summary);
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          var link = this.isSeller ? '/seller' : '/buyer';
          this.router.navigate([link]);
        }
      }]);

      return BidEditComponent;
    }();

    BidEditComponent.ɵfac = function BidEditComponent_Factory(t) {
      return new (t || BidEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bid_action_service__WEBPACK_IMPORTED_MODULE_2__["BidActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    BidEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BidEditComponent,
      selectors: [["app-bid-edit"]],
      decls: 51,
      vars: 6,
      consts: [[1, "row", 2, "padding-top", "0px"], [1, "col-xs-12"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-group"], ["for", "seller"], ["type", "text", "id", "seller", "formControlName", "Seller", "readonly", "", 1, "form-control"], ["for", "Item"], ["type", "text", "id", "Item", "formControlName", "Item", "readonly", "", 1, "form-control"], [1, "form-inline"], ["for", "value", 1, "col-xs-2"], ["type", "number", "id", "value", "formControlName", "Value", "readonly", "", 1, "form-control", 2, "width", "100px"], ["for", "weight", 1, "col-xs-2"], ["type", "number", "id", "weight", "formControlName", "Weight", "readonly", "", 1, "form-control", 2, "width", "100px"], [1, "form-inline", 2, "padding-top", "10px"], ["for", "Bid", 1, "col-xs-2"], ["type", "number", "id", "value", "formControlName", "Bid", 1, "form-control", 2, "width", "100px"], ["for", "CounterBid", 1, "col-xs-4", 2, "width", "120px", "padding-left", "5px"], ["type", "number", "id", "CounterBid", "formControlName", "CounterBid", 1, "form-control", 2, "width", "100px"], ["style", "font-weight: bolder; color: forestgreen; padding-right: 25px;", 4, "ngIf"], [1, "form-inline", "col-xs-12"], ["for", "Action"], [4, "ngFor", "ngForOf"], [1, "row", 2, "padding", "10px"], [1, "col-xs-12", "btn-toolbar"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [2, "font-weight", "bolder", "color", "forestgreen", "padding-right", "25px"], ["type", "radio", "name", "Action", "formControlName", "Action", 3, "id", "value"], [3, "for"]],
      template: function BidEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BidEditComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Value $");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Bid $");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Counter Bid $");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, BidEditComponent_span_37_Template, 2, 1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bid Action:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, BidEditComponent_div_43_Template, 4, 4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BidEditComponent_Template_button_click_49_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentBid.Title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.bidForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previousBid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("minimum bid (", ctx.minimumBid, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentBid.Actions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.bidForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]],
      styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 4px 1px 2px;\n  text-align: left;\n  width: 80px;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 2px 1px 2px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlkLXRhc2tzL2JpZC1lZGl0L2JpZC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9iaWQtdGFza3MvYmlkLWVkaXQvYmlkLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCA0cHggMXB4IDJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogMnB4IDFweCAycHggMXB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bid-edit',
          templateUrl: './bid-edit.component.html',
          styleUrls: ['./bid-edit.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_bid_action_service__WEBPACK_IMPORTED_MODULE_2__["BidActionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bid-tasks/bid-task-row/bid-task-row.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/bid-tasks/bid-task-row/bid-task-row.component.ts ***!
    \******************************************************************/

  /*! exports provided: BidTaskRowComponent */

  /***/
  function srcAppBidTasksBidTaskRowBidTaskRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidTaskRowComponent", function () {
      return BidTaskRowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function BidTaskRowComponent_a_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Seller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["../"];
    };

    function BidTaskRowComponent_a_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Value");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Counter Bid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BidTaskRowComponent_a_0_div_12_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isSeller);
      }
    }

    function BidTaskRowComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.SellerName);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        isSeller: a0
      };
    };

    var _c2 = function _c2(a1, a2) {
      return ["bidtask", a1, a2];
    };

    var BidTaskRowComponent = /*#__PURE__*/function () {
      function BidTaskRowComponent() {
        _classCallCheck(this, BidTaskRowComponent);
      }

      _createClass(BidTaskRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BidTaskRowComponent;
    }();

    BidTaskRowComponent.ɵfac = function BidTaskRowComponent_Factory(t) {
      return new (t || BidTaskRowComponent)();
    };

    BidTaskRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BidTaskRowComponent,
      selectors: [["app-bid-task-row"]],
      inputs: {
        item: ["bidTaskRowData", "item"],
        index: "index",
        isSeller: "isSeller"
      },
      decls: 15,
      vars: 13,
      consts: [["style", "cursor: pointer", 3, "routerLink", 4, "ngIf"], [2, "max-height", "200px", "overflow-y", "auto"], [1, "active", 2, "cursor", "pointer", 3, "routerLink"], ["routerLinkActive", "active", 1, "row", "table-row", 2, "width", "100%"], [1, "col-xs-4", "table-cell", 2, "width", "36%"], [1, "col-xs-1", "table-cell", 2, "width", "10%"], ["class", "col-xs-5 table-cell", "style", "width: 23%;", 4, "ngIf"], [2, "cursor", "pointer", 3, "routerLink"], [1, "row", "table-header", 2, "width", "100%"], [1, "col-xs-5", "table-cell", 2, "width", "23%"]],
      template: function BidTaskRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BidTaskRowComponent_a_0_Template, 13, 3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BidTaskRowComponent_div_14_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c2, ctx.index, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.isSeller)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.BidAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.CounterBidAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSeller);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: [".table-row[_ngcontent-%COMP%]:hover {\n  background-color: lightblue;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: small;\n  background-color: lightskyblue;\n  margin-left: 0px;\n}\n\n.zTable-borders[_ngcontent-%COMP%] {\n  border: 2px solid;\n  border-color: aqua\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  margin-left: 0px;\n  margin-right: 0px;\n  display: inline-table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi50YWJsZS1yb3cge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnpUYWJsZS1ib3JkZXJzIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYXF1YVxufVxuXG4udGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbn1cbiJdfQ== */", ".table-cell[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 2px 0px 2px 0px;\n  overflow-x: hidden;\n  overflow-y: visible;\n  min-height: inherit;\n}\n\n.table-row.active[_ngcontent-%COMP%] {\n  background-color: lightgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlkLXRhc2tzL2JpZC10YXNrLXJvdy9iaWQtdGFzay1yb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9iaWQtdGFza3MvYmlkLXRhc2stcm93L2JpZC10YXNrLXJvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDJweCAwcHggMnB4IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xufVxuXG4udGFibGUtcm93LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidTaskRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bid-task-row',
          templateUrl: './bid-task-row.component.html',
          styleUrls: ['../../shared/table.css', './bid-task-row.component.css']
        }]
      }], function () {
        return [];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bidTaskRowData']
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isSeller: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/bid-tasks/bid-tasks.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/bid-tasks/bid-tasks.component.ts ***!
    \**************************************************/

  /*! exports provided: BidTasksComponent */

  /***/
  function srcAppBidTasksBidTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidTasksComponent", function () {
      return BidTasksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_bid_action_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/bid-action.service */
    "./src/app/services/bid-action.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _bid_task_row_bid_task_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bid-task-row/bid-task-row.component */
    "./src/app/bid-tasks/bid-task-row/bid-task-row.component.ts");

    function BidTasksComponent_app_bid_task_row_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-bid-task-row", 3);
      }

      if (rf & 2) {
        var task_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bidTaskRowData", task_r1)("index", i_r2)("isSeller", ctx_r0.isSeller);
      }
    }

    var BidTasksComponent = /*#__PURE__*/function () {
      function BidTasksComponent(bidActionService) {
        _classCallCheck(this, BidTasksComponent);

        this.bidActionService = bidActionService;
        this.workList = [];
        this.isSeller = true;
      }

      _createClass(BidTasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.bidTaskSubscription = this.bidActionService.bidActionsChanged.subscribe(function (worklist) {
            _this5.workList = worklist;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.bidTaskSubscription.unsubscribe();
        }
      }]);

      return BidTasksComponent;
    }();

    BidTasksComponent.ɵfac = function BidTasksComponent_Factory(t) {
      return new (t || BidTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bid_action_service__WEBPACK_IMPORTED_MODULE_1__["BidActionService"]));
    };

    BidTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BidTasksComponent,
      selectors: [["app-bid-tasks"]],
      inputs: {
        isSeller: "isSeller"
      },
      decls: 4,
      vars: 1,
      consts: [[2, "margin-top", "0px"], [1, "zTable-borders"], [3, "bidTaskRowData", "index", "isSeller", 4, "ngFor", "ngForOf"], [3, "bidTaskRowData", "index", "isSeller"]],
      template: function BidTasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bidding Tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BidTasksComponent_app_bid_task_row_3_Template, 1, 3, "app-bid-task-row", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _bid_task_row_bid_task_row_component__WEBPACK_IMPORTED_MODULE_3__["BidTaskRowComponent"]],
      styles: [".table-row[_ngcontent-%COMP%]:hover {\n  background-color: lightblue;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: small;\n  background-color: lightskyblue;\n  margin-left: 0px;\n}\n\n.zTable-borders[_ngcontent-%COMP%] {\n  border: 2px solid;\n  border-color: aqua\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  margin-left: 0px;\n  margin-right: 0px;\n  display: inline-table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi50YWJsZS1yb3cge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnpUYWJsZS1ib3JkZXJzIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYXF1YVxufVxuXG4udGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbn1cbiJdfQ== */", "active[_ngcontent-%COMP%] {\n  background-color: lightgreen;\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  padding: 2px 0px 2px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlkLXRhc2tzL2JpZC10YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYmlkLXRhc2tzL2JpZC10YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLnRhYmxlLWNlbGwge1xuICBwYWRkaW5nOiAycHggMHB4IDJweCAwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidTasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bid-tasks',
          templateUrl: './bid-tasks.component.html',
          styleUrls: ['../shared/table.css', './bid-tasks.component.css']
        }]
      }], function () {
        return [{
          type: _services_bid_action_service__WEBPACK_IMPORTED_MODULE_1__["BidActionService"]
        }];
      }, {
        isSeller: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/buyer/buyer.component.ts":
  /*!******************************************!*\
    !*** ./src/app/buyer/buyer.component.ts ***!
    \******************************************/

  /*! exports provided: BuyerComponent */

  /***/
  function srcAppBuyerBuyerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyerComponent", function () {
      return BuyerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/item.service */
    "./src/app/services/item.service.ts");
    /* harmony import */


    var _services_bid_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/bid-action.service */
    "./src/app/services/bid-action.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _bid_tasks_bid_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../bid-tasks/bid-tasks.component */
    "./src/app/bid-tasks/bid-tasks.component.ts");

    function BuyerComponent_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var buyer_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", buyer_r2.userID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](buyer_r2.contact);
      }
    }

    var BuyerComponent = /*#__PURE__*/function () {
      function BuyerComponent(UserService, bidActionService, router) {
        _classCallCheck(this, BuyerComponent);

        this.UserService = UserService;
        this.bidActionService = bidActionService;
        this.router = router;
      }

      _createClass(BuyerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.UserService.fetchUsers();
          this.usersChangedSub = this.UserService.UsersChanged.subscribe(function (users) {
            _this6.buyers = users.filter(function (user) {
              return user.type == 'buyer';
            });
          });
          this.selectedBuyer = this.UserService.selectedBuyer;

          if (this.selectedBuyer != -1) {
            this.bidActionService.getBidsForUser(this.selectedBuyer, 'buyer');
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.usersChangedSub.unsubscribe();
        }
      }, {
        key: "onChangeBuyer",
        value: function onChangeBuyer() {
          this.UserService.selectedBuyer = this.selectedBuyer;

          if (this.selectedBuyer != -1) {
            this.bidActionService.getBidsForUser(this.selectedBuyer, 'buyer');
          }

          this.router.navigate(['/buyer']);
        }
      }]);

      return BuyerComponent;
    }();

    BuyerComponent.ɵfac = function BuyerComponent_Factory(t) {
      return new (t || BuyerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bid_action_service__WEBPACK_IMPORTED_MODULE_2__["BidActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    BuyerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BuyerComponent,
      selectors: [["app-buyer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"], _services_bid_action_service__WEBPACK_IMPORTED_MODULE_2__["BidActionService"]])],
      decls: 16,
      vars: 3,
      consts: [[1, "container-fluid"], ["buyerForm", "ngForm"], [1, "row"], [1, "col-sm-1"], [1, "col-sm-6"], ["name", "selectBuyer", "id", "selectBuyer", 1, "bfselect", 3, "ngModel", "ngModelChange", "change"], ["value", "-1"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-8", "itemlist", 2, "width", "1000px"], [3, "isSeller"], [1, "col-sm-4"], [3, "value"]],
      template: function BuyerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuyerComponent_Template_select_ngModelChange_6_listener($event) {
            return ctx.selectedBuyer = $event;
          })("change", function BuyerComponent_Template_select_change_6_listener() {
            return ctx.onChangeBuyer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "---Please select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BuyerComponent_option_9_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-bid-tasks", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedBuyer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buyers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSeller", false);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _bid_tasks_bid_tasks_component__WEBPACK_IMPORTED_MODULE_7__["BidTasksComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".item-list[_ngcontent-%COMP%] {\n  border-style: double;\n  border-width: 4px;\n  border-color: mediumblue;\n  color: crimson;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 150px;\n}\n\n.bfselect[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5ZXIvYnV5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYnV5ZXIvYnV5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWxpc3Qge1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1jb2xvcjogbWVkaXVtYmx1ZTtcbiAgY29sb3I6IGNyaW1zb247XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5iZnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cbiJdfQ== */"]
    });
    BuyerComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BuyerComponent,
      factory: BuyerComponent.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-buyer',
          templateUrl: './buyer.component.html',
          styleUrls: ['./buyer.component.css'],
          providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"], _services_bid_action_service__WEBPACK_IMPORTED_MODULE_2__["BidActionService"]]
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _services_bid_action_service__WEBPACK_IMPORTED_MODULE_2__["BidActionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/default-page/default-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/default-page/default-page.component.ts ***!
    \********************************************************/

  /*! exports provided: DefaultPageComponent */

  /***/
  function srcAppDefaultPageDefaultPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function () {
      return DefaultPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DefaultPageComponent = /*#__PURE__*/function () {
      function DefaultPageComponent() {
        _classCallCheck(this, DefaultPageComponent);
      }

      _createClass(DefaultPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DefaultPageComponent;
    }();

    DefaultPageComponent.ɵfac = function DefaultPageComponent_Factory(t) {
      return new (t || DefaultPageComponent)();
    };

    DefaultPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DefaultPageComponent,
      selectors: [["app-default-page"]],
      decls: 1,
      vars: 0,
      consts: [["alt", "BestOffer UI", "src", "./assets/DefaultBackground.png", 2, "opacity", "0.75", "display", "block", "margin-left", "auto", "margin-right", "auto", "width", "85%", "height", "auto"]],
      template: function DefaultPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtcGFnZS9kZWZhdWx0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-default-page',
          templateUrl: './default-page.component.html',
          styleUrls: ['./default-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/filter.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/filter.pipe.ts ***!
    \********************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(value, filterString, propName) {
          if (value.length === 0 || filterString === '') {
            return value;
          }

          var resultArray = [];

          var _iterator = _createForOfIteratorHelper(value),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;

              if (item[propName] === filterString) {
                resultArray.push(item);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return resultArray;
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe.ɵfac = function FilterPipe_Factory(t) {
      return new (t || FilterPipe)();
    };

    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: FilterPipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/item-list/item-bids/item-bids.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/item-list/item-bids/item-bids.component.ts ***!
    \************************************************************/

  /*! exports provided: ItemBidsComponent */

  /***/
  function srcAppItemListItemBidsItemBidsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemBidsComponent", function () {
      return ItemBidsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_bid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/bid.service */
    "./src/app/services/bid.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ItemBidsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bid_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bid_r1.buyer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bid_r1.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bid_r1.bidAmount);
      }
    }

    var ItemBidsComponent = /*#__PURE__*/function () {
      function ItemBidsComponent(BidsService, activeRoute) {
        _classCallCheck(this, ItemBidsComponent);

        this.BidsService = BidsService;
        this.activeRoute = activeRoute;
      }

      _createClass(ItemBidsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.bids = [];
          this.bidsChangedSub = this.BidsService.bidsChanged.subscribe(function (bids) {
            _this7.bids = bids.filter(function (bid) {
              return bid.status != '' && bid.status != null;
            });
          });
          this.activeRoute.params.subscribe(function (params) {
            _this7.itemID = +params['itemID'];

            _this7.BidsService.getBids(_this7.itemID);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.bidsChangedSub.unsubscribe();
        }
      }]);

      return ItemBidsComponent;
    }();

    ItemBidsComponent.ɵfac = function ItemBidsComponent_Factory(t) {
      return new (t || ItemBidsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bid_service__WEBPACK_IMPORTED_MODULE_1__["BidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ItemBidsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemBidsComponent,
      selectors: [["app-item-bids"]],
      decls: 11,
      vars: 1,
      consts: [[2, "margin-top", "0px"], [1, "zTable-borders", 2, "width", "80%", "overflow-x", "auto"], [1, "row", "table-header", 2, "width", "100%"], [1, "col-xs-4", "table-cell", 2, "width", "40%"], [1, "col-xs-1", "table-cell", 2, "width", "30%"], ["class", "row table-row ", "style", "width: 100%; ", 4, "ngFor", "ngForOf"], [1, "row", "table-row", 2, "width", "100%"], [1, "col-xs-4", "table-cell", 2, "width", "40%", "overflow-y", "scroll", "min-width", "60px"]],
      template: function ItemBidsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Current Bids for Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buyer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ItemBidsComponent_div_10_Template, 7, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bids);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".table-row[_ngcontent-%COMP%]:hover {\n  background-color: lightblue;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: small;\n  background-color: lightskyblue;\n  margin-left: 0px;\n}\n\n.zTable-borders[_ngcontent-%COMP%] {\n  border: 2px solid;\n  border-color: aqua\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  margin-left: 0px;\n  margin-right: 0px;\n  display: inline-table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi50YWJsZS1yb3cge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnpUYWJsZS1ib3JkZXJzIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYXF1YVxufVxuXG4udGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbn1cbiJdfQ== */", ".table-row[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1saXN0L2l0ZW0tYmlkcy9pdGVtLWJpZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tbGlzdC9pdGVtLWJpZHMvaXRlbS1iaWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemBidsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item-bids',
          templateUrl: './item-bids.component.html',
          styleUrls: ['../../shared/table.css', './item-bids.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_bid_service__WEBPACK_IMPORTED_MODULE_1__["BidService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/item-list/item-edit/item-edit.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/item-list/item-edit/item-edit.component.ts ***!
    \************************************************************/

  /*! exports provided: ItemEditComponent */

  /***/
  function srcAppItemListItemEditItemEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemEditComponent", function () {
      return ItemEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/item.service */
    "./src/app/services/item.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ItemEditComponent = /*#__PURE__*/function () {
      function ItemEditComponent(itemService, userService, router) {
        _classCallCheck(this, ItemEditComponent);

        this.itemService = itemService;
        this.userService = userService;
        this.router = router;
        this.sellerID = this.userService.selectedSeller;
      }

      _createClass(ItemEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var AddrFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'street': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'zip': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('USA')
          });
          this.itemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'value': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(99999)]),
            'weight': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(400)]),
            'Address': AddrFormGroup
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          var newItem = this.itemForm.value;
          newItem.seller = this.sellerID;
          this.itemService.addItem(newItem).then(function (resp) {
            _this8.itemService.items.push(resp);

            _this8.itemService.itemsChanged.next(_this8.itemService.items);

            _this8.onCancel();
          }, function (err) {
            alert(err.error.summary);
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.router.navigate(['/seller']);
        }
      }]);

      return ItemEditComponent;
    }();

    ItemEditComponent.ɵfac = function ItemEditComponent_Factory(t) {
      return new (t || ItemEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ItemEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemEditComponent,
      selectors: [["app-item-edit"]],
      decls: 56,
      vars: 2,
      consts: [[1, "row", 2, "padding-top", "0px"], [1, "col-xs-12"], [1, "form-group-lg", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-group"], ["for", "description"], ["type", "text", "id", "description", "formControlName", "description", "rows", "3", 1, "form-control"], [1, "form-inline"], ["for", "value", 1, "col-xs-2"], ["type", "number", "id", "value", "formControlName", "value", 1, "form-control", 2, "width", "100px"], ["for", "weight", 1, "col-xs-2"], ["type", "number", "id", "weight", "formControlName", "weight", 1, "form-control", 2, "width", "100px"], ["formGroupName", "Address"], ["for", "street", 2, "width", "40px"], ["type", "text", "name", "street", "id", "street", "formControlName", "street", 1, "form-control", 2, "width", "100%"], ["for", "city", 1, "col-xs-1", 2, "width", "35px"], ["type", "text", "name", "city", "id", "city", "formControlName", "city", 1, "form-control", 2, "width", "200px"], ["for", "state", 1, "col-xs-1", 2, "width", "50px"], ["type", "text", "name", "state", "id", "state", "formControlName", "state", 1, "form-control", 2, "width", "100px"], [1, "form-inline", 2, "padding-top", "10px"], ["for", "zip", 1, "col-xs-1", 2, "width", "35px"], ["type", "text", "name", "zip", "id", "zip", "formControlName", "zip", 1, "form-control", 2, "width", "150px"], [1, "form-group", 2, "padding-left", "5px"], ["for", "country", 1, "col-xs-2", 2, "width", "60px"], ["type", "text", "name", "country", "id", "country", "formControlName", "country", 1, "form-control", 2, "width", "200px"], [1, "row", 2, "padding", "10px"], [1, "col-xs-12", "btn-toolbar"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]],
      template: function ItemEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Bidding Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ItemEditComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Value $");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Item Originating Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Street");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Zip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemEditComponent_Template_button_click_54_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.itemForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
      styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 4px 1px 2px;\n  text-align: right;\n  width: 80px;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 2px 1px 2px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1saXN0L2l0ZW0tZWRpdC9pdGVtLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9pdGVtLWxpc3QvaXRlbS1lZGl0L2l0ZW0tZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDRweCAxcHggMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogMnB4IDFweCAycHggMXB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item-edit',
          templateUrl: './item-edit.component.html',
          styleUrls: ['./item-edit.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/item-list/item-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/item-list/item-list.component.ts ***!
    \**************************************************/

  /*! exports provided: ItemListComponent */

  /***/
  function srcAppItemListItemListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemListComponent", function () {
      return ItemListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/item.service */
    "./src/app/services/item.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _item_row_item_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./item-row/item-row.component */
    "./src/app/item-list/item-row/item-row.component.ts");

    function ItemListComponent_app_item_row_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-item-row", 9);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemRowData", item_r1)("index", i_r2);
      }
    }

    var _c0 = function _c0() {
      return ["/", "seller"];
    };

    var ItemListComponent = /*#__PURE__*/function () {
      function ItemListComponent(itemService) {
        _classCallCheck(this, ItemListComponent);

        this.itemService = itemService;
        this.items = [];
      }

      _createClass(ItemListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.items = []; // this.items = this.itemService.getItems();

          this.itemSubscription = this.itemService.itemsChanged.subscribe(function (items) {
            _this9.items = items;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.itemSubscription.unsubscribe();
        }
      }]);

      return ItemListComponent;
    }();

    ItemListComponent.ɵfac = function ItemListComponent_Factory(t) {
      return new (t || ItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]));
    };

    ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemListComponent,
      selectors: [["app-item-list"]],
      decls: 17,
      vars: 3,
      consts: [[2, "margin-top", "0px"], [1, "zTable-borders"], [2, "cursor", "pointer", 3, "routerLink"], [1, "row", "table-header", 2, "width", "100%"], [1, "col-xs-4", "table-cell", 2, "width", "36%"], [1, "col-xs-1", "table-cell", 2, "width", "10%"], [1, "col-xs-5", "table-cell", 2, "width", "33%"], [2, "max-height", "250px", "overflow-y", "auto"], [3, "itemRowData", "index", 4, "ngFor", "ngForOf"], [3, "itemRowData", "index"]],
      template: function ItemListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Items up for Bidding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ItemListComponent_app_item_row_16_Template, 1, 2, "app-item-row", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _item_row_item_row_component__WEBPACK_IMPORTED_MODULE_4__["ItemRowComponent"]],
      styles: [".table-row[_ngcontent-%COMP%]:hover {\n  background-color: lightblue;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: small;\n  background-color: lightskyblue;\n  margin-left: 0px;\n}\n\n.zTable-borders[_ngcontent-%COMP%] {\n  border: 2px solid;\n  border-color: aqua\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  margin-left: 0px;\n  margin-right: 0px;\n  display: inline-table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi50YWJsZS1yb3cge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnpUYWJsZS1ib3JkZXJzIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYXF1YVxufVxuXG4udGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbn1cbiJdfQ== */", "active[_ngcontent-%COMP%] {\n  background-color: lightgreen;\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  padding: 2px 0px 2px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLnRhYmxlLWNlbGwge1xuICBwYWRkaW5nOiAycHggMHB4IDJweCAwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item-list',
          templateUrl: './item-list.component.html',
          styleUrls: ['../shared/table.css', './item-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/item-list/item-row/item-row.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/item-list/item-row/item-row.component.ts ***!
    \**********************************************************/

  /*! exports provided: ItemRowComponent */

  /***/
  function srcAppItemListItemRowItemRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemRowComponent", function () {
      return ItemRowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a2) {
      return ["item", "bids", a2];
    };

    var ItemRowComponent = /*#__PURE__*/function () {
      function ItemRowComponent() {
        _classCallCheck(this, ItemRowComponent);
      }

      _createClass(ItemRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemRowComponent;
    }();

    ItemRowComponent.ɵfac = function ItemRowComponent_Factory(t) {
      return new (t || ItemRowComponent)();
    };

    ItemRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemRowComponent,
      selectors: [["app-item-row"]],
      inputs: {
        item: ["itemRowData", "item"],
        index: "index"
      },
      decls: 12,
      vars: 8,
      consts: [[1, "active", 2, "cursor", "pointer", 3, "routerLink"], ["routerLinkActive", "active", 1, "row", "table-row", 2, "width", "100%"], [1, "col-xs-4", "table-cell", 2, "width", "36%"], [1, "col-xs-1", "table-cell", 2, "width", "10%"], [1, "col-xs-5", "table-cell", 2, "width", "33%"]],
      template: function ItemRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.item.ID));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.weight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.sellerName);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".table-cell[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 2px 0px 2px 0px;\n  overflow-x: hidden;\n}\n\n.table-row.active[_ngcontent-%COMP%] {\n  background-color: lightgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1saXN0L2l0ZW0tcm93L2l0ZW0tcm93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tbGlzdC9pdGVtLXJvdy9pdGVtLXJvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDJweCAwcHggMnB4IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4udGFibGUtcm93LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbiJdfQ== */", ".table-row[_ngcontent-%COMP%]:hover {\n  background-color: lightblue;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: small;\n  background-color: lightskyblue;\n  margin-left: 0px;\n}\n\n.zTable-borders[_ngcontent-%COMP%] {\n  border: 2px solid;\n  border-color: aqua\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  margin-left: 0px;\n  margin-right: 0px;\n  display: inline-table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhYmxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi50YWJsZS1yb3cge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnpUYWJsZS1ib3JkZXJzIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYXF1YVxufVxuXG4udGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item-row',
          templateUrl: './item-row.component.html',
          styleUrls: ['./item-row.component.css', '../../shared/table.css']
        }]
      }], function () {
        return [];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['itemRowData']
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/model/itemBidThreadModel.ts":
  /*!*********************************************!*\
    !*** ./src/app/model/itemBidThreadModel.ts ***!
    \*********************************************/

  /*! exports provided: itemBidThreadModel */

  /***/
  function srcAppModelItemBidThreadModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "itemBidThreadModel", function () {
      return itemBidThreadModel;
    });

    var itemBidThreadModel = function itemBidThreadModel(id, bidAmount, buyerID, finalBidAmount, itemID, status, buyer) {
      _classCallCheck(this, itemBidThreadModel);

      this.id = id;
      this.bidAmount = bidAmount;
      this.buyerID = buyerID;
      this.finalBidAmount = finalBidAmount;
      this.itemID = itemID;
      this.status = status;
      this.buyer = buyer;
    };
    /***/

  },

  /***/
  "./src/app/model/itemModel.ts":
  /*!************************************!*\
    !*** ./src/app/model/itemModel.ts ***!
    \************************************/

  /*! exports provided: itemModel */

  /***/
  function srcAppModelItemModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "itemModel", function () {
      return itemModel;
    });

    var itemModel = function itemModel(ID, sellerID, sellerName, initialDate, Status, Value, Description, weight, originationCity, originationState) {
      _classCallCheck(this, itemModel);

      this.ID = ID;
      this.sellerID = sellerID;
      this.sellerName = sellerName;
      this.initialDate = initialDate;
      this.Status = Status;
      this.Value = Value;
      this.Description = Description;
      this.weight = weight;
      this.originationCity = originationCity;
      this.originationState = originationState;
    };
    /***/

  },

  /***/
  "./src/app/seller/seller.component.ts":
  /*!********************************************!*\
    !*** ./src/app/seller/seller.component.ts ***!
    \********************************************/

  /*! exports provided: SellerComponent */

  /***/
  function srcAppSellerSellerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerComponent", function () {
      return SellerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/item.service */
    "./src/app/services/item.service.ts");
    /* harmony import */


    var _services_bid_action_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/bid-action.service */
    "./src/app/services/bid-action.service.ts");
    /* harmony import */


    var _services_bid_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/bid.service */
    "./src/app/services/bid.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../item-list/item-list.component */
    "./src/app/item-list/item-list.component.ts");
    /* harmony import */


    var _bid_tasks_bid_tasks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../bid-tasks/bid-tasks.component */
    "./src/app/bid-tasks/bid-tasks.component.ts");

    function SellerComponent_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var seller_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", seller_r2.userID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", seller_r2.contact, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/", "seller", "item", "new"];
    };

    var SellerComponent = /*#__PURE__*/function () {
      function SellerComponent(userService, itemService, bidActionService, router) {
        _classCallCheck(this, SellerComponent);

        this.userService = userService;
        this.itemService = itemService;
        this.bidActionService = bidActionService;
        this.router = router;
        this.workListChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(SellerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.userService.fetchUsers();
          this.usersChangedSub = this.userService.UsersChanged.subscribe(function (users) {
            _this10.sellers = users.filter(function (user) {
              return user.type == 'seller';
            });
          });
          this.selectedSeller = this.userService.selectedSeller;

          if (this.selectedSeller != -1) {
            this.itemService.getItemsForUser(this.selectedSeller);
            this.bidActionService.getBidsForUser(this.selectedSeller, 'seller');
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.usersChangedSub.unsubscribe();
        }
      }, {
        key: "onChangeSeller",
        value: function onChangeSeller() {
          this.itemService.getItemsForUser(this.selectedSeller);
          this.userService.selectedSeller = this.selectedSeller;
          this.bidActionService.getBidsForUser(this.selectedSeller, 'seller');
          this.router.navigate(['/seller']);
        }
      }]);

      return SellerComponent;
    }();

    SellerComponent.ɵfac = function SellerComponent_Factory(t) {
      return new (t || SellerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bid_action_service__WEBPACK_IMPORTED_MODULE_3__["BidActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    SellerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SellerComponent,
      selectors: [["app-seller"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _services_bid_service__WEBPACK_IMPORTED_MODULE_4__["BidService"], _services_bid_action_service__WEBPACK_IMPORTED_MODULE_3__["BidActionService"]])],
      decls: 28,
      vars: 6,
      consts: [[1, "container-fluid"], ["sellerForm", "ngForm"], [1, "row"], [1, "col-sm-1"], [1, "col-sm-6"], ["name", "selectSeller", "id", "selectSeller", 1, "bfselect", 3, "ngModel", "ngModelChange", "change"], ["value", "-1"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-8", 2, "width", "1000px"], [1, "col-sm-3"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-success", 2, "margin-top", "45px", 3, "routerLink", "disabled"], [1, "col-sm-8"], [1, "col-sm-12", "title"], [3, "isSeller"], [1, "col-sm-4"], [1, "col-sm-12"], [3, "value"]],
      template: function SellerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellerComponent_Template_select_ngModelChange_6_listener($event) {
            return ctx.selectedSeller = $event;
          })("change", function SellerComponent_Template_select_change_6_listener() {
            return ctx.onChangeSeller();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "---Please select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SellerComponent_option_9_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-item-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-bid-tasks", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedSeller);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sellers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("disabled", ctx.selectedSeller == 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSeller", true);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemListComponent"], _bid_tasks_bid_tasks_component__WEBPACK_IMPORTED_MODULE_10__["BidTasksComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: [".item-list[_ngcontent-%COMP%] {\n  border-style: double;\n  border-width: 4px;\n  border-color: mediumblue;\n  color: crimson;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 150px;\n}\n\n.bfselect[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyL3NlbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zZWxsZXIvc2VsbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1saXN0IHtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci13aWR0aDogNHB4O1xuICBib3JkZXItY29sb3I6IG1lZGl1bWJsdWU7XG4gIGNvbG9yOiBjcmltc29uO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uYmZzZWxlY3Qge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG4iXX0= */"]
    });
    SellerComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SellerComponent,
      factory: SellerComponent.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-seller',
          templateUrl: './seller.component.html',
          styleUrls: ['./seller.component.css'],
          providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _services_bid_service__WEBPACK_IMPORTED_MODULE_4__["BidService"], _services_bid_action_service__WEBPACK_IMPORTED_MODULE_3__["BidActionService"]]
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]
        }, {
          type: _services_bid_action_service__WEBPACK_IMPORTED_MODULE_3__["BidActionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/bid-action.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/bid-action.service.ts ***!
    \************************************************/

  /*! exports provided: BidActionService */

  /***/
  function srcAppServicesBidActionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidActionService", function () {
      return BidActionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/compiler/src/util */
    "./node_modules/@angular/compiler/src/util.js");
    /* harmony import */


    var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts"); // @Injectable({
    //   providedIn: 'root'
    // })


    var BidActionService = /*#__PURE__*/function () {
      function BidActionService(dataService, userService) {
        _classCallCheck(this, BidActionService);

        this.dataService = dataService;
        this.userService = userService;
        this.bidActionsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.bidTasks = [];
      }

      _createClass(BidActionService, [{
        key: "getBidsForUser",
        value: function getBidsForUser(userID, userType) {
          var _this11 = this;

          var filteredUsers = this.userService.users.filter(function (user) {
            return user.userID === userID && user.type === userType;
          });
          var userName = filteredUsers[0].contact;
          this.bidTasks.length = 0;
          this.dataService.fetchBidTasks(userName).subscribe(function (response) {
            response.forEach(function (task) {
              var sellerUser = _this11.userService.users.filter(function (user) {
                return user.userID == task.Sellerid && user.type === 'seller';
              })[0];

              task.SellerName = Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(sellerUser) ? sellerUser.name : '';

              _this11.bidTasks.push(task);
            });

            _this11.bidActionsChanged.next(_this11.bidTasks);
          });
        }
        /* bid update PUT payload
        {
          "Action":"Bid",
          "FormValues": {
            "Bid Amount":425,
            "Counter Bid Amount":533
        }
        }
        */

      }, {
        key: "updateBid",
        value: function updateBid(bidAction) {
          var formValues = {
            "Bid Amount": bidAction.BidAmount,
            "Counter Bid Amount": bidAction.CounterBidAmount
          };
          var bidMessage = {
            "Action": bidAction.Action,
            "FormValues": formValues
          };
          return this.dataService.updateBid(bidAction.ID, bidMessage).toPromise();
        }
      }]);

      return BidActionService;
    }();

    BidActionService.ɵfac = function BidActionService_Factory(t) {
      return new (t || BidActionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    BidActionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BidActionService,
      factory: BidActionService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidActionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/bid.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/bid.service.ts ***!
    \*****************************************/

  /*! exports provided: BidService */

  /***/
  function srcAppServicesBidServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidService", function () {
      return BidService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");

    var BidService = /*#__PURE__*/function () {
      function BidService(dataService) {
        _classCallCheck(this, BidService);

        this.dataService = dataService;
        this.bidsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(BidService, [{
        key: "getBids",
        value: function getBids(ItemID) {
          var _this12 = this;

          return this.dataService.fetchItemBids(ItemID).subscribe(function (itemBids) {
            _this12.bidsChanged.next(itemBids);
          });
        }
      }]);

      return BidService;
    }();

    BidService.ɵfac = function BidService_Factory(t) {
      return new (t || BidService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    BidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BidService,
      factory: BidService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _model_itemModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/itemModel */
    "./src/app/model/itemModel.ts");
    /* harmony import */


    var _model_itemBidThreadModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../model/itemBidThreadModel */
    "./src/app/model/itemBidThreadModel.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http; // private serveraddr = "http://192.169.250.2:52773";
        // private serveraddr = "http://"+AppConfig.config.ip+":52773";

        this.serveraddr = "http://" + _app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].config.ip + ":" + _app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].config.port;
      }

      _createClass(DataService, [{
        key: "getActiveUsers",
        value: function getActiveUsers() {
          console.log(_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].config);
          console.log('server=' + this.serveraddr);
          var reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('Active', '1');
          return this.http.get(this.serveraddr + '/bestoffer/api/users', {
            params: reqParams
          });
        }
      }, {
        key: "fetchItems",
        value: function fetchItems() {
          var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();

          if (user != null) {
            reqParams = reqParams.append('seller', user.toString());
          }

          if (status != null) {
            reqParams = reqParams.append('status', status);
          }

          return this.http.get(this.serveraddr + '/bestoffer/api/items', {
            params: reqParams
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (responseData) {
            var itemsArray = [];

            for (var key in responseData) {
              var item = new _model_itemModel__WEBPACK_IMPORTED_MODULE_3__["itemModel"](responseData[key].ID, responseData[key].SellerId, responseData[key].Seller.name, responseData[key].InitialDate, responseData[key].Status, responseData[key].Value, responseData[key].Description, responseData[key].Weight, responseData[key].OriginationAddress.City, responseData[key].OriginationAddress.State);
              itemsArray.push(item);
            }

            return itemsArray;
          }));
        }
      }, {
        key: "fetchItemBids",
        value: function fetchItemBids(itemId) {
          var reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('item', itemId.toString());
          return this.http.get(this.serveraddr + '/bestoffer/api/items/bids', {
            params: reqParams
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (responseData) {
            var bidsArray = [];

            for (var key in responseData) {
              var itemBids = new _model_itemBidThreadModel__WEBPACK_IMPORTED_MODULE_4__["itemBidThreadModel"](responseData[key].ID, responseData[key].BidAmount, responseData[key].BuyerID, responseData[key].FinalBidAmount, responseData[key].ItemID, responseData[key].Status, responseData[key].Buyer.name);
              bidsArray.push(itemBids);
            }

            return bidsArray;
          }));
        }
      }, {
        key: "postItem",
        value: function postItem(item) {
          return this.http.post(this.serveraddr + '/bestoffer/api/items/new', item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (responseData) {
            var item = new _model_itemModel__WEBPACK_IMPORTED_MODULE_3__["itemModel"](responseData.ID, responseData.SellerId, responseData.Seller.name, responseData.InitialDate, responseData.Status, responseData.Value, responseData.Description, responseData.Weight, responseData.OriginationAddress.City, responseData.OriginationAddress.State);
            return item;
          }));
        }
      }, {
        key: "fetchBidTasks",
        value: function fetchBidTasks(userName) {
          var url = this.serveraddr + '/bestoffer/api/bids/' + userName;
          var request = this.http.get(url);
          return request;
        }
      }, {
        key: "updateBid",
        value: function updateBid(bidID, bidMessage) {
          var url = this.serveraddr + '/bestoffer/api/bids/' + bidID;
          return this.http.put(url, bidMessage);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/item.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/item.service.ts ***!
    \******************************************/

  /*! exports provided: ItemService */

  /***/
  function srcAppServicesItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemService", function () {
      return ItemService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");

    var ItemService = /*#__PURE__*/function () {
      function ItemService(dataService) {
        _classCallCheck(this, ItemService);

        this.dataService = dataService;
        this.itemsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.items = [// new itemModel("1",1,"Rich Taylor",new Date("06/01/2020"),"Pending",
          //               333.77,"Test Item 1",23.5,"Milford","CT"),
          // new itemModel("2",4,"George Patton",new Date("05/15/2020"),"Pending",
          //               44.55,"Test Item 2",15.5,"Balitmore","MD")
        ];
      }

      _createClass(ItemService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getItems",
        value: function getItems() {
          return this.items;
        }
      }, {
        key: "getItem",
        value: function getItem(itemID) {
          return this.items[itemID];
        }
      }, {
        key: "getItemsForUser",
        value: function getItemsForUser(userID) {
          var _this13 = this;

          // return this.items.filter(item => item.sellerID == userID)
          return this.dataService.fetchItems(userID, 'Pending').subscribe(function (items) {
            _this13.items = items;

            _this13.itemsChanged.next(items);
          });
        }
      }, {
        key: "addItem",
        value: function addItem(newItem) {
          return this.dataService.postItem(newItem).toPromise();
        }
      }]);

      return ItemService;
    }();

    ItemService.ɵfac = function ItemService_Factory(t) {
      return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ItemService,
      factory: ItemService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(dataService) {
        _classCallCheck(this, UserService);

        this.dataService = dataService;
        this.UsersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selectedSeller = -1;
        this.selectedBuyer = -1;
        this.users = [// new userModel(1,"seller","Rich",true,"Rich Taylor","abc@somewhere.org"),
          // new userModel(2,"buyer","Qing",true,"Qing Xu","person@myco.cn"),
          // new userModel(3,"buyer","Robert",true,"Robert Smith","rsmith@dealersareus.xx"),
          // new userModel(4,"seller","George",true,"George Patton","bloodandguts@army.xx")
        ];
      }

      _createClass(UserService, [{
        key: "selectUser",
        value: function selectUser(userID) {}
      }, {
        key: "getUsers",
        value: function getUsers(usertype) {
          return this.getUsersByType(usertype);
        }
      }, {
        key: "getUserContact",
        value: function getUserContact(userID) {
          return this.users.find(function (user) {
            return userID === userID;
          }).contact;
        }
      }, {
        key: "getUsersByType",
        value: function getUsersByType(usertype) {
          if (!this.users.length) {
            this.fetchUsers();
          }

          return this.users.filter(function (user) {
            return user.type == usertype;
          });
        }
      }, {
        key: "fetchUsers",
        value: function fetchUsers() {
          var _this14 = this;

          this.dataService.getActiveUsers().subscribe(function (response) {
            _this14.users = response;

            _this14.UsersChanged.next(_this14.users);
          });
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/ritaylor/git/bestofferui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map