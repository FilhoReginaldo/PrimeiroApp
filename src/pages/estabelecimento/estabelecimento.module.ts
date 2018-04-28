import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstabelecimentoPage } from './estabelecimento';

@NgModule({
  declarations: [
    EstabelecimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(EstabelecimentoPage),
  ],
})
export class EstabelecimentoPageModule {}
