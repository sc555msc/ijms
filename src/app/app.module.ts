import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    RouterModule.forRoot([
		  {
		    path: 'candidates',
		    component: CandidateComponent
		  },
		  {
		    path: '',
		    component: HomeComponent
		  }
		])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
