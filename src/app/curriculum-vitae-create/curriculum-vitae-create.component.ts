
import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormsModule, FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { CurriculumVitae } from "../model/curriculumvitae";
import { CommonModule } from '@angular/common';
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-curriculum-vitae-create',
  templateUrl: './curriculum-vitae-create.component.html',
  styleUrls: ['./curriculum-vitae-create.component.sass']
})
export class CurriculumVitaeCreateComponent implements OnInit {
	
	CurriculumVitae:any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  
  saveCurriculumVitae(data: any) {
  
		this.http.post(jimsGlobals.back_end_api + '/curriculum-vitae', data)
			.subscribe(res => {
				this.CurriculumVitae = res;
				this.router.navigate(['/curriculum-vitae-details', this.CurriculumVitae._id]);
			}, (err) => {
				console.log(err);
			}
		);		
  }

}
