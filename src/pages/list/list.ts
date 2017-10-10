import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['book'];

    this.items = [];

      this.items.push({
        title: 'IP ',
        note: 'Introdução a Programação',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      this.items.push({
        title: 'ICC ',
        note: 'Introdução a Ciência da Computação',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      this.items.push({
        title: 'Cálculo I',
        note: 'Cálculo I',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      this.items.push({
        title: 'Cálculo II',
        note: 'Cálculo II',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      this.items.push({
        title: 'LPTC',
        note: 'Leitura e Produção de Textos Ciêntificos',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
