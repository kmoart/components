import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista:IonList; //Se le agrega el tipo IonList para llamar los metodods de la lista en angular o ionic que necesitemos

  usuarios: Observable<any>;

  constructor( private dataService: DataService,
                private toastCtrl: ToastController) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();
    
  }

  async presentToast(message : string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  favorite( user ){

      //console.log( 'favorite',user );
      this.presentToast('Guardó en favoritos');
      this.lista.closeSlidingItems();
  }

  share( user ){

      //console.log('share', user);
      this.presentToast('Compartido!');
      this.lista.closeSlidingItems();
  }

  borrar( user ){

    //console.log('borrar', user);
    this.presentToast('Borrado!');
    this.lista.closeSlidingItems();     
  }

}
