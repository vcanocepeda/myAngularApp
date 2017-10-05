import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PlanetsService {

  constructor(private http:Http) { 

  }
  
  // Uses http.get() to load a single JSON file
  getPlanets() {
    return this.http.get('https://swapi.co/api/planets').map((res:Response) => res.json());
  }
}
