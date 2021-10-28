
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jspdf from 'jspdf';    
import html2canvas from 'html2canvas';  
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class InterviewDetailsComponent implements OnInit {

	interview : any;	
	
	constructor(private route: ActivatedRoute, private http: HttpClient) { }
	
	ngOnInit() {
		this.getInterviewDetail(this.route.snapshot.params['id']);
	}
		
	getInterviewDetail(id:any) {
		
		this.http.get(jimsGlobals.back_end_api +'/interview/'+id).subscribe(data => {
			
			this.interview = data;
		});		
	}
	
}
