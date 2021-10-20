import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { CurriculumVitaeCreateComponent } from './curriculum-vitae-create/curriculum-vitae-create.component';
import { CurriculumVitaeDetailsComponent } from './curriculum-vitae-details/curriculum-vitae-details.component';
import { CurriculumVitaeEditComponent } from './curriculum-vitae-edit/curriculum-vitae-edit.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HomeComponent,
    CurriculumVitaeComponent,
    CurriculumVitaeCreateComponent,
    CurriculumVitaeEditComponent,
    CurriculumVitaeDetailsComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,	
	CommonModule,
	FormsModule,
    RouterModule.forRoot([
		  {
		    path: 'curriculum-vitae-create',
			component: CurriculumVitaeCreateComponent,
			data: { title: 'Create CurriculumVitae' }
			},
			{
			path: 'curriculum-vitae-details/:id',
			component: CurriculumVitaeDetailsComponent,
			data: { title: 'CurriculumVitae Details' }
			},
			{
			path: 'curriculum-vitae-edit/:id',
			component: CurriculumVitaeEditComponent,
			data: { title: 'Edit CurriculumVitae' }
			},
    	  {
		    path: 'curriculum-vitae',
		    component: CurriculumVitaeComponent
		  },
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
