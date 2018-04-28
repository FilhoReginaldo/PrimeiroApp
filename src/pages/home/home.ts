import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstabelecimentoPage } from '../estabelecimento/estabelecimento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  proxPage(){
    this.navCtrl.push(EstabelecimentoPage)
  }

}
