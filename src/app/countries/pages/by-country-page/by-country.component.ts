import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Pais } from '../../interfaces/pais';

@Component({
  selector: 'by-country-page',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryPageComponent {

  public paises:Pais[]=[];

  constructor(private countriesService:CountriesService){}

  searchByPais(term:string):void{
    this.countriesService.searchPais(term).subscribe( paises =>{
      this.paises = paises
    }
    )
  }
  
}
