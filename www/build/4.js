webpackJsonp([4],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agenda__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgendaPageModule = /** @class */ (function () {
    function AgendaPageModule() {
    }
    AgendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */]),
            ],
        })
    ], AgendaPageModule);
    return AgendaPageModule;
}());

//# sourceMappingURL=agenda.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_Cliente_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_Funcionario_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_AgendaFuncionario_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, navParams, PetshopService, CienteService, FuncionarioService, AgendaFuncionarioService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PetshopService = PetshopService;
        this.CienteService = CienteService;
        this.FuncionarioService = FuncionarioService;
        this.AgendaFuncionarioService = AgendaFuncionarioService;
    }
    AgendaPage.prototype.datetime = function () {
        var data = this.dataInicial.split('-').map(function (val) { return +val + 1; });
        this.dia = data[2];
        this.mes = data[1];
        this.ano = data[0];
    };
    AgendaPage.prototype.agendaHorario = function () {
        var agenda1 = { hora: "08:00", Data: "21/10/2018", duracao: 1 };
        var agenda2 = { hora: "09:00", Data: "21/10/2018", duracao: 1 };
        var agenda3 = { hora: "10:00", Data: "21/10/2018", duracao: 1 };
        var agenda4 = { hora: "11:00", Data: "21/10/2018", duracao: 1 };
        var agenda5 = { hora: "12:00", Data: "21/10/2018", duracao: 1 };
        this.agendaF = [agenda1, agenda2, agenda3, agenda4, agenda5];
    };
    AgendaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.FuncionarioService.findAll()
            .subscribe(function (response) {
            _this.funcionarios = response;
        }, function (error) {
            console.log(error);
        });
        this.buscaAgenda();
        this.agendaHorario();
    };
    AgendaPage.prototype.buscaAgenda = function () {
        var _this = this;
        this.AgendaFuncionarioService.findAll()
            .subscribe(function (response) {
            _this.agendas = response;
        }, function (error) {
            console.log(error);
        });
    };
    AgendaPage.prototype.selectData = function (info) {
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */], {
                    monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho,', 'agosto', 'setembro', 'outubro,', 'novembro', 'dezembro'],
                })
            ],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\agenda\agenda.html"*/'\n<ion-header>\n\n  \n</ion-header>\n\n\n<ion-content padding>\n   \n\n      \n      <div class="agenda">\n        <div>\n            <h4 style="text-align: center;">Selecione uma data</h4>\n        </div>\n        <ion-item >\n          <h4 style="text-align: center;">Selecione uma data</h4>\n            <ion-label style="text-align: center;">Escolha um dia ou mês</ion-label>\n            <ion-datetime displayFormat="DD/MMMM" [(ngModel)]="dataInicial"\n            monthNames= "janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro"\n            doneText="Selecionar"\n            cancelText="Cancelar" \n            [min]="maxDate">\n            </ion-datetime>\n      </ion-item>  \n      </div>\n      <h4>{{dia}}/{{mes}}/{{ano}}</h4>\n          \n      <h3 class="horarios">Selecione um horario:</h3>\n      <br>\n      <ion-list style="text-align: center;">\n        <ion-item *ngFor="let info of agendaF " style="text-align: center;" (click)="selectData(info)">\n          <h3>Horario:{{info.hora}}  Data:{{info.Data}}</h3> \n        </ion-item>\n      </ion-list>      \n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\agenda\agenda.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__["a" /* PetshopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__["a" /* PetshopService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_domain_Cliente_service__["a" /* ClienteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_domain_Cliente_service__["a" /* ClienteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_domain_Funcionario_service__["a" /* FuncionarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_domain_Funcionario_service__["a" /* FuncionarioService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_domain_AgendaFuncionario_service__["a" /* AgendaFuncionarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_domain_AgendaFuncionario_service__["a" /* AgendaFuncionarioService */]) === "function" && _f || Object])
    ], AgendaPage);
    return AgendaPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=agenda.js.map

/***/ })

});
//# sourceMappingURL=4.js.map