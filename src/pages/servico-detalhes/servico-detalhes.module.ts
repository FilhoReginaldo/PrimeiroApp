import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicoDetalhesPage } from './servico-detalhes';
import { ServicosPage } from '../servicos/servicos';

@NgModule({
  declarations: [
    ServicoDetalhesPage,
    ServicosPage
  ],
  imports: [
    IonicPageModule.forChild(ServicoDetalhesPage),
  ],
})
export class ServicoDetalhesPageModule {}
