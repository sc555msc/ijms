import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CompanyComponent } from './company/company.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { VacancyCreateComponent } from './vacancy-create/vacancy-create.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { VacancyEditComponent } from './vacancy-edit/vacancy-edit.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HomeComponent,
    CompanyComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    CompanyDetailsComponent,
    VacancyComponent,
    VacancyCreateComponent,
    VacancyEditComponent,
    VacancyDetailsComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	CommonModule,
	FormsModule,
    RouterModule.forRoot([
			{
			path: 'company-create',
			component: CompanyCreateComponent,
			data: { title: 'Create Company' }
			},
			{
			path: 'company-details/:id',
			component: CompanyDetailsComponent,
			data: { title: 'company Details' }
			},
			{
			path: 'company-edit/:id',
			component: CompanyEditComponent,
			data: { title: 'Edit company' }
			},
    	  {
		    path: 'company',
		    component: CompanyComponent
		  },
		  {
				path: 'vacancy-create',
				component: VacancyCreateComponent,
				data: { title: 'Create vacancy' }
				},
				{
				path: 'vacancy-details/:id',
				component: VacancyDetailsComponent,
				data: { title: 'vacancy Details' }
				},
				{
				path: 'vacancy-edit/:id',
				component: VacancyEditComponent,
				data: { title: 'Edit vacancy' }
				},
	    	  {
			    path: 'vacancy',
			    component: VacancyComponent
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
