import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PeopleService } from './people.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

class profile {
  username : string;
  bio: string;
  image: string;
  following: boolean;
}


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private http: Http, private _peopleService: PeopleService) { 
    
  }

  commentsUrl: string;

  public data: Observable<Response>;
  public data2: any;
  public data3: any[];
  public data3_error: any;
  public mySentences:any[] = [
    {id: 1, text: 'Sentence 1'},
    {id: 2, text: 'Sentence 2'},
    {id: 3, text: 'Sentence 3'},
    {id: 4, text: 'Sentenc4 '},
];


  ngOnInit() {
    this.data = this.readData();
  }

  readData(): Observable<Response> {
    return this.http.get('https://conduit.productionready.io/api/profiles/eric')
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  readData2() {
    this.http.get('https://conduit.productionready.io/api/profiles/eric')
            .map((res:Response) => res.json())
            .subscribe(data2 => { this.data2 = data2},
                err => console.error(err),
                () => console.log(this.data2));
  }

  readData3() {
     this.http.get('https://conduit.productionready.io/api/profiles/eric')
            .subscribe(res => {
                this.data2 = res.json;
            });
  }

  getPeople() {
    this._peopleService.getPeople().subscribe(
      data => { this.data3 = data},
      err => { this.data3_error = true }
    );
  }

  getPlanets() {

  }

  addData (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.commentsUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }  

}