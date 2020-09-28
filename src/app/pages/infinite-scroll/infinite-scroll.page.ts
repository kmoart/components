import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll; //traemos la propiedad html IonInfiniteScroll con @ViewChild y la declaramos en infiniteScroll

  data:any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){
    console.log('cargando siguientes...');

    setTimeout(() => {

        if( this.data.length > 50 ) {// Para deshabilitar el infinite scroll, en caso de no haber más registros
            event.target.complete();
            this.infiniteScroll.disabled = true;
            return;
        }
      
        const nuevoArr = Array(20);

        this.data.push(...nuevoArr);
        event.target.complete();//Indica que se ha terminado de cargar el nuevo arreglo en la variable data

    }, 1000 );
  }

}
