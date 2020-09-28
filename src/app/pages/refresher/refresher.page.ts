import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh( event ){
      setTimeout(() => {
        this.items = Array(40);
        event.target.complete();// Se utiliza el target.complete para definir que ya se terminó la carga
      }, 1500);
  }

}
