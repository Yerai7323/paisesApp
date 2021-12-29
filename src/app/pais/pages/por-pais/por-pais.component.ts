import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  public busqueda:string = '';
  public busquedaErr: boolean = false;
  public busquedaPaises: Pais[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( busqueda:string ){
    this.busquedaErr = false;
    this.busqueda = busqueda;

    this.paisService.buscarPais(this.busqueda)
    .subscribe( 
      (resp) => {
        console.log(resp);
        this.busquedaPaises = resp;
      },
      (err) => {
        this.busquedaErr = true;
        this.busquedaPaises = [];
      }
    );
  }

  sugerencias( busqueda:string ){
    this.busquedaErr = false;
    console.log( busqueda )
  }
}
