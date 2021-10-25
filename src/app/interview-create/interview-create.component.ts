
import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { Vacancy } from "../model/vacancy";
import { Interview } from "../model/interview";
import { CurriculumVitae } from "../model/curriculumvitae";
import { CommonModule } from '@angular/common';
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.sass']
})
export class InterviewCreateComponent implements OnInit {
	
	vacancies: any;
	curriculumvitae : any;	
	Interview:any = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
	 
	 this.http.get(jimsGlobals.back_end_api + '/vacancy').subscribe(data => {
	    this.vacancies = data;
	  });
	  
	  this.getCurriculumvitaeDetail(this.route.snapshot.params['id']);	  
  }
  
  getCurriculumvitaeDetail(id:any) {
		
		this.http.get(jimsGlobals.back_end_api +'/curriculum-vitae/'+id).subscribe(data => {
			this.curriculumvitae = data;
		});		
	}
	
  saveInterview(data:any) {
  
  		data.subject = "Interview for the post of "+data.vacancy;
  		data.content = "Dear "+data.cv+
               "\n,We would like to invite you to interview for the "+data.vacancy+" role at "+data.company+                                 
               ".\nPlease reply to this email directly with your availability during the following date and time:\n"+
			   data.s_date+""+data.time+"\nWe look forward to speaking with you. \nSincerely,\n"+data.company;
		
		this.http.post(jimsGlobals.back_end_api + '/interview', data)
			.subscribe(res => {
				this.Interview = res;
				this.router.navigate(['/interview-details', this.Interview._id]);
			}, (err) => {
				console.log(err);
			}
		);		
  }

}
