import { EstabelecimentoPage } from './../estabelecimento/estabelecimento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PesquisaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  proxPage(){
    this.navCtrl.push(EstabelecimentoPage)
  }

}
