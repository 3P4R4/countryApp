import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private countriesService: CountriesService
    ){}
    
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.countriesService.searchAlpha(id)),
    )
    .subscribe(country=>{
      if (!country) {
        return this.router.navigateByUrl('')
      }
      console.log("Hay un país");
      return;
      
    });
  }
}
