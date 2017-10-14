import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PlanetsService } from './planets.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {NgbRadioGroup } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  
  constructor(private http: Http, private planetsService: PlanetsService) { 
    
  }
    
  public planets_error: any;
  public planets: any;
  planets_endpoint :string;
  
  ngOnInit() {
    this.planets_endpoint = 'https://swapi.co/api/planets';
  }

  getPlanets() {
    this.planetsService.getPlanets(this.planets_endpoint).subscribe(
      data => { this.planets = data },
      err => { this.planets_error = true }
    );
  }

  next() {
    this.planets_endpoint = this.planets.next;
    this.getPlanets();
  }

  previous() {
    this.planets_endpoint = this.planets.previous;
    this.getPlanets();
  }

}
