import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item:any;

  productos:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item = navParams.get('item');

    this.productos=[
      {
        descripcion:'Aguardiente Antioqueño Tapa Azul x 375 ml',
        imagen: '../assets/img/azul_antioq.png',
        precio: '$ 26.300',
        categoria: 'Licores'
      },
      {
        descripcion:'Aguardiente Antioqueño Tapa Roja x 375 ml',
        imagen: '../assets/img/roja_antioq.png',
        precio: '$ 36.300',
        categoria: 'Licores'
      },
      {
        descripcion:'Aguardiente Antioqueño Tapa verde x 375 ml',
        imagen: '../assets/img/verde_antioq.png',
        precio: '$ 14.300',
        categoria: 'Licores'
      },
      {
        descripcion:'Aguardiente Antioqueño Tapa verde x 750 ml',
        imagen: '../assets/img/ronViejo.png',
        precio: '$ 55.300',
        categoria: 'Licores'
      },
      {
        descripcion:'Loratadina x 10 ml',
        imagen: '../assets/img/loratadina.png',
        precio: '$ 5.300',
        categoria: 'Farmacia'
      },
      {
        descripcion:'Omeprazol x 10 ml',
        imagen: '../assets/img/omeprazol.png',
        precio: '$ 51.300',
        categoria: 'Farmacia'
      }
    ]
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
