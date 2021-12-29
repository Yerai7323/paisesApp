import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public busqueda: string = '';
  public debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => { 
      this.onDebounce.emit( valor );
    })
  }

  buscar() {
    this.onEnter.emit( this.busqueda );
  }

  teclaPresionada(){
    this.debouncer.next( this.busqueda );
  }


}
