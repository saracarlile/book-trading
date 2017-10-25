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
exports.push([module.i, ".d-md-inline-flex {\r\n    padding: 20px 20px 20px 0px;   \r\n}\r\n\r\n.d-md-inline-flex div {\r\n    background-color:#E0E0E0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 5px;\r\n    max-width: 350px;\r\n}\r\n\r\n.no-stretch {\r\n    width: 140px;\r\n}\r\n\r\nimg {\r\n    width: 128px;\r\n    \r\n}\r\n\r\n.book-details {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-left: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-books/all-books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row flex-column\">\n\n    <h4>All Books</h4>\n    <p class=\"text-muted\">Review all books on Booktraders. <br> Press the \"View Details\" link to read a book's description and request a trade.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  \n  <div class=\"row\">\n  <div *ngFor=\"let book of books\"  class=\"d-md-inline-flex add-border\">\n      <div>\n        <div class=\"no-stretch\">\n          <img src={{book.volumeInfo.imageLinks.thumbnail}}>\n        </div>\n        <div class=\"book-details\">\n          <p><strong>Title:</strong> {{book.volumeInfo.title}}</p>\n          <p><strong>Author:</strong> {{book.volumeInfo.authors}}</p>\n          <p><strong>Owner:</strong> Booktraders User Name</p>\n          <p>View Details</p>\n      </div>\n    </div>\n  </div>\n\n\n</div><!--close row -->\n\n</div><!--close container -->"

/***/ }),

/***/ "../../../../../src/app/all-books/all-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
    function AllBooksComponent(bookService) {
        this.bookService = bookService;
    }
    AllBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService
            .getAllBooks()
            .subscribe(function (books) {
            _this.books = books;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object])
], AllBooksComponent);

var _a;
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Booktraders</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/all-books\" routerLinkActive=\"active\">All Books</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/my-books\" routerLinkActive=\"active\">My Books</a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\">My Profile</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div style=\"margin-top: 100px;\">\n\n<router-outlet></router-outlet>\n\n</div><!-- close div -->\n\n  <!-- Site footer -->\n  <div class=\"container\">\n    <footer class=\"footer\">\n      <p>&copy; Company 2017</p>\n    </footer>\n</div>"

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
        this.title = 'app';
    }
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
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__books_service__["a" /* BooksService */]],
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
        this.GoogleBooksAPIUrl = 'https://www.googleapis.com/books/v1/volumes?q=quilting'; // URL to web api
        this.books = [{ author: "Sam", title: "first book" }, { author: "cindy", title: "second book" }];
    } // this will work now without any error
    //example JSON not used
    BooksService.prototype.getAllBooks = function () {
        return this.http
            .get(this.GoogleBooksAPIUrl)
            .map(function (response) {
            var resp = response.json();
            console.log(resp.items);
            return resp.items;
        })
            .catch(this.handleError);
    };
    // Get all posts from the API
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
                console.log(resp);
                return resp;
            }
            return response; /// this code is added for testing purposes if user doesn't exist
        })
            .catch(this.handleError);
    };
    BooksService.prototype.searchForUser = function () {
        return this.http
            .get('/api/add-book')
            .map(function (response) {
            var resp = response.json();
            console.log(resp);
            return resp;
        })
            .catch(this.handleError);
    };
    BooksService.prototype.getMyBooks = function () {
        return this.http
            .get('/api/my-books')
            .map(function (response) {
            var resp = response.json();
            console.log(resp);
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Jumbotron -->\n<div class=\"container\">\n  <div class=\"jumbotron text-center\">\n      <h1>Booktraders</h1>\n      <p class=\"lead\">A book trading website for book lovers!</p>\n    </div>\n</div>\n<div class=\"container\">\n  <!-- Example row of columns -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h4>My Books</h4>\n      <p>View your library, and new books to your collection using the Google Books API.</p>\n      <p><a class=\"btn btn-primary\" href=\"#\" role=\"button\">View Library &raquo;</a></p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h4>View Books</h4>\n      <p>View all books other Booktraders users have added.</p>\n      <p><a class=\"btn btn-primary\" href=\"#\" role=\"button\">View All Books &raquo;</a></p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h4>Trade Books</h4>\n      <p>If you see a book you want to read on the list, you can propose a trade.  You can also approve trades other users request for books in your library.</p>\n      <p><a class=\"btn btn-primary\" href=\"#\" role=\"button\">View Trade Requests &raquo;</a></p>\n    </div>\n  </div>\n</div><!-- close container -->\n\n\n"

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

/***/ "../../../../../src/app/my-books/my-books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".d-md-inline-flex {\r\n    padding: 20px 20px 20px 0px;   \r\n}\r\n\r\n.d-md-inline-flex div {\r\n    background-color:#E0E0E0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 5px;\r\n    max-width: 350px;\r\n}\r\n\r\n.no-stretch {\r\n    width: 140px;\r\n}\r\n\r\n.img-myBooks {\r\n    width: 128px;\r\n}\r\n\r\n.book-details {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-left: 5px;\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    /*   display: none; Hidden by default */\r\n      position: fixed; /* Stay in place */\r\n      z-index: 1; /* Sit on top */\r\n      left: 0;\r\n      top: 0;\r\n      width: 100%; /* Full width */\r\n      height: 100%; /* Full height */\r\n      overflow: auto; /* Enable scroll if needed */\r\n      background-color: rgb(0,0,0); /* Fallback color */\r\n      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content {\r\n      background-color: #fefefe;\r\n      margin: 15% auto; /* 15% from the top and centered */\r\n      padding: 20px;\r\n      border: 1px solid #888;\r\n      width: 80%; /* Could be more or less, depending on screen size */\r\n  }\r\n  \r\n  /* The Close Button */\r\n  .close {\r\n      color: #aaa;\r\n      float: right;\r\n      font-size: 28px;\r\n      font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n      color: black;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n  }\r\n\r\n  .fix-width-modal-content {\r\n      width: 400px!important;\r\n      padding: 10px;\r\n      background-color: #EBEAEA;\r\n      margin: 0px 10px 10px 0px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-books/my-books.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"margin-top: 50px\">\n  <div class=\"row flex-column\">\n    <div class=\"flex-column\">\n      <h4>New Book</h4>\n      <p class=\"text-muted\">Press the \"Add Book\" button to find a new book using Google Books API and add it to your Library.</p>\n      <label style=\"margin-top: 30px\">Search for A New Book</label>\n      <input [(ngModel)]=\"search\" type=\"text\" class=\"form-control\" (keydown.enter)=\"LookupUserInfoAddBook(); updatemodalStyle();\" placeholder=\"Enter book title, author, or topic\" aria-describedby=\"enterbook\" style=\"max-width: 560px; margin-bottom: 12px;\">\n      <div style=\"font-size: 18px; color: red;\">{{message}}</div>\n      <div style=\"margin-top: 5px\"><button type=\"button\" (click)=\"LookupUserInfoAddBook(); updatemodalStyle();\" class=\"btn btn-default\">Search for book!</button></div>\n    </div>\n  </div>\n\n\n    <!-- The Modal -->\n  <div id=\"myModal\" class=\"modal\" [style.display]=\"modalStyle ? 'block' : 'none'\">\n      <!-- Modal content -->\n    <div class=\"modal-content\">\n      <div *ngIf=\"forkJoinStream && forkJoinStream.length > 0\">\n          <div class=\"row justify-content-center\">\n              <div  *ngFor=\"let search of forkJoinStream[1].items; let i = index\" class=\"flex-column fix-width-modal-content\">\n                <div *ngIf=\"search.volumeInfo.imageLinks != undefined\">\n                <img src=\"{{search.volumeInfo.imageLinks.thumbnail}}\"> \n                </div>  \n                <p><span class=\"h6\">Title:</span> {{search.volumeInfo.title}}</p>\n                <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of search.volumeInfo.authors\"> {{author}}  </span></p>\n                <p *ngIf=\"showShortDescription && search.volumeInfo.description\"><span class=\"h6\" >Description:</span> {{ search.volumeInfo.description.substr(0,100)}}...</p>\n                <p *ngIf=\"!showShortDescription && search.volumeInfo.description\"><span class=\"h6\">Description: </span> {{ search.volumeInfo.description}}</p>\n                <p (click)=\"showFullDescription()\" style=\"cursor: pointer;\"  *ngIf=\"search.volumeInfo.description\" class=\"text-muted\">Show/Hide Full Description</p>\n                <button class=\"btn btn-primary\" (click)=\"addToMyBooks(i)\" style=\"max-width: 150px\">Add To My Books</button>    \n            </div>       \n          </div><!-- close div row -->      \n      </div><!-- close div *ngIf -->\n      <div class=\"row justify-content-center\">\n        <button class=\"btn btn-default\" (click)=\"updatemodalStyle()\" style=\"max-width: 150px\">Close Modal</button>\n      </div>\n    </div><!-- close Modal content -->\n    \n  </div><!-- close Modal -->\n  \n\n\n  <div class=\"row  flex-column\" style=\"margin-top: 100px;\">\n    <h4>My Library</h4>\n    <p class=\"text-muted\">Press the \"View Details\" link to read a book's description.</p>\n  </div>\n\n  <div class=\"row\">\n    <div *ngIf=\"myBooks && myBooks.books.length > 0\">\n      <div *ngFor=\"let book of myBooks.books; let i = index\" class=\"d-md-inline-flex add-border\">\n          <div>\n            <div class=\"no-stretch\">\n              <div *ngIf=\"book.bookImages != undefined\">\n                <img class=\"img-myBooks\" src={{book.bookImages.thumbnail}}>\n              </div>\n            </div>\n            <div class=\"book-details\">\n              <p><span class=\"h6\">Title:</span> {{book.bookTitle}}</p>\n              <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of book.bookAuthors\"> {{author}} </span></p>\n              <button class=\"btn btn-primary\" (click)=\"modalDetailView(i)\" style=\"max-width: 150px\">View Book Details</button>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <!--close row -->\n</div>\n<!--close container -->\n\n <!-- The View Details Modal -->\n <div id=\"myDetailModal\" class=\"modal\" [style.display]=\"modalDetailStyle ? 'block' : 'none'\">\n    <!-- Modal content -->\n  <div class=\"modal-content\">\n      <div *ngIf=\"modalDetailBook\">\n            <div style=\"display: flex; flex-wrap: wrap;\">\n               <div *ngIf=\"modalDetailBook.bookImages != undefined\"  style=\"margin-right: 20px; margin-bottom: 20px;\">\n                  <img src={{modalDetailBook.bookImages.thumbnail}}>\n                </div> \n                <div style=\"display: flex; flex-direction: column;\">\n                  <p><span class=\"h6\">Title:</span> {{modalDetailBook.bookTitle}}</p>\n                  <p><span class=\"h6\">Author:</span> <span  *ngFor=\"let author of  modalDetailBook.bookAuthors\"> {{author}} </span></p>\n                  <p><span class=\"h6\">ID:</span> {{modalDetailBook.id}}</p>\n                </div>\n              </div>\n            <div>           \n                <p><span class=\"h6\">Description: </span> {{ modalDetailBook.bookDescription}}</p>\n            </div>\n            <button class=\"btn btn-default\" (click)=\"modalDetailView();\" style=\"max-width: 200px\">Close Book Detail View</button>\n            <button class=\"btn btn-danger\" (click)=\"removeFromLibrary(); modalDetailView();\" style=\"max-width: 200px;\">Remove From Library</button>\n      </div>\n  </div><!-- close Modal content -->\n  \n</div><!-- close Modal -->"

/***/ }),

/***/ "../../../../../src/app/my-books/my-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
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
    function MyBooksComponent(bookService) {
        this.bookService = bookService;
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
        var user = this.bookService.searchForUser(); // returns an observable
        var bookResult = this.bookService.searchGoogleBooks('https://www.googleapis.com/books/v1/volumes?q=' + this.encodedSearch); //returns an observable
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin([user, bookResult]).subscribe(function (res) {
            _this.forkJoinStream = res;
            console.log(_this.forkJoinStream);
        });
    };
    MyBooksComponent.prototype.addToMyBooks = function (i) {
        var _this = this;
        var bookInfo = {
            userName: this.forkJoinStream[0].name,
            userBooks: this.forkJoinStream[0].books,
            bookId: this.forkJoinStream[1].items[i].id,
            bookTitle: this.forkJoinStream[1].items[i].volumeInfo.title,
            bookAuthors: this.forkJoinStream[1].items[i].volumeInfo.authors,
            bookImages: this.forkJoinStream[1].items[i].volumeInfo.imageLinks,
            bookDescription: this.forkJoinStream[1].items[i].volumeInfo.description
        };
        var idsOfUserBooks = this.forkJoinStream[0].books.map(function (item) { return item["id"]; });
        console.log(idsOfUserBooks);
        if (idsOfUserBooks.includes(this.forkJoinStream[1].items[i].id)) {
            this.message = this.forkJoinStream[1].items[i].volumeInfo.title + " is already in your library!";
            this.modalStyle = false;
            return;
        }
        this.bookService.addToMyBooks(bookInfo);
        this.modalStyle = false; // close modal 
        this.bookService //get my books call (update with book added)
            .getMyBooks()
            .subscribe(function (books) {
            _this.myBooks = books[0];
            console.log(_this.myBooks);
            console.log(_this.myBooks.books);
        });
    };
    MyBooksComponent.prototype.removeFromLibrary = function () {
        //build an object to send as response body
        var _this = this;
        console.log("MODALDETAIL " + this.modalDetailBook.bookId);
        console.log("MODALDETAIL " + this.modalDetailBook.bookId);
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
            .getMyBooks()
            .subscribe(function (books) {
            _this.myBooks = books[0];
            console.log(_this.myBooks);
            console.log(_this.myBooks.books);
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
            console.log(this.modalDetailBook);
        }
    };
    MyBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService
            .getMyBooks()
            .subscribe(function (books) {
            if (books.length === 0) {
                return;
            }
            _this.myBooks = books[0];
            console.log(_this.myBooks);
            console.log(_this.myBooks.books);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object])
], MyBooksComponent);

var _a;
//# sourceMappingURL=my-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Modal (background) */\r\n.modal {\r\n  /*   display: none; Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 [style.color]=\"titleStyle ? 'green' : 'pink'\">\n    {{title}}\n  </h1>\n\n  <p>\n    my-profile works!\n  </p>\n\n  <!-- Trigger/Open The Modal -->\n  <button (click)=\"updatetitleStyle()\">Open Modal</button>\n\n  <!-- The Modal -->\n  <div id=\"myModal\" class=\"modal\" [style.display]=\"titleStyle ? 'none' : 'block'\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <span class=\"close\">&times;</span>\n      <p>Some text in the Modal..</p>\n      <button (click)=\"updatetitleStyle()\">Close Modal</button>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function MyProfileComponent() {
        this.title = 'My Profile Title';
        this.titleStyle = false;
    }
    MyProfileComponent.prototype.updatetitleStyle = function () {
        this.titleStyle = !this.titleStyle;
        console.log(this.titleStyle);
    };
    MyProfileComponent.prototype.ngOnInit = function () {
    };
    return MyProfileComponent;
}());
MyProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-my-profile',
        template: __webpack_require__("../../../../../src/app/my-profile/my-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-profile/my-profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyProfileComponent);

//# sourceMappingURL=my-profile.component.js.map

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