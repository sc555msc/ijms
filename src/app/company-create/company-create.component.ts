
import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { Company } from "../model/company";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.sass']
})
export class CompanyCreateComponent implements OnInit {
	
	Company:any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
	 
  }
  
  saveCompany(data:any) {
  
		this.http.post('http://127.0.0.1:3000/company', data)
			.subscribe(res => {
				this.Company = res;
				this.router.navigate(['/company-details', this.Company._id]);
			}, (err) => {
				console.log(err);
			}
		);		
  }

}
