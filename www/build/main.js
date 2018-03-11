webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_api__ = __webpack_require__(13);
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
                _this.api.setProfile(responseGet);
                console.log(responseGet);
                _this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { opentab: 2 });
                _this.api.refreshDatas('all');
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_api__["a" /* AppApi */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_url__ = __webpack_require__(35);
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

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_url__ = __webpack_require__(35);
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_newCarModal_newCarModal__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_driversModal_driversModal__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_car__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_car_edit_car__ = __webpack_require__(215);
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
    function CarPage(navCtrl, api, modalCtrl, carProvider) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.carProvider = carProvider;
        this.cars = this.api.cars;
    }
    CarPage.prototype.refreshCars = function () {
        var _this = this;
        this.carProvider.getCars$().subscribe(function (response) {
            _this.cars = response;
        }, function (error) { return console.error(error); });
    };
    CarPage.prototype.addNewCarModal = function () {
        var _this = this;
        var carModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_newCarModal_newCarModal__["a" /* NewCarModal */]);
        carModal.onDidDismiss(function (responseGet) {
            console.log(responseGet);
            if (responseGet && responseGet.id) {
                _this.api.refreshDatas("cars");
                _this.cars.push(responseGet);
            }
            else {
                console.error(responseGet);
            }
        });
        carModal.present();
    };
    CarPage.prototype.addCarToDriverModal = function (car) {
        var _this = this;
        var carToDriverModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_driversModal_driversModal__["a" /* driversModal */], { "car": car });
        carToDriverModal.onDidDismiss(function (responseGet) {
            console.log(responseGet);
            if (responseGet) {
                _this.api.refreshDatas("cars");
                _this.refreshCars();
            }
        });
        carToDriverModal.present();
    };
    CarPage.prototype.deleteDriver = function (car) {
        var _this = this;
        car.idDriver = null;
        console.log(car);
        this.carProvider.updateCar$(car).subscribe(function (responseGet) {
            console.log(responseGet);
            _this.api.refreshDatas("cars");
            _this.refreshCars();
        }, function (error) { return console.error(error); });
    };
    CarPage.prototype.editCar = function (car) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__edit_car_edit_car__["a" /* editCar */], { car: car });
    };
    CarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\car\car.html"*/'<ion-content padding>\n\n\n\n  <button ion-button (click)="addNewCarModal()">new</button>\n\n\n\n  <div class="cars-content">\n\n    <div class="row">\n\n      <span style="width:5%"> id</span>\n\n      <span> car license</span>\n\n      <span> license plate</span>\n\n      <span> brand </span>\n\n      <span> place number </span>\n\n      <span> equipment </span>\n\n      <span> hardware version </span>\n\n      <span> availability </span>\n\n      <span class="status"> status </span>\n\n      <span> Driver </span>\n\n      <span style="width:9.5%"> </span>\n\n    </div>\n\n\n\n    <div *ngFor="let car of cars" class="row">\n\n      <span style="width:5%">{{car.id}}</span>\n\n      <span>{{car.car_license}}</span>\n\n      <span>{{car.license_plate}}</span>\n\n      <span>{{car.brand}}</span>\n\n      <span>{{car.place_number}}</span>\n\n      <span>{{car.equipment}}</span>\n\n      <span>{{car.hardware_version}}</span>\n\n      <span>\n\n          <!-- TODO *ngIf="car.availability date is today" -->\n\n          {{car.availability  | date:"H:mm"}}\n\n      </span>\n\n      <span class="status">\n\n        <img *ngIf="car.status === \'5\'" src="../../assets/imgs/online_status.png">\n\n        <img *ngIf="car.status !== \'5\'" src="../../assets/imgs/offline_status.png">\n\n      </span>\n\n      <span *ngIf="car.driver===null" class="associate edit"><button ion-button (click)="addCarToDriverModal(car)">associate</button></span>\n\n      <span *ngIf="car.driver">\n\n           <ion-icon name="close" (click)="deleteDriver(car)"></ion-icon>\n\n          {{car.driver.idUser}} - {{car.driver.user.firstName}} {{car.driver.user.lastName}}\n\n      </span>\n\n      <span class="edit" style="width:9.5%"><button (click)="editCar(car)" ion-button>Edit</button></span>\n\n    </div>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\car\car.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_api__["a" /* AppApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_car__["a" /* CarProvider */]])
    ], CarPage);
    return CarPage;
}());

//# sourceMappingURL=car.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return driversModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_car__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var driversModal = /** @class */ (function () {
    function driversModal(carProvider, api, viewCtrl, navParam) {
        this.carProvider = carProvider;
        this.api = api;
        this.viewCtrl = viewCtrl;
        this.navParam = navParam;
        this.driversList = this.api.drivers;
        this.drivers = this.getCars();
        this.car = this.navParam.get("car");
        console.log(this.navParam.get("car"));
    }
    driversModal.prototype.getCars = function () {
        var _this = this;
        var myDrivers = [];
        this.carProvider.getCars$().subscribe(function (responseGet) {
            _this.driversList.forEach(function (i) {
                var test = responseGet.find(function (x) { return x.idDriver === i.idUser; });
                if (!test) {
                    myDrivers.push(i);
                }
            });
        }, function (error) { return console.error(error); });
        return myDrivers;
    };
    driversModal.prototype.carToDriverAssociate = function (driver) {
        var _this = this;
        this.car.idDriver = driver.idUser;
        console.log(driver, this.car);
        this.carProvider.updateCar$(this.car).subscribe(function (responseGet) { return _this.viewCtrl.dismiss(responseGet); }, function (error) { return console.error(error); });
    };
    driversModal.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    driversModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driversModal',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\components\driversModal\driversModal.html"*/'<ion-content padding>\n\n\n\n    <div class="top">\n\n        <span style="width: 5%">id</span>\n\n        <span style="width: 20%;">license:</span>\n\n        <span style="width: 45%;">Name</span>\n\n        <span style="width: 15%;">type</span>\n\n        <span style="width: 15%;">status <ion-icon name="close" (click)="closeModal()"></ion-icon></span>\n\n    </div>\n\n    <div class="drivers-content">\n\n        <div *ngFor="let driver of drivers" class="row" (click)="carToDriverAssociate(driver)">\n\n            <span style="width: 5%">{{driver.idUser}}</span>\n\n            <span style="width: 20%;">{{driver.license}}</span>\n\n            <span style="width: 45%;">{{driver.user.firstName}} {{driver.user.lastName}}</span>\n\n            <span style="width: 15%;">{{driver.type}}</span>\n\n            <span class="status">\n\n                <img *ngIf="driver.status === \'1\'" src="../../assets/imgs/online_status.png">\n\n                <img *ngIf="driver.status === null || driver.status === \'0\'" src="../../assets/imgs/offline_status.png">\n\n            </span>\n\n        </div>\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\components\driversModal\driversModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_car__["a" /* CarProvider */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_api__["a" /* AppApi */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */]])
    ], driversModal);
    return driversModal;
}());

//# sourceMappingURL=driversModal.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_newDriverModal_newDriverModal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_carsModal_carsModal__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_driver_edit_driver__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_car__ = __webpack_require__(20);
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
    function DriversPage(navCtrl, api, carProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.carProvider = carProvider;
        this.modalCtrl = modalCtrl;
        this.driversList = this.api.drivers;
        this.drivers = this.getCars();
        this.cars = this.api.cars;
    }
    DriversPage.prototype.getCars = function () {
        var _this = this;
        var myDrivers = [];
        this.driversList.forEach(function (i) {
            var car = { idDriver: i.idUser };
            _this.carProvider.getCar$(car).subscribe(function (responseGet) {
                console.log('car: ', responseGet);
                i.car = responseGet;
                myDrivers.push(i);
            }, function (error) { return console.error(error); });
        });
        return myDrivers;
    };
    DriversPage.prototype.newDriverModal = function () {
        var _this = this;
        var driverModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_newDriverModal_newDriverModal__["a" /* NewDriverModal */]);
        driverModal.onDidDismiss(function (responseGet) {
            console.log(responseGet);
            if (responseGet.errors) {
                alert(responseGet.original.sqlMessage);
            }
            else if (responseGet.idUser) {
                responseGet.car = null;
                _this.drivers.push(responseGet);
            }
            else {
                console.error(responseGet);
            }
        });
        driverModal.present();
    };
    DriversPage.prototype.addCarToDriverModal = function (driver) {
        var _this = this;
        var carToDriverModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_carsModal_carsModal__["a" /* carsModal */], { "driver": driver });
        carToDriverModal.onDidDismiss(function (responseGet) {
            console.log(responseGet);
            if (responseGet) {
                driver.car = responseGet;
                _this.api.refreshDatas("drivers");
                _this.api.refreshDatas("cars");
                _this.drivers = _this.getCars();
            }
        });
        carToDriverModal.present();
    };
    DriversPage.prototype.editDriver = function (driver) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__edit_driver_edit_driver__["a" /* editDriver */], { driver: driver });
    };
    DriversPage.prototype.deleteCar = function (driver) {
        var _this = this;
        driver.car.idDriver = null;
        this.carProvider.updateCar$(driver.car).subscribe(function (responseGet) {
            console.log(responseGet);
            _this.api.refreshDatas("drivers");
        }, function (error) { return console.error(error); });
        driver.car = null;
    };
    DriversPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-drivers',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\drivers\drivers.html"*/'<ion-content padding>\n\n\n\n  <button ion-button (click)="newDriverModal()">new</button>\n\n\n\n  <div class="drivers-content">\n\n    <div class="row">\n\n      <span style="width: 5%"> id </span>\n\n      <span> license </span>\n\n      <span> Name </span>\n\n      <span> phone1 </span>\n\n      <span> phone2 </span>\n\n      <span> email </span>\n\n      <span> category </span>\n\n      <span> type </span>\n\n      <span class="status"> status </span>\n\n      <span style="width: 7.5%"> Car </span>\n\n      <span class=" edit"> </span>\n\n    </div>\n\n\n\n    <div *ngFor="let driver of drivers" class="row">\n\n      <span style="width: 5%">{{driver.idUser}}</span>\n\n      <span>{{driver.license}}</span>\n\n      <span>{{driver.user.firstName}} {{driver.user.lastName}}</span>\n\n      <span>{{driver.user.phone1}}</span>\n\n      <span>{{driver.user.phone2}}</span>\n\n      <span>{{driver.user.email}}</span>\n\n      <span>{{driver.user.category}}</span>\n\n      <span>{{driver.type}}</span>\n\n      <span class="status">\n\n        <img *ngIf="driver.status === \'1\'" src="../../assets/imgs/online_status.png">\n\n        <img *ngIf="driver.status === null || driver.status > 1" src="../../assets/imgs/offline_status.png">\n\n      </span>\n\n      <span *ngIf="driver.car===null" class="associate edit"><button ion-button (click)="addCarToDriverModal(driver)">associate</button></span>\n\n      <span *ngIf="driver.car" class="associate edit">\n\n        <ion-icon name="close" (click)="deleteCar(driver)"></ion-icon>\n\n        {{driver.car.id}}\n\n      </span>\n\n      <span class="edit"><button ion-button (click)="editDriver(driver)">Edit</button></span>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\drivers\drivers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_api__["a" /* AppApi */],
            __WEBPACK_IMPORTED_MODULE_6__providers_car__["a" /* CarProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], DriversPage);
    return DriversPage;
}());

//# sourceMappingURL=drivers.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return carsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_car__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var carsModal = /** @class */ (function () {
    function carsModal(carProvider, api, viewCtrl, navParam) {
        this.carProvider = carProvider;
        this.api = api;
        this.viewCtrl = viewCtrl;
        this.navParam = navParam;
        this.cars = this.api.cars;
        this.driver = this.navParam.get("driver");
        console.log(this.navParam.get("driver"));
    }
    carsModal.prototype.driverToCarAssociate = function (car) {
        var _this = this;
        car.idDriver = this.driver.idUser;
        console.log(car);
        this.carProvider.updateCar$(car).subscribe(function (responseGet) { return _this.viewCtrl.dismiss(responseGet); }, function (error) { return console.error(error); });
    };
    carsModal.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    carsModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'carsModal',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\components\carsModal\carsModal.html"*/'<ion-content padding>\n\n\n\n    <div class="top">\n\n        <span class="id">id</span>\n\n        <span>car license</span>\n\n        <span>license plate</span>\n\n        <span>brand</span>\n\n        <span>places</span>\n\n        <span>equipment <ion-icon name="close" (click)="closeModal()"></ion-icon></span>\n\n    </div>\n\n    <div class="cars-content">\n\n        <div *ngFor="let car of cars" class="row" (click)="driverToCarAssociate(car)">\n\n            <span class="id">{{car.id}}</span>\n\n            <span>{{car.car_license}}</span>\n\n            <span>{{car.license_plate}}</span>\n\n            <span>{{car.brand}}</span>\n\n            <span>{{car.place_number}}</span>\n\n            <span>{{car.equipment}}</span>\n\n        </div>\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\components\carsModal\carsModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_car__["a" /* CarProvider */],
            __WEBPACK_IMPORTED_MODULE_1__app_app_api__["a" /* AppApi */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], carsModal);
    return carsModal;
}());

//# sourceMappingURL=carsModal.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_ride__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_driver__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_car__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppApi = /** @class */ (function () {
    function AppApi(driverProvider, carProvider, rideProvider, requestProvider) {
        this.driverProvider = driverProvider;
        this.carProvider = carProvider;
        this.rideProvider = rideProvider;
        this.requestProvider = requestProvider;
        this.myProfile = { user: JSON.parse(sessionStorage.getItem('myProfile')) };
        this.requests = JSON.parse(sessionStorage.getItem('requests'));
        this.rides = JSON.parse(sessionStorage.getItem('rides'));
        this.drivers = JSON.parse(sessionStorage.getItem('drivers'));
        this.cars = JSON.parse(sessionStorage.getItem('cars'));
    }
    //TODO merkazia;
    AppApi.prototype.isLoggedIn = function () {
        return sessionStorage.getItem('myProfile') !== null;
    };
    AppApi.prototype.setProfile = function (profile) {
        sessionStorage.setItem('myProfile', JSON.stringify(profile));
    };
    AppApi.prototype.getRequests = function () {
        var _this = this;
        this.requestProvider.getRequests$().subscribe(function (responseGet) {
            if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                console.log('requests: ', responseGet);
                sessionStorage.setItem('requests', JSON.stringify(responseGet));
                _this.requests = responseGet;
            }
            else {
                console.error(responseGet);
            }
        }, function (error) { return console.error(error); });
    };
    AppApi.prototype.getRides = function () {
        var _this = this;
        this.rideProvider.getRides$().subscribe(function (responseGet) {
            if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                console.log('rides: ', responseGet);
                sessionStorage.setItem('rides', JSON.stringify(responseGet));
                _this.rides = responseGet;
            }
            else {
                console.error(responseGet);
            }
        }, function (error) { return console.error(error); });
    };
    AppApi.prototype.getDrivers = function () {
        var _this = this;
        this.driverProvider.getDrivers$().subscribe(function (responseGet) {
            if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                console.log('drivers: ', responseGet);
                sessionStorage.setItem('drivers', JSON.stringify(responseGet));
                _this.drivers = responseGet;
            }
            else {
                console.error(responseGet);
            }
        }, function (error) { return console.error(error); });
    };
    AppApi.prototype.getCars = function () {
        var _this = this;
        this.carProvider.getCars$().subscribe(function (responseGet) {
            if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                console.log('cars: ', responseGet);
                _this.cars = responseGet;
                sessionStorage.setItem('cars', JSON.stringify(responseGet));
            }
            else {
                console.error(responseGet);
            }
        }, function (error) { return console.error(error); });
    };
    AppApi.prototype.refreshDatas = function (type) {
        console.log(type);
        if (type === 'all') {
            this.getCars();
            this.getRequests();
            this.getRides();
            this.getDrivers();
        }
        else if (type === 'requests') {
            this.getRequests();
        }
        else if (type === 'rides') {
            this.getRides();
        }
        else if (type === 'drivers') {
            this.getDrivers();
        }
        else if (type === 'cars') {
            this.getCars();
        }
    };
    AppApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_car__["a" /* CarProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_ride__["a" /* RideProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_request__["a" /* RequestProvider */]])
    ], AppApi);
    return AppApi;
}());

//# sourceMappingURL=app.api.js.map

/***/ }),

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_url__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarProvider = /** @class */ (function () {
    function CarProvider(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    CarProvider.prototype.getCar$ = function (obj) {
        return this.http.get(this.baseUrl.baseUrl + '/api/car', { params: obj });
    };
    CarProvider.prototype.getCars$ = function () {
        return this.http.get(this.baseUrl.baseUrl + '/api/cars');
    };
    CarProvider.prototype.setCar$ = function (obj) {
        return this.http.post(this.baseUrl.baseUrl + '/api/car', obj);
    };
    CarProvider.prototype.updateCar$ = function (obj) {
        return this.http.put(this.baseUrl.baseUrl + '/api/car', obj);
    };
    CarProvider.prototype.deleteCar$ = function (obj) {
        return this.http.delete(this.baseUrl.baseUrl + '/api/car', { params: obj });
    };
    CarProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_url__["a" /* BaseUrl */]])
    ], CarProvider);
    return CarProvider;
}());

//# sourceMappingURL=car.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ride__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_newRequestModal_newRequestModal__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_car__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_request__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_DatePipe__ = __webpack_require__(213);
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
    function HomePage(rideProvider, carProvider, requestProvider, modalCtrl, datePipe, alertCtrl, api) {
        this.rideProvider = rideProvider;
        this.carProvider = carProvider;
        this.requestProvider = requestProvider;
        this.modalCtrl = modalCtrl;
        this.datePipe = datePipe;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.cars = this.api.cars;
        this.requestList = this.api.requests;
        this.homeCars = this.getCars();
        this.requests = this.getRequests();
        this.confirmation = null;
        this.cancel = null;
        this.canceled = null;
        this.Ride = { Car: null, Request: null };
    }
    HomePage.prototype.getCars = function () {
        var myCars = [];
        if (sessionStorage.getItem('cars') === null) {
            this.carProvider.getCars$().subscribe(function (response) {
                response.forEach(function (i) {
                    if (i.driver &&
                        i.status === '5') {
                        myCars.push(i);
                    }
                });
            }, function (error) { return console.error(error); });
        }
        else {
            this.cars.forEach(function (i) {
                if (i.driver &&
                    i.status === '5') {
                    myCars.push(i);
                }
            });
        }
        return myCars;
    };
    HomePage.prototype.getRequests = function () {
        var myRequests = [];
        if (sessionStorage.getItem('requests') === null) {
            console.log('entred');
            this.requestProvider.getRequests$().subscribe(function (response) {
                response.forEach(function (i) {
                    myRequests.push(i);
                });
                myRequests = response;
                console.log(myRequests);
            }, function (error) { return console.error(error); });
        }
        else {
            myRequests = this.requestList;
        }
        return myRequests;
    };
    HomePage.prototype.sendToDriver = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.Ride.Car && _this.Ride.Request) {
                var address = _this.Ride.Request.street + " " +
                    _this.Ride.Request.street_num + ", " +
                    _this.Ride.Request.city + ", " +
                    //this.Ride.Request.country+
                    " (" + _this.Ride.Request.zipcode + ")";
                var rideObj = {
                    car: _this.Ride.Car.id,
                    driver_name: _this.Ride.Car.driver.user.firstName + ' ' + _this.Ride.Car.driver.user.lastName,
                    client_name: _this.Ride.Request.firstName + ' ' + _this.Ride.Request.lastName,
                    address_from: address,
                    driver_phone: _this.Ride.Car.driver.user.phone1,
                    client_phone: _this.Ride.Request.phone,
                    date: new Date(),
                    status: '1'
                };
                _this.rideProvider.setRide$(rideObj).subscribe(function (responseGet) {
                    console.log(responseGet);
                    _this.api.rides.push(responseGet);
                    _this.Ride.Car.status = '1';
                    _this.carProvider.updateCar$(_this.Ride.Car).subscribe(function (responseGet) {
                        console.log('homeCars: ', responseGet);
                        _this.requests.splice(_this.requests.indexOf(_this.Ride.Request), 1);
                        _this.homeCars.splice(_this.homeCars.indexOf(_this.Ride.Car), 1);
                        _this.Ride.Car = null;
                        _this.Ride.Request = null;
                        _this.confirmation = null;
                        _this.cancel = null;
                    }, function (error) { return console.error(error); });
                }, function (error) { return console.error(error); });
            }
        }, 2000);
    };
    HomePage.prototype.selectThis = function (type, obj) {
        if (type === 'car') {
            this.Ride.Car = obj;
        }
        else {
            this.Ride.Request = obj;
        }
        console.log(type, obj);
        if (this.Ride.Car && this.Ride.Request) {
            this.confirmation = 1;
            this.cancel = 1;
            this.sendToDriver();
        }
    };
    HomePage.prototype.cancelThis = function () {
        var _this = this;
        this.Ride.Car = null;
        this.Ride.Request = null;
        this.confirmation = null;
        this.cancel = null;
        this.canceled = 1;
        setTimeout(function () {
            _this.canceled = null;
        }, 700);
    };
    HomePage.prototype.requestModal = function () {
        var _this = this;
        var reqModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_newRequestModal_newRequestModal__["a" /* NewRequestModal */]);
        reqModal.onDidDismiss(function (responseGet) {
            console.log(responseGet);
            if (responseGet && responseGet.id) {
                _this.requests.push(responseGet);
            }
            else {
                console.error(responseGet);
            }
        });
        reqModal.present();
    };
    HomePage.prototype.requestUserModal = function (user) {
        var alert = this.alertCtrl.create({
            title: user.firstName + " " + user.lastName,
            subTitle: user.phone,
            message: user.notice,
            buttons: ['Close']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\home\home.html"*/'<ion-content padding class="mycontent">\n\n\n\n\n\n  <div class="header" col-12>\n\n      SELECTED:\n\n\n\n      <span>\n\n          {{Ride.Car?.driver.user.firstName}} {{Ride.Car?.driver.user.lastName}}\n\n      </span>\n\n      <span> {{Ride.Car?.id}} </span>\n\n      <span *ngIf="Ride.Request">\n\n          <ion-icon name="arrow-dropright-circle"></ion-icon>\n\n           {{Ride.Request?.firstName}} {{Ride.Request?.lastName}} -\n\n          {{Ride.Request?.street}} {{Ride.Request?.street_num}}, {{Ride.Request?.city}}\n\n          <span class="sent" [hidden]="!confirmation"> sent </span>\n\n      </span>\n\n      <button (click)="cancelThis()" *ngIf="cancel">\n\n          Cancel\n\n      </button>\n\n      <span class="canceled" [hidden]="!canceled">Canceled </span>\n\n\n\n      <span class="time"> <date-pipe></date-pipe> </span>\n\n  </div>\n\n\n\n    <ion-row class="new_request">\n\n        <button ion-button (click)="requestModal()">new Request</button>\n\n    </ion-row>\n\n\n\n  <ion-row>\n\n    <div class="cars" col-6>\n\n        <button ion-button *ngFor="let car of homeCars" (click)="selectThis(\'car\',car)">\n\n            <div>{{car.driver.user.firstName}} {{car.driver.user.lastName}}</div>\n\n            <div>{{car.id}}</div>\n\n      </button>\n\n    </div>\n\n\n\n\n\n    <div class="requests" col-6>\n\n\n\n        <div class="row" *ngFor="let request of requests">\n\n            <div (click)="selectThis(\'request\',request)">\n\n                <span style="width: 30%"> {{request.street}} </span>\n\n                <span style="width: 5%"> {{request.street_num}} </span>\n\n                <span style="width: 30%"> {{request.city}} </span>\n\n                <!--span> {{request.country}} </span-->\n\n                <span style="width: 30%">{{request.zipcode}}</span>\n\n            </div>\n\n            <div>\n\n                <div>\n\n                    <ion-icon name="person" (click)="requestUserModal(request)"></ion-icon>\n\n                </div>\n\n                <div>{{request.baggage}}  <ion-icon name="briefcase"></ion-icon> </div>\n\n                <div>{{request.places}}   <ion-icon name="people"></ion-icon> </div>\n\n                <div style="width: 70%">{{request.notice}} </div>\n\n                <div class="id">{{request.id}} </div>\n\n            </div>\n\n        </div>\n\n\n\n    </div>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_ride__["a" /* RideProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_car__["a" /* CarProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_DatePipe__["a" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__app_app_api__["a" /* AppApi */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRequestModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request__ = __webpack_require__(55);
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
        this.errorRequest = false;
        this.request = {
            firstName: null,
            lastName: null,
            phone: null,
            street: null,
            street_num: null,
            city: null,
            country: null,
            zipcode: null,
            baggage: '0',
            places: '3',
            notice: null
        };
    }
    NewRequestModal.prototype.newRequest = function (form) {
        var _this = this;
        if (form.valid) {
            this.requestProvider.setRequest$(this.request).subscribe(function (responseGet) { return _this.viewCtrl.dismiss(responseGet); }, function (error) { return console.error(error); });
        }
        else {
            this.errorRequest = true;
            setTimeout(function () { _this.errorRequest = false; }, 3000);
        }
    };
    NewRequestModal.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    NewRequestModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newRequestModal',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\components\newRequestModal\newRequestModal.html"*/'<ion-content padding>\n\n  <form #f="ngForm" (ngSubmit)="newRequest(f)" #form="ngForm">\n\n      <div class="row">\n\n          <div><span> First Name</span> <span style="float: right"> Last Name</span></div>\n\n          <div class="name">\n\n              <input type="text" name="firstName" [(ngModel)]="request.firstName">\n\n              <input type="text" name="lastName" [(ngModel)]="request.lastName" style="float: right;">\n\n          </div>\n\n          <div> Phone </div>\n\n          <input type="text" name="phone" [(ngModel)]="request.phone">\n\n          <div><span>Street *</span> <span style="float: right">Street Number *</span></div>\n\n          <div class="address">\n\n              <input type="text" name="street" [(ngModel)]="request.street" required style="width: 79%">\n\n              <input type="text" name="street_num" [(ngModel)]="request.street_num" required style="float: right;width: 19%">\n\n          </div>\n\n          <div><span>City *</span> <span style="float: right">Zipcode</span></div>\n\n          <div class="address">\n\n              <input type="text" name="city" [(ngModel)]="request.city" required style="width: 64%">\n\n              <input type="text" name="zipcode" [(ngModel)]="request.zipcode" style="float: right;width: 34%">\n\n          </div>\n\n          <!--div> Country </div>\n\n          <input type="text" name="country" [(ngModel)]="request.country"-->\n\n          <div> Notice</div>\n\n          <textarea name="notice" [(ngModel)]="request.notice"></textarea>\n\n          <div><span>Baggage</span><span style="float: right">Places</span></div>\n\n          <div class="address">\n\n              <input type="number" name="baggage" [(ngModel)]="request.baggage" style="width: 30%">\n\n              <input type="number" name="places" [(ngModel)]="request.places" style="float: right;width: 30%">\n\n          </div>\n\n          <div class="address">\n\n              <button ion-button style="float: right;width: 90px;" (click)="closeModal()">CANCEL</button>\n\n              <button ion-button style="float: left;width: 90px;">ADD</button>\n\n          </div>\n\n      </div>\n\n  </form>\n\n  <div class="error" [hidden]="!errorRequest">Please fill all the (*) requires fields</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\components\newRequestModal\newRequestModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], NewRequestModal);
    return NewRequestModal;
}());

//# sourceMappingURL=newRequestModal.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePipe = /** @class */ (function () {
    function DatePipe() {
        this.today = Date.now();
    }
    DatePipe.prototype.ngOnInit = function () {
        var _this = this;
        this.today = setInterval(function () {
            _this.today = Date.now();
        }, 1000);
    };
    DatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'date-pipe',
            template: "<div><p>{{today | date:'mediumTime'}}</p></div>"
        })
    ], DatePipe);
    return DatePipe;
}());

//# sourceMappingURL=DatePipe.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCarModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_car__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCarModal = /** @class */ (function () {
    function NewCarModal(carProvider, viewCtrl) {
        this.carProvider = carProvider;
        this.viewCtrl = viewCtrl;
        this.errorCar = false;
        this.car = {
            idDriver: null,
            car_license: null,
            license_plate: null,
            brand: "hyundai",
            place_number: 4,
            equipment: null,
            hardware_version: null,
            availability: null,
            location: null,
            status: "5"
        };
    }
    NewCarModal.prototype.newCar = function (form) {
        var _this = this;
        if (form.valid) {
            this.carProvider.setCar$(this.car).subscribe(function (responseGet) { return _this.viewCtrl.dismiss(responseGet); }, function (error) { return console.error(error); });
        }
        else {
            this.errorCar = true;
            setTimeout(function () { _this.errorCar = false; }, 3000);
        }
    };
    NewCarModal.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    NewCarModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newCarModal',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\components\newCarModal\newCarModal.html"*/'<ion-content padding>\n\n    <form #f="ngForm" (ngSubmit)="newCar(f)" #form="ngForm">\n\n      <div class="row">\n\n        <div> Car License </div>\n\n          <input name="car_license" type="text" [(ngModel)]="car.car_license" required>\n\n          <div> License Plate *</div>\n\n          <input name="license_plate" type="text" [(ngModel)]="car.license_plate" required>\n\n        <div>Car Brand</div>\n\n          <ion-item>\n\n              <ion-select name="brand" [(ngModel)]="car.brand" interface="popover">\n\n                  <ion-option value="hyundai">Hyundai</ion-option>\n\n                  <ion-option value="mercedes">Mercedes</ion-option>\n\n                  <ion-option value="subaru">Subaru</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n        <div> Number of Places *</div>\n\n          <input name="place_number" type="number" [(ngModel)]="car.place_number" required>\n\n        <div> Equipment </div>\n\n          <input name="equipment" type="text" [(ngModel)]="car.equipment">\n\n\n\n        <div> Hardware Version </div>\n\n          <input name="hardware_version" type="text" [(ngModel)]="car.hardware_version">\n\n          <div><button ion-button>ADD</button> </div>\n\n      </div>\n\n    </form>\n\n    <div class="close"><button ion-button (click)="closeModal()">CLOSE</button> </div>\n\n    <div class="error" [hidden]="!errorCar">Please fill all the (*) requires fields</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\components\newCarModal\newCarModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_car__["a" /* CarProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */]])
    ], NewCarModal);
    return NewCarModal;
}());

//# sourceMappingURL=newCarModal.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editCar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_car__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_driversModal_driversModal__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__car_car__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var editCar = /** @class */ (function () {
    function editCar(navCtrl, navParam, modalCtrl, api, carProvider) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.carProvider = carProvider;
        this.cars = this.api.cars;
        this.car = this.navParam.get("car");
        this.errorCar = false;
        this.savedCar = false;
        console.log(this.car);
    }
    editCar.prototype.saveCar = function () {
        var _this = this;
        console.log('car: ', this.car);
        if (this.car.license_plate) {
            this.carProvider.updateCar$(this.car).subscribe(function (responseGet) {
                console.log(responseGet);
                _this.car = responseGet;
                _this.savedCar = true;
                setTimeout(function () { _this.savedCar = false; }, 3000);
                _this.api.getCars();
            }, function (error) { return console.error(error); });
        }
        else {
            this.errorCar = true;
            setTimeout(function () { _this.errorCar = false; }, 3000);
        }
    };
    editCar.prototype.addCarToDriverModal = function () {
        var _this = this;
        var carToDriverModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_driversModal_driversModal__["a" /* driversModal */], { "car": this.car });
        carToDriverModal.onDidDismiss(function (responseGet) {
            console.log(responseGet);
            _this.car = responseGet;
            _this.savedCar = true;
            setTimeout(function () { _this.savedCar = false; }, 3000);
            _this.api.getCars();
        });
        carToDriverModal.present();
    };
    editCar.prototype.deleteDriver = function () {
        this.car.idDriver = null;
        this.saveCar();
        this.car.driver = null;
    };
    editCar.prototype.deleteCar = function () {
        var _this = this;
        this.carProvider.deleteCar$({ id: this.car.id }).subscribe(function (responseGet) {
            console.log(responseGet);
            _this.api.refreshDatas('cars');
            _this.api.refreshDatas('drivers');
            _this.savedCar = true;
            setTimeout(function () {
                _this.savedCar = false;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__car_car__["a" /* CarPage */]);
            }, 2000);
        }, function (error) { return console.error(error); });
    };
    editCar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-car',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\edit-car\edit-car.html"*/'<ion-content padding>\n\n        <div class="row">\n\n            <div> ID:  {{car.id}}</div>\n\n            <div> Availability - {{car.availability  | date:"H:mm"}}</div>\n\n            <div> Status </div>\n\n            <ion-item>\n\n                <ion-select name="status" [(ngModel)]="car.status" required interface="popover">\n\n                    <ion-option value="1">On th way</ion-option>\n\n                    <ion-option value="2">Arrived & waiting</ion-option>\n\n                    <ion-option value="3">P.O.B</ion-option>\n\n                    <ion-option value="4">Drop soon</ion-option>\n\n                    <ion-option value="5">Available</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <div> Car License *</div>\n\n            <input name="license_plate" type="text" [(ngModel)]="car.car_license" required>\n\n            <div> License Plate *</div>\n\n            <input name="license_plate" type="text" [(ngModel)]="car.license_plate" required>\n\n            <div>Car Brand</div>\n\n            <ion-item>\n\n                <ion-select name="brand" [(ngModel)]="car.brand" interface="popover">\n\n                    <ion-option value="hyundai">Hyundai</ion-option>\n\n                    <ion-option value="mercedes">Mercedes</ion-option>\n\n                    <ion-option value="subaru">Subaru</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <div>Driver</div>\n\n            <div *ngIf="car.driver===null"><button ion-button (click)="addCarToDriverModal()">associate</button></div>\n\n            <div *ngIf="car.driver">\n\n            <ion-icon name="close" (click)="deleteDriver(car)"></ion-icon>\n\n                {{car.driver.idUser}} - {{car.driver.user.firstName}} {{car.driver.user.lastName}}\n\n            </div>\n\n            <div> Number of Places *</div>\n\n            <input name="place_number" type="number" [(ngModel)]="car.place_number" required>\n\n            <div> Equipment </div>\n\n            <input name="equipment" type="text" [(ngModel)]="car.equipment">\n\n            <div> Location </div>\n\n            <input name="location" type="text" [readonly]="true" [(ngModel)]="car.location">\n\n            <div> Hardware Version </div>\n\n            <input name="hardware_version" type="text" [(ngModel)]="car.hardware_version">\n\n            <div><button ion-button (click)="saveCar()">SAVE</button> </div>\n\n            <div><button ion-button (click)="deleteCar()">DELETE</button> </div>\n\n        </div>\n\n    <div class="success" [hidden]="!savedCar">Save with success</div>\n\n    <div class="error" [hidden]="!errorCar">Please fill all the (*) requires fields</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\edit-car\edit-car.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_api__["a" /* AppApi */],
            __WEBPACK_IMPORTED_MODULE_2__providers_car__["a" /* CarProvider */]])
    ], editCar);
    return editCar;
}());

//# sourceMappingURL=edit-car.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDriverModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_driver__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
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
        this.errorAddDriver = false;
        this.driver = {
            license: null,
            type: 'TAXI',
            user: {
                category: 'driver',
                firstName: null,
                lastName: null,
                email: null,
            }
        };
    }
    NewDriverModal.prototype.newDriver = function (f) {
        var _this = this;
        if (f.valid) {
            this.driverProvider.setDriver$(this.driver).subscribe(function (responseGet) { return _this.viewCtrl.dismiss(responseGet); }, function (error) { return console.error(error); });
        }
        else {
            this.errorAddDriver = true;
            setTimeout(function () { _this.errorAddDriver = false; }, 3000);
        }
    };
    NewDriverModal.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    NewDriverModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newDriverModal',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\components\newDriverModal\newDriverModal.html"*/'<ion-content padding>\n\n\n\n    <form #f="ngForm" (ngSubmit)="newDriver(f)">\n\n        <div class="row">\n\n            <div>First Name *</div>\n\n            <input name="firstName" [(ngModel)]="driver.user.firstName" required #firstName="ngModel">\n\n            <div>Last Name *</div>\n\n            <input name="lastName" [(ngModel)]="driver.user.lastName" required>\n\n            <div>Email</div>\n\n            <input type="email" name="email" [(ngModel)]="driver.user.email">\n\n            <div>License *</div>\n\n            <input name="license" [(ngModel)]="driver.license" required>\n\n            <div>Type *</div>\n\n            <ion-item>\n\n                <ion-select name="type" [(ngModel)]="driver.type" required interface="popover">\n\n                    <ion-option value="TAXI">Taxi</ion-option>\n\n                    <ion-option value="DRIVER">Driver</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <div><button ion-button>ADD</button> </div>\n\n        </div>\n\n    </form>\n\n    <div class="close"><button ion-button (click)="closeModal()">CLOSE</button> </div>\n\n    <div class="error_add_driver" [hidden]="!errorAddDriver">Please fill all the (*) requires fields</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\components\newDriverModal\newDriverModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */]])
    ], NewDriverModal);
    return NewDriverModal;
}());

//# sourceMappingURL=newDriverModal.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editDriver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_carsModal_carsModal__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_driver__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_car__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drivers_drivers__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var editDriver = /** @class */ (function () {
    function editDriver(navCtrl, navParam, modalCtrl, api, driverProvider, carProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.driverProvider = driverProvider;
        this.carProvider = carProvider;
        this.driver = this.navParam.get("driver");
        this.errorDriver = false;
        this.savedDriver = false;
        console.log(this.driver);
        var car = { idDriver: this.driver.idUser };
        this.carProvider.getCar$(car).subscribe(function (responseGet) {
            console.log('car: ', responseGet);
            _this.driver.car = responseGet;
        }, function (error) { return console.error(error); });
    }
    editDriver.prototype.saveDriver = function () {
        var _this = this;
        console.log('car: ', this.driver);
        if (this.driver.license) {
            this.driverProvider.updateDriver$(this.driver).subscribe(function (responseGet) {
                console.log(responseGet);
                _this.savedDriver = true;
                setTimeout(function () { _this.savedDriver = false; }, 3000);
                _this.api.getDrivers();
            }, function (error) { return console.error(error); });
        }
        else {
            this.errorDriver = true;
            setTimeout(function () { _this.errorDriver = false; }, 3000);
        }
    };
    editDriver.prototype.addCarToDriverModal = function () {
        var _this = this;
        var driverToCarModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_carsModal_carsModal__["a" /* carsModal */], { "driver": this.driver });
        driverToCarModal.onDidDismiss(function (responseGet) {
            console.log(responseGet);
            if (responseGet) {
                _this.savedDriver = true;
                setTimeout(function () { _this.savedDriver = false; }, 3000);
                _this.driver.car = responseGet;
                _this.api.getCars();
            }
            else {
                console.error(responseGet);
            }
        });
        driverToCarModal.present();
    };
    editDriver.prototype.deleteCar = function () {
        var _this = this;
        this.driver.car.idDriver = null;
        this.carProvider.updateCar$(this.driver.car).subscribe(function (responseGet) {
            console.log(responseGet);
            _this.savedDriver = true;
            setTimeout(function () { _this.savedDriver = false; }, 3000);
            _this.api.getCars();
        }, function (error) { return console.error(error); });
        this.driver.car = null;
    };
    editDriver.prototype.deleteDriver = function () {
        var _this = this;
        this.driverProvider.deleteDriver$({ idUser: this.driver.idUser }).subscribe(function (responseGet) {
            console.log(responseGet);
            _this.api.refreshDatas('drivers');
            _this.api.refreshDatas('cars');
            _this.savedDriver = true;
            setTimeout(function () {
                _this.savedDriver = false;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__drivers_drivers__["a" /* DriversPage */]);
            }, 2000);
        }, function (error) { return console.error(error); });
    };
    editDriver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-driver',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\edit-driver\edit-driver.html"*/'<ion-content padding>\n\n        <div class="row">\n\n            <div> ID:  {{driver.idUser}}</div>\n\n            <div> License *</div>\n\n            <input name="license" type="text" [(ngModel)]="driver.license" required>\n\n            <div> First Name *</div>\n\n            <input name="firstName" type="text" [(ngModel)]="driver.user.firstName" required>\n\n            <div> Last Name *</div>\n\n            <input name="lastName" type="text" [(ngModel)]="driver.user.lastName" required>\n\n            <div> Phone1 </div>\n\n            <input name="phone1" type="text" [readonly]="true" [(ngModel)]="driver.user.phone1">\n\n            <div> Phone2 </div>\n\n            <input name="phone2" type="text" [(ngModel)]="driver.user.phone2">\n\n            <div> Email </div>\n\n            <input name="email" type="text" [(ngModel)]="driver.user.email">\n\n            <div> Status </div>\n\n            <ion-item>\n\n                <ion-select name="type" [(ngModel)]="driver.status" required interface="popover">\n\n                    <ion-option value="1">Activated</ion-option>\n\n                    <ion-option value="2">Awaiting activation</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <div> Type </div>\n\n            <ion-item>\n\n                <ion-select name="type" [(ngModel)]="driver.type" required interface="popover">\n\n                    <ion-option value="TAXI">TAXI</ion-option>\n\n                    <ion-option value="DRIVER">DRIVER</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <div>Car</div>\n\n            <div *ngIf="driver.car===null"><button ion-button (click)="addCarToDriverModal()">associate</button></div>\n\n            <div *ngIf="driver.car">\n\n            <ion-icon name="close" (click)="deleteCar()"></ion-icon>\n\n              {{driver.car.id}} {{driver.car.brand}}\n\n            </div>\n\n            <div><button ion-button (click)="saveDriver()">SAVE</button> </div>\n\n            <div><button ion-button (click)="deleteDriver()">DELETE</button> </div>\n\n        </div>\n\n    <div class="success" [hidden]="!savedDriver">Save with success</div>\n\n    <div class="error" [hidden]="!errorDriver">Please fill all the (*) requires fields</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\edit-driver\edit-driver.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_api__["a" /* AppApi */],
            __WEBPACK_IMPORTED_MODULE_4__providers_driver__["a" /* DriverProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_car__["a" /* CarProvider */]])
    ], editDriver);
    return editDriver;
}());

//# sourceMappingURL=edit-driver.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_api__ = __webpack_require__(13);
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

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_api__ = __webpack_require__(13);
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
    function RidePage(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.rides = this.api.rides;
    }
    RidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ride',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\ride\ride.html"*/'<ion-content padding>\n\n\n\n  <div class="rides-content">\n\n    <div class="row">\n\n      <span style="width: 3%"> ID </span>\n\n      <span> Driver Name: </span>\n\n      <span> Driver Phone: </span>\n\n      <span> Client name:</span>\n\n      <span> Client Phone: </span>\n\n      <span style="width: 18%"> Address From:</span>\n\n      <span> Address To:</span>\n\n      <span> Date: </span>\n\n      <span class="status"> Status: </span>\n\n    </div>\n\n\n\n    <div *ngFor="let ride of rides" class="row">\n\n      <span style="width: 3%">{{ride.id}}</span>\n\n      <span>{{ride.driver_name}}</span>\n\n      <span>{{ride.driver_phone}}</span>\n\n      <span>{{ride.client_name}}</span>\n\n      <span>{{ride.client_phone}}</span>\n\n      <span style="width: 18%">{{ride.address_from}}</span>\n\n      <span>{{ride.address_to}}</span>\n\n      <span>{{ride.date | date:"MM/dd/yyyy \'-\' H:mm"}}</span>\n\n      <span *ngIf="ride.status" class="status">\n\n        <img src="../../assets/imgs/online_status.png">\n\n      </span>\n\n      <span *ngIf="!ride.status" class="status">\n\n        <img src="../../assets/imgs/offline_status.png">\n\n      </span>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\ride\ride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_api__["a" /* AppApi */]])
    ], RidePage);
    return RidePage;
}());

//# sourceMappingURL=ride.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_api__ = __webpack_require__(13);
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
        this.errorRegister = false;
        this.user = {
            firstName: null,
            lastName: null,
            phone1: null
        };
    }
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        //console.log(form.value)
        if (form.valid) {
            this.authProvider.register$(this.user).subscribe(function (responseGet) {
                console.log(responseGet);
                if (responseGet && (Object.keys(responseGet).length !== 0)) {
                    _this.myProfile.user = responseGet;
                    _this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
            }, function (error) { return console.error(error); });
        }
        else {
            this.errorRegister = true;
            setTimeout(function () { _this.errorRegister = false; }, 3000);
        }
    };
    RegisterPage.prototype.login = function () {
        this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'register',template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\register\register.html"*/'<ion-content padding class="mycontent">\n\n\n\n    <div class="col-md-6 col-md-offset-3" style="max-width: 500px">\n\n        <div class="panel-register">\n\n            <div class="col-xs-6 logo">\n\n                <a href="#">Tap Tel</a>\n\n            </div>\n\n            <hr>\n\n            <div class="panel-body">\n\n                <div class="col-lg-12">\n\n                    <form #f="ngForm" (ngSubmit)="register(f)" #form="ngForm">\n\n                        <div class="form-group">\n\n                            <ion-item>\n\n                                <ion-label>First Name *</ion-label>\n\n                                <ion-input type="text" name="firstName" required [(ngModel)]="user.firstName"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <ion-item>\n\n                                <ion-label>Last Name *</ion-label>\n\n                                <ion-input type="text" name="lastName" required [(ngModel)]="user.lastName"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <ion-item>\n\n                                <ion-label>Phone *</ion-label>\n\n                                <ion-input type="tel" name="phone1" required [(ngModel)]="user.phone1"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <div class="col-sm-6 col-sm-offset-3">\n\n                                <button ion-button class="btn-register">Create an account</button>\n\n                            </div>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <div class="col-lg-12 login">\n\n                                <span>Already registered?</span>\n\n                                <a href="#" (click)= "login()"> Log In</a>\n\n                            </div>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <div class="col-lg-12">\n\n                                <span class="error" [hidden]="!errorRegister">Please fill all the (*) requires fields</span>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_api__["a" /* AppApi */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_drivers_drivers__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_car_car__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ride_ride__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_driver__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_authentication__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_url__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_request__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_ride__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_newDriverModal_newDriverModal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_newRequestModal_newRequestModal__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_register__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_car__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_newCarModal_newCarModal__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_driversModal_driversModal__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_carsModal_carsModal__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_edit_car_edit_car__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edit_driver_edit_driver__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_DatePipe__ = __webpack_require__(213);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_car_car__["a" /* CarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_drivers_drivers__["a" /* DriversPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ride_ride__["a" /* RidePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__components_newDriverModal_newDriverModal__["a" /* NewDriverModal */],
                __WEBPACK_IMPORTED_MODULE_22__components_newRequestModal_newRequestModal__["a" /* NewRequestModal */],
                __WEBPACK_IMPORTED_MODULE_26__components_newCarModal_newCarModal__["a" /* NewCarModal */],
                __WEBPACK_IMPORTED_MODULE_27__components_driversModal_driversModal__["a" /* driversModal */],
                __WEBPACK_IMPORTED_MODULE_28__components_carsModal_carsModal__["a" /* carsModal */],
                __WEBPACK_IMPORTED_MODULE_29__pages_edit_car_edit_car__["a" /* editCar */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_driver_edit_driver__["a" /* editDriver */],
                __WEBPACK_IMPORTED_MODULE_31__providers_DatePipe__["a" /* DatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_car_car__["a" /* CarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_drivers_drivers__["a" /* DriversPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ride_ride__["a" /* RidePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__components_newDriverModal_newDriverModal__["a" /* NewDriverModal */],
                __WEBPACK_IMPORTED_MODULE_22__components_newRequestModal_newRequestModal__["a" /* NewRequestModal */],
                __WEBPACK_IMPORTED_MODULE_26__components_newCarModal_newCarModal__["a" /* NewCarModal */],
                __WEBPACK_IMPORTED_MODULE_27__components_driversModal_driversModal__["a" /* driversModal */],
                __WEBPACK_IMPORTED_MODULE_28__components_carsModal_carsModal__["a" /* carsModal */],
                __WEBPACK_IMPORTED_MODULE_29__pages_edit_car_edit_car__["a" /* editCar */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_driver_edit_driver__["a" /* editDriver */],
                __WEBPACK_IMPORTED_MODULE_31__providers_DatePipe__["a" /* DatePipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_driver__["a" /* DriverProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_18__app_url__["a" /* BaseUrl */],
                __WEBPACK_IMPORTED_MODULE_23__app_api__["a" /* AppApi */],
                __WEBPACK_IMPORTED_MODULE_19__providers_request__["a" /* RequestProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_ride__["a" /* RideProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_car__["a" /* CarProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_DatePipe__["a" /* DatePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_api__ = __webpack_require__(13);
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
    function MyApp(platform, statusBar, splashScreen, api) {
        var _this = this;
        this.api = api;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (_this.api.isLoggedIn()) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                _this.api.refreshDatas("all");
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__app_api__["a" /* AppApi */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);

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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_car__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drivers_drivers__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ride_ride__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_api__ = __webpack_require__(13);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\Projects\tap-master\tap\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="seltabix" *ngIf="myProfile.user.category === \'dispatcher\'">\n\n    <ion-tab [root]="carPage" tabTitle="Cars" tabIcon="car"></ion-tab>\n\n    <ion-tab [root]="driversPage" tabTitle="Drivers" tabIcon="information-circle"></ion-tab>\n\n    <ion-tab [root]="homePage" tabTitle="dashboard" tabIcon="home"></ion-tab>\n\n    <!--ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="cog"></ion-tab-->\n\n    <ion-tab [root]="ridePage" tabTitle="Rides" tabIcon="body"></ion-tab>\n\n    <ion-tab [root]="accountPage" tabTitle="My Account" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs [selectedIndex]="seltabix" *ngIf="myProfile.user.category !== \'dispatcher\'">\n\n    <!--ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="cog"></ion-tab-->\n\n    <ion-tab [root]="accountPage" tabTitle="My Account" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\Documents\Projects\tap-master\tap\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__app_app_api__["a" /* AppApi */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_url__ = __webpack_require__(35);
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_url__ = __webpack_require__(35);
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
    DriverProvider.prototype.updateDriver$ = function (obj) {
        return this.http.put(this.baseUrl.baseUrl + '/api/driver', obj);
    };
    DriverProvider.prototype.deleteDriver$ = function (obj) {
        return this.http.delete(this.baseUrl.baseUrl + '/api/driver', { params: obj });
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

},[222]);
//# sourceMappingURL=main.js.map