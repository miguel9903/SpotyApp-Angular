import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service ready');
  }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDesehewnCrZCxVS32WeJQCGu9VMX7FIZWjRB7ilUDAhhOF8m4N4lHR68GsZmt1VACZexjA-eFknyDdG2c'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases')
               .pipe(map((response: any) => response.albums.items ));
  }

  searchArtsist(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe(map((response: any) => response.artists.items ));
  }

  getArtist(id: string): any {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?market=es`)
               .pipe(map((response: any) => response.tracks ));
  }
}
