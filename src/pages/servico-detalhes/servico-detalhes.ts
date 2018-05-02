import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoAgendamentoPage } from '../servico-agendamento/servico-agendamento';


@IonicPage()
@Component({
  selector: 'page-servico-detalhes',
  templateUrl: 'servico-detalhes.html',
})
export class ServicoDetalhesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pageProx(){
    this.navCtrl.push(ServicoAgendamentoPage)
  }

}
