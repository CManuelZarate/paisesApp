import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
//import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ='https://restcountries.eu/rest/v2';

  get httpParams(){
    return  new HttpParams().set( 'fields','name;capital;alpha2Code;flag;population' );
  }

  constructor( private http : HttpClient) { }

  buscarPais(termino:string): Observable <Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url , {params: this.httpParams} );
              /* .pipe(
                catchError( err => of ([]))
              ); */
  }
  
  buscarCapital(termino:string): Observable <Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
              /* .pipe(
                catchError( err => of ([]))
              ); */
  }

  getPaisPorAlpha(id:string): Observable <Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
              /* .pipe(
                catchError( err => of ([]))
              ); */
  }

  buscarRegion( region:string):Observable<Country[]>{

    
    const url= `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url , {  params:this.httpParams });
  }

}
