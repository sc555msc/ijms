import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.sass']
})
export class CompanyComponent implements OnInit {

  companies: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	  this.http.get('http://127.0.0.1:3000/company').subscribe(data => {
	    this.companies = data;
	  });
  }

}
