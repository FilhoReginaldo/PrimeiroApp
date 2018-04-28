import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisaPage } from './pesquisa';

@NgModule({
  declarations: [
    PesquisaPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisaPage),
  ],
})
export class PesquisaPageModule {}
