import { Component } from '@angular/core';
import { tap } from 'rxjs';
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
  public mostrarSugerencias: boolean = false;
  public busquedaSugerencia: Pais[] = [];

  constructor( private paisService: PaisService) {}

  buscar(busqueda: string) {
    this.mostrarSugerencias = false;
    this.busquedaErr = false;
    this.busqueda = busqueda;

    this.paisService.buscarCapital(this.busqueda)
    .subscribe( 
      (resp) => {
        this.busquedaCapital = resp;
      },
      (err) => {
        this.busquedaErr = true;
        this.busquedaCapital = [];
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
      .buscarCapital(busqueda)
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
