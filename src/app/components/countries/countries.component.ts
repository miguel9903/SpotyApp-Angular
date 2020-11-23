import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  paises: any[] = [];

  constructor( private http: HttpClient ) { 
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe((response: any) => {
            this.paises = response;
        });
  }

  ngOnInit(): void {
  }

}
