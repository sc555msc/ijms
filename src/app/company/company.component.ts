import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.sass']
})
export class CompanyComponent implements OnInit {

  companies: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	  this.http.get(jimsGlobals.back_end_api + '/company').subscribe(data => {
	    this.companies = data;
	  });
  }

}
