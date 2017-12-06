webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/all-books/all-books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".d-md-inline-flex {\r\n    padding: 20px 20px 20px 0px;   \r\n}\r\n\r\n.d-md-inline-flex div {\r\n    background-color:#E0E0E0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 5px;\r\n    max-width: 350px;\r\n}\r\n\r\n.no-stretch {\r\n    width: 140px;\r\n}\r\n\r\n.img-set-width {\r\n    width: 128px;  \r\n}\r\n\r\n.modal-book-view {\r\n    margin-right: 20px; \r\n    margin-bottom: 20px;\r\n    margin: 5px 20px 20px 20px;\r\n    border: 1px solid grey;\r\n}\r\n\r\n.book-details {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-left: 5px;\r\n}\r\n\r\n/* green button css */\r\n\r\n.green {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #b1cb36;\r\n    \r\n}\r\n\r\n.green:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F02D';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .green:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span-green {\r\n    color: #b1cb36;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n .btn-move {\r\n     margin-top: 20px;\r\n }\r\n\r\n /* The Modal (background) */\r\n.modal {\r\n    /*   display: none; Hidden by default */\r\n      position: fixed; /* Stay in place */\r\n      z-index: 1; /* Sit on top */\r\n      left: 0;\r\n      top: 0;\r\n      width: 100%; /* Full width */\r\n      height: 100%; /* Full height */\r\n      overflow: auto; /* Enable scroll if needed */\r\n      background-color: rgb(0,0,0); /* Fallback color */\r\n      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n\r\n  .no-stretch {\r\n    width: 140px;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;    \r\n}\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content {\r\n      background-color: #ffffff;\r\n      margin: 15% auto; /* 15% from the top and centered */\r\n      padding: 20px;\r\n      border: 1px solid grey;\r\n      width: 80%; /* Could be more or less, depending on screen size */\r\n  }\r\n\r\n  .modal-content-box {\r\n    background-color: #ffffff;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid grey;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .fix-width-modal-content {\r\n        padding: 5px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-books/all-books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row flex-column\">\n\n    <h4>All Books</h4>\n    <p class=\"text-muted\">Review all books on Booktraders. <br> Press the \"View Details\" link to read a book's description and request a trade.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  \n  <div class=\"row\">\n <div *ngFor=\"let book of allBooks; let i = index;\"  class=\"d-md-inline-flex\">\n      <div style=\"border: 1px solid grey;\">\n        <div class=\"no-stretch\">\n            <div *ngIf=\"book.bookImages != undefined\"  style=\"margin-right: 20px; margin-bottom: 20px;\">\n                <img class=\"img-set-width\" src={{book.bookImages.thumbnail}}>\n            </div> \n        </div>\n        <div class=\"book-details\">\n          <p><span class=\"h6\">Title:</span> {{book.bookTitle}}</p>    \n          <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of book.bookAuthors\"> {{author}} </span></p>\n          <p><span class=\"h6\">Owner:</span> {{book.name}}</p>\n          <div><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"viewBook(i)\">View Book</button></div>\n        <!--  <p><a class=\"green\"><span class=\"button-span-green\" (click)=\"viewBook(i)\">View Book</span></a></p> -->\n      </div>\n    </div>\n  </div>  \n\n\n</div><!--close row -->\n\n</div><!--close container -->\n\n\n <!-- The Modal -->\n <div id=\"myModal\" class=\"modal\" [style.display]=\"modalStyle ? 'block' : 'none'\">\n  <!-- Modal content -->\n<div class=\"modal-content\">\n  <div>\n      <div>\n          <div style=\"border: 1px solid grey; max-width: 1050px;\" class=\"fix-width-modal-content\">\n            <div style=\"display: flex; flex-wrap: wrap; align-items: flex-start;\"> \n               <div *ngIf=\"modalBook.bookImages != undefined\">\n                <img class=\"modal-book-view\" src=\"{{modalBook.bookImages.thumbnail}}\"> \n               </div>\n                <div style=\"display: flex; flex-direction: column;\">\n                  <p><span class=\"h6\">Title:</span> {{modalBook.bookTitle}}</p>\n                  <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of modalBook.bookAuthors\"> {{author}}  </span></p> \n                  <p  style=\"max-width: 550px\"><span class=\"h6\">Description: </span> {{ modalBook.bookDescription}}</p>\n                  <p><span class=\"h6\">Book Owner:</span>  {{modalBook.name}} </p>\n                </div>\n            </div>    \n        </div>       \n      </div><!-- close div row -->      \n  </div><!-- close div *ngIf -->\n  <div style=\"color: red; margin: 20px 0px;\" *ngIf=\"message != undefined && message != ''\">{{message}}</div>\n  <div *ngIf=\"isMyBook != undefined && isMyBook == false\">\n    <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"requestTrade()\">Request Trade<div class=\"md-ripple-container\"></div></button></p>\n  </div>\n <!-- <div *ngIf=\"isMyBook != undefined && isMyBook == false\"><a class=\"green\"><span class=\"button-span-green\" (click)=\"requestTrade()\">Request Trade</span></a></div>-->\n  <div>\n      <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"closeModal()\">Close Modal<div class=\"md-ripple-container\"></div></button></p>\n</div><!-- close Modal content -->\n\n</div><!-- close Modal -->\n"

/***/ }),

/***/ "../../../../../src/app/all-books/all-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllBooksComponent = (function () {
    function AllBooksComponent(bookService, data) {
        this.bookService = bookService;
        this.data = data;
        this.results = [];
        this.allBooks = [];
        this.modalStyle = false; //modal style set to 'display: none' on page load
        this.modalBook = {};
        this.tradeResults = {};
    }
    AllBooksComponent.prototype.viewBook = function (index) {
        this.message = "";
        this.modalStyle = true;
        this.modalBook = this.allBooks[index];
        if (this.modalBook.name == this.loggedInUser.name) {
            this.isMyBook = true;
        }
        else {
            this.isMyBook = false;
        }
    };
    AllBooksComponent.prototype.requestTrade = function () {
        var _this = this;
        var tradeInfo = {
            bookId: this.modalBook.id,
            bookTitle: this.modalBook.bookTitle,
            bookAuthors: this.modalBook.bookAuthors,
            bookDescription: this.modalBook.bookDescription,
            bookImages: this.modalBook.bookImages,
            bookOwner: this.modalBook.name,
            tradeRequester: this.loggedInUser.name,
            fbId: this.loggedInUser.fbId,
        };
        this.bookService
            .checkTrade(tradeInfo)
            .subscribe(function (result) {
            _this.tradeResults = result;
            _this.message = "";
            var trades = JSON.parse(_this.tradeResults._body);
            var hasRequested = false;
            if (trades[0].tradesRequested.length > 0) {
                for (var i = 0; i < trades[0].tradesRequested.length; i++) {
                    if (trades[0].tradesRequested[i].id === tradeInfo.bookId) {
                        hasRequested = true;
                    }
                }
            }
            if (hasRequested == false) {
                _this.bookService.requestTrade(tradeInfo); //if they haven't requested to trade book before, send to trade request
            }
            else {
                _this.message = "You've requested this trade before!";
            }
        });
    };
    AllBooksComponent.prototype.closeModal = function () {
        this.modalStyle = false;
    };
    AllBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (user) {
            _this.loggedInUser = user;
        });
        this.bookService
            .getAllBooks()
            .subscribe(function (result) {
            _this.results = result;
            for (var i = 0; i < _this.results.length; i++) {
                for (var j = 0; j < _this.results[i].books.length; j++) {
                    var currentBookObject = _this.results[i].books[j];
                    currentBookObject.name = _this.results[i].name; //build one object for DOM that contains book and user name
                    _this.allBooks.push(currentBookObject); //add each book plus user name to allBooks array, which is used to build all books view
                }
            }
        });
    };
    return AllBooksComponent;
}());
AllBooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-all-books',
        template: __webpack_require__("../../../../../src/app/all-books/all-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/all-books/all-books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object])
], AllBooksComponent);

var _a, _b;
//# sourceMappingURL=all-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-login (messageEvent)=\"receiveMessage($event)\"></app-login>\n\n<div style=\"margin-top: 100px;\" class=\"mobile-fix\" *ngIf=\"isLoggedIn == true\" >\n\n  <router-outlet></router-outlet>\n\n</div><!-- close div -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.isLoggedIn = false;
    }
    AppComponent.prototype.receiveMessage = function ($event) {
        this.message = $event;
        if (this.message === 'logged in!') {
            this.isLoggedIn = true;
        }
        if (this.message === 'logged out!') {
            this.isLoggedIn = false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_books_all_books_component__ = __webpack_require__("../../../../../src/app/all-books/all-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_books_my_books_component__ = __webpack_require__("../../../../../src/app/my-books/my-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__books_service__ = __webpack_require__("../../../../../src/app/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_trades_my_trades_component__ = __webpack_require__("../../../../../src/app/my-trades/my-trades.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'all-books', component: __WEBPACK_IMPORTED_MODULE_7__all_books_all_books_component__["a" /* AllBooksComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__my_profile_my_profile_component__["a" /* MyProfileComponent */] },
    { path: 'my-books', component: __WEBPACK_IMPORTED_MODULE_8__my_books_my_books_component__["a" /* MyBooksComponent */] },
    { path: 'my-trades', component: __WEBPACK_IMPORTED_MODULE_14__my_trades_my_trades_component__["a" /* MyTradesComponent */] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__all_books_all_books_component__["a" /* AllBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_8__my_books_my_books_component__["a" /* MyBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_9__my_profile_my_profile_component__["a" /* MyProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__my_trades_my_trades_component__["a" /* MyTradesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__books_service__["a" /* BooksService */],
            __WEBPACK_IMPORTED_MODULE_13__login_service__["a" /* LoginService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
    }
    BooksService.prototype.getAllBooks = function () {
        return this.http
            .get('/api/all-books')
            .map(function (response) {
            var resp = response.json();
            return resp;
        })
            .catch(this.handleError);
    };
    BooksService.prototype.addToMyBooks = function (bookInfo) {
        var body = bookInfo;
        var req = this.http.post('/api/add-to-my-books', body);
        req.subscribe(function (getResponse) { return console.log(getResponse); });
    };
    BooksService.prototype.deleteFromMyBooks = function (bookInfo) {
        var body = bookInfo;
        var req = this.http.post('/api/delete-from-my-books', body);
        req.subscribe(function (getResponse) { return console.log(getResponse); });
    };
    BooksService.prototype.searchForBook = function () {
        return this.http
            .get('/api/add-book')
            .map(function (response) {
            if (response !== null) {
                var resp = response.json();
                return resp;
            }
            return response; /// this code is added for testing purposes if user doesn't exist
        })
            .catch(this.handleError);
    };
    BooksService.prototype.searchForUser = function (userInfo) {
        var body = userInfo;
        return this.http
            .post('/api/add-book', body)
            .map(function (response) {
            var resp = response.json();
            return resp;
        })
            .catch(this.handleError);
    };
    BooksService.prototype.getMyBooks = function (userInfo) {
        var body = userInfo;
        return this.http
            .post('/api/my-books', body)
            .map(function (response) {
            var resp = response.json();
            return resp;
        })
            .catch(this.handleError);
    };
    BooksService.prototype.searchGoogleBooks = function (url) {
        return this.http
            .get(url)
            .map(function (response) {
            var resp = response.json();
            return resp;
        })
            .catch(this.handleError);
    };
    BooksService.prototype.getUserInfo = function (userInfo) {
        var body = userInfo;
        return this.http
            .post('/api/get-user', body) //can't figure out how to send params with get request in Angular 4?? so using post
            .map(function (response) {
            var resp = response.json();
            return resp;
        })
            .catch(this.handleError);
    };
    BooksService.prototype.updateUserProfile = function (userInfo) {
        var body = userInfo;
        var req = this.http.post('/api/update-user-info', body);
        req.subscribe(function (getResponse) { return console.log(getResponse); });
    };
    BooksService.prototype.userLogin = function (userInfo) {
        var body = userInfo;
        console.log(body);
        var req = this.http.post('/api/user-login', body);
        req.subscribe(function (getResponse) { return console.log(getResponse); });
    };
    BooksService.prototype.checkTrade = function (tradeInfo) {
        var body = tradeInfo;
        return this.http
            .post('/api/check-trade', body)
            .map(function (response) {
            var resp = response.json();
            return response;
        })
            .catch(this.handleError);
    };
    BooksService.prototype.requestTrade = function (tradeInfo) {
        var body = tradeInfo;
        var req = this.http.post('/api/request-trade', body);
        req.subscribe(function (getResponse) { return console.log(getResponse); });
    };
    BooksService.prototype.rejectTrade = function (tradeInfo) {
        var body = tradeInfo;
        var req = this.http.post('/api/reject-trade', body);
        req.subscribe(function (getResponse) { return console.log(getResponse); });
    };
    BooksService.prototype.approveTrade = function (tradeInfo) {
        var body = tradeInfo;
        var req = this.http.post('/api/approve-trade', body);
        req.subscribe(function (getResponse) { return console.log(getResponse); });
    };
    BooksService.prototype.deleteTrade = function (tradeInfo) {
        var body = tradeInfo;
        var req = this.http.post('/api/delete-trade', body);
        req.subscribe(function (getResponse) { return console.log(getResponse); });
    };
    BooksService.prototype.handleError = function (error) {
        console.error('BooksService::handleError', error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
    };
    return BooksService;
}());
BooksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BooksService);

var _a;
//# sourceMappingURL=books.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*button css */\r\n\r\n.green {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #b1cb36;\r\n    \r\n}\r\n\r\n.green:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F061';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .green:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span {\r\n    color: #b1cb36;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n\r\n /* orange button css */\r\n\r\n .orange {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #fba93d;\r\n    \r\n}\r\n\r\n.orange:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F061';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .orange:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .orange:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .orange:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span-orange {\r\n    color: #fba93d;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Jumbotron -->\n<div class=\"container\">\n  <div class=\"jumbotron text-center\" style=\"background-image: url('https://cdn.pixabay.com/photo/2016/11/18/16/49/books-1835753__340.jpg'); color: white;\">\n      <h1>Booktraders</h1>\n      <p class=\"lead\">A book trading website for book lovers!</p>\n    </div>\n</div>\n<div class=\"container\">\n  <!-- Example row of columns -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h4>My Books</h4>\n      <p>View your library, and new books to your collection using the Google Books API.</p>\n     <p><a routerLink=\"/my-books\" class=\"green\"><span class=\"button-span\">My Library</span></a></p> \n      <!-- <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" ><span class=\"ng-scope\">My Library</span><div class=\"md-ripple-container\"></div></button></p> -->\n    </div>\n    <div class=\"col-lg-4\">\n      <h4>View Books</h4>\n      <p>View all books other Booktraders users have added.</p>\n      <p><a routerLink=\"/all-books\" class=\"orange\"><span class=\"button-span-orange\">All Books</span></a></p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h4>Trade Books</h4>\n      <p>If you see a book you want to read on the list, you can propose a trade.  You can also approve trades other users request for books in your library.</p>\n      <p><a routerLink=\"/my-trades\" class=\"green\"><span class=\"button-span\">Trade Requests</span></a></p>\n    </div>\n  </div>\n</div><!-- close container -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({ test: "default message" });
        this.currentMessage = this.messageSource.asObservable();
    }
    LoginService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    LoginService.prototype.userLogin = function (userInfo) {
        var body = userInfo;
        var req = this.http.post('/api/user-login', body);
        req.subscribe(function (getResponse) { return console.log(getResponse); });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#mobile-menu-show {\r\n    display: none;\r\n}\r\n\r\n.margin-top-add {\r\n    margin-top: 10px;\r\n}\r\n\r\n/*button css */\r\n\r\n.green {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #b1cb36;\r\n    \r\n}\r\n\r\n.green:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F061';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .green:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span {\r\n    color: #b1cb36;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n /* Log in with Facebook button https://codepen.io/davidelrizzo/pen/vEYvyv */\r\n\r\n \r\n/* Shared */\r\n.loginBtn {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    /* width: 13em;  - apply for fixed size */\r\n    margin: 0.2em;\r\n    padding: 0 15px 0 46px;\r\n    border: none;\r\n    text-align: left;\r\n    line-height: 34px;\r\n    white-space: nowrap;\r\n    border-radius: 0.2em;\r\n    font-size: 16px;\r\n    color: #FFF;\r\n  }\r\n  .loginBtn:before {\r\n    content: \"\";\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 34px;\r\n    height: 100%;\r\n  }\r\n  .loginBtn:focus {\r\n    outline: none;\r\n  }\r\n  .loginBtn:active {\r\n    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n  }\r\n  \r\n  \r\n  /* Facebook */\r\n  .loginBtn--facebook {\r\n    background-color: #4C69BA;\r\n    background-image: linear-gradient(#4C69BA, #3B55A0);\r\n    /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n    text-shadow: 0 -1px 0 #354C8C;\r\n  }\r\n  .loginBtn--facebook:before {\r\n    border-right: #364e92 1px solid;\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n  }\r\n  .loginBtn--facebook:hover,\r\n  .loginBtn--facebook:focus {\r\n    background-color: #5B7BD5;\r\n    background-image: linear-gradient(#5B7BD5, #4864B1);\r\n  }\r\n  \r\n\r\n\r\n\r\n@media only screen and (max-width: 500px) {\r\n\r\n    #mobile-menu-hide {\r\n        display: none;\r\n    }\r\n\r\n    #mobile-menu-show {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\" *ngIf=\"loggedIn == true\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\">Booktraders</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/all-books\" routerLinkActive=\"active\">All Books</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/my-books\" routerLinkActive=\"active\">My Books</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/my-trades\" routerLinkActive=\"active\">My Trades</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\">My Profile</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"loggedIn == undefined  || loggedIn == false\">\r\n            <a class=\"nav-link\"  (click)=\"signInWithFB(); sendMessage();\">Facebook Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"loggedIn == true\"> \r\n          <a class=\"nav-link\" (click)=\"signOut()\">Log Out</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- if the user is logged in, the navbar above is displayed, controlled by *ngIf=\"user != undefined\" -->\r\n\r\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\" *ngIf=\"loggedIn == undefined  || loggedIn == false\">\r\n    <div class=\"container\" id=\"mobile-menu-hide\">\r\n      <a class=\"navbar-brand\" id=\"navbrand\" routerLink=\"/home\">Booktraders</a>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"loggedIn == undefined  || loggedIn == false\">\r\n              <a class=\"nav-link\"  (click)=\"signInWithFB(); sendMessage();\">Facebook Login</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"loggedIn == true\"> \r\n            <a class=\"nav-link\" (click)=\"signOut()\">Log Out</a>\r\n          </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"container\" id=\"mobile-menu-show\">\r\n        <ul class=\"navbar-nav\" id=\"add-margin-left\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"user == undefined\">\r\n                <a class=\"nav-link\"  (click)=\"signInWithFB(); sendMessage();\">Facebook Login</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"loggedIn == true \"> \r\n              <a class=\"nav-link\" (click)=\"signOut();\">Log Out</a>\r\n            </li>\r\n          </ul>\r\n    </div>\r\n  </nav>\r\n\r\n  <div style=\"margin-top: 100px;\" class=\"mobile-fix\" *ngIf=\"loggedIn == undefined  || loggedIn == false\" >\r\n      <div class=\"container\">\r\n          <div class=\"jumbotron text-center\" style=\"background-image: url('https://cdn.pixabay.com/photo/2016/11/18/16/49/books-1835753__340.jpg'); color: white;\">\r\n            <h1>Booktraders</h1>\r\n            <p class=\"lead\">A book trading website for book lovers!</p>\r\n          </div>\r\n        <div class=\"d-flex flex-column\">\r\n          <h4>Please sign in with Facebook to use Booktraders.</h4>\r\n        <!--  <button class=\"loginBtn loginBtn--facebook\" (click)=\"signInWithFB(); sendMessage();\" >Login with Facebook</button></p>-->\r\n          <div class=\"fb-login-button\" data-width=\"142\" data-max-rows=\"1\" data-size=\"large\" data-button-type=\"continue_with\" data-show-faces=\"false\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\"></div>\r\n        \r\n        \r\n        </div>\r\n      </div>\r\n    </div><!-- close div -->\r\n    \r\n\r\n<!-- if the user is not logged in, the navbar above is displayed, controlled by *ngIf=\"loggedIn == undefined  || loggedIn == false\"\r\n    done to improve logging in on mobile -->\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_service__ = __webpack_require__("../../../../../src/app/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(bookService, loginSerivce, http) {
        //https://samkirkiles.svbtle.com/angular-4-facebook-login-integration
        //https://developers.facebook.com/docs/graph-api/reference/user
        var _this = this;
        this.bookService = bookService;
        this.loginSerivce = loginSerivce;
        this.http = http;
        this.message = "logged out!";
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        // This function initializes the FB variable 
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1773684832675608',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.10'
            });
            FB.AppEvents.logPageView();
            // This is where we do most of our code dealing with the FB variable like adding an observer to check when the user signs in
            // ** ADD CODE TO NEXT STEP HERE **
            FB.Event.subscribe('auth.statusChange', (function (res) {
                if (res.status === 'connected') {
                    // use the response variable to get any information about the user and to see the tokens about the users session
                    console.log("connected!!");
                    FB.api(res.authResponse.userID, 'GET', {}, function (response) {
                        console.log(response.name);
                        _this.loggedIn = true;
                        var userInfo = {
                            name: response.name,
                            fbId: res.authResponse.userID
                            //   photoUrl: this.user.photoUrl
                        };
                        console.log(userInfo);
                        _this.bookService.userLogin(_this.userInfo); //move log in from bookService to loginService
                        _this.loginSerivce.changeMessage(_this.userInfo); //passes user info to other components
                        _this.message = 'logged in!';
                    });
                }
            }));
        };
    }
    LoginComponent.prototype.sendMessage = function () {
        this.message == 'logged out!' ? this.message = 'logged in!' : this.message = 'logged out!';
        this.messageEvent.emit(this.message);
    };
    LoginComponent.prototype.signOut = function () {
        this.sendMessage();
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "messageEvent", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-books/my-books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".d-md-inline-flex {\r\n    padding: 20px 20px 20px 0px;   \r\n}\r\n\r\n.d-md-inline-flex div {\r\n    background-color:#E0E0E0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 5px;\r\n    max-width: 350px;\r\n}\r\n\r\n.no-stretch {\r\n    width: 140px;\r\n}\r\n\r\n.img-myBooks {\r\n    max-width: 128px;\r\n}\r\n\r\n.book-details {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-left: 5px;\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    /*   display: none; Hidden by default */\r\n      position: fixed; /* Stay in place */\r\n      z-index: 1; /* Sit on top */\r\n      left: 0;\r\n      top: 0;\r\n      width: 100%; /* Full width */\r\n      height: 100%; /* Full height */\r\n      overflow: auto; /* Enable scroll if needed */\r\n      background-color: rgb(0,0,0); /* Fallback color */\r\n      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n\r\n  .no-stretch {\r\n    width: 140px;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n}\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content {\r\n      background-color: #ffffff;\r\n      margin: 15% auto; /* 15% from the top and centered */\r\n      padding: 20px;\r\n      border: 1px solid grey;\r\n      width: 80%; /* Could be more or less, depending on screen size */\r\n  }\r\n\r\n  .modal-content-box {\r\n    background-color: #ffffff;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid grey;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n  \r\n  /* The Close Button */\r\n  .close {\r\n      color: #aaa;\r\n      float: right;\r\n      font-size: 28px;\r\n      font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n      color: black;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n  }\r\n\r\n  .fix-width-modal-content {\r\n      padding: 10px;\r\n      background-color: #EBEAEA;\r\n      margin: 0px 10px 10px 0px;\r\n  }\r\n\r\n  .modal-content-view-details {\r\n    padding: 10px;\r\n    background-color: #EBEAEA;\r\n    margin: 0px 0px 10px 0px;\r\n  }\r\n\r\n    .button {\r\n        border-top: 1px solid #403d40;\r\n        background: #0da100;\r\n        background: -o-linear-gradient(top, #0da100, #0da100);\r\n        padding: 13.5px 27px;\r\n        border-radius: 4px;\r\n        text-shadow: rgba(0,0,0,.4) 0 1px 0;\r\n        color: white;\r\n        font-size: 16px;\r\n        font-family: Helvetica, Arial, Sans-Serif;\r\n        text-decoration: none;\r\n        vertical-align: middle;\r\n        /* copied from bootstrap .btn class*/\r\n        display: inline-block;\r\n        font-weight: 400;\r\n        text-align: center;\r\n        white-space: nowrap;\r\n        vertical-align: middle;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none;\r\n        border: 1px solid transparent;\r\n        padding: .5rem .75rem;\r\n        font-size: 1rem;\r\n        line-height: 1.25;\r\n        border-radius: .25rem;\r\n        transition: all .15s ease-in-out;\r\n        cursor: pointer;\r\n    }\r\n    .button:hover {\r\n        box-shadow: rgba(0,0,0,1) 0 1px 0;\r\n    }\r\n    .button:active {\r\n        border-top-color: #3f7851;\r\n        background: #3f7851;\r\n        box-shadow: rgba(0,0,0,1) 0 1px 0;\r\n    }\r\n\r\n    /* \"green\" button styles */\r\n\r\n    .green {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        border-radius: 3px;\r\n        display: inline-block;\r\n        padding-right: 10px;\r\n        color: #fff;\r\n        text-decoration: none;\r\n        font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n        background: #b1cb36; \r\n    }\r\n\r\n    .green:after {\r\n        font-family: FontAwesome;\r\n        content: '\\F002';\r\n        color: white;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n    }\r\n\r\n    .green:hover {\r\n        color: #fff;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .green:hover span {\r\n        color: #fff;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .green:active {\r\n        box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n        -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n        -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    }\r\n\r\n\r\n    .button-span {\r\n        color: #b1cb36;\r\n        padding: 10px;\r\n        margin-right: 10px;\r\n        display: inline-block;\r\n        background: #3c4043;\r\n        letter-spacing: 2px;\r\n        border-radius: 3px 0px 0px 3px;\r\n        font-size: 13px;\r\n    }\r\n\r\n/* green-book button css */\r\n\r\n .green-book {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #b1cb36;\r\n    \r\n}\r\n\r\n.green-book:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F02D';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .green-book:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green-book:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green-book:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span-green-book {\r\n    color: #b1cb36;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n /* green close button css */\r\n\r\n .green-close {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #b1cb36;\r\n    \r\n}\r\n\r\n.green-close:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F2D3';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .green-close:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green-close:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green-close:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span-green-close {\r\n    color: #b1cb36;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n /* red trash button css */\r\n\r\n .red {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #f25c43;\r\n    \r\n}\r\n\r\n.red:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F068';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .red:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .red:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .red:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span-red {\r\n    color: #f25c43;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n\r\n /* orange button css */\r\n\r\n .orange {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #fba93d;\r\n    \r\n}\r\n\r\n.orange:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F2D3';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .orange:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .orange:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .orange:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span-orange {\r\n    color: #fba93d;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n\r\n @media only screen and (max-width: 500px) {\r\n    .modal-content-box {\r\n        padding: 5px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-books/my-books.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"margin-top: 50px\">\n  <div class=\"row flex-column\">\n    <div class=\"flex-column\">\n      <h4>New Book</h4>\n      <p class=\"text-muted\">Press the \"Add Book\" button to find a new book using Google Books API and add it to your Library.</p>\n      <label style=\"margin-top: 30px\">Search for A New Book</label>\n      <input [(ngModel)]=\"search\" type=\"text\" class=\"form-control\" (keydown.enter)=\"LookupUserInfoAddBook(); updatemodalStyle();\" placeholder=\"Enter book title, author, or topic\" aria-describedby=\"enterbook\" style=\"max-width: 560px; margin-bottom: 12px;\">\n      <div style=\"font-size: 18px; color: red;\">{{message}}</div>\n      <div style=\"margin-top: 5px\">\n          <a class=\"green\" (click)=\"LookupUserInfoAddBook(); updatemodalStyle();\"><span class=\"button-span\">Search Now</span></a> <!--button -->    \n      </div>\n    </div>\n  </div>\n\n\n    <!-- The Modal -->\n  <div id=\"myModal\" class=\"modal\" [style.display]=\"modalStyle ? 'block' : 'none'\">\n      <!-- Modal content -->\n    <div class=\"modal-content\">\n      <div *ngIf=\"forkJoinStream && forkJoinStream.length > 0\">\n          <div>\n              <div  *ngFor=\"let search of forkJoinStream[1].items; let i = index\" style=\"border: 1px solid grey;\" class=\"fix-width-modal-content\">\n                <div style=\"display: flex; flex-wrap: wrap;\"> \n                    <div *ngIf=\"search.volumeInfo.imageLinks != undefined\">\n                      <img src=\"{{search.volumeInfo.imageLinks.thumbnail}}\" style=\"margin-right: 20px; margin-bottom: 20px;\"> \n                    </div>  \n                    <div style=\"display: flex; flex-direction: column;\">\n                      <p><span class=\"h6\">Title:</span> {{search.volumeInfo.title}}</p>\n                      <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of search.volumeInfo.authors\"> {{author}}  </span></p>\n                      <p *ngIf=\"showShortDescription && search.volumeInfo.description\" style=\"max-width: 550px\"><span class=\"h6\" >Description:</span> {{ search.volumeInfo.description.substr(0,100)}}...</p>\n                      <p *ngIf=\"!showShortDescription && search.volumeInfo.description\" style=\"max-width: 550px\"><span class=\"h6\">Description: </span> {{ search.volumeInfo.description}}</p>\n                      <p (click)=\"showFullDescription()\" style=\"cursor: pointer;\"  *ngIf=\"search.volumeInfo.description\" class=\"text-muted\">Show/Hide Full Description</p>\n                    </div>\n                </div> \n                <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"addToMyBooks(i)\">Add to My Books<div class=\"md-ripple-container\"></div></button></p>\n            </div>       \n          </div><!-- close div row -->      \n      </div><!-- close div *ngIf -->\n      <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"updatemodalStyle()\">Close Window<div class=\"md-ripple-container\"></div></button></p>\n    </div><!-- close Modal content -->\n    \n  </div><!-- close Modal -->\n  \n\n\n  <div class=\"row  flex-column\" style=\"margin-top: 100px;\">\n    <h4>My Library</h4>\n    <p class=\"text-muted\">Press the \"View Details\" link to read a book's description.</p>\n  </div>\n\n  <div class=\"row\" *ngIf=\"myBooks && myBooks.books.length > 0\">\n      <div *ngFor=\"let book of myBooks.books; let i = index\" class=\"d-md-inline-flex\">\n          <div style=\"border: 1px solid grey;\">\n            <div class=\"no-stretch\">\n              <div *ngIf=\"book.bookImages != undefined\" style=\"margin-right: 20px; margin-bottom: 20px;\">\n                <img class=\"img-myBooks\" src={{book.bookImages.thumbnail}}>\n              </div>\n            </div>\n            <div class=\"book-details\">\n              <p><span class=\"h6\">Title:</span> {{book.bookTitle}}</p>\n              <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of book.bookAuthors\"> {{author}} </span></p>\n              <div><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"modalDetailView(i)\">View Book</button></div>\n            </div>\n          </div>\n        </div>\n  </div>\n  <!--close row -->\n</div>\n<!--close container -->\n\n <!-- The View Details Modal -->\n <div id=\"myDetailModal\" class=\"modal\" [style.display]=\"modalDetailStyle ? 'block' : 'none'\">\n    <!-- Modal content -->\n  <div class=\"modal-content-box\">\n      <div *ngIf=\"modalDetailBook\">\n            <div style=\"display: flex; flex-wrap: wrap; border: 1px solid grey;\" class=\"modal-content-view-details\">\n               <div *ngIf=\"modalDetailBook.bookImages != undefined\"  style=\"margin-right: 20px; margin-bottom: 20px;\">\n                  <img src={{modalDetailBook.bookImages.thumbnail}}>\n                </div> \n                <div style=\"display: flex; flex-direction: column;\">\n                  <p><span class=\"h6\">Title:</span> {{modalDetailBook.bookTitle}}</p>\n                  <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of  modalDetailBook.bookAuthors\"> {{author}} </span></p>\n                  <p style=\"max-width: 550px\"><span class=\"h6\">Description: </span> {{ modalDetailBook.bookDescription}}</p>\n                </div>\n              </div>                \n            <div style=\"align-self: flex-end;\">\n              <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"removeFromLibrary(); modalDetailView();\">Remove From Library<div class=\"md-ripple-container\"></div></button></p>\n              <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"modalDetailView();\">Close<div class=\"md-ripple-container\"></div></button></p>\n            </div>\n      </div>\n  </div><!-- close Modal content -->\n  \n</div><!-- close Modal -->"

/***/ }),

/***/ "../../../../../src/app/my-books/my-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyBooksComponent = (function () {
    function MyBooksComponent(bookService, data) {
        this.bookService = bookService;
        this.data = data;
        this.userinfo = [];
        this.bookSearch = [];
        this.bookInfo = '';
        this.search = ''; //input box search variable
        this.forkJoinStream = []; // results of bookService.searchForUser and bookService.searchGoogleBooks
        this.message = ''; //error message variable
        this.encodedSearch = ''; //url encoded search
        this.modalStyle = false; // set the 'search' modal to not display onload
        this.modalDetailStyle = false; // modal for 'View Details' of my books
        this.showShortDescription = true; //show short description of books by default
        this.modalDetailBook = {}; //object to hold book in detail modal view
        this.myLibraryUser = ''; //tracks the user for My Library
    }
    MyBooksComponent.prototype.LookupUserInfoAddBook = function () {
        var _this = this;
        this.message = ''; //input/search cannot be blank
        if (this.search === '') {
            this.message = 'You must enter a search term';
            return;
        }
        this.encodedSearch = encodeURIComponent(this.search); //search must by URI encoded to send to API
        var user = this.bookService.searchForUser({ 'fbId': this.loggedInUser.fbId }); // returns an observable
        var bookResult = this.bookService.searchGoogleBooks('https://www.googleapis.com/books/v1/volumes?q=' + this.encodedSearch); //returns an observable
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin([user, bookResult]).subscribe(function (res) {
            _this.forkJoinStream = res;
            //   console.log(this.forkJoinStream);
        });
    };
    MyBooksComponent.prototype.addToMyBooks = function (i) {
        var _this = this;
        var bookInfo = {
            fbId: this.forkJoinStream[0].fbId,
            userName: this.forkJoinStream[0].name,
            userBooks: this.forkJoinStream[0].books,
            bookId: this.forkJoinStream[1].items[i].id,
            bookTitle: this.forkJoinStream[1].items[i].volumeInfo.title,
            bookAuthors: this.forkJoinStream[1].items[i].volumeInfo.authors,
            bookImages: this.forkJoinStream[1].items[i].volumeInfo.imageLinks,
            bookDescription: this.forkJoinStream[1].items[i].volumeInfo.description,
        };
        var idsOfUserBooks = this.forkJoinStream[0].books.map(function (item) { return item["id"]; });
        if (idsOfUserBooks.includes(this.forkJoinStream[1].items[i].id)) {
            this.message = this.forkJoinStream[1].items[i].volumeInfo.title + " is already in your library!";
            this.modalStyle = false;
            return;
        }
        this.bookService.addToMyBooks(bookInfo);
        this.modalStyle = false; // close modal 
        this.bookService //get my books call (update with book added)
            .getMyBooks({ 'fbId': this.loggedInUser.fbId })
            .subscribe(function (books) {
            _this.myBooks = books[0];
        });
    };
    MyBooksComponent.prototype.removeFromLibrary = function () {
        var _this = this;
        //build an object to send as response body
        var bookInfo = {
            userName: this.myLibraryUser,
            userBooks: this.modalDetailBook.userBooks,
            bookId: this.modalDetailBook.id,
            bookTitle: this.modalDetailBook.bookTitle,
            bookAuthors: this.modalDetailBook.bookAuthors,
            bookImages: this.modalDetailBook.bookImages,
            bookDescription: this.modalDetailBook.bookDescription
        };
        this.bookService.deleteFromMyBooks(bookInfo);
        this.bookService //get my books call (update with book deleted)
            .getMyBooks({ 'fbId': this.loggedInUser.fbId })
            .subscribe(function (books) {
            _this.myBooks = books[0];
        });
    };
    MyBooksComponent.prototype.updatemodalStyle = function () {
        this.message = ''; //input/search cannot be blank
        if (this.search === '') {
            this.message = 'You must enter a search term';
            return;
        }
        this.modalStyle = !this.modalStyle; //toggle modal display block and none
    };
    MyBooksComponent.prototype.showFullDescription = function () {
        this.showShortDescription = !this.showShortDescription;
    };
    MyBooksComponent.prototype.modalDetailView = function (i) {
        this.modalDetailStyle = !this.modalDetailStyle;
        if (this.modalDetailStyle == true) {
            this.modalDetailBook = this.myBooks.books[i]; //username not included in myBooks
            this.myLibraryUser = this.myBooks.name;
        }
    };
    MyBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (user) {
            _this.loggedInUser = user;
            var lookup = { 'fbId': _this.loggedInUser.fbId };
            _this.bookService
                .getMyBooks(lookup)
                .subscribe(function (books) {
                if (books.length === 0) {
                    return;
                }
                _this.myBooks = books[0];
            });
        });
    };
    return MyBooksComponent;
}());
MyBooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-my-books',
        template: __webpack_require__("../../../../../src/app/my-books/my-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-books/my-books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object])
], MyBooksComponent);

var _a, _b;
//# sourceMappingURL=my-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-6-profile {\r\n    max-width: 600px;\r\n}\r\n\r\n/* orange button css */\r\n\r\n.orange {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #fba93d;\r\n    \r\n}\r\n\r\n.orange:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F14B';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .orange:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .orange:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .orange:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span-orange {\r\n    color: #fba93d;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n\r\n /* blue button css */\r\n\r\n.blue {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #00adef;\r\n    \r\n}\r\n\r\n.blue:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F0C7';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .blue:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .blue:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .blue:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span-blue {\r\n    color: #00adef;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n\r\n /* green button css */\r\n\r\n.green {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-family: \"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    background: #b1cb36;\r\n    \r\n}\r\n\r\n.green:after {\r\n    font-family: FontAwesome;\r\n    content: '\\F05E';\r\n    color: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n .green:hover {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green:hover span {\r\n    color: #fff;\r\n    cursor: pointer;\r\n }\r\n\r\n .green:active {\r\n    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);\r\n }\r\n\r\n\r\n .button-span-green {\r\n    color: #b1cb36;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    background: #3c4043;; \r\n    letter-spacing: 2px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    font-size: 13px;\r\n }\r\n\r\n\r\n\r\n\r\n /*https://jsfiddle.net/ProLoser/TxBdP/ nifty 2-tone CSS Button*/\r\n\r\n /* https://stackoverflow.com/questions/20782368/use-font-awesome-icon-as-css-content */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row flex-column\">\r\n\r\n        <h4>My Profile</h4>\r\n        <p class=\"text-muted\">Fill out your City and Sate in your profile to help facilitate meeting up for book exchanges.\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n    <div class=\"row flex-column col-6-profile\" *ngIf=\"myProfileUser != undefined\">\r\n            <label for=\"basic-url\">Name:</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"user-name\" value=\"{{myProfileUser.name}}\" disabled >\r\n            </div>\r\n            <br>\r\n            <label for=\"basic-url\">City:</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"user-city\" *ngIf=\"myProfileUser.city != null\" value=\"{{myProfileUser.city}}\"  [(ngModel)]=\"myProfileUser.city\" [disabled]=\"isDisabled()\">\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"user-city\" *ngIf=\"myProfileUser.city == null\"  [(ngModel)]=\"myProfileUser.city\"   [disabled]=\"isDisabled()\">\r\n            </div>\r\n            <br>\r\n            <label for=\"basic-url\">State:</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"user-state\" *ngIf=\"myProfileUser.state != null\" value=\"{{myProfileUser.state}}\" [(ngModel)]=\"myProfileUser.state\" [disabled]=\"isDisabled()\" >\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"user-city\" *ngIf=\"myProfileUser.state == null\" [(ngModel)]=\"myProfileUser.state\"    [disabled]=\"isDisabled()\">\r\n            </div>\r\n            <br>\r\n            <div *ngIf=\"is_disabled === true\">\r\n                <a class=\"orange\"><span class=\"button-span-orange\" (click)=\"editUserInfo()\">Edit Profile Info</span></a>\r\n            </div>\r\n            <div *ngIf=\"is_disabled === false\">\r\n                    <a class=\"blue\"><span class=\"button-span-blue\" (click)=\"saveEdit()\">Save Profile Info</span></a>\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyProfileComponent = (function () {
    function MyProfileComponent(bookService, data) {
        this.bookService = bookService;
        this.data = data;
        this.myProfileUser = {
            fbId: "",
            name: "",
            state: "",
            city: ""
        };
        this.is_disabled = true;
    }
    MyProfileComponent.prototype.isDisabled = function () {
        return this.is_disabled;
    };
    MyProfileComponent.prototype.editUserInfo = function () {
        this.is_disabled = false;
    };
    MyProfileComponent.prototype.saveEdit = function () {
        this.is_disabled = true;
        var userUpdate = {
            fbId: this.myProfileUser.fbId,
            name: this.myProfileUser.name,
            state: this.myProfileUser.state,
            city: this.myProfileUser.city
        };
        this.bookService.updateUserProfile(userUpdate);
    };
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (user) {
            _this.loggedInUser = user;
            var lookup = { 'fbId': _this.loggedInUser.fbId };
            _this.bookService //get my myProfileUser info call
                .getUserInfo(lookup)
                .subscribe(function (results) {
                _this.myProfileUser.fbId = results.fbId;
                _this.myProfileUser.name = results.name;
                _this.myProfileUser.city = results.city;
                _this.myProfileUser.state = results.state;
            });
        });
    }; //end ngOnInit
    return MyProfileComponent;
}());
MyProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-my-profile',
        template: __webpack_require__("../../../../../src/app/my-profile/my-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-profile/my-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object])
], MyProfileComponent);

var _a, _b;
//# sourceMappingURL=my-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-trades/my-trades.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btm-margin {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    /*   display: none; Hidden by default */\r\n      position: fixed; /* Stay in place */\r\n      z-index: 1; /* Sit on top */\r\n      left: 0;\r\n      top: 0;\r\n      width: 100%; /* Full width */\r\n      height: 100%; /* Full height */\r\n      overflow: auto; /* Enable scroll if needed */\r\n      background-color: rgb(0,0,0); /* Fallback color */\r\n      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n\r\n  .no-stretch {\r\n    width: 140px;\r\n}\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content {\r\n      background-color: #ffffff;\r\n      margin: 15% auto; /* 15% from the top and centered */\r\n      padding: 20px;\r\n      border: 1px solid grey;\r\n      width: 80%; /* Could be more or less, depending on screen size */\r\n  }\r\n\r\n  \r\n/* The Modal Two (background) */\r\n.modal-2 {\r\n    /*   display: none; Hidden by default */\r\n      position: fixed; /* Stay in place */\r\n      z-index: 1; /* Sit on top */\r\n      left: 0;\r\n      top: 0;\r\n      width: 100%; /* Full width */\r\n      height: 100%; /* Full height */\r\n      overflow: auto; /* Enable scroll if needed */\r\n      background-color: rgb(0,0,0); /* Fallback color */\r\n      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content-2 {\r\n      background-color: #ffffff;\r\n      margin: 15% auto; /* 15% from the top and centered */\r\n      padding: 20px;\r\n      border: 1px solid grey;\r\n      width: 80%; /* Could be more or less, depending on screen size */\r\n  }\r\n\r\n\r\n  a {\r\n      cursor: pointer;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-trades/my-trades.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row flex-column btm-margin\">\n    <h4>My Trade Requests</h4>\n    <p class=\"text-muted\">View and approve Trade Requests from other users on Booktraders.\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row btm-margin\">\n    <div *ngIf=\"tradeRequests.length > 0\">\n      <h4>Trade Requests</h4>\n    </div>\n  </div>\n  <div *ngIf=\"tradeRequests.length > 0\">\n    <div class=\"row flex-column btm-margin\" *ngFor=\"let request of tradeRequests; let i = index\">\n      <p><span class=\"h6\">Title:</span>  {{request.bookTitle}}\n        <a style=\"color: blue; margin-left: 5px;\" (click)=\"viewRequest(i)\">View More</a>\n      </p>\n    </div>\n  </div>\n  <div class=\"row btm-margin\">\n    <div *ngIf=\"tradesRequested.length > 0\">\n      <h4>Trades Requested</h4>\n    </div>\n  </div>\n  <div *ngIf=\"tradesRequested.length > 0\">\n    <div class=\"row flex-column btm-margin\" *ngFor=\"let requested of tradesRequested; let i = index\">\n      <p><span class=\"h6\">Title:</span>  {{requested.bookTitle}}\n        <a style=\"color: blue; margin-left: 5px;\" (click)=\"viewTradesRequested(i)\">View More</a>\n      </p>\n    </div>\n  </div>\n</div>\n\n  <!-- The Modal -->\n<div class=\"modal\" [style.display]=\"modalStyle ? 'block' : 'none'\">\n    <!-- Modal content -->\n  <div class=\"modal-content\" >\n    <div *ngIf=\"modalTradeInfo != undefined\">\n        <div class=\"row flex-column\" style=\"padding: 5px;\">\n            <div *ngIf=\"modalTradeInfo.bookImages != undefined  && modalTradeInfo.bookImages.thumbnail != null \">\n                <img src=\"{{modalTradeInfo.bookImages.thumbnail}}\" style=\"margin-right: 20px; margin-bottom: 20px;\"> \n            </div>  \n          <p><span class=\"h6\">Title:</span> {{modalTradeInfo.bookTitle}}</p>\n          <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of modalTradeInfo.bookAuthors\"> {{author}}  </span></p>\n          <p><span class=\"h6\">Trade Requester:</span> {{modalTradeInfo.tradeRequester}}</p>\n          <div *ngIf=\"tradePending != undefined\">\n            <p><span class=\"h6\">Trade Status: </span><span style=\"color:coral\">{{tradePending}} </span> </p>\n          </div>\n          <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"approveTrade()\">Approve Trade<div class=\"md-ripple-container\"></div></button></p>\n          <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"rejectTrade()\">Reject Trade<div class=\"md-ripple-container\"></div></button></p>\n          <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"closeModal()\">Close<div class=\"md-ripple-container\"></div></button></p>\n        </div>\n   \n   </div><!-- close Modal content -->\n  </div>\n</div><!-- close Modal -->\n\n\n    <!-- The Modal -->\n  <div class=\"modal-2\" [style.display]=\"modalTwoStyle ? 'block' : 'none'\">\n      <!-- Modal content -->\n    <div class=\"modal-content-2\" >\n        <div *ngIf=\"modalTwoInfo != undefined\">\n            <div class=\"row flex-column\" style=\"padding: 5px;\">\n                <div *ngIf=\"modalTwoInfo.bookImages != undefined  && modalTwoInfo.bookImages.thumbnail != null \">\n                    <img src=\"{{modalTwoInfo.bookImages.thumbnail}}\" style=\"margin-right: 20px; margin-bottom: 20px;\"> \n                </div>  \n              <p><span class=\"h6\">Title:</span> {{modalTwoInfo.bookTitle}}</p>\n              <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of modalTwoInfo.bookAuthors\"> {{author}}  </span></p>\n              <p><span class=\"h6\">Trade Requester:</span> {{modalTwoInfo.tradeRequester}}</p>\n              <p><span class=\"h6\">Trade Status: </span><span style=\"color:coral\"> {{isApproved}}</span></p>\n              <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"deleteRequest()\">Delete Request<div class=\"md-ripple-container\"></div></button></p>\n              <p><button class=\"md-raised md-button md-ink-ripple\" type=\"button\" (click)=\"closeModalTwo()\">Close<div class=\"md-ripple-container\"></div></button></p>\n            </div>\n    </div><!-- close Modal content -->\n    \n  </div><!-- close Modal -->\n\n\n  "

/***/ }),

/***/ "../../../../../src/app/my-trades/my-trades.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTradesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyTradesComponent = (function () {
    function MyTradesComponent(bookService, data) {
        this.bookService = bookService;
        this.data = data;
        this.results = [];
        this.tradeRequests = [];
        this.tradesRequested = [];
        this.modalStyle = false; // set the 'search' modal to not display onload
        this.modalTwoStyle = false;
        this.modalTradeInfo = {};
        this.modalTwoInfo = {};
        this.tradePending = "This trade is pending.";
    }
    MyTradesComponent.prototype.viewRequest = function (index) {
        this.modalTradeInfo = this.tradeRequests[index];
        this.modalStyle = true;
        if (this.tradeRequests[index].tradePending == true) {
            this.tradePending = "Trade status is pending. You need to approve/disapprove this trade.";
        }
        if (this.tradeRequests[index].tradePending == false) {
            if (this.tradeRequests[index].tradeApproved == true) {
                this.tradePending = "You approved this trade.";
            }
            else {
                this.tradePending = "You did not approve this trade.";
            }
        }
    };
    MyTradesComponent.prototype.rejectTrade = function () {
        var rejectTradeInfo = {
            id: this.modalTradeInfo.id,
            tradeApproved: false,
            tradePending: false,
            tradeRequester: this.modalTradeInfo.tradeRequester,
            bookOwner: this.modalTradeInfo.bookOwner,
            bookDescription: this.modalTradeInfo.bookDescription,
            bookAuthors: this.modalTradeInfo.bookAuthors,
            bookTitle: this.modalTradeInfo.bookTitle,
            bookImages: this.modalTradeInfo.bookImages
        };
        this.bookService.rejectTrade(rejectTradeInfo); // send reject trade info to server
        this.modalTradeInfo.tradePending = false;
        this.tradePending = "You did not approve this trade.";
        for (var i = 0; i < this.tradeRequests.length; i++) {
            if (this.tradeRequests[i].id == this.modalTradeInfo.id) {
                this.tradeRequests[i].tradePending = false;
            }
        }
    };
    MyTradesComponent.prototype.approveTrade = function () {
        var approveTradeInfo = {
            id: this.modalTradeInfo.id,
            tradeApproved: true,
            tradePending: false,
            tradeRequester: this.modalTradeInfo.tradeRequester,
            bookOwner: this.modalTradeInfo.bookOwner,
            bookDescription: this.modalTradeInfo.bookDescription,
            bookAuthors: this.modalTradeInfo.bookAuthors,
            bookTitle: this.modalTradeInfo.bookTitle,
            bookImages: this.modalTradeInfo.bookImages
        };
        this.bookService.approveTrade(approveTradeInfo); // send approve trade info to server
        this.modalTradeInfo.tradePending = false;
        this.tradePending = "You approved this trade.";
        for (var i = 0; i < this.tradeRequests.length; i++) {
            if (this.tradeRequests[i].id == this.modalTradeInfo.id) {
                this.tradeRequests[i].tradePending = false;
                this.tradeRequests[i].tradeApproved = true;
            }
        }
    };
    MyTradesComponent.prototype.closeModal = function () {
        this.modalStyle = false;
    };
    MyTradesComponent.prototype.viewTradesRequested = function (index) {
        this.modalTwoInfo = this.tradesRequested[index];
        this.modalTwoStyle = true;
        if (this.tradesRequested[index].tradePending == true) {
            this.isApproved = "Trade status is pending. The book owner needs to review your request.";
            this.tradePending = "The book owner still needs to review your trade";
        }
        if (this.tradeRequests[index].tradePending == false) {
            if (this.tradeRequests[index].tradeApproved == true) {
                this.isApproved = "This trade request was approved.";
                this.tradePending = "The book owner has reviewed this trade";
            }
            else {
                this.isApproved = "This trade request was not approved.";
                this.tradePending = "The book owner has reviewed this trade";
            }
        }
        console.log(this.tradePending + " TRADE PENDING");
    };
    MyTradesComponent.prototype.closeModalTwo = function () {
        this.modalTwoStyle = false;
    };
    MyTradesComponent.prototype.deleteRequest = function () {
        var deleteTradeInfo = {
            id: this.modalTwoInfo.id,
            tradeRequester: this.modalTwoInfo.tradeRequester,
            bookOwner: this.modalTwoInfo.bookOwner,
            bookTitle: this.modalTwoInfo.bookTitle
        };
        this.bookService.deleteTrade(deleteTradeInfo); // send reject trade info to server
        for (var i = 0; i < this.tradesRequested.length; i++) {
            if (this.tradesRequested[i].id == this.modalTwoInfo.id) {
                this.tradesRequested.splice(i, 1);
            }
        }
        this.closeModalTwo();
    };
    MyTradesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (user) {
            _this.loggedInUser = user;
            var lookup = { 'fbId': _this.loggedInUser.fbId };
            _this.bookService
                .getMyBooks(lookup) //general use profile lookup
                .subscribe(function (results) {
                if (results.length > 0) {
                    _this.results = results[0];
                    _this.tradeRequests = _this.results.tradeRequests;
                    _this.tradesRequested = _this.results.tradesRequested;
                }
            });
        });
    };
    return MyTradesComponent;
}());
MyTradesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-my-trades',
        template: __webpack_require__("../../../../../src/app/my-trades/my-trades.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-trades/my-trades.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object])
], MyTradesComponent);

var _a, _b;
//# sourceMappingURL=my-trades.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map