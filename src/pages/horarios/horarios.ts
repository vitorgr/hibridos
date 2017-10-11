import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


/**
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export class Horario {
	nome: Array<string> = new Array();
//hora: int;
}


@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html',
})
export class HorariosPage {
h: FirebaseListObservable<any>;
ho: Horario;

  icc: boolean;
  ip: boolean;
  c1: boolean;
  lptc: boolean;
  lm: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
  this.h = db.list('/horario');
			this.ho = new Horario;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorariosPage');
  }



  cadastrar() {


  if(this.icc)
      this.ho.nome.push("icc");
		if(this.ip)
			this.ho.nome.push("ip");
		if(this.c1)
			this.ho.nome.push("c1");
		if(this.lm)
			this.ho.nome.push("lm");
		if(this.lptc)
			this.ho.nome.push("lptc");




		this.h.push(this.ho).then(() =>{
			this.ho = new Horario();
		});
	}


}
