import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region';

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  public region:Region[]=[];

  constructor(private countriesService:CountriesService){}

  searchByRegion(term:string):void{
    this.countriesService.searchRegion(term).subscribe( region =>{
      this.region = region
    }
    )
  }
}
