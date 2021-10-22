
import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { Vacancy } from "../model/vacancy";
import { CommonModule } from '@angular/common';
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-vacancy-create',
  templateUrl: './vacancy-create.component.html',
  styleUrls: ['./vacancy-create.component.sass']
})
export class VacancyCreateComponent implements OnInit {
	
	Vacancy:any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
	 
  }
  
  saveVacancy(data:any) {
  
		this.http.post(jimsGlobals.back_end_api + '/vacancy', data)
			.subscribe(res => {
				this.Vacancy = res;
				this.router.navigate(['/vacancy-details', this.Vacancy._id]);
			}, (err) => {
				console.log(err);
			}
		);		
  }

}
