import { EsqueciSenhaPageModule } from './../pages/esqueci-senha/esqueci-senha.module';
import { EsqueciSenhaPage } from './../pages/esqueci-senha/esqueci-senha';
import { LoginPageModule } from './../pages/login/login.module';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Config } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConsultacepProvider } from '../providers/consultacep/consultacep';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { AboutPage } from '../pages/about/about';
import { ConfigPage } from '../pages/config/config';
import { PesquisaPage } from '../pages/pesquisa/pesquisa';
import { ServicosPage } from '../pages/servicos/servicos';
import { ServicoDetalhesPage } from '../pages/servico-detalhes/servico-detalhes';
import { EstabelecimentoPage } from '../pages/estabelecimento/estabelecimento';
import { ServicoAgendamentoPage } from '../pages/servico-agendamento/servico-agendamento';
import { ContatoPage } from '../pages/contato/contato';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    EsqueciSenhaPage,
    ConfigPage,
    PesquisaPage,
    ServicosPage,
    ServicoDetalhesPage,
    EstabelecimentoPage,
    ServicoAgendamentoPage,
    ContatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    EsqueciSenhaPage,
    ConfigPage,
    PesquisaPage,
    ServicosPage,
    ServicoDetalhesPage,
    EstabelecimentoPage,
    ServicoAgendamentoPage,
    ContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsultacepProvider
  ]
})
export class AppModule {}
