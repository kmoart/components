import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertCtlr: AlertController) { }

  titulo: string;

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtlr.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');            
          }
        },
          {
            text: 'Ok',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Botón OK');             
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtlr.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        }        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Ok', data );
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await alert.present();
  }

}
