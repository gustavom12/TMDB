(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MainComponent/app.component */ "./src/app/components/MainComponent/app.component.ts");
/* harmony import */ var _components_home_most_popular_most_popular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/most-popular/most-popular.component */ "./src/app/components/home/most-popular/most-popular.component.ts");
/* harmony import */ var _components_home_top_rated_component_top_rated_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/top-rated-component/top-rated-component.component */ "./src/app/components/home/top-rated-component/top-rated-component.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/search/search.component */ "./src/app/components/home/search/search.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-page/search-page.component */ "./src/app/components/search-page/search-page.component.ts");
/* harmony import */ var _route_route_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./route/route.module */ "./src/app/route/route.module.ts");
/* harmony import */ var _directives_onload_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/onload.directive */ "./src/app/directives/onload.directive.ts");
/* harmony import */ var _components_movieid_movieid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movieid/movieid.component */ "./src/app/components/movieid/movieid.component.ts");
/* harmony import */ var _components_home_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/upcoming/upcoming.component */ "./src/app/components/home/upcoming/upcoming.component.ts");
/* harmony import */ var _components_home_latest_latest_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/latest/latest.component */ "./src/app/components/home/latest/latest.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _directives_movievideo_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/movievideo.directive */ "./src/app/directives/movievideo.directive.ts");
/* harmony import */ var _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/favourites/favourites.component */ "./src/app/components/favourites/favourites.component.ts");




//COMPONENTS
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _route_route_module__WEBPACK_IMPORTED_MODULE_11__["RouteModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_home_most_popular_most_popular_component__WEBPACK_IMPORTED_MODULE_5__["MostPopularComponent"],
        _components_home_top_rated_component_top_rated_component_component__WEBPACK_IMPORTED_MODULE_6__["TopRatedComponentComponent"],
        _components_home_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_10__["SearchPageComponent"],
        _directives_onload_directive__WEBPACK_IMPORTED_MODULE_12__["OnloadDirective"],
        _components_movieid_movieid_component__WEBPACK_IMPORTED_MODULE_13__["MovieidComponent"],
        _components_home_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_14__["UpcomingComponent"],
        _components_home_latest_latest_component__WEBPACK_IMPORTED_MODULE_15__["LatestComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _directives_movievideo_directive__WEBPACK_IMPORTED_MODULE_17__["MovievideoDirective"],
        _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_18__["FavouritesComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _route_route_module__WEBPACK_IMPORTED_MODULE_11__["RouteModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_home_most_popular_most_popular_component__WEBPACK_IMPORTED_MODULE_5__["MostPopularComponent"],
                    _components_home_top_rated_component_top_rated_component_component__WEBPACK_IMPORTED_MODULE_6__["TopRatedComponentComponent"],
                    _components_home_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_10__["SearchPageComponent"],
                    _directives_onload_directive__WEBPACK_IMPORTED_MODULE_12__["OnloadDirective"],
                    _components_movieid_movieid_component__WEBPACK_IMPORTED_MODULE_13__["MovieidComponent"],
                    _components_home_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_14__["UpcomingComponent"],
                    _components_home_latest_latest_component__WEBPACK_IMPORTED_MODULE_15__["LatestComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _directives_movievideo_directive__WEBPACK_IMPORTED_MODULE_17__["MovievideoDirective"],
                    _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_18__["FavouritesComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _route_route_module__WEBPACK_IMPORTED_MODULE_11__["RouteModule"]
                ],
                providers: [],
                bootstrap: [_components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/MainComponent/app.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/MainComponent/app.component.ts ***!
  \***********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");






const _c0 = ["Container"];
class MainComponent {
    constructor(http) {
        this.http = http;
        this.i = 1;
        this.getMovies = (pelis, url) => this.http
            .get(url)
            .subscribe((res) => (this.x = res), (err) => {
            this.Container.nativeElement.innerHTML = `<h2 class="text-center">Error:${err.statusText}</h2>`;
        }, () => {
            pelis.push(...this.x.results);
        });
    }
    getFirts20(pelis, Url) {
        this.i++;
        if (pelis.length === 2)
            this.getMovies(pelis, `${Url}&page=${this.i}`);
        if (pelis.length === 5)
            this.getMovies(pelis, `${Url}&page=${this.i}`);
        else
            this.getMovies(pelis, `${Url}&page=${this.i}`);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["MainComponent"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Container = _t.first);
    } }, decls: 3, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9hcHAuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'MainComponent',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { Container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['Container']
        }] }); })();


/***/ }),

/***/ "./src/app/components/favourites/favourites.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/favourites/favourites.component.ts ***!
  \***************************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_favourites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/favourites.service */ "./src/app/servicios/favourites.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_onload_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/onload.directive */ "./src/app/directives/onload.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function FavouritesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You 've not any Favourite yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FavouritesComponent_div_4_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const movie_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", movie_r3.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", movie_r3.id, "");
} }
function FavouritesComponent_div_4_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const movie_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", movie_r3.id, "");
} }
function FavouritesComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavouritesComponent_div_4_div_1_img_1_Template, 1, 2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavouritesComponent_div_4_div_1_img_2_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouritesComponent_div_4_div_1_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const movie_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.removeOnlyOne(movie_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movie_r3.poster_path !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movie_r3.poster_path === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.release_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ShorterText", movie_r3.overview)("slice", 150)("end", "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.overview);
} }
function FavouritesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavouritesComponent_div_4_div_1_Template, 12, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.movies);
} }
class FavouritesComponent {
    constructor(favservice) {
        this.favservice = favservice;
        this.movies = JSON.parse(localStorage.getItem("favourites"));
        this.noneMovie = false;
    }
    ngOnInit() {
        console.log(this.movies);
        if (this.movies.length <= 0) {
            this.noneMovie = true;
        }
    }
    deleteAll() {
        this.movies = [];
        localStorage.setItem("favourites", JSON.stringify(this.movies));
        this.noneMovie = true;
    }
    removeOnlyOne(movie) {
        console.log(movie);
        this.favservice.removeMovie(movie);
        this.movies = JSON.parse(localStorage.getItem("favourites"));
    }
}
FavouritesComponent.ɵfac = function FavouritesComponent_Factory(t) { return new (t || FavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_favourites_service__WEBPACK_IMPORTED_MODULE_1__["FavouritesService"])); };
FavouritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavouritesComponent, selectors: [["app-favourites"]], decls: 5, vars: 2, consts: [[1, "favouriteContent"], [1, "text-center", "btn", "btn-outline-danger", 3, "click"], ["class", "noneMovies", 4, "ngIf"], ["class", "pelis", 4, "ngIf"], [1, "noneMovies"], [1, "text-center"], [1, "pelis"], ["class", "peli", 4, "ngFor", "ngForOf"], [1, "peli"], ["alt", "", 3, "src", "routerLink", 4, "ngIf"], ["src", "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "alt", "", 3, "routerLink", 4, "ngIf"], [1, "text"], [3, "ShorterText", "slice", "end"], [1, "x", 3, "click"], ["alt", "", 3, "src", "routerLink"], ["src", "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "alt", "", 3, "routerLink"]], template: function FavouritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouritesComponent_Template_span_click_1_listener() { return ctx.deleteAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavouritesComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavouritesComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noneMovie);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noneMovie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _directives_onload_directive__WEBPACK_IMPORTED_MODULE_3__["OnloadDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\n.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  position: relative;\n  border-bottom: 1px #727272 solid;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transition: all 0.5s linear;\n  position: absolute;\n  left: 91%;\n  top: 1px;\n  height: 40px;\n}\n.input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: all 0.5s linear;\n  transform: scale(1.1);\n}\n.pelis[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  top: 9vh;\n  margin-bottom: 20vh;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 10%;\n  margin-right: 10%;\n  border: 1px solid #a9a9a9;\n  border-radius: 20px;\n  padding: 10px 15px;\n  box-shadow: 0 2px 8px #0000007e;\n  margin-top: 12px;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 141px;\n  width: 94px;\n  border-top-left-radius: 10px;\n  border-right: 1px solid #dadada;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #646464;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n@media (max-width: 500px) {\n  .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    left: 80%;\n  }\n}\n.favouriteContent[_ngcontent-%COMP%] {\n  position: relative;\n  top: 9vh;\n  display: flex;\n  flex-direction: column;\n  min-height: 95vh;\n}\n.favouriteContent[_ngcontent-%COMP%]   .noneMovies[_ngcontent-%COMP%] {\n  margin-top: 5vh;\n}\n.favouriteContent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 15%;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.pelis[_ngcontent-%COMP%] {\n  top: 0vh;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%] {\n  width: 25px;\n  font-size: 35px;\n  position: relative;\n  top: -25px;\n  cursor: pointer;\n}\n@media (max-width: 500px) {\n  .favouriteContent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEREk7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDR1I7QURGSTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7QUNJUjtBREhBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ01KO0FETEk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNPUjtBRE5RO0VBQ0ksaUJBQUE7QUNRWjtBRFBRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQ1NaO0FEUlE7RUFDSSxlQUFBO0FDVVo7QURUUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDV1o7QURWUTtFQUNJLGNBQUE7QUNZWjtBRFRBO0VBRVE7SUFDSSxTQUFBO0VDV1Y7QUFDRjtBQXJFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBdUVKO0FBdEVJO0VBQ0ksZUFBQTtBQXdFUjtBQXRFSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXdFUjtBQXZFQTtFQUNJLFFBQUE7QUEwRUo7QUF4RVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUEwRVo7QUF4RUE7RUFFUTtJQUNJLFVBQUE7RUEwRVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy9mYXZvdXJpdGVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIHRvcDogMTB2aFxyXG4gICAgaW5wdXRcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGhlaWdodDogNDJweFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCAjNzI3MjcyIHNvbGlkXHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIGJ1dHRvblxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhclxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSBcclxuICAgICAgICBsZWZ0OiA5MSVcclxuICAgICAgICB0b3A6ICAxcHhcclxuICAgICAgICBoZWlnaHQ6IDQwcHhcclxuICAgIGJ1dHRvbjpob3ZlclxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhclxyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxyXG4ucGVsaXNcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmhcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICB0b3A6IDl2aFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjB2aFxyXG4gICAgLnBlbGlcclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJVxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOSBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4ICMwMDAwMDA3ZVxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHhcclxuICAgICAgICAudGV4dFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweFxyXG4gICAgICAgIGltZ1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNDFweFxyXG4gICAgICAgICAgICB3aWR0aDogOTRweFxyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4IFxyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGFkYWRhXHJcbiAgICAgICAgaDJcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4XHJcbiAgICAgICAgaDNcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjQ2NDY0XHJcbiAgICAgICAgcFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbVxyXG4gICAgICAgIFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KVxyXG4gICAgLmlucHV0XHJcbiAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgIGxlZnQ6IDgwJSIsIi5pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHZoO1xufVxuLmlucHV0IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggIzcyNzI3MiBzb2xpZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5wdXQgYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDkxJTtcbiAgdG9wOiAxcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5pbnB1dCBidXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnBlbGlzIHtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOXZoO1xuICBtYXJnaW4tYm90dG9tOiAyMHZoO1xufVxuLnBlbGlzIC5wZWxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4ICMwMDAwMDA3ZTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5wZWxpcyAucGVsaSAudGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnBlbGlzIC5wZWxpIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxNDFweDtcbiAgd2lkdGg6IDk0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYWRhZGE7XG59XG4ucGVsaXMgLnBlbGkgaDIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucGVsaXMgLnBlbGkgaDMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNjQ2NDY0O1xufVxuLnBlbGlzIC5wZWxpIHAge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5pbnB1dCBidXR0b24ge1xuICAgIGxlZnQ6IDgwJTtcbiAgfVxufVxuLmZhdm91cml0ZUNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiA5NXZoO1xufVxuLmZhdm91cml0ZUNvbnRlbnQgLm5vbmVNb3ZpZXMge1xuICBtYXJnaW4tdG9wOiA1dmg7XG59XG4uZmF2b3VyaXRlQ29udGVudCBzcGFuIHtcbiAgd2lkdGg6IDE1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGVsaXMge1xuICB0b3A6IDB2aDtcbn1cbi5wZWxpcyAucGVsaSAueCB7XG4gIHdpZHRoOiAyNXB4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmZhdm91cml0ZUNvbnRlbnQgc3BhbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favourites',
                templateUrl: './favourites.component.html',
                styleUrls: ['./favourites.component.sass']
            }]
    }], function () { return [{ type: _servicios_favourites_service__WEBPACK_IMPORTED_MODULE_1__["FavouritesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [[1, "logo", "text-center"], ["href", "https://gustavom12.github.io/GustavoMercado/"], [1, "me"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TMDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Simulation Site ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Go to my blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Created by Gustavo Mercado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #010e44;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 15vh;\n  position: relative;\n  z-index: 1000;\n  top: 0vh;\n}\nfooter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  float: right;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n  transition: all 0.3s linear;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  transition: all 0.3s linear;\n  transform: scale(1.1);\n}\n.logo[_ngcontent-%COMP%] {\n  width: 25%;\n  color: #00fffb;\n  font-size: 30px;\n  font-weight: 700;\n}\n.me[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 20px;\n}\n@media (max-width: 900px) {\n  footer[_ngcontent-%COMP%] {\n    top: 9vh;\n  }\n}\n@media (max-width: 500px) {\n  .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  a[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    top: 9vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0RKO0FBRkE7RUFDSSxtQkRGUTtFQ0dSLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FBS0o7QUFKSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBTVI7QUFMSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBT1I7QUFOSTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQVFSO0FBTkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNKO0FBUkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFXSjtBQVRBO0VBQ0k7SUFDSSxRQUFBO0VBWU47QUFDRjtBQVpBO0VBQ0k7SUFDSSxhQUFBO0VBY047O0VBYkU7SUFDSSxpQkFBQTtFQWdCTjs7RUFmRTtJQUNJLFFBQUE7RUFrQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiRtYWluY29sb3I6ICMwMTBlNDRcblxuYm9keVxuICAgIG1hcmdpbjogMFxuICAgIHBhZGRpbmc6IDBcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwMTBlNDQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTV2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwO1xuICB0b3A6IDB2aDtcbn1cbmZvb3RlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG59XG5mb290ZXIgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDI1JTtcbiAgY29sb3I6ICMwMGZmZmI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICBmb290ZXIge1xuICAgIHRvcDogOXZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBhIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgdG9wOiA5dmg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    toggle() {
        const $navbarContent = document.querySelector(".nav-content");
        $navbarContent.classList.toggle('active');
    }
    scrollToElement(el) {
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    ngAfterViewChecked() {
        this.trending = document.querySelector(".Containerrr");
        this.Trailers = document.querySelector(".latestContainer");
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 0, consts: [["routerLink", "/", "rel", "noopener noreferrer", 1, "logo"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "fas", "fa-bars"], [1, "nav-content"], ["routerLink", "/", 3, "click"], ["routerLink", "/Favourites"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TMDB SITE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_6_listener() { return ctx.scrollToElement(ctx.trending); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() { return ctx.scrollToElement(ctx.Trailers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Trailers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Favourites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.navbar-toggler[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: none;\n}\nnav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 9vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: #010e44;\n  position: fixed;\n  z-index: 100000;\n}\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 34px;\n  margin-left: 20px;\n}\n.nav-content[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 20px;\n  display: flex;\n}\n.nav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 22px;\n  margin-right: 20px;\n  cursor: pointer;\n}\n.nav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7991f3;\n  transition: all 0.2s ease-in-out;\n  transform: scale(1.1);\n  text-decoration: none;\n}\n.active[_ngcontent-%COMP%] {\n  display: block;\n  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  padding-bottom: 20px;\n}\n@media (max-width: 600px) {\n  .nav-content[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .active[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 1000;\n    display: flex;\n    flex-direction: column;\n    background: #010e44;\n    top: 9vh;\n    width: 100%;\n  }\n  .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 28px;\n  }\n  .active[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .active[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  .active[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    cursor: pointer;\n  }\n  nav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-top: 5px;\n    color: #ffffff;\n  }\n}\n@media (max-width: 900px) {\n  .nav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@keyframes slide-bottom {\n  0% {\n    transform: translateY(-100px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0RKO0FBRkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUtKO0FBRkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJEWlE7RUNhUixlQUFBO0VBQ0EsZUFBQTtBQUtKO0FBSkk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU1SO0FBTEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQVFKO0FBTkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVFSO0FBUEk7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBU1I7QUFQQTtFQUNJLGNBQUE7RUFFQSxzRUFBQTtFQUNBLG9CQUFBO0FBVUo7QUFSQTtFQUVJO0lBQ0ksYUFBQTtFQVVOOztFQVRFO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJEcERJO0lDcURKLFFBQUE7SUFDQSxXQUFBO0VBWU47RUFYTTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUFhVjtFQVpNO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0VBY1Y7RUFiVTtJQUNJLFVBQUE7RUFlZDtFQWRVO0lBQ0ksVUFBQTtFQWdCZDs7RUFmRTtJQUVJLG1CQUFBO0VBaUJOO0VBaEJNO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VBa0JWO0VBaEJNO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUFrQlY7QUFDRjtBQWxCQTtFQUVRO0lBQ0ksZUFBQTtFQW1CVjtBQUNGO0FBTEE7RUFDSTtJQUVJLDZCQUFBO0VBaUJOO0VBZkU7SUFFSSwwQkFBQTtFQWlCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJG1haW5jb2xvcjogIzAxMGU0NFxuXG5ib2R5XG4gICAgbWFyZ2luOiAwXG4gICAgcGFkZGluZzogMFxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5uYXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMTBlNDQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDAwO1xufVxubmF2IC5sb2dvIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLm5hdi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5uYXYtY29udGVudCBhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2LWNvbnRlbnQgYTpob3ZlciB7XG4gIGNvbG9yOiAjNzk5MWYzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWJvdHRvbSAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLWJvdHRvbSAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5uYXYtY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5hY3RpdmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiAjMDEwZTQ0O1xuICAgIHRvcDogOXZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5hY3RpdmUgPiBhIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIC5hY3RpdmUgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuYWN0aXZlIGZvcm0gaW5wdXQge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgLmFjdGl2ZSBmb3JtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuXG4gIG5hdiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBuYXYgYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG5hdiAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5uYXYtY29udGVudCBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1ib3R0b20ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWJvdHRvbSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ "./src/app/components/home/search/search.component.ts");
/* harmony import */ var _most_popular_most_popular_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./most-popular/most-popular.component */ "./src/app/components/home/most-popular/most-popular.component.ts");
/* harmony import */ var _upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcoming/upcoming.component */ "./src/app/components/home/upcoming/upcoming.component.ts");
/* harmony import */ var _latest_latest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./latest/latest.component */ "./src/app/components/home/latest/latest.component.ts");
/* harmony import */ var _top_rated_component_top_rated_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-rated-component/top-rated-component.component */ "./src/app/components/home/top-rated-component/top-rated-component.component.ts");







class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-most-popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-upcoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-top-rated-component");
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"], _most_popular_most_popular_component__WEBPACK_IMPORTED_MODULE_2__["MostPopularComponent"], _upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_3__["UpcomingComponent"], _latest_latest_component__WEBPACK_IMPORTED_MODULE_4__["LatestComponent"], _top_rated_component_top_rated_component_component__WEBPACK_IMPORTED_MODULE_5__["TopRatedComponentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/latest/latest.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/home/latest/latest.component.ts ***!
  \************************************************************/
/*! exports provided: LatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestComponent", function() { return LatestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/serviciouno.service */ "./src/app/servicios/serviciouno.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_movievideo_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/movievideo.directive */ "./src/app/directives/movievideo.directive.ts");





function LatestComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function LatestComponent_div_6_Template_img_mouseenter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const peli_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.passbg(peli_r1.backdrop_path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const peli_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appMovievideo", peli_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", peli_r1.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r1.title);
} }
class LatestComponent {
    constructor(service) {
        this.service = service;
        this.key = '4bab412957a2b13c2e912eb8e7e3f691';
        this.Url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US&page=1';
        this.pelis = [];
        this.bgimg = "pci1ArYW7oJ2eyTo2NMYEKHHiCP.jpg";
        this.i = 2;
        this.getMovies = (pelis, url) => this.service.getMovies(pelis, url);
        this.getMore20 = (pelis, Url, i) => {
            this.i++;
            this.service.getFirts20(pelis, Url, i);
        };
    }
    passbg(img) {
        this.bgimg = img;
        const $divimg = document.querySelector(".divimg");
        $divimg.classList.toggle("dnone");
        setTimeout(() => {
            $divimg.classList.toggle("dnone");
        }, 1);
    }
    ngOnInit() {
        this.getMovies(this.pelis, this.Url);
    }
}
LatestComponent.ɵfac = function LatestComponent_Factory(t) { return new (t || LatestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__["ServiciounoService"])); };
LatestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LatestComponent, selectors: [["app-latest"]], decls: 8, vars: 4, consts: [[1, "latestContainer"], [1, "divimg"], [1, "backgroundblack"], [1, "title", "text-center"], [1, "pelis"], ["class", "peli", 3, "appMovievideo", 4, "ngFor", "ngForOf"], [1, "peli", 3, "appMovievideo"], ["peli", ""], [3, "src", "mouseenter"], [1, "text-center"]], template: function LatestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Latest movies's trailers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LatestComponent_div_6_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(https://image.tmdb.org/t/p/w500/", ctx.bgimg, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pelis);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _directives_movievideo_directive__WEBPACK_IMPORTED_MODULE_3__["MovievideoDirective"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.latestContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #ffffff;\n  position: relative;\n  z-index: 5;\n  top: -20px;\n}\n.latestContainer[_ngcontent-%COMP%]   .divimg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  filter: grayscale(45%) brightness(25%);\n  -webkit-filter: grayscale(45%) brightness(25%);\n  -moz-filter: grayscale(45%) brightness(25%);\n  z-index: -1;\n  height: 390px;\n  width: 100%;\n  position: absolute;\n  top: -10px;\n  animation: fade 0.5s cubic-bezier(0.19, 1, 0.22, 1) both;\n}\n.latestContainer[_ngcontent-%COMP%]   .pelis[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-content: flex-start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  overflow-x: scroll;\n}\n.latestContainer[_ngcontent-%COMP%]   .pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.latestContainer[_ngcontent-%COMP%]   .pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 160px;\n  border-radius: 20px;\n  border: 1px solid #ffffff;\n  cursor: pointer;\n}\n.latestContainer[_ngcontent-%COMP%]   .pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  filter: grayscale(13%);\n  -webkit-filter: grayscale(13%);\n  -moz-filter: grayscale(13%);\n}\n.latestContainer[_ngcontent-%COMP%]   .pelis[_ngcontent-%COMP%]   .fa-play[_ngcontent-%COMP%]:before {\n  position: relative;\n  top: 85px;\n  left: 48%;\n  font-size: 35px;\n  transition: all 0.3s linear;\n  cursor: pointer;\n  display: none;\n}\n.vote[_ngcontent-%COMP%] {\n  position: relative;\n  top: -30px;\n  background: #010e44;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: 15%;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid #018859;\n}\n.vote[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 22px;\n  position: relative;\n  top: 3px;\n  right: -3px;\n}\n.vote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 10px;\n  top: -8px;\n  right: -2px;\n}\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.dnone[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2xhdGVzdC9sYXRlc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFHQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDREo7QUFGQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFLSjtBQUpJO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdEQUFBO0FBTVI7QUFMSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFPUjtBQU5RO0VBQ0ksaUJBQUE7QUFRWjtBQVBZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQVNoQjtBQVJZO0VBQ0ksc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBVWhCO0FBVFE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFXWjtBQU5BO0VBQ1Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJEeERJO0VDeURKLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBU1I7QUFSUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBVVo7QUFUUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBV1o7QUFUQTtFQUNFO0lBQ0UsVUFBQTtFQVlGO0VBWEE7SUFDRSxVQUFBO0VBYUY7QUFDRjtBQVpBO0VBQ0ksYUFBQTtBQWNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2xhdGVzdC9sYXRlc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4kbWFpbmNvbG9yOiAjMDEwZTQ0XG5cbmJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGF0ZXN0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIHRvcDogLTIwcHg7XG59XG4ubGF0ZXN0Q29udGFpbmVyIC5kaXZpbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg0NSUpIGJyaWdodG5lc3MoMjUlKTtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSg0NSUpIGJyaWdodG5lc3MoMjUlKTtcbiAgLW1vei1maWx0ZXI6IGdyYXlzY2FsZSg0NSUpIGJyaWdodG5lc3MoMjUlKTtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMzkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGFuaW1hdGlvbjogZmFkZSAwLjVzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKSBib3RoO1xufVxuLmxhdGVzdENvbnRhaW5lciAucGVsaXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5sYXRlc3RDb250YWluZXIgLnBlbGlzIC5wZWxpIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubGF0ZXN0Q29udGFpbmVyIC5wZWxpcyAucGVsaSBpbWcge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sYXRlc3RDb250YWluZXIgLnBlbGlzIC5wZWxpIGltZzpob3ZlciB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEzJSk7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTMlKTtcbiAgLW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxMyUpO1xufVxuLmxhdGVzdENvbnRhaW5lciAucGVsaXMgLmZhLXBsYXk6YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDg1cHg7XG4gIGxlZnQ6IDQ4JTtcbiAgZm9udC1zaXplOiAzNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZvdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMwcHg7XG4gIGJhY2tncm91bmQ6ICMwMTBlNDQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDE4ODU5O1xufVxuLnZvdGUgaDYge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIHJpZ2h0OiAtM3B4O1xufVxuLnZvdGUgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0b3A6IC04cHg7XG4gIHJpZ2h0OiAtMnB4O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZG5vbmUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-latest',
                templateUrl: './latest.component.html',
                styleUrls: ['./latest.component.sass']
            }]
    }], function () { return [{ type: _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__["ServiciounoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/most-popular/most-popular.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/most-popular/most-popular.component.ts ***!
  \************************************************************************/
/*! exports provided: MostPopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostPopularComponent", function() { return MostPopularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/serviciouno.service */ "./src/app/servicios/serviciouno.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function MostPopularComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const peli_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", peli_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", peli_r2.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.vote_average * 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.release_date);
} }
class MostPopularComponent {
    constructor(service) {
        this.service = service;
        this.key = '4bab412957a2b13c2e912eb8e7e3f691';
        this.url = 'https://jsonplaceholder.typicode.com/posts';
        this.TrendingUrl = "https://api.themoviedb.org/4/list/1?page=1&api_key=4bab412957a2b13c2e912eb8e7e3f691&sort_by=original_order.asc";
        this.MostPopularUrl = 'https://api.themoviedb.org/4/movie/popular?api_key=4bab412957a2b13c2e912eb8e7e3f691';
        this.TopRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4bab412957a2b13c2e912eb8e7e3f691';
        this.V4Url = "https://api.themoviedb.org/4/list/1?page=1&api_key=4bab412957a2b13c2e912eb8e7e3f691&sort_by=original_order.asc";
        this.pelis = [];
        this.i = 2;
        this.getMovies = (pelis, url) => this.service.getMovies(pelis, url);
        this.getMore20 = (pelis, Url, i) => {
            this.i++;
            this.service.getFirts20(pelis, Url, i);
        };
    }
    ngOnInit() {
        this.getMovies(this.pelis, this.TrendingUrl);
        //this.$voteColor.style
    }
}
MostPopularComponent.ɵfac = function MostPopularComponent_Factory(t) { return new (t || MostPopularComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__["ServiciounoService"])); };
MostPopularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MostPopularComponent, selectors: [["app-most-popular"]], decls: 9, vars: 1, consts: [[1, "Containerrr"], ["Container", ""], [1, "title"], [1, "pelis"], ["class", "peli", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [1, "peli"], ["peli", ""], [3, "routerLink", "src"], [1, "vote"], ["voteAverage", ""], ["votePercent", ""]], template: function MostPopularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MostPopularComponent_div_5_Template, 14, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostPopularComponent_Template_button_click_6_listener() { return ctx.getMore20(ctx.pelis, ctx.TrendingUrl, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u27A4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pelis);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\nhr[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background: #d0d0d0;\n}\n.pelis[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-content: flex-start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  overflow-x: scroll;\n}\n.pelis[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  position: relative;\n  top: -30px;\n  font-size: 15px;\n  color: #000;\n}\n.pelis[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  top: -30px;\n}\n.Containerrr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.Containerrr[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 40px;\n  font-size: 18px;\n  border: 2px solid #ffffff;\n  border-radius: 8px;\n  align-self: center;\n  background: #010e44;\n  color: #ffffff;\n  position: relative;\n  top: -80px;\n}\n.peli[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 15px;\n  margin-right: 15px;\n  max-height: 350px;\n}\n.peli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 225px;\n  width: 150px;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.peli[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  position: relative;\n  top: -30px;\n  background: #010e44;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: 15%;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid #018859;\n}\n.peli[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 22px;\n  position: relative;\n  top: 3px;\n  right: -3px;\n}\n.peli[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 10px;\n  top: -8px;\n  right: -2px;\n}\n.pelis[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 500px) {\n  .pelis[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  }\n}\n.asddd2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  max-width: 100%;\n  position: absolute;\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL21vc3QtcG9wdWxhci9tb3N0LXBvcHVsYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFHQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDREo7QUFEQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSUo7QUFGQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUhBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQU1KO0FBTEk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBT1I7QUFOSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQVFSO0FBUEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVVKO0FBVEk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkR4Q0k7RUN5Q0osY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVdSO0FBUEE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVVKO0FBVEk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVdSO0FBVkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkQ1REk7RUM2REosa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFZUjtBQVhRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFhWjtBQVpRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFjWjtBQVhJO0VBQ0ksY0FBQTtBQWNSO0FBWkE7RUFDSTtJQUNJLDJEQUFBO0VBZU47QUFDRjtBQWJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFlSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9tb3N0LXBvcHVsYXIvbW9zdC1wb3B1bGFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJG1haW5jb2xvcjogIzAxMGU0NFxuXG5ib2R5XG4gICAgbWFyZ2luOiAwXG4gICAgcGFkZGluZzogMFxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZDBkMGQwO1xufVxuXG4ucGVsaXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5wZWxpcyBoNSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5wZWxpcyBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMHB4O1xufVxuXG4uQ29udGFpbmVycnIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5Db250YWluZXJyciBidXR0b24ge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAxMGU0NDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtODBweDtcbn1cblxuLnBlbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xufVxuLnBlbGkgaW1nIHtcbiAgaGVpZ2h0OiAyMjVweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGVsaSAudm90ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzBweDtcbiAgYmFja2dyb3VuZDogIzAxMGU0NDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMTg4NTk7XG59XG4ucGVsaSAudm90ZSBoNiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgcmlnaHQ6IC0zcHg7XG59XG4ucGVsaSAudm90ZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC0ycHg7XG59XG5cbi5wZWxpcyAuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAucGVsaXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xuICB9XG59XG4uYXNkZGQyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostPopularComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-most-popular',
                templateUrl: './most-popular.component.html',
                styleUrls: ['./most-popular.component.sass'],
            }]
    }], function () { return [{ type: _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__["ServiciounoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/search/search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/home/search/search.component.ts ***!
  \************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = ["input"];
class SearchComponent {
    constructor(router) {
        this.router = router;
        this.key = "4bab412957a2b13c2e912eb8e7e3f691";
    }
    ngOnInit() {
    }
    goToSearchPage() {
        const search = this.$input.nativeElement.value;
        this.router.navigate(["/searchPage", search]);
    }
    onKeydownEvent(e) {
        if (e.key === "Enter") {
            this.goToSearchPage();
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.$input = _t.first);
    } }, decls: 7, vars: 0, consts: [[1, "Container", "text-center", 2, "background-image", "url(https://i.ibb.co/Tk9HQwT/fondo1.png)"], [1, "text-center"], ["type", "search", "placeholder", "Search any Movie", "name", "", "id", "", 1, "text-center", 3, "keydown"], ["input", ""], ["type", "button", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to my TMDB simulation Web Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SearchComponent_Template_input_keydown_3_listener($event) { return ctx.onKeydownEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_5_listener() { return ctx.goToSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".Container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(350px + 9vh);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.Container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 42px;\n  position: relative;\n  top: 80px;\n}\n.Container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 40px;\n  border-radius: 30px;\n  position: relative;\n  top: 250px;\n  border: none;\n}\n.Container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transition: all 0.5s linear;\n  position: relative;\n  top: 248px;\n  height: 40px;\n  color: white;\n  margin-left: 10px;\n}\n.Container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: all 0.5s linear;\n  transform: scale(1.1);\n}\n@media (max-width: 900px) {\n  .Container[_ngcontent-%COMP%] {\n    height: calc(300px + 9vh);\n  }\n  .Container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n    height: 140px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .Container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n  .Container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    top: 98px;\n  }\n}\n@media (max-width: 500px) {\n  .Container[_ngcontent-%COMP%] {\n    height: calc(250px + 9vh);\n  }\n  .Container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    height: 130px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .Container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n  .Container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    top: 98px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRVI7QUFESTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBR1I7QUFGSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlSO0FBSEk7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0FBS1I7QUFIQTtFQUNJO0lBQ0kseUJBQUE7RUFNTjtFQUxNO0lBQ0ksZUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQU9WO0VBTk07SUFDSSxVQUFBO0VBUVY7RUFQTTtJQUNJLFNBQUE7RUFTVjtBQUNGO0FBUkE7RUFDSTtJQUNJLHlCQUFBO0VBVU47RUFUTTtJQUNJLGVBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFXVjtFQVZNO0lBQ0ksVUFBQTtFQVlWO0VBWE07SUFDSSxTQUFBO0VBYVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLkNvbnRhaW5lciBcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IGNhbGMoMzUwcHggKyA5dmgpXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcbiAgICBoMiBcclxuICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgICAgICBmb250LXNpemU6IDQycHhcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICB0b3A6IDgwcHhcclxuICAgIGlucHV0XHJcbiAgICAgICAgd2lkdGg6IDcwJVxyXG4gICAgICAgIGhlaWdodDogNDBweFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHhcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICB0b3A6IDI1MHB4XHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICBidXR0b25cclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXJcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICB0b3A6IDI0OHB4XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4XHJcbiAgICAgICAgY29sb3I6IHdoaXRlXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHggXHJcbiAgICBidXR0b246aG92ZXJcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXJcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweClcclxuICAgIC5Db250YWluZXJcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMzAwcHggKyA5dmgpXHJcbiAgICAgICAgaDJcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4XHJcbiAgICAgICAgICAgIGhlaWdodDogMTQwcHhcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgdG9wOiAxMDBweFxyXG4gICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICB0b3A6IDk4cHhcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweClcclxuICAgIC5Db250YWluZXJcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMjUwcHggKyA5dmgpXHJcbiAgICAgICAgaDJcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHhcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgdG9wOiAxMDBweFxyXG4gICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICB0b3A6IDk4cHgiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { $input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/home/top-rated-component/top-rated-component.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/home/top-rated-component/top-rated-component.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TopRatedComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedComponentComponent", function() { return TopRatedComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/serviciouno.service */ "./src/app/servicios/serviciouno.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function TopRatedComponentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const peli_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", peli_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", peli_r2.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.vote_average * 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.release_date);
} }
class TopRatedComponentComponent {
    constructor(service) {
        this.service = service;
        this.key = '4bab412957a2b13c2e912eb8e7e3f691';
        this.TopRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4bab412957a2b13c2e912eb8e7e3f691';
        this.pelis = [];
        this.i = 2;
        this.getMovies = (pelis, url) => this.service.getMovies(pelis, url);
        this.getMore20 = (pelis, Url, i) => {
            this.i++;
            this.service.getFirts20(pelis, Url, i);
        };
    }
    ngOnInit() {
        this.getMovies(this.pelis, this.TopRatedUrl);
    }
}
TopRatedComponentComponent.ɵfac = function TopRatedComponentComponent_Factory(t) { return new (t || TopRatedComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__["ServiciounoService"])); };
TopRatedComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopRatedComponentComponent, selectors: [["app-top-rated-component"]], decls: 8, vars: 1, consts: [[1, "Container"], ["Container", ""], [1, "title"], ["data-slick", "{\"slidesToShow\": 4, \"slidesToScroll\": 4}", 1, "pelis"], ["class", "peli", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [1, "peli"], ["peli", ""], [3, "routerLink", "src"], [1, "vote"]], template: function TopRatedComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Top-Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopRatedComponentComponent_div_5_Template, 12, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopRatedComponentComponent_Template_button_click_6_listener() { return ctx.getMore20(ctx.pelis, ctx.TopRatedUrl, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u27A4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pelis);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\nhr[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background: #d0d0d0;\n}\n.pelis[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-content: flex-start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  overflow-x: scroll;\n}\n.pelis[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  position: relative;\n  top: -30px;\n  font-size: 15px;\n  color: #000;\n}\n.pelis[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  top: -30px;\n}\n.Containerrr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.Containerrr[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 40px;\n  font-size: 18px;\n  border: 2px solid #ffffff;\n  border-radius: 8px;\n  align-self: center;\n  background: #010e44;\n  color: #ffffff;\n  position: relative;\n  top: -80px;\n}\n.peli[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 15px;\n  margin-right: 15px;\n  max-height: 350px;\n}\n.peli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 225px;\n  width: 150px;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.peli[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  position: relative;\n  top: -30px;\n  background: #010e44;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: 15%;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid #018859;\n}\n.peli[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 22px;\n  position: relative;\n  top: 3px;\n  right: -3px;\n}\n.peli[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 10px;\n  top: -8px;\n  right: -2px;\n}\n.pelis[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 500px) {\n  .pelis[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  }\n}\n.asddd2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  max-width: 100%;\n  position: absolute;\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RvcC1yYXRlZC1jb21wb25lbnQvdG9wLXJhdGVkLWNvbXBvbmVudC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL21vc3QtcG9wdWxhci9tb3N0LXBvcHVsYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFHQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDREo7QURKQSw4RUFBQTtBQUdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNLSjtBQ1BBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURVSjtBQ1JBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRFdKO0FDVEE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEWUo7QUNYSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURhUjtBQ1pJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FEY1I7QUNiQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FEZ0JKO0FDZkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkZ4Q0k7RUV5Q0osY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRGlCUjtBQ2JBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURnQko7QUNmSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEaUJSO0FDaEJJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJGNURJO0VFNkRKLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FEa0JSO0FDakJRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QURtQlo7QUNsQlE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRG9CWjtBQ2pCSTtFQUNJLGNBQUE7QURvQlI7QUNsQkE7RUFDSTtJQUNJLDJEQUFBO0VEcUJOO0FBQ0Y7QUNuQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRHFCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS90b3AtcmF0ZWQtY29tcG9uZW50L3RvcC1yYXRlZC1jb21wb25lbnQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4kbWFpbmNvbG9yOiAjMDEwZTQ0XG5cbmJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaHIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNkMGQwZDA7XG59XG5cbi5wZWxpcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLnBlbGlzIGg1IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnBlbGlzIHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMwcHg7XG59XG5cbi5Db250YWluZXJyciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLkNvbnRhaW5lcnJyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDEwZTQ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC04MHB4O1xufVxuXG4ucGVsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG59XG4ucGVsaSBpbWcge1xuICBoZWlnaHQ6IDIyNXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wZWxpIC52b3RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDEwZTQ0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAxODg1OTtcbn1cbi5wZWxpIC52b3RlIGg2IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xuICByaWdodDogLTNweDtcbn1cbi5wZWxpIC52b3RlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLTJweDtcbn1cblxuLnBlbGlzIC5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5wZWxpcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNDBweCwgMWZyKSk7XG4gIH1cbn1cbi5hc2RkZDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzLnNhc3NcIlxyXG5cclxuICAgIFxyXG4udGl0bGVcclxuICAgIGZvbnQtc2l6ZTogMzJweFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBmb250LXdlaWdodDogNzAwXHJcbiAgICBcclxuaHJcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDFweFxyXG4gICAgYmFja2dyb3VuZDogI2QwZDBkMFxyXG5cclxuLnBlbGlzXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweFxyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHhcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbFxyXG4gICAgaDVcclxuICAgICAgICBmb250LXdlaWdodDogNzAwXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgdG9wOiAtMzBweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweFxyXG4gICAgICAgIGNvbG9yOiAjMDAwXHJcbiAgICBwXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgdG9wOiAtMzBweFxyXG4uQ29udGFpbmVycnJcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICBidXR0b25cclxuICAgICAgICB3aWR0aDogMTEwcHhcclxuICAgICAgICBoZWlnaHQ6IDQwcHhcclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyXHJcbiAgICAgICAgYmFja2dyb3VuZDogJG1haW5jb2xvclxyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgdG9wOiAtODBweFxyXG5cclxuXHJcbiAgICAgICAgXHJcbi5wZWxpXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHhcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4XHJcbiAgICBpbWcgXHJcbiAgICAgICAgaGVpZ2h0OiAyMjVweFxyXG4gICAgICAgIHdpZHRoOiAxNTBweFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHhcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIC52b3RlXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgdG9wOiAtMzBweFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICRtYWluY29sb3JcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCVcclxuICAgICAgICB3aWR0aDogNTBweFxyXG4gICAgICAgIGhlaWdodDogNTBweFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSVcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZlxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDE4ODU5XHJcbiAgICAgICAgaDZcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgICAgICB0b3A6IDNweFxyXG4gICAgICAgICAgICByaWdodDogLTNweFxyXG4gICAgICAgIHNwYW5cclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweFxyXG4gICAgICAgICAgICB0b3A6IC04cHhcclxuICAgICAgICAgICAgcmlnaHQ6IC0ycHhcclxuXHJcbi5wZWxpc1xyXG4gICAgLmFjdGl2ZVxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpXHJcbiAgICAucGVsaXNcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggYXV0by1maXQsIG1pbm1heCgxNDBweCwgMWZyKSApXHJcblxyXG5cclxuLmFzZGRkMlxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvd1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopRatedComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-rated-component',
                templateUrl: './top-rated-component.component.html',
                styleUrls: ['./top-rated-component.component.sass'],
            }]
    }], function () { return [{ type: _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__["ServiciounoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/upcoming/upcoming.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/home/upcoming/upcoming.component.ts ***!
  \****************************************************************/
/*! exports provided: UpcomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingComponent", function() { return UpcomingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/serviciouno.service */ "./src/app/servicios/serviciouno.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function UpcomingComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const peli_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", peli_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", peli_r2.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.vote_average * 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.release_date);
} }
class UpcomingComponent {
    constructor(service) {
        this.service = service;
        this.key = '4bab412957a2b13c2e912eb8e7e3f691';
        this.upcoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US&page=1";
        this.pelis = [];
        this.i = 2;
        this.getMovies = (pelis, url) => this.service.getMovies(pelis, url);
        this.getMore20 = (pelis, Url, i) => {
            this.i++;
            this.service.getFirts20(pelis, Url, i);
        };
    }
    ngOnInit() {
        this.getMovies(this.pelis, this.upcoming);
    }
}
UpcomingComponent.ɵfac = function UpcomingComponent_Factory(t) { return new (t || UpcomingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__["ServiciounoService"])); };
UpcomingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpcomingComponent, selectors: [["app-upcoming"]], decls: 9, vars: 1, consts: [[1, "Container"], ["Container", ""], [1, "title"], [1, "pelis"], ["class", "peli", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [1, "peli"], ["peli", ""], [3, "routerLink", "src"], [1, "vote"], ["voteAverage", ""], ["votePercent", ""]], template: function UpcomingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upcoming Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UpcomingComponent_div_5_Template, 14, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpcomingComponent_Template_button_click_6_listener() { return ctx.getMore20(ctx.pelis, ctx.upcoming, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u27A4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pelis);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\nhr[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background: #d0d0d0;\n}\n.pelis[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-content: flex-start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  overflow-x: scroll;\n}\n.pelis[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  position: relative;\n  top: -30px;\n  font-size: 15px;\n  color: #000;\n}\n.pelis[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  top: -30px;\n}\n.Containerrr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.Containerrr[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 40px;\n  font-size: 18px;\n  border: 2px solid #ffffff;\n  border-radius: 8px;\n  align-self: center;\n  background: #010e44;\n  color: #ffffff;\n  position: relative;\n  top: -80px;\n}\n.peli[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 15px;\n  margin-right: 15px;\n  max-height: 350px;\n}\n.peli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 225px;\n  width: 150px;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.peli[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  position: relative;\n  top: -30px;\n  background: #010e44;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: 15%;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid #018859;\n}\n.peli[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 22px;\n  position: relative;\n  top: 3px;\n  right: -3px;\n}\n.peli[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 10px;\n  top: -8px;\n  right: -2px;\n}\n.pelis[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 500px) {\n  .pelis[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  }\n}\n.asddd2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  max-width: 100%;\n  position: absolute;\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3VwY29taW5nL3VwY29taW5nLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbW9zdC1wb3B1bGFyL21vc3QtcG9wdWxhci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNESjtBQ0RBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURJSjtBQ0ZBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBREtKO0FDSEE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FETUo7QUNMSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURPUjtBQ05JO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FEUVI7QUNQQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FEVUo7QUNUSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRnhDSTtFRXlDSixjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEV1I7QUNQQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEVUo7QUNUSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEV1I7QUNWSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRjVESTtFRTZESixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRFlSO0FDWFE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBRGFaO0FDWlE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRGNaO0FDWEk7RUFDSSxjQUFBO0FEY1I7QUNaQTtFQUNJO0lBQ0ksMkRBQUE7RURlTjtBQUNGO0FDYkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRGVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3VwY29taW5nL3VwY29taW5nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJG1haW5jb2xvcjogIzAxMGU0NFxuXG5ib2R5XG4gICAgbWFyZ2luOiAwXG4gICAgcGFkZGluZzogMFxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZDBkMGQwO1xufVxuXG4ucGVsaXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5wZWxpcyBoNSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5wZWxpcyBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMHB4O1xufVxuXG4uQ29udGFpbmVycnIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5Db250YWluZXJyciBidXR0b24ge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAxMGU0NDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtODBweDtcbn1cblxuLnBlbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xufVxuLnBlbGkgaW1nIHtcbiAgaGVpZ2h0OiAyMjVweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGVsaSAudm90ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzBweDtcbiAgYmFja2dyb3VuZDogIzAxMGU0NDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMTg4NTk7XG59XG4ucGVsaSAudm90ZSBoNiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgcmlnaHQ6IC0zcHg7XG59XG4ucGVsaSAudm90ZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC0ycHg7XG59XG5cbi5wZWxpcyAuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAucGVsaXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xuICB9XG59XG4uYXNkZGQyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy5zYXNzXCJcclxuXHJcbiAgICBcclxuLnRpdGxlXHJcbiAgICBmb250LXNpemU6IDMycHhcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMFxyXG4gICAgXHJcbmhyXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgaGVpZ2h0OiAxcHhcclxuICAgIGJhY2tncm91bmQ6ICNkMGQwZDBcclxuXHJcbi5wZWxpc1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydFxyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydFxyXG4gICAgcGFkZGluZy10b3A6IDIwcHhcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGxcclxuICAgIGg1XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIHRvcDogLTMwcHhcclxuICAgICAgICBmb250LXNpemU6IDE1cHhcclxuICAgICAgICBjb2xvcjogIzAwMFxyXG4gICAgcFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIHRvcDogLTMwcHhcclxuLkNvbnRhaW5lcnJyXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgYnV0dG9uXHJcbiAgICAgICAgd2lkdGg6IDExMHB4XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZlxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweFxyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlclxyXG4gICAgICAgIGJhY2tncm91bmQ6ICRtYWluY29sb3JcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZlxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIHRvcDogLTgwcHhcclxuXHJcblxyXG4gICAgICAgIFxyXG4ucGVsaVxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweFxyXG4gICAgaW1nIFxyXG4gICAgICAgIGhlaWdodDogMjI1cHhcclxuICAgICAgICB3aWR0aDogMTUwcHhcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAudm90ZVxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIHRvcDogLTMwcHhcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbmNvbG9yXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICAgICAgd2lkdGg6IDUwcHhcclxuICAgICAgICBoZWlnaHQ6IDUwcHhcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTUlXHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmZcclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzAxODg1OVxyXG4gICAgICAgIGg2XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICAgICAgdG9wOiAzcHhcclxuICAgICAgICAgICAgcmlnaHQ6IC0zcHhcclxuICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHhcclxuICAgICAgICAgICAgdG9wOiAtOHB4XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMnB4XHJcblxyXG4ucGVsaXNcclxuICAgIC5hY3RpdmVcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KVxyXG4gICAgLnBlbGlzXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikgKVxyXG5cclxuXHJcbi5hc2RkZDJcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgIG1heC13aWR0aDogMTAwJVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpcomingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upcoming',
                templateUrl: './upcoming.component.html',
                styleUrls: ['./upcoming.component.sass']
            }]
    }], function () { return [{ type: _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_1__["ServiciounoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/movieid/movieid.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/movieid/movieid.component.ts ***!
  \*********************************************************/
/*! exports provided: MovieidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieidComponent", function() { return MovieidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/serviciouno.service */ "./src/app/servicios/serviciouno.service.ts");
/* harmony import */ var _servicios_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/favourites.service */ "./src/app/servicios/favourites.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_onload_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/onload.directive */ "./src/app/directives/onload.directive.ts");







function MovieidComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(https://image.tmdb.org/t/p/original/", m_r2.backdrop_path, ");");
} }
function MovieidComponent_div_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2022", g_r8.name, "");
} }
function MovieidComponent_div_2_h3_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r3.tagline);
} }
function MovieidComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MovieidComponent_div_2_span_16_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Vote average ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MovieidComponent_div_2_h3_27_Template, 2, 1, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Movie\u00B4s Home-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieidComponent_div_2_Template_div_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const m_r3 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.SetFavouriteMovie(m_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " favourites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", m_r3.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", m_r3.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", m_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ShorterText", m_r3.release_date)("slice", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r3.release_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r3.release_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", m_r3.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r3.vote_average * 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r3.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r3.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", m_r3.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.isAlreadyFavourite ? "isAlreadyFavourite" : "isNotFavourite");
} }
class MovieidComponent {
    constructor(router, route, service, favservice) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.favservice = favservice;
        this.movie = [];
        this.id = this.route.snapshot.paramMap.get("id");
        this.url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US`;
        this.service.getOnlyOne(this.movie, this.url);
    }
    getFavouriteMovie() {
        if (!localStorage.getItem('favourites'))
            return;
        //This function returns false or true, if it is true, the favourite´s button on the view is yellow
        //if movie is not already defined, the function calls itself
        if (!this.movie[0]) {
            setTimeout(() => this.getFavouriteMovie(), 200);
        }
        else
            this.isAlreadyFavourite = this.favservice.getArray(this.movie[0]).isAlready;
    }
    ngOnInit() {
        this.getFavouriteMovie();
    }
    SetFavouriteMovie(movie) {
        this.isAlreadyFavourite = this.favservice.pushArray(movie).togglevariable;
    }
}
MovieidComponent.ɵfac = function MovieidComponent_Factory(t) { return new (t || MovieidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_2__["ServiciounoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"])); };
MovieidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieidComponent, selectors: [["app-movieid"]], decls: 4, vars: 2, consts: [[1, "containermovie"], ["class", "movieimg", 3, "style", 4, "ngFor", "ngForOf"], ["class", "moviecontent d-flex justify-content-center\n    align-items-center ", 4, "ngFor", "ngForOf"], [1, "movieimg"], [1, "moviecontent", "d-flex", "justify-content-center", "align-items-center"], ["alt", "", 3, "src"], [1, "imghover", "d-flex", "justify-content-center", "align-items-center"], ["target", "_blank", 1, "fas", "fa-play", 3, "href"], [1, "text-content"], [1, "title"], [1, "date"], [1, "date", 3, "ShorterText", "slice"], [1, "genresdiv"], ["class", "genres", 4, "ngFor", "ngForOf"], [1, "voteContainer"], [1, "vote"], ["voteAverage", ""], ["votePercent", ""], ["class", "tagline", 4, "ngIf"], [1, "overview"], [1, "favPlayContainer"], ["target", "_blank", 1, "homepage", "fas", "fa-play", 3, "href"], [1, "favourites", "circle", "fas", "fa-star", 3, "ngClass", "click"], [1, "favouritehover"], [1, "genres"], [1, "tagline"]], template: function MovieidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieidComponent_div_1_Template, 1, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieidComponent_div_2_Template, 39, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " solo arboles piedra\nlobo asus\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movie);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _directives_onload_directive__WEBPACK_IMPORTED_MODULE_5__["OnloadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.containermovie[_ngcontent-%COMP%] {\n  position: relative;\n  top: 9vh;\n}\n.isAlreadyFavourite[_ngcontent-%COMP%] {\n  color: #ffee00 !important;\n}\n.isNotFavourite[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.movieimg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  filter: grayscale(66%) sepia(28%) brightness(30%);\n  -webkit-filter: grayscale(66%) sepia(28%) brightness(30%);\n  -moz-filter: grayscale(66%) sepia(28%) brightness(30%);\n}\n.moviecontent[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n  color: #ffffff;\n}\n.moviecontent[_ngcontent-%COMP%]   .imghover[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 470px;\n  background: #00000070;\n  position: absolute;\n  left: 40px;\n  border-radius: 15px;\n  font-size: 65px;\n  z-index: 5;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s linear;\n}\n.moviecontent[_ngcontent-%COMP%]   .imghover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n}\n.moviecontent[_ngcontent-%COMP%]   .imghover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #dddddd;\n}\n.moviecontent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 470px;\n  border-radius: 15px;\n  margin: 40px;\n  position: relative;\n  z-index: 4;\n}\n.moviecontent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover    ~ .imghover[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition: visibility 1s linear, opacity;\n}\n.moviecontent[_ngcontent-%COMP%]   .imghover[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  visibility: visible;\n  transition: visibility 1s linear, opacity;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  padding: 30px 30px 80px 30px;\n  text-align: left;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 45px;\n  width: 45px;\n  background: #010e44;\n  color: #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s linear;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  font-size: 20px;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:hover {\n  transition: all 0.3s linear;\n  transform: scale(1.1);\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%]:before {\n  color: #747474;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .favouritehover[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #000000;\n  width: 140px;\n  margin-left: auto;\n  margin-right: 28%;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 5px;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.3s linear, opacity 0.3s linear;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:hover    ~ .favouritehover[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.3s linear, opacity 0.3s linear;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n  font-size: 22px;\n  position: relative;\n  top: -30px;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #dcdcdcd4;\n  font-size: 30px;\n  margin-bottom: 20px;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-bottom: 20px;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .homepage[_ngcontent-%COMP%] {\n  margin-left: 25%;\n  margin-right: 30px;\n  color: #ffffff;\n  text-decoration: none;\n}\n.moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .homepage[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #c7c7c7;\n}\n.moviecontent[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  position: relative;\n  top: -30px;\n}\n.moviecontent[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.moviecontent[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.moviecontent[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  position: relative;\n  background: #010e44;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 5px solid #018859;\n}\n.moviecontent[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 25px;\n  position: relative;\n  top: 3px;\n  right: -3px;\n}\n.moviecontent[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  top: -8px;\n  right: -2px;\n}\n.moviecontent[_ngcontent-%COMP%]   .voteContainer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.moviecontent[_ngcontent-%COMP%]   .voteContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  top: -50px;\n  right: -70px;\n}\n.background2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 98vh;\n  position: relative;\n  z-index: 5;\n  background-image: linear-gradient(to right, #1e2f3c 150px, rgba(48, 65, 78, 0.84) 100%);\n}\n@media (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    background: #172a33;\n  }\n\n  .containermovie[_ngcontent-%COMP%] {\n    background: #172a33;\n  }\n\n  .movieimg[_ngcontent-%COMP%] {\n    height: 170px;\n    filter: none;\n  }\n\n  .moviecontent[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .imghover[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .moviecontent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 104px;\n    width: 69px;\n    margin: 0;\n    position: absolute;\n    top: 20px;\n    left: 20px;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n    background: #172a33;\n    position: relative;\n    top: 19vh;\n    padding-bottom: 125px;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .genresdiv[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 18px;\n    width: calc(100% + 60px);\n    position: relative;\n    align-self: flex-start;\n    left: -40px;\n    background: #00000020;\n    border-bottom: 2px solid #00000040;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 29px;\n    text-align: center;\n    width: calc(100% + 60px);\n    position: relative;\n    height: 7vh;\n    margin: 0;\n    background: #00000020;\n    left: -40px;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 17px;\n    top: 2px;\n    right: -2px;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n    right: -2px;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -130px;\n    right: 10px;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .voteContainer[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .moviecontent[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .voteContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    top: -37px;\n    right: -60px;\n    font-size: 23px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZWlkL21vdmllaWQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFHQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDREo7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUtKO0FBSEE7RUFDSSx5QkFBQTtBQU1KO0FBTEE7RUFDSSx5QkFBQTtBQVFKO0FBTkE7RUFFSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtFQUNBLHlEQUFBO0VBQ0Esc0RBQUE7QUFRSjtBQVBBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVVKO0FBVEk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBV1I7QUFWUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQVlaO0FBWFE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFhWjtBQVpJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFjUjtBQWJJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFlUjtBQWRJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFnQlI7QUFmSTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7QUFpQlI7QUFoQlE7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CRG5FQTtFQ29FQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFrQlo7QUFqQlE7RUFDSSxlQUFBO0FBbUJaO0FBbEJRO0VBQ0ksMkJBQUE7RUFDQSxxQkFBQTtBQW9CWjtBQW5CUTtFQUNJLGNBQUE7QUFxQlo7QUFwQlE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1REFBQTtBQXNCWjtBQXJCUTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHVEQUFBO0FBdUJaO0FBckJRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUF1Qlo7QUF0QlE7RUFDSSxlQUFBO0FBd0JaO0FBdkJRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUF5Qlo7QUF4QlE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBMEJaO0FBekJRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQTJCWjtBQTFCUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQTRCWjtBQTFCSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBNEJSO0FBM0JRO0VBQ0ksZUFBQTtBQTZCWjtBQTVCUTtFQUNJLGVBQUE7QUE4Qlo7QUE1Qkk7RUFDSSxrQkFBQTtFQUNBLG1CRGxJSTtFQ21JSixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUE4QlI7QUE3QlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQStCWjtBQTlCUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBZ0NaO0FBL0JJO0VBQ0ksZ0JBQUE7QUFpQ1I7QUFoQ1E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFrQ1o7QUFoQ0E7RUFDSSxXQUFBO0VBQ0EsWUEvSks7RUFnS0wsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUZBQUE7QUFtQ0o7QUFqQ0E7RUFDSTtJQUNJLG1CQUFBO0VBb0NOOztFQW5DRTtJQUNJLG1CQUFBO0VBc0NOOztFQXJDRTtJQUNJLGFBQUE7SUFDQSxZQUFBO0VBd0NOOztFQXRDTTtJQUNJLGdCQUFBO0VBeUNWO0VBeENNO0lBQ0ksd0JBQUE7RUEwQ1Y7RUF6Q007SUFDSSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBMkNWO0VBMUNNO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxxQkFBQTtFQTRDVjtFQTNDVTtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGtDQUFBO0VBNkNkO0VBM0NVO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0Esd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0VBNkNkO0VBNUNjO0lBQ0ksZUFBQTtFQThDbEI7RUE1Q1U7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQThDZDtFQTdDYztJQUNJLGVBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtFQStDbEI7RUE5Q2M7SUFDSSxlQUFBO0lBQ0EsV0FBQTtFQWdEbEI7RUEvQ1U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VBaURkO0VBaERVO0lBQ0ksZ0JBQUE7RUFrRGQ7RUFqRGM7SUFDSSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBbURsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZWlkL21vdmllaWQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4kbWFpbmNvbG9yOiAjMDEwZTQ0XG5cbmJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGFpbmVybW92aWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOXZoO1xufVxuXG4uaXNBbHJlYWR5RmF2b3VyaXRlIHtcbiAgY29sb3I6ICNmZmVlMDAgIWltcG9ydGFudDtcbn1cblxuLmlzTm90RmF2b3VyaXRlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLm1vdmllaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg2NiUpIHNlcGlhKDI4JSkgYnJpZ2h0bmVzcygzMCUpO1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDY2JSkgc2VwaWEoMjglKSBicmlnaHRuZXNzKDMwJSk7XG4gIC1tb3otZmlsdGVyOiBncmF5c2NhbGUoNjYlKSBzZXBpYSgyOCUpIGJyaWdodG5lc3MoMzAlKTtcbn1cblxuLm1vdmllY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubW92aWVjb250ZW50IC5pbWdob3ZlciB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA0NzBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDcwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgei1pbmRleDogNTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyO1xufVxuLm1vdmllY29udGVudCAuaW1naG92ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubW92aWVjb250ZW50IC5pbWdob3ZlciBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2RkZGRkZDtcbn1cbi5tb3ZpZWNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDQ3MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNDtcbn1cbi5tb3ZpZWNvbnRlbnQgaW1nOmhvdmVyIH4gLmltZ2hvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxcyBsaW5lYXIsIG9wYWNpdHk7XG59XG4ubW92aWVjb250ZW50IC5pbWdob3Zlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMXMgbGluZWFyLCBvcGFjaXR5O1xufVxuLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IHtcbiAgcGFkZGluZzogMzBweCAzMHB4IDgwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tb3ZpZWNvbnRlbnQgLnRleHQtY29udGVudCAuY2lyY2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjMDEwZTQ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cbi5tb3ZpZWNvbnRlbnQgLnRleHQtY29udGVudCAuY2lyY2xlOmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tb3ZpZWNvbnRlbnQgLnRleHQtY29udGVudCAuY2lyY2xlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ubW92aWVjb250ZW50IC50ZXh0LWNvbnRlbnQgLmNpcmNsZTpob3ZlciAuY2lyY2xlOmJlZm9yZSB7XG4gIGNvbG9yOiAjNzQ3NDc0O1xufVxuLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC5mYXZvdXJpdGVob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDI4JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuM3MgbGluZWFyLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xufVxuLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC5jaXJjbGU6aG92ZXIgfiAuZmF2b3VyaXRlaG92ZXIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuM3MgbGluZWFyLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xufVxuLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC50YWdsaW5lIHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMHB4O1xufVxuLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC5kYXRlIHtcbiAgY29sb3I6ICNkY2RjZGNkNDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC5nZW5yZXMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC5ob21lcGFnZSB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tb3ZpZWNvbnRlbnQgLnRleHQtY29udGVudCAuaG9tZXBhZ2U6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjYzdjN2M3O1xufVxuLm1vdmllY29udGVudCAub3ZlcnZpZXcge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMwcHg7XG59XG4ubW92aWVjb250ZW50IC5vdmVydmlldyBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5tb3ZpZWNvbnRlbnQgLm92ZXJ2aWV3IHAge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubW92aWVjb250ZW50IC52b3RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMDEwZTQ0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiA1cHggc29saWQgIzAxODg1OTtcbn1cbi5tb3ZpZWNvbnRlbnQgLnZvdGUgaDYge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIHJpZ2h0OiAtM3B4O1xufVxuLm1vdmllY29udGVudCAudm90ZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC0ycHg7XG59XG4ubW92aWVjb250ZW50IC52b3RlQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5tb3ZpZWNvbnRlbnQgLnZvdGVDb250YWluZXIgaDMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbiAgcmlnaHQ6IC03MHB4O1xufVxuXG4uYmFja2dyb3VuZDIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5OHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFlMmYzYyAxNTBweCwgcmdiYSg0OCwgNjUsIDc4LCAwLjg0KSAxMDAlKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICMxNzJhMzM7XG4gIH1cblxuICAuY29udGFpbmVybW92aWUge1xuICAgIGJhY2tncm91bmQ6ICMxNzJhMzM7XG4gIH1cblxuICAubW92aWVpbWcge1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG5cbiAgLm1vdmllY29udGVudCAub3ZlcnZpZXcge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLm1vdmllY29udGVudCAuaW1naG92ZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAubW92aWVjb250ZW50IGltZyB7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgICB3aWR0aDogNjlweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICB9XG4gIC5tb3ZpZWNvbnRlbnQgLnRleHQtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogIzE3MmEzMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxOXZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMjVweDtcbiAgfVxuICAubW92aWVjb250ZW50IC50ZXh0LWNvbnRlbnQgLmdlbnJlc2RpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNjBweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbGVmdDogLTQwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDIwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwMDAwNDA7XG4gIH1cbiAgLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNjBweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogN3ZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMjA7XG4gICAgbGVmdDogLTQwcHg7XG4gIH1cbiAgLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC50aXRsZSAuZGF0ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5tb3ZpZWNvbnRlbnQgLnRleHQtY29udGVudCAudm90ZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG4gIC5tb3ZpZWNvbnRlbnQgLnRleHQtY29udGVudCAudm90ZSBoNiB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRvcDogMnB4O1xuICAgIHJpZ2h0OiAtMnB4O1xuICB9XG4gIC5tb3ZpZWNvbnRlbnQgLnRleHQtY29udGVudCAudm90ZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcmlnaHQ6IC0ycHg7XG4gIH1cbiAgLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC5jaXJjbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMzBweDtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICAubW92aWVjb250ZW50IC50ZXh0LWNvbnRlbnQgLnZvdGVDb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLm1vdmllY29udGVudCAudGV4dC1jb250ZW50IC52b3RlQ29udGFpbmVyIGgzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTM3cHg7XG4gICAgcmlnaHQ6IC02MHB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movieid',
                templateUrl: './movieid.component.html',
                styleUrls: ['./movieid.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_2__["ServiciounoService"] }, { type: _servicios_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/search-page/search-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-page/search-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/serviciouno.service */ "./src/app/servicios/serviciouno.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_onload_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/onload.directive */ "./src/app/directives/onload.directive.ts");






const _c0 = ["input"];
function SearchPageComponent_div_6_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const peli_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", peli_r2.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", peli_r2.id, "");
} }
function SearchPageComponent_div_6_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const peli_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", peli_r2.id, "");
} }
function SearchPageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchPageComponent_div_6_img_1_Template, 1, 2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchPageComponent_div_6_img_2_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const peli_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", peli_r2.poster_path !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", peli_r2.poster_path === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.release_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ShorterText", peli_r2.overview)("slice", 150)("end", "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peli_r2.overview);
} }
class SearchPageComponent {
    constructor(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.pelis = [];
        this.search = "";
        this.getMovies = (pelis, url) => this.service.getMovies(pelis, url);
    }
    goToSearchPage() {
        this.pelis = [];
        this.search = this.$input.nativeElement.value;
        let Url = `https://api.themoviedb.org/3/search/movie?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US&query=${this.search}&page=1&include_adult=false`;
        this.router.navigate(["/searchPage", this.search]);
        this.getMovies(this.pelis, Url);
        //If results = 0 =
        setTimeout(() => {
            if (this.pelis.length > 0 && document.querySelector("#noresults")) {
                document.querySelector("#noresults").innerHTML = "";
            }
            if (this.pelis.length === 0 && document.querySelector("#noresults") === null) {
                document.querySelector(".pelis").insertAdjacentHTML("beforeend", `
    <h2 id="noresults" class="text-center "> Results not found <h2>
    `);
            }
        }, 1000);
    }
    ngOnInit() {
        this.search = this.route.snapshot.paramMap.get("search");
        let Url = `https://api.themoviedb.org/3/search/movie?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US&query=${this.search}&page=1&include_adult=false`;
        this.getMovies(this.pelis, Url);
    }
    onKeydownEvent(e) {
        if (e.key === "Enter") {
            this.goToSearchPage();
        }
    }
}
SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) { return new (t || SearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_2__["ServiciounoService"])); };
SearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPageComponent, selectors: [["app-search-page"]], viewQuery: function SearchPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.$input = _t.first);
    } }, decls: 7, vars: 1, consts: [[1, "input"], ["type", "search", "placeholder", "Search any Movie ", "name", "", "id", "", 1, "text-center", 3, "keydown"], ["input", ""], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "pelis"], ["class", "peli", 4, "ngFor", "ngForOf"], [1, "peli"], ["alt", "", 3, "src", "routerLink", 4, "ngIf"], ["src", "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "alt", "", 3, "routerLink", 4, "ngIf"], [1, "text"], [3, "ShorterText", "slice", "end"], ["alt", "", 3, "src", "routerLink"], ["src", "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "alt", "", 3, "routerLink"]], template: function SearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SearchPageComponent_Template_input_keydown_1_listener($event) { return ctx.onKeydownEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_Template_button_click_3_listener() { return ctx.goToSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchPageComponent_div_6_Template, 10, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pelis);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _directives_onload_directive__WEBPACK_IMPORTED_MODULE_4__["OnloadDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\n.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  position: relative;\n  border-bottom: 1px #727272 solid;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transition: all 0.5s linear;\n  position: absolute;\n  left: 91%;\n  top: 1px;\n  height: 40px;\n}\n.input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: all 0.5s linear;\n  transform: scale(1.1);\n}\n.pelis[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  top: 9vh;\n  margin-bottom: 20vh;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 10%;\n  margin-right: 10%;\n  border: 1px solid #a9a9a9;\n  border-radius: 20px;\n  padding: 10px 15px;\n  box-shadow: 0 2px 8px #0000007e;\n  margin-top: 12px;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 141px;\n  width: 94px;\n  border-top-left-radius: 10px;\n  border-right: 1px solid #dadada;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #646464;\n}\n.pelis[_ngcontent-%COMP%]   .peli[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n@media (max-width: 500px) {\n  .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    left: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFESTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFHUjtBQUZJO0VBQ0ksMkJBQUE7RUFDQSxxQkFBQTtBQUlSO0FBSEE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBTUo7QUFMSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQU9SO0FBTlE7RUFDSSxpQkFBQTtBQVFaO0FBUFE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBU1o7QUFSUTtFQUNJLGVBQUE7QUFVWjtBQVRRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFXWjtBQVZRO0VBQ0ksY0FBQTtBQVlaO0FBVEE7RUFFUTtJQUNJLFNBQUE7RUFXVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICB0b3A6IDEwdmhcclxuICAgIGlucHV0XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBoZWlnaHQ6IDQycHhcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggIzcyNzI3MiBzb2xpZFxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBidXR0b25cclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXJcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgXHJcbiAgICAgICAgbGVmdDogOTElXHJcbiAgICAgICAgdG9wOiAgMXB4XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4XHJcbiAgICBidXR0b246aG92ZXJcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXJcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxuLnBlbGlzXHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgdG9wOiA5dmhcclxuICAgIG1hcmdpbi1ib3R0b206IDIwdmhcclxuICAgIC5wZWxpXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCVcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJVxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTkgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweFxyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAjMDAwMDAwN2VcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4XHJcbiAgICAgICAgLnRleHRcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHhcclxuICAgICAgICBpbWdcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgIGhlaWdodDogMTQxcHhcclxuICAgICAgICAgICAgd2lkdGg6IDk0cHhcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweCBcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RhZGFkYVxyXG4gICAgICAgIGgyXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxyXG4gICAgICAgIGgzXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgICAgICBjb2xvcjogIzY0NjQ2NFxyXG4gICAgICAgIHBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW1cclxuICAgICAgICBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweClcclxuICAgIC5pbnB1dFxyXG4gICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICBsZWZ0OiA4MCUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-page',
                templateUrl: './search-page.component.html',
                styleUrls: ['./search-page.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _servicios_serviciouno_service__WEBPACK_IMPORTED_MODULE_2__["ServiciounoService"] }]; }, { $input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["input"]
        }] }); })();


/***/ }),

/***/ "./src/app/directives/movievideo.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/movievideo.directive.ts ***!
  \****************************************************/
/*! exports provided: MovievideoDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovievideoDirective", function() { return MovievideoDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class MovievideoDirective {
    constructor(el, http) {
        this.el = el;
        this.http = http;
        this.$el = this.el.nativeElement;
    }
    ngOnInit() {
        let url = `https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US`;
        this.http.get(url).subscribe((res) => (this.movie = res), (err) => console.log(err), () => {
        });
        setTimeout(() => {
            if (this.movie.results[0])
                this.$el.insertAdjacentHTML("beforeend", `
    <a target="_blank" href="https://www.youtube.com/watch?v=${this.movie.results[0].key}" 
    class="fas fa-play"><a>  
    <h6 class="trailer text-center"> ${this.movie.results[0].name} <h6>
    
    <style>
      h6{
        position: relative;
        top: -30px;
      }
      a::before{
        font-size: 40px;
        position: relative;
        top: -130px;
        left: 140px;
        color: #ffffff;
        transition: all 0.2s linear;
      }
      a:hover{
        text-decoration: none !important;
      }
      a:hover:before{
        color: #dddddd ; 
        text-decoration: none;
        transition: all 0.2s linear;
        transform: scale(1.1);
      }
    </style>
    `);
        }, 1000);
    }
}
MovievideoDirective.ɵfac = function MovievideoDirective_Factory(t) { return new (t || MovievideoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MovievideoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MovievideoDirective, selectors: [["", "appMovievideo", ""]], inputs: { id: ["appMovievideo", "id"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovievideoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appMovievideo]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["appMovievideo"]
        }] }); })();


/***/ }),

/***/ "./src/app/directives/onload.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/onload.directive.ts ***!
  \************************************************/
/*! exports provided: OnloadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnloadDirective", function() { return OnloadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OnloadDirective {
    constructor(el) {
        this.el = el;
        this.$el = this.el.nativeElement;
    }
    set appMultiplicar(numero) {
        for (var i = 0; i < numero; i++) {
            console.log(i);
        }
        // If condition is true add template to DOM
    }
    ngOnInit() {
        console.log(this.n);
        if (this.text.length > this.n) {
            this.$el.textContent = this.text.slice(0, this.n);
            if (this.t)
                this.$el.textContent += this.t;
        }
    }
}
OnloadDirective.ɵfac = function OnloadDirective_Factory(t) { return new (t || OnloadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
OnloadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OnloadDirective, selectors: [["", "ShorterText", ""]], inputs: { appMultiplicar: "appMultiplicar", text: ["ShorterText", "text"], n: ["slice", "n"], t: ["end", "t"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnloadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ShorterText]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appMultiplicar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ShorterText']
        }], n: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['slice']
        }], t: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["end"]
        }] }); })();


/***/ }),

/***/ "./src/app/route/route.module.ts":
/*!***************************************!*\
  !*** ./src/app/route/route.module.ts ***!
  \***************************************/
/*! exports provided: RouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteModule", function() { return RouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_movieid_movieid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/movieid/movieid.component */ "./src/app/components/movieid/movieid.component.ts");
/* harmony import */ var _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/search-page/search-page.component */ "./src/app/components/search-page/search-page.component.ts");
/* harmony import */ var _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/favourites/favourites.component */ "./src/app/components/favourites/favourites.component.ts");








const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "searchPage", component: _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__["SearchPageComponent"] },
    { path: "searchPage/:search", component: _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__["SearchPageComponent"] },
    { path: "movies/:id", component: _components_movieid_movieid_component__WEBPACK_IMPORTED_MODULE_3__["MovieidComponent"] },
    { path: "Favourites", component: _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__["FavouritesComponent"] }
];
class RouteModule {
}
RouteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RouteModule });
RouteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RouteModule_Factory(t) { return new (t || RouteModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RouteModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/servicios/favourites.service.ts":
/*!*************************************************!*\
  !*** ./src/app/servicios/favourites.service.ts ***!
  \*************************************************/
/*! exports provided: FavouritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesService", function() { return FavouritesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FavouritesService {
    constructor() {
        this.favourites = [];
        this.y = 0;
    }
    //PUSH LOCALSTORAGE FAVOURITES ARRAY
    pushArray(movie) {
        //localStorage.clear()
        let togglevariable;
        //Create localStorage var if it is not created yet
        if (localStorage.getItem('favourites') === null) {
            localStorage.setItem('favourites', JSON.stringify([]));
        }
        this.favourites = JSON.parse(localStorage.getItem('favourites'));
        let isAlready = false;
        if (JSON.stringify(this.favourites).includes(JSON.stringify(movie)) === true) {
            //REMOVE MOVIE IF IT IS ALREADY UPLOAD
            let index = this.favourites.indexOf(movie);
            console.log('index', this.favourites.indexOf(movie), this.favourites.slice(index, 1));
            this.favourites.splice(index, 1);
            localStorage.setItem(`favourites`, JSON.stringify(this.favourites));
            console.log(this.favourites, 'fav');
            togglevariable = false;
            return { togglevariable };
        }
        else {
            //UPLOAD MOVIE
            this.favourites.push(movie);
            localStorage.setItem(`favourites`, JSON.stringify(this.favourites));
            togglevariable = true;
            return { togglevariable };
        }
    }
    getArray(movie) {
        if (localStorage.getItem('favourites') === null) {
            return;
        }
        else {
            let isAlready = false;
            console.log(movie, 'movie');
            this.favourites = JSON.parse(localStorage.getItem('favourites'));
            console.log(JSON.stringify(this.favourites).includes(JSON.stringify(movie)), 'asd2');
            if (JSON.stringify(this.favourites).includes(JSON.stringify(movie)) === true) {
                isAlready = true;
                return { isAlready };
            }
        }
    }
    removeMovie(movie) {
        this.favourites = JSON.parse(localStorage.getItem('favourites'));
        let index = this.favourites.indexOf(movie);
        console.log(this.favourites, "fab1");
        this.favourites.splice(index, 1);
        localStorage.setItem(`favourites`, JSON.stringify(this.favourites));
        console.log(this.favourites, 'fav');
    }
}
FavouritesService.ɵfac = function FavouritesService_Factory(t) { return new (t || FavouritesService)(); };
FavouritesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FavouritesService, factory: FavouritesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouritesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/servicios/serviciouno.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/serviciouno.service.ts ***!
  \**************************************************/
/*! exports provided: ServiciounoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciounoService", function() { return ServiciounoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ServiciounoService {
    constructor(http) {
        this.http = http;
        this.url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
        this.key = '4bab412957a2b13c2e912eb8e7e3f691';
        this.youtubeVideoUrl = "https://www.youtube.com/watch?v=";
        this.getMovies = (pelis, url) => this.http.get(url).subscribe((res) => (pelis.push(...res.results)), (err) => {
            console.log(err.statusText);
        }, () => {
            // console.log(pelis);
        });
        this.getOnlyOne = (movie, url) => this.http.get(url).subscribe((res) => (movie.push(res)), (err) => console.log(err), () => {
            console.log(movie);
            return movie;
        });
    } // <---
    getFirts20(pelis, Url, i) {
        this.getMovies(pelis, `${Url}&page=${i}`);
    }
}
ServiciounoService.ɵfac = function ServiciounoService_Factory(t) { return new (t || ServiciounoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ServiciounoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiciounoService, factory: ServiciounoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiciounoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario\Documents\gusti\angular\pelis\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map