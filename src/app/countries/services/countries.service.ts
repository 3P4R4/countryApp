import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { Pais } from '../interfaces/pais';
import { Region } from '../interfaces/region';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl:string="https://restcountries.com/v3.1"

    constructor(private http: HttpClient) { }

    searchCapital(term:string):Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${term}`;
        return this.http.get<Country[]>(url)
        .pipe(
                catchError(()=> of([]))
        )
    }
    searchPais(term:string):Observable<Pais[]>{
        const url = `${this.apiUrl}/name/${term}`;
        return this.http.get<Pais[]>(url)
        .pipe(
                catchError(()=> of([]))
        )
    }
    searchRegion(term:string):Observable<Region[]>{
        const url = `${this.apiUrl}/region/${term}`;
        return this.http.get<Region[]>(url)
        .pipe(
                catchError(()=> of([]))
        )
    }
    searchAlpha(code:string):Observable<Country[]>{
        const url = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>(url)
        .pipe(
                catchError(()=> of([]))
        )
    }
    
}