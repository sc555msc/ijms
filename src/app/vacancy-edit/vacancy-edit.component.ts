
import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { Company } from "../model/company";
import { CommonModule } from '@angular/common';
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-vacancy-edit',
  templateUrl: './vacancy-edit.component.html',
  styleUrls: ['./vacancy-edit.component.sass']
})
export class VacancyEditComponent implements OnInit {
	
	vacancy : any;
	s_id : any;
	
	constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
	
	ngOnInit() {
		this.s_id = this.route.snapshot.params['id'];
		this.getVacancy(this.s_id);
	}
	
	getVacancy(id:any) {
		this.http.get(jimsGlobals.back_end_api + '/vacancy/'+id).subscribe(data => {
			this.vacancy = data;
		});
	}
	
   updateVacancy(data:any) {
		this.http.put(jimsGlobals.back_end_api + '/vacancy/' + this.s_id, data)
		.subscribe(res => {
			this.router.navigate(['/vacancy-details', this.s_id]);
		}, (err) => {
			console.log(err);
		});
	}

}
