import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsService } from './planets/planets.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [ PeopleService ,
               PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }