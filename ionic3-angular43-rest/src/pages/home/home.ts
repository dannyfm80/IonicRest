import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
//import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios
  constructor(public navCtrl: NavController, public proveedor : Proveedor1Provider) {

  }

  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data) =>{this.usuarios = data;},
      (error) => {console.log(error);}
    )
  }

}
