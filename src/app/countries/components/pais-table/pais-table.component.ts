import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais';


@Component({
  selector: 'pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent {
  @Input()
  public paises: Pais[]=[];
}
