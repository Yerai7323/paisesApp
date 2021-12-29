import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  public busqueda: string = '';
  public busquedaErr: boolean = false;
  public busquedaPaises: Pais[] = [];
  public busquedaSugerencia: Pais[] = [];
  public mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(busqueda: string) {
    this.mostrarSugerencias = false;
    this.busquedaErr = false;
    this.busqueda = busqueda;

    this.paisService
      .buscarPais(this.busqueda)
      .pipe(tap(console.log))
      .subscribe(
        (resp) => {
          if (resp.message !== 'Not Found') {
            this.busquedaPaises = resp;
          } else {
            this.busquedaErr = true;
          }
        },
        (err) => {
          this.busquedaErr = true;
          this.busquedaPaises = [];
        }
      );
  }

  sugerencias(busqueda: string) {
    
    if(busqueda.trim().length === 0){
      this.mostrarSugerencias = false;
    }else{
      this.mostrarSugerencias = true;
    }
    

    this.busqueda = busqueda;

    this.paisService
      .buscarPais(busqueda)
      .pipe(tap(console.log))
      .subscribe(
        (resp) => {
          if (resp.message !== 'Not Found') {
            this.busquedaSugerencia = resp.splice(0, 5);
          } else {
            this.busquedaSugerencia = [];
          }
        },
        (err) => {
          this.busquedaSugerencia = [];
        }
      );
  }
}
