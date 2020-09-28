import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){
      const modal = await this.modalCtrl.create({
        component: ModalInfoPage,//Corresponde al componente modal-info creado aparte.
        componentProps: {
          nombre: 'Camilo',
          pais: 'Colombia'
        }
      });

      //Ahora lanza el modal
      await modal.present();

      //Desestructuración de javascript. Se extrae toda la información de la variable data, que viene de modal.onDismiss()
      const { data } = await modal.onDidDismiss(); // onDidDismiss es una promesa que está escuchando cuando el modal se cierra.

      console.log( 'Retorno del modal', data );// data contiene toda la información del modal-info.page o modal hijo.
  }

}
