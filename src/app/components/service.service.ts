import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  public getGlobalData(){
    return this.http.get('https://coronavirus-19-api.herokuapp.com/all');
  }
  public getCountriesData(){
    return this.http.get('https://coronavirus-19-api.herokuapp.com/countries');
  }
}
