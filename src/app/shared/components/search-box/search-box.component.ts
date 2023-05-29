import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {
  @Input()
  public placeholder:string='';
}
