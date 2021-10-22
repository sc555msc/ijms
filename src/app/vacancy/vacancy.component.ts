import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { Vacancy } from "../model/vacancy";
import { CommonModule } from '@angular/common';
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.sass']
})
export class VacancyComponent implements OnInit {

	vacancies: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
	  this.http.get(jimsGlobals.back_end_api + '/vacancy').subscribe(data => {
	    this.vacancies = data;
	  });
  }
  
  searchVacancy(data:any) {
	  
		this.http.post(jimsGlobals.back_end_api + '/vacancy', data)
			.subscribe(res => {
				//this.Vacancy = res;
				//this.router.navigate(['/vacancy-details', this.Vacancy._id]);
			}, (err) => {
				console.log(err);
			}
		);		
}

}
