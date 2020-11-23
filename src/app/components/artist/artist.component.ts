import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;
  loadingTopTracks: boolean;

  constructor( private activatedRoute: ActivatedRoute,
               private spotifyService: SpotifyService ) {
      this.loadingArtist = true;
      this.loadingTopTracks = true;
      this.activatedRoute.params.subscribe(params => {
        this.getArtist(params.id);
        this.getTopTracks(params.id);
      });
  }

  getArtist(id: string): void {
    this.spotifyService.getArtist(id)
        .subscribe(response => {
          console.log(response);
          this.artista = response;
          this.loadingArtist = false;
        });
  }

  getTopTracks(id: string): void {
    this.spotifyService.getTopTracks(id)
        .subscribe(response => {
          console.log(response);
          this.topTracks = response;
          this.loadingTopTracks = false;
        });
  }
}
