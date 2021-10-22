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
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HomeComponent,
    CompanyComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    CompanyDetailsComponent
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
