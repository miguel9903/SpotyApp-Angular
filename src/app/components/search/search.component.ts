import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService) { }

  buscarArtista(termino: string): void {
    if (termino) {
        this.loading = true;
        this.spotifyService.searchArtsist(termino)
            .subscribe((response: any) => {
              console.log(response);
              this.artistas = response;
              this.loading = false;
        });
    }
  }

}
