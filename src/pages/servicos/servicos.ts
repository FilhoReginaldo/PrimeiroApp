import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoDetalhesPage } from '../servico-detalhes/servico-detalhes';


@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }

  proxPage(){
    this.navCtrl.push(ServicoDetalhesPage);
  }

}
