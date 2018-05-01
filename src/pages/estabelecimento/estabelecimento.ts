import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContatoPage } from '../contato/contato';
import { ServicoDetalhesPage } from '../servico-detalhes/servico-detalhes';

/**
 * Generated class for the EstabelecimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estabelecimento',
  templateUrl: 'estabelecimento.html',
})
export class EstabelecimentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoPage');
  }
  proxPagesv(){
    this.navCtrl.push(ServicoDetalhesPage)
  }
  pageContato(){
    this.navCtrl.push(ContatoPage)
  }

}
