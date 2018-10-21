webpackJsonp([1],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetshopsPageModule", function() { return PetshopsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__petshops__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PetshopsPageModule = /** @class */ (function () {
    function PetshopsPageModule() {
    }
    PetshopsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__petshops__["a" /* PetshopsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__petshops__["a" /* PetshopsPage */]),
            ],
        })
    ], PetshopsPageModule);
    return PetshopsPageModule;
}());

//# sourceMappingURL=petshops.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetshopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetshopsPage = /** @class */ (function () {
    function PetshopsPage(navCtrl, navParams, petshopService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.petshopService = petshopService;
    }
    // função chamando o serviço que consome api
    PetshopsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.petshopService.findAll()
            .subscribe(function (response) {
            _this.items = response;
        }, function (error) {
            console.log(error);
        });
    };
    PetshopsPage.prototype.infoPet = function (value) {
        this.catPet = value;
    };
    PetshopsPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                //if(item.funcionario == undefined )
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.funcionarios.some(function (g) { return g.tipoServico.some(function (t) { return t.description.toLowerCase().indexOf(val.toLowerCase()) > -1 && t.tipoanimal.some(function (ta) { return ta.id === _this.catPet; }); }); }));
            });
        }
        else {
            this.ionViewDidLoad();
        }
    };
    PetshopsPage.prototype.pageservice = function (petshop) {
        this.navCtrl.push('ServicoPetPage', {
            id: petshop
        });
    };
    PetshopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-petshops',template:/*ion-inline-start:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\petshops\petshops.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Petshops</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n\n\n  <div class="centro">\n    <img src="../../assets/icon/cat.png" class="efect" id="cat" (click)="infoPet(2)" >\n    <img src="../../assets/icon/dog.png" class="efect"  id="dog" (click)="infoPet(1)" >\n  </div>\n    \n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list>\n  \n  <button (click)="pageservice(item.id)" ion-item *ngFor="let item of items"  >\n    <ion-thumbnail item-start>\n      <img src="../../assets/imgs/pt.png">\n    </ion-thumbnail>\n    <h2>{{item.nome}}</h2>\n    <p> {{item.endereco.logradouro}} {{item.endereco.numero}}</p>\n\n  </button>\n</ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\petshops\petshops.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__["a" /* PetshopService */]])
    ], PetshopsPage);
    return PetshopsPage;
}());

//# sourceMappingURL=petshops.js.map

/***/ })

});
//# sourceMappingURL=1.js.map