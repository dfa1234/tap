webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_driver__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_request__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_history__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_newRequestModal_newRequestModal__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_newDriverModal_newDriverModal__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(driverProvider, historyProvider, requestProvider, modalCtrl) {
        this.driverProvider = driverProvider;
        this.historyProvider = historyProvider;
        this.requestProvider = requestProvider;
        this.modalCtrl = modalCtrl;
        this.drivers = [];
        this.requests = [];
        this.confirmation = null;
        this.cancel = null;
        this.canceled = null;
        this.Drive = { Driver: null, Request: null };
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.driverProvider.getDrivers$().subscribe(function (responseGet) {
            if (responseGet.constructor === Array && responseGet.length >= 1) {
                console.log(responseGet);
                responseGet.forEach(function (i) {
                    if (i.user) {
                        if (i.license && i.user.category !== 'SADRAN') {
                            _this.drivers.push(i);
                        }
                    }
                });
            }
            else {
                console.log(responseGet);
            }
        }, function (error) { return console.error(error); });
        this.requestProvider.getRequest$().subscribe(function (responseGet) { return _this.requests = responseGet; }, function (error) { return console.error(error); });
    };
    HomePage.prototype.sendToDriver = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.Drive.Driver && _this.Drive.Request) {
                _this.drivers.splice(_this.drivers.indexOf(_this.Drive.Driver), 1);
                _this.requests.splice(_this.requests.indexOf(_this.Drive.Request), 1);
                var address = _this.Drive.Request.street + " " +
                    _this.Drive.Request.street_num + ", " +
                    _this.Drive.Request.city + ", " +
                    _this.Drive.Request.country + " (" + _this.Drive.Request.zipcode + ")";
                var historyObj = {
                    driver_name: _this.Drive.Driver.user.firstName + ' ' + _this.Drive.Driver.user.lastName,
                    client_name: _this.Drive.Request.firstName + ' ' + _this.Drive.Request.lastName,
                    address: address,
                    driver_phone: _this.Drive.Driver.user.phone1,
                    client_phone: _this.Drive.Request.phone,
                    date: new Date()
                };
                _this.historyProvider.setHistory$(historyObj).subscribe(function (responseGet) { return console.log(responseGet); }, function (error) { return console.error(error); });
                _this.Drive.Driver = null;
                _this.Drive.Request = null;
                _this.confirmation = null;
                _this.cancel = null;
            }
        }, 3000);
    };
    HomePage.prototype.selectThis = function (type, obj) {
        if (type === 'driver') {
            this.Drive.Driver = obj;
        }
        else {
            this.Drive.Request = obj;
        }
        console.log(type, obj);
        if (this.Drive.Driver && this.Drive.Request) {
            this.confirmation = 1;
            this.cancel = 1;
            this.sendToDriver();
        }
    };
    HomePage.prototype.cancelThis = function () {
        var _this = this;
        this.Drive.Driver = null;
        this.Drive.Request = null;
        this.confirmation = null;
        this.cancel = null;
        this.canceled = 1;
        setTimeout(function () {
            _this.canceled = null;
        }, 3000);
    };
    HomePage.prototype.requestModal = function () {
        var _this = this;
        var reqModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_newRequestModal_newRequestModal__["a" /* NewRequestModal */]);
        reqModal.onDidDismiss(function (data) {
            console.log(data);
            if (data === null) {
            }
            else {
                _this.requests = data;
            }
        });
        reqModal.present();
    };
    HomePage.prototype.userModal = function () {
        var _this = this;
        var uModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_newDriverModal_newDriverModal__["a" /* NewDriverModal */]);
        uModal.onDidDismiss(function (data) {
            if (data === null) {
            }
            else {
                if (data.constructor === Array && data.length >= 1) {
                    console.log(data);
                    _this.drivers = [];
                    data.forEach(function (u) {
                        if (u.user) {
                            if (u.license && u.user.category !== 'SADRAN') {
                                _this.drivers.push(u);
                            }
                        }
                    });
                }
                else {
                    console.log(data);
                }
            }
        });
        uModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\home\home.html"*/'<ion-content padding class="mycontent">\n\n\n\n  <h1>Home</h1>\n\n\n\n\n\n  <div class="header" col-12>\n\n      SELECTED: {{Drive.Driver?.user.firstName}} {{Drive.Driver?.user.lastName}}\n\n      <span *ngIf="Drive.Request">\n\n          <ion-icon name="arrow-dropright-circle"></ion-icon>\n\n           {{Drive.Request?.firstName}} {{Drive.Request?.lastName}} -\n\n          {{Drive.Request?.street}} {{Drive.Request?.street_num}}, {{Drive.Request?.city}} {{Drive.Request?.country}}\n\n          <span class="sent" [hidden]="!confirmation"> sent </span>\n\n      </span>\n\n      <button (click)="cancelThis()" *ngIf="cancel">\n\n          Cancel\n\n      </button>\n\n      <span class="canceled" [hidden]="!canceled">Canceled </span>\n\n\n\n  </div>\n\n\n\n    <button ion-button (click)="userModal()" class="new_driver">new Driver</button>\n\n    <button ion-button (click)="requestModal()" class="new_request">new Request</button>\n\n\n\n  <ion-row>\n\n    <div class="drivers" col-6>\n\n        <button *ngFor="let driver of drivers" (click)="selectThis(\'driver\',driver)">\n\n            <span>{{driver.user.firstName}} {{driver.user.lastName}}</span>\n\n            <br>\n\n            <br>\n\n        {{driver.license}}\n\n      </button>\n\n    </div>\n\n\n\n\n\n    <div class="streets" col-6>\n\n      <button *ngFor="let request of requests" (click)="selectThis(\'request\',request)">\n\n          {{request.firstName}}\n\n          {{request.lastName}} -\n\n          {{request.street}}\n\n          {{request.street_num}},\n\n          {{request.city}},\n\n          {{request.country}}\n\n          ({{request.zipcode}})\n\n      </button>\n\n    </div>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_url__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestProvider = /** @class */ (function () {
    function RequestProvider(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    RequestProvider.prototype.getRequest$ = function () {
        return this.http.get(this.baseUrl.baseUrl + '/api/requests');
    };
    RequestProvider.prototype.setRequest$ = function (obj) {
        return this.http.post(this.baseUrl.baseUrl + '/api/requests', obj);
    };
    RequestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_url__["a" /* BaseUrl */]])
    ], RequestProvider);
    return RequestProvider;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_url__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryProvider = /** @class */ (function () {
    function HistoryProvider(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    HistoryProvider.prototype.getHistory$ = function () {
        return this.http.get(this.baseUrl.baseUrl + '/api/history');
    };
    HistoryProvider.prototype.setHistory$ = function (obj) {
        return this.http.post(this.baseUrl.baseUrl + '/api/history', obj);
    };
    HistoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_url__["a" /* BaseUrl */]])
    ], HistoryProvider);
    return HistoryProvider;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDriverModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_driver__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewDriverModal = /** @class */ (function () {
    function NewDriverModal(driverProvider, viewCtrl) {
        this.driverProvider = driverProvider;
        this.viewCtrl = viewCtrl;
        this.driver = {
            license: null,
            type: null,
            user: {
                category: null,
                firstName: null,
                lastName: null,
                email: null,
                password: null,
            }
        };
    }
    NewDriverModal.prototype.newDriver = function () {
        var _this = this;
        console.log(this.driver);
        this.driverProvider.setDrivers$(this.driver).subscribe(function (responseGet) { return _this.viewCtrl.dismiss(responseGet); }, function (error) { return console.error(error); });
    };
    NewDriverModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newDriverModal',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\components\newDriverModal\newDriverModal.html"*/'<ion-content padding>\n\n\n\n  <div class="row">\n\n    <div> First Name:</div>\n\n    <input type="text" [(ngModel)]="driver.user.firstName">\n\n    <div> Last Name: </div>\n\n      <input type="text" [(ngModel)]="driver.user.lastName">\n\n    <div> Email: </div>\n\n      <input type="text" [(ngModel)]="driver.user.email">\n\n      <div> Password: </div>\n\n      <input type="text" [(ngModel)]="driver.user.password">\n\n      <div> License: </div>\n\n      <input type="text" [(ngModel)]="driver.license">\n\n\n\n      <div>Category</div>\n\n      <ion-item>\n\n          <ion-select [(ngModel)]="driver.user.category" interface="popover">\n\n              <ion-option value="SADRAN">Sadran</ion-option>\n\n              <ion-option value="DRIVER">Driver</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n\n\n      <div>Type</div>\n\n      <ion-item>\n\n          <ion-select [(ngModel)]="driver.type" interface="popover">\n\n              <ion-option value="TAXI">Taxi</ion-option>\n\n              <ion-option value="DRIVER">Driver</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n      <div><button ion-button (click)="newDriver()">ADD</button> </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\components\newDriverModal\newDriverModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ViewController */]])
    ], NewDriverModal);
    return NewDriverModal;
}());

//# sourceMappingURL=newDriverModal.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(loginProvider, navController, alertCtrl) {
        this.loginProvider = loginProvider;
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.errorLogin = false;
        this.user = {
            username: null,
            password: null
        };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginProvider.login$(this.user).subscribe(function (responseGet) {
            console.log(responseGet);
            if (responseGet) {
                _this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.errorLogin = true;
                setTimeout(function () {
                    _this.errorLogin = false;
                }, 3000);
            }
        }, function (error) { return console.error(error); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\login\login.html"*/'<ion-content padding class="mycontent">\n\n\n\n  <div class="container">\n\n    <div class="row">\n\n      <div class="col-md-6 col-md-offset-3" style="max-width: 500px">\n\n        <div class="panel panel-login">\n\n          <div class="panel-heading">\n\n            <div class="row">\n\n              <div class="col-xs-6">\n\n                <a href="#" class="active" id="login-form-link">Tap Tel</a>\n\n              </div>\n\n            </div>\n\n            <hr>\n\n          </div>\n\n          <div class="panel-body">\n\n            <div class="row">\n\n              <div class="col-lg-12">\n\n                <form id="login-form" action="#/tabs" method="post" role="form" style="display: block;">\n\n                  <div class="form-group">\n\n                    <input type="text" name="username" [(ngModel)]="user.username" tabindex="1" class="form-control" placeholder="Username" value="">\n\n                  </div>\n\n                  <div class="form-group">\n\n                    <input type="password" name="password" [(ngModel)]="user.password" tabindex="2" class="form-control" placeholder="Password">\n\n                  </div>\n\n                  <div class="form-group">\n\n                    <div class="row">\n\n                      <div class="col-sm-6 col-sm-offset-3">\n\n                        <input type="submit" (click)= "login()" name="login-submit" id="login-submit" tabindex="4" class="btn btn-login" value="Log In">\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                  <div class="form-group">\n\n                    <div class="row">\n\n                      <div class="col-lg-12">\n\n                        <div class="text-center">\n\n                          <a href="#" tabindex="5" class="forgot-password">Forgot Password?</a>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                    <div class="form-group" *ngIf="errorLogin">\n\n                        <div class="row">\n\n                            <div class="col-lg-12">\n\n                                <div class="text-center">\n\n                                    <span style="color: #ff0000;" tabindex="5" >username or password is incorrect</span>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </form>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_login__["a" /* LoginProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_url__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginProvider = /** @class */ (function () {
    function LoginProvider(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    LoginProvider.prototype.login$ = function (obj) {
        return this.http.get(this.baseUrl.baseUrl + '/api/login', { params: obj });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_url__["a" /* BaseUrl */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRequestModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewRequestModal = /** @class */ (function () {
    function NewRequestModal(requestProvider, viewCtrl) {
        this.requestProvider = requestProvider;
        this.viewCtrl = viewCtrl;
        this.request = {
            firstName: null,
            lastName: null,
            phone: null,
            street: null,
            street_num: null,
            city: null,
            country: null,
            zipcode: null
        };
    }
    NewRequestModal.prototype.newRequest = function () {
        var _this = this;
        console.log(this.request);
        this.requestProvider.setRequest$(this.request).subscribe(function (responseGet) { return _this.viewCtrl.dismiss(responseGet); }, function (error) { return console.error(error); });
    };
    NewRequestModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newRequestModal',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\components\newRequestModal\newRequestModal.html"*/'<ion-content padding>\n\n\n\n  <div class="row">\n\n    <div> First Name:</div>\n\n    <input type="text" [(ngModel)]="request.firstName">\n\n    <div> Last Name: </div>\n\n      <input type="text" [(ngModel)]="request.lastName">\n\n    <div> Phone: </div>\n\n      <input type="text" [(ngModel)]="request.phone">\n\n      <div> Street: </div>\n\n      <input type="text" [(ngModel)]="request.street">\n\n      <div> Street Number: </div>\n\n      <input type="text" [(ngModel)]="request.street_num">\n\n      <div> City: </div>\n\n      <input type="text" [(ngModel)]="request.city">\n\n      <div> Country: </div>\n\n      <input type="text" [(ngModel)]="request.country">\n\n      <div> Zipcode: </div>\n\n      <input type="text" [(ngModel)]="request.zipcode">\n\n      <div><button ion-button (click)="newRequest()">ADD</button> </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\components\newRequestModal\newRequestModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], NewRequestModal);
    return NewRequestModal;
}());

//# sourceMappingURL=newRequestModal.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarPage = /** @class */ (function () {
    function CarPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\car\car.html"*/'<ion-content padding>\n\n\n\n  <h1>Cars</h1>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\car\car.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CarPage);
    return CarPage;
}());

//# sourceMappingURL=car.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_newDriverModal_newDriverModal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_driver__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriversPage = /** @class */ (function () {
    function DriversPage(navCtrl, driverProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.driverProvider = driverProvider;
        this.modalCtrl = modalCtrl;
        this.drivers = [];
    }
    DriversPage.prototype.ngOnInit = function () {
        var _this = this;
        this.driverProvider.getDrivers$().subscribe(function (responseGet) { return _this.drivers = responseGet; }, function (error) { return console.error(error); });
    };
    DriversPage.prototype.newUserModal = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_newDriverModal_newDriverModal__["a" /* NewDriverModal */]);
        myModal.present();
    };
    DriversPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-drivers',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\drivers\drivers.html"*/'<ion-content padding>\n\n\n\n  <h1>Drivers</h1>\n\n  <button ion-button (click)="newUserModal()">new</button>\n\n\n\n  <div class="row">\n\n    <span> license:</span>\n\n    <span> Name: </span>\n\n    <span> phone1: </span>\n\n    <span> phone2: </span>\n\n    <span> email: </span>\n\n    <span> category: </span>\n\n    <span> type: </span>\n\n  </div>\n\n\n\n  <div *ngFor="let driver of drivers" class="row">\n\n    <span>{{driver.license}}</span>\n\n    <span>{{driver.user.firstName}} {{driver.user.lastName}}</span>\n\n    <span>{{driver.user.phone1}}</span>\n\n    <span>{{driver.user.phone2}}</span>\n\n    <span>{{driver.user.email}}</span>\n\n    <span>{{driver.user.category}}</span>\n\n    <span>{{driver.type}}</span>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\drivers\drivers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], DriversPage);
    return DriversPage;
}());

//# sourceMappingURL=drivers.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\settings\settings.html"*/'<ion-content padding>\n\n\n\n  <h1>Settings</h1>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\account\account.html"*/'<ion-content padding>\n\n\n\n  <h1>Account</h1>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_history__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, historyProvider) {
        this.navCtrl = navCtrl;
        this.historyProvider = historyProvider;
        this.history = [];
    }
    HistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.historyProvider.getHistory$().subscribe(function (responseGet) { return _this.history = responseGet; }, function (error) { return console.error(error); });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\history\history.html"*/'<ion-content padding>\n\n\n\n  <h1>History</h1>\n\n\n\n  <div class="row">\n\n    <span> Driver Name: </span>\n\n    <span> Client name:</span>\n\n    <span> Address:</span>\n\n    <span> Driver Phone: </span>\n\n    <span> Client Phone: </span>\n\n    <span> Date: </span>\n\n  </div>\n\n\n\n  <div *ngFor="let h of history" class="row">\n\n    <span>{{h.driver_name}}</span>\n\n    <span>{{h.client_name}}</span>\n\n    <span>{{h.address}}</span>\n\n    <span>{{h.driver_phone}}</span>\n\n    <span>{{h.client_phone}}</span>\n\n    <span>{{h.date | date:"MM/dd/yyyy \'at\' h:mma"}}</span>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\history\history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_history__["a" /* HistoryProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_drivers_drivers__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_car_car__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_history_history__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_driver__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_url__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_request__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_history__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_newDriverModal_newDriverModal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_newRequestModal_newRequestModal__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_api__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_car_car__["a" /* CarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_drivers_drivers__["a" /* DriversPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__components_newDriverModal_newDriverModal__["a" /* NewDriverModal */],
                __WEBPACK_IMPORTED_MODULE_21__components_newRequestModal_newRequestModal__["a" /* NewRequestModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_car_car__["a" /* CarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_drivers_drivers__["a" /* DriversPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__components_newDriverModal_newDriverModal__["a" /* NewDriverModal */],
                __WEBPACK_IMPORTED_MODULE_21__components_newRequestModal_newRequestModal__["a" /* NewRequestModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_driver__["a" /* DriverProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_17__app_url__["a" /* BaseUrl */],
                __WEBPACK_IMPORTED_MODULE_22__app_api__["a" /* AppApi */],
                __WEBPACK_IMPORTED_MODULE_18__providers_request__["a" /* RequestProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_history__["a" /* HistoryProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_car__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drivers_drivers__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.homePage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.carPage = __WEBPACK_IMPORTED_MODULE_2__car_car__["a" /* CarPage */];
        this.driversPage = __WEBPACK_IMPORTED_MODULE_3__drivers_drivers__["a" /* DriversPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.accountPage = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */];
        this.historyPage = __WEBPACK_IMPORTED_MODULE_6__history_history__["a" /* HistoryPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="carPage" tabTitle="Cars" tabIcon="car"></ion-tab>\n\n  <ion-tab [root]="driversPage" tabTitle="Drivers" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="cog"></ion-tab>\n\n  <ion-tab [root]="historyPage" tabTitle="History" tabIcon="list"></ion-tab>\n\n  <ion-tab [root]="accountPage" tabTitle="My Account" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppApi; });
var AppApi = /** @class */ (function () {
    function AppApi() {
        this.drivers = [];
        this.requests = [];
    }
    return AppApi;
}());

//# sourceMappingURL=app.api.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(32);

var BaseUrl = /** @class */ (function () {
    function BaseUrl() {
        this.baseUrl = 'http://localhost:3000';
        this.header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://localhost:8100',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Access-Control-Allow-Credentials,Authorization'
        });
    }
    return BaseUrl;
}());

//# sourceMappingURL=app.url.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_url__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverProvider = /** @class */ (function () {
    function DriverProvider(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    DriverProvider.prototype.getDrivers$ = function () {
        return this.http.get(this.baseUrl.baseUrl + '/api/drivers');
    };
    DriverProvider.prototype.setDrivers$ = function (obj) {
        return this.http.post(this.baseUrl.baseUrl + '/api/drivers', obj);
    };
    DriverProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_url__["a" /* BaseUrl */]])
    ], DriverProvider);
    return DriverProvider;
}());

//# sourceMappingURL=driver.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map