webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Authentication__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_api__ = __webpack_require__(43);
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
    function LoginPage(authProvider, navController, alertCtrl, api) {
        this.authProvider = authProvider;
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.myProfile = this.api.myProfile;
        this.errorLogin = false;
        this.user = {
            username: null,
            password: null
        };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authProvider.login$(this.user).subscribe(function (responseGet) {
            console.log(responseGet);
            if (responseGet && (Object.keys(responseGet).length !== 0)) {
                _this.myProfile.user = responseGet;
                _this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { opentab: 2 });
            }
            else {
                _this.errorLogin = true;
                setTimeout(function () {
                    _this.errorLogin = false;
                }, 3000);
            }
        }, function (error) { return console.error(error); });
    };
    LoginPage.prototype.register = function () {
        this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\login\login.html"*/'<ion-content padding class="mycontent">\n\n\n\n<div class="col-md-6 col-md-offset-3" style="max-width: 500px">\n\n  <div class="panel-login">\n\n    <div class="col-xs-6 logo">\n\n      <a href="#">Tap Tel</a>\n\n    </div>\n\n    <hr>\n\n    <div class="panel-body">\n\n        <div class="col-lg-12">\n\n            <div class="form-group">\n\n              <input type="text" name="username" [(ngModel)]="user.username" placeholder="Username">\n\n            </div>\n\n            <div class="form-group">\n\n              <input type="password" name="password" [(ngModel)]="user.password" placeholder="Password">\n\n            </div>\n\n            <div class="form-group">\n\n              <div class="col-sm-6 col-sm-offset-3">\n\n                  <button ion-button (click)="login()" class="btn-login">Log In</button>\n\n              </div>\n\n            </div>\n\n            <div class="form-group">\n\n              <div class="col-lg-12">\n\n                <a href="#" class="forgot-password">Forgot Password?</a>\n\n              </div>\n\n            </div>\n\n            <div class="form-group">\n\n              <div class="col-lg-12 register">\n\n                  <span>Not registered?</span>\n\n                  <a href="#" (click)= "register()">Create an account</a>\n\n              </div>\n\n            </div>\n\n            <div class="form-group" *ngIf="errorLogin">\n\n              <div class="col-lg-12">\n\n                <span class="error">username or password is incorrect</span>\n\n              </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_Authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_Authentication__["a" /* AuthenticationProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__app_app_api__["a" /* AppApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_app_api__["a" /* AppApi */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
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



var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    AuthenticationProvider.prototype.login$ = function (obj) {
        return this.http.get(this.baseUrl.baseUrl + '/api/login', { params: obj });
    };
    AuthenticationProvider.prototype.register$ = function (obj) {
        return this.http.post(this.baseUrl.baseUrl + '/api/user', obj);
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_url__["a" /* BaseUrl */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=Authentication.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_car__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drivers_drivers__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ride_ride__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_api__ = __webpack_require__(43);
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
    function TabsPage(np, api) {
        this.api = api;
        this.homePage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.carPage = __WEBPACK_IMPORTED_MODULE_2__car_car__["a" /* CarPage */];
        this.driversPage = __WEBPACK_IMPORTED_MODULE_3__drivers_drivers__["a" /* DriversPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.accountPage = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */];
        this.ridePage = __WEBPACK_IMPORTED_MODULE_6__ride_ride__["a" /* RidePage */];
        this.myProfile = this.api.myProfile;
        this.seltabix = np.get('opentab');
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="seltabix" *ngIf="myProfile.user.category === \'SADRAN\'">\n\n    <ion-tab [root]="carPage" tabTitle="Cars" tabIcon="car"></ion-tab>\n\n    <ion-tab [root]="driversPage" tabTitle="Drivers" tabIcon="information-circle"></ion-tab>\n\n    <ion-tab [root]="homePage" tabTitle="dashboard" tabIcon="home"></ion-tab>\n\n    <!--ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="cog"></ion-tab-->\n\n    <ion-tab [root]="ridePage" tabTitle="Rides" tabIcon="body"></ion-tab>\n\n    <ion-tab [root]="accountPage" tabTitle="My Account" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs [selectedIndex]="seltabix" *ngIf="myProfile.user.category !== \'SADRAN\'">\n\n    <!--ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="cog"></ion-tab-->\n\n    <ion-tab [root]="ridePage" tabTitle="Rides" tabIcon="body"></ion-tab>\n\n    <ion-tab [root]="accountPage" tabTitle="My Account" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__app_app_api__["a" /* AppApi */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 106:
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
    RequestProvider.prototype.getRequests$ = function () {
        return this.http.get(this.baseUrl.baseUrl + '/api/requests');
    };
    RequestProvider.prototype.setRequest$ = function (obj) {
        return this.http.post(this.baseUrl.baseUrl + '/api/request', obj);
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideProvider; });
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



var RideProvider = /** @class */ (function () {
    function RideProvider(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    RideProvider.prototype.getRides$ = function () {
        return this.http.get(this.baseUrl.baseUrl + '/api/rides');
    };
    RideProvider.prototype.setRide$ = function (obj) {
        return this.http.post(this.baseUrl.baseUrl + '/api/ride', obj);
    };
    RideProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_url__["a" /* BaseUrl */]])
    ], RideProvider);
    return RideProvider;
}());

//# sourceMappingURL=ride.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDriverModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_driver__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
            type: 'TAXI',
            user: {
                category: 'DRIVER',
                firstName: null,
                lastName: null,
                email: null,
            }
        };
    }
    NewDriverModal.prototype.newDriver = function () {
        var _this = this;
        console.log(this.driver);
        this.driverProvider.setDriver$(this.driver).subscribe(function (responseGet) { return _this.viewCtrl.dismiss(responseGet); }, function (error) { return console.error(error); });
    };
    NewDriverModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newDriverModal',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\components\newDriverModal\newDriverModal.html"*/'<ion-content padding>\n\n\n\n  <div class="row">\n\n    <div> First Name:</div>\n\n    <input type="text" [(ngModel)]="driver.user.firstName">\n\n    <div> Last Name: </div>\n\n      <input type="text" [(ngModel)]="driver.user.lastName">\n\n    <div> Email: </div>\n\n      <input type="text" [(ngModel)]="driver.user.email">\n\n    <div> License: </div>\n\n      <input type="text" [(ngModel)]="driver.license">\n\n\n\n      <div>Category</div>\n\n      <ion-item>\n\n          <ion-select [(ngModel)]="driver.user.category" interface="popover">\n\n              <ion-option value="SADRAN">Sadran</ion-option>\n\n              <ion-option value="DRIVER">Driver</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n\n\n      <div>Type</div>\n\n      <ion-item>\n\n          <ion-select [(ngModel)]="driver.type" interface="popover">\n\n              <ion-option value="TAXI">Taxi</ion-option>\n\n              <ion-option value="DRIVER">Driver</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n      <div><button ion-button (click)="newDriver()">ADD</button> </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\components\newDriverModal\newDriverModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */]])
    ], NewDriverModal);
    return NewDriverModal;
}());

//# sourceMappingURL=newDriverModal.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_driver__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_request__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ride__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_newRequestModal_newRequestModal__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_newDriverModal_newDriverModal__ = __webpack_require__(108);
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
    function HomePage(driverProvider, rideProvider, requestProvider, modalCtrl) {
        this.driverProvider = driverProvider;
        this.rideProvider = rideProvider;
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
        this.requestProvider.getRequests$().subscribe(function (responseGet) { return _this.requests = responseGet; }, function (error) { return console.error(error); });
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
                var rideObj = {
                    driver_name: _this.Drive.Driver.user.firstName + ' ' + _this.Drive.Driver.user.lastName,
                    client_name: _this.Drive.Request.firstName + ' ' + _this.Drive.Request.lastName,
                    address: address,
                    driver_phone: _this.Drive.Driver.user.phone1,
                    client_phone: _this.Drive.Request.phone,
                    date: new Date()
                };
                _this.rideProvider.setRide$(rideObj).subscribe(function (responseGet) { return console.log(responseGet); }, function (error) { return console.error(error); });
                _this.Drive.Driver = null;
                _this.Drive.Request = null;
                _this.confirmation = null;
                _this.cancel = null;
            }
        }, 2000);
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
        }, 700);
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
    HomePage.prototype.driverModal = function () {
        var _this = this;
        var uModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_newDriverModal_newDriverModal__["a" /* NewDriverModal */]);
        uModal.onDidDismiss(function (data) {
            if (data === null) {
            }
            else {
                if (data && (Object.keys(data).length !== 0) && data.name !== 'SequelizeDatabaseError') {
                    console.log(data);
                    _this.drivers.push(data);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\home\home.html"*/'<ion-content padding class="mycontent">\n\n\n\n  <h1>Home</h1>\n\n\n\n\n\n  <div class="header" col-12>\n\n      SELECTED: {{Drive.Driver?.user.firstName}} {{Drive.Driver?.user.lastName}}\n\n      <span *ngIf="Drive.Request">\n\n          <ion-icon name="arrow-dropright-circle"></ion-icon>\n\n           {{Drive.Request?.firstName}} {{Drive.Request?.lastName}} -\n\n          {{Drive.Request?.street}} {{Drive.Request?.street_num}}, {{Drive.Request?.city}}\n\n          <span class="sent" [hidden]="!confirmation"> sent </span>\n\n      </span>\n\n      <button (click)="cancelThis()" *ngIf="cancel">\n\n          Cancel\n\n      </button>\n\n      <span class="canceled" [hidden]="!canceled">Canceled </span>\n\n\n\n  </div>\n\n\n\n    <button ion-button (click)="driverModal()" class="new_driver">new Driver</button>\n\n    <button ion-button (click)="requestModal()" class="new_request">new Request</button>\n\n\n\n  <ion-row>\n\n    <div class="drivers" col-6>\n\n        <button *ngFor="let driver of drivers" (click)="selectThis(\'driver\',driver)">\n\n            <span>{{driver.user.firstName}} {{driver.user.lastName}}</span>\n\n            <br>\n\n            <br>\n\n        {{driver.license}}\n\n      </button>\n\n    </div>\n\n\n\n\n\n    <div class="streets" col-6>\n\n\n\n        <div class="row" *ngFor="let request of requests" (click)="selectThis(\'request\',request)">\n\n            <span style="width: 15%"> {{request.firstName}}</span>\n\n            <span style="width: 15%"> {{request.lastName}} </span>\n\n            <span style="width: 15%"> {{request.street}} </span>\n\n            <span style="width: 5%"> {{request.street_num}} </span>\n\n            <span style="width: 15%"> {{request.city}} </span>\n\n            <span style="width: 20%"> {{request.phone}} </span>\n\n            <!--span> {{request.country}} </span-->\n\n            <span style="width: 15%"> ({{request.zipcode}}) </span>\n\n        </div>\n\n\n\n    </div>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ride__["a" /* RideProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRequestModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request__ = __webpack_require__(106);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], NewRequestModal);
    return NewRequestModal;
}());

//# sourceMappingURL=newRequestModal.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_newDriverModal_newDriverModal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_driver__ = __webpack_require__(53);
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
            selector: 'page-drivers',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\drivers\drivers.html"*/'<ion-content padding>\n\n\n\n  <button ion-button (click)="newUserModal()">new</button>\n\n\n\n  <div class="drivers-content">\n\n    <div class="row">\n\n      <span> license:</span>\n\n      <span> Name: </span>\n\n      <span> phone1: </span>\n\n      <span> phone2: </span>\n\n      <span> email: </span>\n\n      <span> category: </span>\n\n      <span> type: </span>\n\n      <span> status: </span>\n\n    </div>\n\n\n\n    <div *ngFor="let driver of drivers" class="row">\n\n      <span>{{driver.license}}</span>\n\n      <span>{{driver.user.firstName}} {{driver.user.lastName}}</span>\n\n      <span>{{driver.user.phone1}}</span>\n\n      <span>{{driver.user.phone2}}</span>\n\n      <span>{{driver.user.email}}</span>\n\n      <span>{{driver.user.category}}</span>\n\n      <span>{{driver.type}}</span>\n\n      <span>{{driver.status}}</span>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\drivers\drivers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], DriversPage);
    return DriversPage;
}());

//# sourceMappingURL=drivers.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_api__ = __webpack_require__(43);
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
    function AccountPage(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.myProfile = this.api.myProfile;
        console.log(this.myProfile);
    }
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\account\account.html"*/'<ion-content padding>\n\n\n\n    <div class="container">\n\n        <div class="row">\n\n            <div class="col-xs-12 col-sm-6 col-md-6">\n\n                <div class="well well-sm">\n\n                    <div class="row">\n\n                        <div class="col-sm-6 col-md-4">\n\n                            <img src="http://placehold.it/380x500" class="img-rounded"/>\n\n                        </div>\n\n                        <div class="col-sm-6 col-md-8">\n\n                            <h4>\n\n                                {{myProfile.user.firstName}} {{myProfile.user.lastName}}</h4>\n\n                            <small>{{myProfile.user.username}}</small>\n\n                            <p>\n\n                                <ion-icon name="mail"></ion-icon>{{myProfile.user.email}} <br />\n\n                                <ion-icon name="phone-portrait"></ion-icon>{{myProfile.user.phone1}} <br />\n\n                                <ion-icon name="phone-portrait"></ion-icon>{{myProfile.user.phone2}} <br />\n\n                                <ion-icon name="calendar"></ion-icon>{{myProfile.user.birthday | date:"dd/MM/yyyy"}} <br />\n\n                                <ion-icon name="people"></ion-icon>{{myProfile.user.category}} <br />\n\n                                <ion-icon name="ionitron"></ion-icon>Since {{myProfile.user.createdAt | date:"dd/MM/yyyy"}}\n\n                            </p>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_api__["a" /* AppApi */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ride__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RidePage = /** @class */ (function () {
    function RidePage(navCtrl, rideProvider) {
        this.navCtrl = navCtrl;
        this.rideProvider = rideProvider;
        this.rides = [];
    }
    RidePage.prototype.ngOnInit = function () {
        var _this = this;
        this.rideProvider.getRides$().subscribe(function (responseGet) { return _this.rides = responseGet; }, function (error) { return console.error(error); });
    };
    RidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ride',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\ride\ride.html"*/'<ion-content padding>\n\n\n\n  <div class="rides-content">\n\n    <div class="row">\n\n      <span> Driver Name: </span>\n\n      <span> Driver Phone: </span>\n\n      <span> Client name:</span>\n\n      <span> Client Phone: </span>\n\n      <span style="width: 18%"> Address From:</span>\n\n      <span> Address To:</span>\n\n      <span> Date: </span>\n\n      <span style="width: 7%"> Status: </span>\n\n    </div>\n\n\n\n    <div *ngFor="let ride of rides" class="row">\n\n      <span>{{ride.driver_name}}</span>\n\n      <span>{{ride.driver_phone}}</span>\n\n      <span>{{ride.client_name}}</span>\n\n      <span>{{ride.client_phone}}</span>\n\n      <span style="width: 18%">{{ride.address_from}}</span>\n\n      <span>{{ride.address_to}}</span>\n\n      <span>{{ride.date | date:"MM/dd/yyyy \'-\' H:mm"}}</span>\n\n      <span style="width: 7%">{{ride.status}}</span>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\ride\ride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ride__["a" /* RideProvider */]])
    ], RidePage);
    return RidePage;
}());

//# sourceMappingURL=ride.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Authentication__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_api__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(authProvider, navController, alertCtrl, api) {
        this.authProvider = authProvider;
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.myProfile = this.api.myProfile;
        this.user = {
            firstName: null,
            lastName: null,
            phone1: null
        };
    }
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        console.log(form.value);
        if (form.value.firstName) {
            if (form.value.lastName) {
                if (form.value.phone1) {
                    this.authProvider.register$(this.user).subscribe(function (responseGet) {
                        console.log(responseGet);
                        if (responseGet && (Object.keys(responseGet).length !== 0)) {
                            _this.myProfile.user = responseGet;
                            _this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        else {
                            _this.errorRegister = 'an error accord while register';
                            setTimeout(function () { _this.errorRegister = ''; }, 3000);
                        }
                    }, function (error) { return console.error(error); });
                }
                else {
                    this.errorRegister = 'Please fill the phone input';
                    setTimeout(function () { _this.errorRegister = ''; }, 3000);
                }
            }
            else {
                this.errorRegister = 'Please fill the Last Name input';
                setTimeout(function () { _this.errorRegister = ''; }, 3000);
            }
        }
        else {
            this.errorRegister = 'Please fill the First Name input';
            setTimeout(function () { _this.errorRegister = ''; }, 3000);
        }
    };
    RegisterPage.prototype.login = function () {
        this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'register',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\register\register.html"*/'<ion-content padding class="mycontent">\n\n\n\n    <div class="col-md-6 col-md-offset-3" style="max-width: 500px">\n\n        <div class="panel-register">\n\n            <div class="col-xs-6 logo">\n\n                <a href="#">Tap Tel</a>\n\n            </div>\n\n            <hr>\n\n            <div class="panel-body">\n\n                <div class="col-lg-12">\n\n                    <form #form="ngForm" (ngSubmit)="register(form)" novalidate>\n\n                        <div class="form-group">\n\n                            <ion-item>\n\n                                <ion-label>First Name</ion-label>\n\n                                <ion-input type="text" name="firstName" required [(ngModel)]="user.firstName"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <ion-item>\n\n                                <ion-label>Last Name</ion-label>\n\n                                <ion-input type="text" name="lastName" required [(ngModel)]="user.lastName"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <ion-item>\n\n                                <ion-label>Phone</ion-label>\n\n                                <ion-input type="tel" name="phone1" required [(ngModel)]="user.phone1"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <div class="col-sm-6 col-sm-offset-3">\n\n                                <button ion-button type="submit" block class="btn-register">Create an account</button>\n\n                            </div>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <div class="col-lg-12 login">\n\n                                <span>Already registered?</span>\n\n                                <a href="#" (click)= "login()"> Log In</a>\n\n                            </div>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <div class="col-lg-12">\n\n                                <span class="error">{{errorRegister}}</span>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_Authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_api__["a" /* AppApi */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_drivers_drivers__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_car_car__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_ride_ride__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_driver__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_Authentication__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_url__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_request__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_ride__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_newDriverModal_newDriverModal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_newRequestModal_newRequestModal__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_api__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register_register__ = __webpack_require__(214);
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
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_car_car__["a" /* CarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_drivers_drivers__["a" /* DriversPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ride_ride__["a" /* RidePage */],
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
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_car_car__["a" /* CarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_drivers_drivers__["a" /* DriversPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ride_ride__["a" /* RidePage */],
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
                __WEBPACK_IMPORTED_MODULE_15__providers_Authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_17__app_url__["a" /* BaseUrl */],
                __WEBPACK_IMPORTED_MODULE_22__app_api__["a" /* AppApi */],
                __WEBPACK_IMPORTED_MODULE_18__providers_request__["a" /* RequestProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_ride__["a" /* RideProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(32);

var BaseUrl = /** @class */ (function () {
    function BaseUrl() {
        this.baseUrl = 'http://vps160905.vps.ovh.ca:3000';
        this.header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://vps160905.vps.ovh.ca',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Access-Control-Allow-Credentials,Authorization'
        });
    }
    return BaseUrl;
}());

//# sourceMappingURL=app.url.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppApi; });
var AppApi = /** @class */ (function () {
    function AppApi() {
        this.drivers = [];
        this.requests = [];
        this.myProfile = {
            user: {}
        };
    }
    return AppApi;
}());

//# sourceMappingURL=app.api.js.map

/***/ }),

/***/ 53:
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
    DriverProvider.prototype.setDriver$ = function (obj) {
        return this.http.post(this.baseUrl.baseUrl + '/api/driver', obj);
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

},[215]);
//# sourceMappingURL=main.js.map