import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { People } from '../model/people';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
//ty to bring residentes with an observable object
  constructor(private http: Http) { }

  public people_error: any;
  public people: any;
  people_endpoint :string;
  peopleObj: People[];
  peopleObs: Observable<People>;

  ngOnInit() {
    this.people_endpoint = 'https://swapi.co/api/people';
 //   this.people = this.getPeople3();
 this.peopleObs = this.getPeople3();
 //   this.peopleObs.subscribe((v) => console.log('got new heroes list: ', v));
 //   this.people.subscribe((v) => console.log('got new people list: ', v));
 //   this.people.do(x=>console.log('Before',x));
  }

getPeople():Observable<People[]>  {
  return this.http.get(this.people_endpoint)
    .map((res:Response) => {
      return <People[]>res.json()
    });
}

getPeople2(): Observable<People[]> {
  return this.http.get(this.people_endpoint)
    .map(response => response.json())
    .map((messages: Object[]) => {
      return messages.map(message => this.parseData(message));
    });
}

private parseData(data): People {
    return new (data);
}

getPeople3(): Observable<People> {
  return this.http.get(this.people_endpoint)
    .map((res: Response) => res.json().results
    .map(obj => new People(obj.name, obj.height, obj.mass, obj.hair_color,
    obj.skin_color, obj.eye_color, obj.birth_year, obj.gender)))
}  

}