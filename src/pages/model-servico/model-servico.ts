import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModelServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model-servico',
  templateUrl: 'model-servico.html',
})
export class ModelServicoPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public view: ViewController) {
  }

  close(){
    let close = this.view.dismiss();
  }

}
