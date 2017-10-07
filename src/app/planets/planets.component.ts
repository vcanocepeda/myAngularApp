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
    
  public planets: any[];
  public planets_error: any;
  
  ngOnInit() {
  }

  getPlanets() {
    this.planetsService.getPlanets().subscribe(
      data => { this.planets = data.results},
      err => { this.planets_error = true }
    );
  }

}
