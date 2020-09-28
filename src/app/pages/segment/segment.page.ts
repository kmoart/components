import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild('segmento') segment: IonSegment;//ViewChild permite obtener en ionic un elemento de html
  // Se le asigna el nombre segment a la clase o propiedad con tipo IonSegment para otorgarle las propiedades de ionic IonSegment.

  superHeroes: Observable<any>;
  publisher = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {
    //console.log( this.segment.value ); NO funcionó

    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged( event ){

    const valorSegmento = event.detail.value;

    if( valorSegmento === 'Marvel Comics'){
      this.publisher = 'Marvel Comics';

    }else if( valorSegmento === 'DC Comics'){
      this.publisher = 'DC Comics';

    }else{
      this.publisher = '';// con el valor vacío no se aplican filtros y devuelve todo el arreglo completo.
    }

    
    console.log( valorSegmento );

  }

}
