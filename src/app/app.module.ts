import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsService } from './service/planets.service';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetCreateComponent } from './planet-create/planet-create.component';
import { PeopleComponent } from './people/people.component';
import { PageNotFoundComponent } from './not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'planets', pathMatch: 'full' },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planet/:id', component: PlanetDetailComponent },
  { path: 'planet-create', component: PlanetCreateComponent },
  { path: 'people', component: PeopleComponent },
  { path: '**', component: PageNotFoundComponent }
];
  


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetsComponent,
    PlanetDetailComponent,
    PlanetCreateComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [ PlanetsService],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}