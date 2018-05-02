import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ConfigPage } from '../config/config';
import { PesquisaPage } from '../pesquisa/pesquisa';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PesquisaPage;
  tab3Root = ConfigPage;


  constructor() {

  }
}
