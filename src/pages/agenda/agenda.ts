import { MyApp } from './../../app/app.component';
import { PetshopDTO } from './../../models/Petshop';
import { ClienteService } from './../../services/domain/Cliente.service';
import { PetshopService } from './../../services/domain/petshop.service';
import { FuncionarioService } from './../../services/domain/Funcionario.service';
import { FuncionarioDTO } from '../../models/Funcionario';
import { AgendaFuncionarioService } from './../../services/domain/AgendaFuncionario.service';
import { AgendaFuncionarioDTO } from './../../models/AgendaFuncionario';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicModule } from 'ionic-angular';
import { ngModuleJitUrl } from '@angular/compiler';


@IonicPage()
@NgModule({
  imports: [
    IonicModule.forRoot(MyApp, {
    monthNames: ['janeiro', 'fevereiro', 'março', 'abril','maio','junho','julho,','agosto','setembro','outubro,','novembro','dezembro'],  })
  ],
  })
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  agendas: AgendaFuncionarioDTO[];
  funcionarios: FuncionarioDTO[];
  dataInicial:string;
  datetime():void{
    var data = this.dataInicial.split('-').map(function(val){return+ val+1;});
    this.dia = data[2];
    this.mes = data[1];
    this.ano = data[0];

  }



  dia:number;
  mes:number;
  ano:number;
  agendaF:any[] ;
  
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public PetshopService : PetshopService,
    public CienteService : ClienteService,
    public FuncionarioService : FuncionarioService,
    public AgendaFuncionarioService: AgendaFuncionarioService,
    ) {
  }

  agendaHorario(){

    var agenda1 = {hora: "08:00", Data:"21/10/2018",duracao:1};
    var agenda2 = {hora: "09:00", Data:"21/10/2018",duracao:1};
    var agenda3 = {hora: "10:00", Data:"21/10/2018",duracao:1};
    var agenda4 = {hora: "11:00", Data:"21/10/2018",duracao:1};
    var agenda5 = {hora: "12:00", Data:"21/10/2018",duracao:1};

    this.agendaF = [agenda1,agenda2,agenda3,agenda4,agenda5]
  }
  ionViewDidLoad() {
    this.FuncionarioService.findAll() 
    .subscribe(response =>{
      this.funcionarios = response;
    },
    error =>{
      console.log(error);
    });
    this.buscaAgenda();
    this.agendaHorario();
  }

  buscaAgenda(){
    this.AgendaFuncionarioService.findAll()
    .subscribe(response=>{
      this.agendas = response;
   
    },error =>{
      console.log(error);
    });
  }

  
    
  
 
  selectData(info){
    
  }

}
