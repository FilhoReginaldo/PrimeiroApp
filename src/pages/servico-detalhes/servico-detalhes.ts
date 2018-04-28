import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';
import { ServicoAgendamentoPage } from '../servico-agendamento/servico-agendamento';


@IonicPage()
@Component({
  selector: 'page-servico-detalhes',
  templateUrl: 'servico-detalhes.html',
})
export class ServicoDetalhesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicoDetalhesPage');
  }
// chama de volta a tela serviços
  pageVolta(){
    this.navCtrl.push(ServicosPage)
  }
  pageProx(){
    this.navCtrl.push(ServicoAgendamentoPage)
  }

}
