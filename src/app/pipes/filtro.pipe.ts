import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[], texto: string, columna: string ): any[] {

    if( texto === ''){
      return arreglo;
    }
    texto = texto.toLowerCase();

    return arreglo.filter( item => {
      return item[columna].toLowerCase().includes( texto );
      // la función includes compara:  Si el texto que viene en item.title incluye lo que viene en el string con nombre texto
    });// se debe colocar el return antes de la palabra arreglo, para que funcione la funcion.

    //return arreglo;
  }

}
