import { ConsultacepProvider } from './../../providers/consultacep/consultacep';
import { Component, ErrorHandler } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicErrorHandler } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers:[
    ConsultacepProvider
  ]
})
export class CadastroPage {
  public enderecos;
  public mensagem:String;
  public loader;
  public teste;
  public objcep ={
    cep:"",
  }
  public retorno = {
    estado:"",
    cidade:"",
    lougradouro:"",
    complemento:"",
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public ConsultacepProvider: ConsultacepProvider,
    public loadingCtrl: LoadingController,) {
  }
  //chama a tela de Login
  doVoltaLogin(){
    this.navCtrl.push(LoginPage);
    this.mensagem ="Cancelado com Sucesso!"
    this.presentToast(this.mensagem);
    console.log(this.mensagem);
  }
  //chama a tela TabsPage
  doConfirmar(){
    this.navCtrl.push(TabsPage);
  }
  //apresenta um toast no final da página
  presentToast(mensagem) {
    let toast = this.toastCtrl.create({
      message : mensagem,
      duration: 2000
    });
    toast.present();
  }
  //Abri o carregamento
  abrirCarregamento() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }
  //fecha o carregamento
  fecharCarregamento(){
    this.loader.dismiss();
  }
  //Alerta
  showAlert() {
    let alert = this.alertCtrl.create({
      title: "Realmente Deseja se Cadastar?",
      subTitle:"Aproveite tudo o que nossa plataforma pode oferecer."
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.teste = data;
        this.doConfirmar();
        this.presentToast("Login Criado com Sucesso!");
      }
    });
    alert.present();
  }
  //Preenchimento as informações para o preenchimento dos campos de endereço
  preencherCamposEnd(){
    this.abrirCarregamento();
    this.ConsultacepProvider.getBuscaCep(this.objcep.cep).subscribe(
      data=>{
        this.enderecos = data;
        this.retornoBuscaCep();
        this.fecharCarregamento();
      },error=>{
        this.enderecos="";
        this.retornoBuscaCepErro()
        this.fecharCarregamento();
        this.presentToast("CEP inválido!");
      }
    )
  }
  //preenchimento dos campos CEP
  retornoBuscaCep(){
    this.retorno.estado = this.enderecos.uf
    this.retorno.cidade = this.enderecos.localidade
    this.retorno.lougradouro = this.enderecos.logradouro
    this.retorno.complemento =this.enderecos.complemento
  }
  //Limpas os campos em caso de erro
  retornoBuscaCepErro(){
    this.objcep.cep="";
    this.retorno.estado = ""
    this.retorno.cidade = ""
    this.retorno.lougradouro = ""
    this.retorno.complemento =""
  }
}