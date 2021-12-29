import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {

  public busqueda: string = '';
  public busquedaErr: boolean = false;
  public busquedaCapital: Pais[] = [];

  constructor( private paisService: PaisService) {}

  buscar(busqueda: string) {
    this.busquedaErr = false;
    this.busqueda = busqueda;

    this.paisService.buscarCapital(this.busqueda)
    .subscribe( 
      (resp) => {
        console.log(resp);
        this.busquedaCapital = resp;
      },
      (err) => {
        this.busquedaErr = true;
        this.busquedaCapital = [];
      }
    );
  }

  sugerencias(busqueda: string) {}
}
