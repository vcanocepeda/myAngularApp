import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PeopleService {

  constructor(private http:Http) { 

  }

  // Uses http.get() to load a single JSON file
  getPeople() {
    return this.http.get('https://conduit.productionready.io/api/profiles/eric').map((res:Response) => res.json());
  }
}
