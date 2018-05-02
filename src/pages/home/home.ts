import { ModelServicoPage } from './../model-servico/model-servico';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PesquisaPage } from '../pesquisa/pesquisa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }
  proxPage(){
    this.navCtrl.push(PesquisaPage)
  }

  model(){
    let modal = this.modalCtrl.create(ModelServicoPage);
    modal.present();
  }

}
