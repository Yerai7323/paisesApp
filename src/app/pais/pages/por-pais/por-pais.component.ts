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

  constructor( private pais: PaisService ) { }

  buscar(){
    this.busquedaErr = false;

    this.pais.buscarPais(this.busqueda)
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
}
