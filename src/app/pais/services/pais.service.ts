import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( busqueda: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl }/name/${ busqueda }`;
    return this.http.get<Pais[]>( url );

  }
 
}