import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PesquisaPage } from '../pesquisa/pesquisa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  proxPage(){
    this.navCtrl.push(PesquisaPage)
  }

}
