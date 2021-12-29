import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  
  constructor( private http: HttpClient ) { }

  get httpParams() {
    return new HttpParams().set( 'fields' , 'name,capital,alpha2Code,population,flag' )
  }

  buscarPais( busqueda: string ): Observable<Pais[]>  {

    const url = `${ this.apiUrl }/name/${ busqueda }`;
    return this.http.get<Pais[]>( url , { params: this.httpParams } );

  }

  buscarCapital( busqueda: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl }/capital/${ busqueda }`;
    return this.http.get<Pais[]>( url , { params: this.httpParams } );

  }

  buscarCodigoPais( codigo: string ): Observable<Pais> {

    const url = `${ this.apiUrl }/alpha/${ codigo }`;
    return this.http.get<Pais>( url );

  }

  buscarRegion( busqueda: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl }/regionalbloc/${ busqueda }`;
    return this.http.get<Pais[]>( url , { params: this.httpParams } );

  }


 
}
