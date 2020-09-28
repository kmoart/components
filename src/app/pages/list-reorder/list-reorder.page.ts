import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'flash', 'Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reorder( event ){
    //console.log( event );

    //Funcion para remover elementos
    const itemMover = this.personajes.splice( event.detail.from, 1 )[0];//EL from es la posición de donde parte el elemento, el 1 es la cantidad de elementos a eliminar
    // como devuelve un arreglo nos interesa por ahora la posición cero. De esa manera extrase siempre el item de la posición cero.

    //Ahora debo mover ese elemento que obtengo al final de arreglo
    this.personajes.splice( event.detail.to, 0 , itemMover);// inserto el elemento itemMover

    event.detail.complete();// Se coloca ésta función para que no se bloquee al mover un item de la lista
  }

  onClick(){
    console.log( this.personajes );
  }

}
