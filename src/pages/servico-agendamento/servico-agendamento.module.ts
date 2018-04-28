import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicoAgendamentoPage } from './servico-agendamento';

@NgModule({
  declarations: [
    ServicoAgendamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicoAgendamentoPage),
  ],
})
export class ServicoAgendamentoPageModule {}
