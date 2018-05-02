import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicoDetalhesPage } from './servico-detalhes';

@NgModule({
  declarations: [
    ServicoDetalhesPage
  ],
  imports: [
    IonicPageModule.forChild(ServicoDetalhesPage),
  ],
})
export class ServicoDetalhesPageModule {}
