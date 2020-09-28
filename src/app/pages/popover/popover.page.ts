import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop( ev: any ){
     const popover = await this.popoverCtrl.create({
       component: PopinfoComponent,
       event: ev,
       mode: 'ios',//Se agrega ésta opción para que el diseño se establezca siempre en ios
       backdropDismiss: false// No se cierra el popover si no se realiza una interacción en él mismo

     });

     await popover.present();

     //Para procesar el argumento que me está regresando el popover, se usa la desestructuracion del ecmascript6
     const { data } = await popover.onDidDismiss();// le permite obtener al opoover.page.ts la data de popinfo.component.ts
     // De igual forma se puede usar onWillDismiss() para obtener la data.
     
     console.log('Padre:', data);

  }

}
