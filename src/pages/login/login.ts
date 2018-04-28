import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';
import { CadastroPage } from '../cadastro/cadastro';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  doProximaPagina(){
    this.navCtrl.push(TabsPage);
  }

  doEsqueciSenha(){
    this.navCtrl.push(EsqueciSenhaPage);
  }

  doCadastrar(){
    this.navCtrl.push(CadastroPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
