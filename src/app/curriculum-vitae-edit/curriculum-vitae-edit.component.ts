
import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { CurriculumVitae } from "../model/curriculumvitae";
import { CommonModule } from '@angular/common';
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-curriculum-vitae-edit',
  templateUrl: './curriculum-vitae-edit.component.html',
  styleUrls: ['./curriculum-vitae-edit.component.sass']
})
export class CurriculumVitaeEditComponent implements OnInit {
	
	curriculumvitae : any;
	s_id : any;
	
	constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
	
	ngOnInit() {
		this.s_id = this.route.snapshot.params['id'];
		this.getCurriculumVitae(this.s_id);
	}
	
	getCurriculumVitae(id:any) {
		this.http.get(jimsGlobals.back_end_api + '/curriculum-vitae/'+id).subscribe(data => {
			this.curriculumvitae = data;
		});
	}
	
   updateCurriculumVitae(data:any) {
		this.http.put(jimsGlobals.back_end_api + '/curriculum-vitae/' + this.s_id, data)
		.subscribe(res => {
			this.router.navigate(['/curriculum-vitae-details', this.s_id]);
		}, (err) => {
			console.log(err);
		});
	}

}
