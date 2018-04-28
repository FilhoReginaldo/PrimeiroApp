import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the EsqueciSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esqueci-senha',
  templateUrl: 'esqueci-senha.html',
})
export class EsqueciSenhaPage {
  msg:string;
  msg2:string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  validarEmail(){
    this.msg="Mensagem do Sistema!";
    this.msg2="Link para troca de senha enviado por email!";
    this.mensagem(this.msg,this.msg2);
    this.navCtrl.push(LoginPage);
  }

  mensagem(msg, msg2){
    let alert = this.alertCtrl.create({
      title: msg,
      subTitle: msg2,
      buttons:['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqueciSenhaPage');
  }

}
