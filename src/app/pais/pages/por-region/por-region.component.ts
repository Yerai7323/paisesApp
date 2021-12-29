import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  public regiones: string[] = [
      'EU (European Union)', 
      'EFTA (European Free Trade Association)', 
      'CARICOM (Caribbean Community)', 
      'PA (Pacific Alliance)', 
      'AU (African Union)', 
      'USAN (Union of South American Nations)', 
      'EEU (Eurasian Economic Union)', 
      'AL (Arab League)', 
      'ASEAN (Association of Southeast Asian Nations)', 
      'CAIS (Central American Integration System)', 
      'CEFTA (Central European Free Trade Agreement)', 
      'NAFTA (North American Free Trade Agreement)', 
      'SAARC (South Asian Association for Regional Cooperation)'
    ];
  public regionActiva: string = '';
  public paisesRegion: Pais[] = [];
  
  constructor( private paisService: PaisService) { }

  activarRegion( region: string ) {
    this.regionActiva = region;
    this.paisesRegion = [];
    const toSearch = region.split(" ")[0].toLowerCase();

    this.paisService.buscarRegion(toSearch)
      .subscribe( resp => {
        this.paisesRegion = resp;
      })

  }

}
