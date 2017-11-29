import { Component, OnInit } from '@angular/core';
import { Planet } from '../model/planet';

@Component({
  selector: 'planet-create',
  templateUrl: './planet-create.component.html',
  styleUrls: ['./planet-create.component.css']
})
export class PlanetCreateComponent implements OnInit {

  private planet = new Planet('name','population');
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
  constructor() { 

  }

  ngOnInit() {
  }

  submit() {
    alert(`saved!!! ${JSON.stringify(this.planet)}`);
  }
}
