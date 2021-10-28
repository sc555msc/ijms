
import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { Company } from "../model/company";
import { CommonModule } from '@angular/common';
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.sass']
})
export class CompanyEditComponent implements OnInit {
	
	company : any;
	s_id : any;
	
	constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
	
	ngOnInit() {
		this.s_id = this.route.snapshot.params['id'];
		this.getCompany(this.s_id);
	}
	
	getCompany(id:any) {
		this.http.get(jimsGlobals.back_end_api + '/company/'+id).subscribe(data => {
			this.company = data;
		});
	}
	
   updateCompany(data:any) {
		this.http.put(jimsGlobals.back_end_api + '/company/' + this.s_id, data)
		.subscribe(res => {
			this.router.navigate(['/company-details', this.s_id]);
		}, (err) => {
			console.log(err);
		});
	}

}
