import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.sass']
})
export class CurriculumVitaeComponent implements OnInit {

	curriculumvitaes: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	  this.http.get(jimsGlobals.back_end_api + '/curriculum-vitae').subscribe(data => {
	    this.curriculumvitaes = data;
	  });
  }

}
