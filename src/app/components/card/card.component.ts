import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  verArtista(item: any): void {
    let artistaID;
    if (item.type === 'album') {
      artistaID = item.artists[0].id;
    } else {
      artistaID = item.id;
    }
    this.router.navigate(['artist', artistaID]);
  }
}
