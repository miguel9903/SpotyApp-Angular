import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotifyService: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases()
        .subscribe((response: any) => {
            console.log(response);
            this.nuevasCanciones = response;
            this.loading = false;
        }, (errorService => {
            console.log(errorService.error.error.message);
            this.loading = false;
            this.error = true;
            this.mensajeError = errorService.error.error.message;
        }));
  }

}
