
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jspdf from 'jspdf';    
import html2canvas from 'html2canvas';  
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class VacancyDetailsComponent implements OnInit {

	vacancy : any;	
	
	constructor(private route: ActivatedRoute, private http: HttpClient) { }
	
	ngOnInit() {
		this.getVacancyDetail(this.route.snapshot.params['id']);
	}
		
	getVacancyDetail(id:any) {
		
		this.http.get(jimsGlobals.back_end_api +'/vacancy/'+id).subscribe(data => {
			this.vacancy = data;
		});		
	}
	
	downloadAsPDF()  
	{  
	    var data = document.getElementById('pdfTable');  
	    if(data != null) {
		    html2canvas(data).then(canvas => {  
		    	
		      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
		      var position = 0;  
		      pdf.setFontSize(24);
		      pdf.setFont("bold");
		      pdf.setTextColor(0,0,255);
		      pdf.text(this.vacancy.position, 20, 20);
		      pdf.setFontSize(16);
		      pdf.setFont("times");
		      pdf.setTextColor(0,0,0);
		      pdf.setFont("bold");
		      for(var i=0;i<jimsGlobals.vacancy_attributes.length;i++) {
		    	  pdf.text(jimsGlobals.vacancy_attributes[i], 20, 30 + i*10);
		      }		      
		      pdf.text(this.vacancy.company, 80, 30);
		      pdf.text(this.vacancy.due_date, 80, 40);
		      pdf.text(this.vacancy.skills, 80, 50);
		      pdf.text( this.vacancy.experince, 80, 60);
		      pdf.text( this.vacancy.posted_date, 80, 70);
		      pdf.text(this.vacancy.catogery, 80, 80);
		      pdf.save(this.vacancy.position); // Generated PDF   
		    });  
	    }
	}  

}
