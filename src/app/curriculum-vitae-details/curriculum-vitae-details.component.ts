
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jspdf from 'jspdf';    
import html2canvas from 'html2canvas';  
import * as jimsGlobals from '../common/globals';

@Component({
  selector: 'app-curriculum-vitae-details',
  templateUrl: './curriculum-vitae-details.component.html',
  styleUrls: ['./curriculum-vitae-details.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CurriculumVitaeDetailsComponent implements OnInit {

	curriculumvitae : any;	
	
	constructor(private route: ActivatedRoute, private http: HttpClient) { }
	
	ngOnInit() {
		this.getCurriculumvitaeDetail(this.route.snapshot.params['id']);
	}
		
	getCurriculumvitaeDetail(id:any) {
		
		this.http.get(jimsGlobals.back_end_api +'/curriculum-vitae/'+id).subscribe(data => {
			this.curriculumvitae = data;
		});		
	}
	
	downloadAsPDF()  
	{  
	    var data = document.getElementById('pdfTable');  
	    if(data != null) {
		    html2canvas(data).then(canvas => {  
		    		      // Few necessary setting options  
		      var imgWidth = 208;   
		      var pageHeight = 295;    
		      var imgHeight = canvas.height * imgWidth / canvas.width;  
		      var heightLeft = imgHeight;  
	
		      const contentDataURL = canvas.toDataURL('image/png')  
		      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
		      var position = 0;  
		      pdf.setFontSize(18);
		      pdf.setFont("bold");
		      pdf.setTextColor(255,255,255);
		      pdf.setFillColor(153, 165, 177);
  			  pdf.rect(20, 10, 180, 10, "F");
		      pdf.text(this.curriculumvitae.name, 30, 16);
		      pdf.setFontSize(16);
		      pdf.setFont("times");
		      pdf.setTextColor(0,0,0);
		      
		      pdf.text(jimsGlobals.cv_attributes[0], 20, 30);      
		      pdf.text(this.curriculumvitae.objective, 80, 30);
		      pdf.text(jimsGlobals.cv_attributes[1], 20, 50); 
		      pdf.text(this.curriculumvitae.skills, 80, 50);
		      pdf.text(jimsGlobals.cv_attributes[2], 20, 70); 
		      pdf.text(this.curriculumvitae.experince, 80, 70);
		      pdf.text(jimsGlobals.cv_attributes[3], 20, 80); 
		     pdf.text(this.curriculumvitae.publications, 80, 80);
		     pdf.setDrawColor(153, 165, 177);
			 pdf.line(20, 90, 200, 90);
			 
			pdf.text(jimsGlobals.cv_attributes[4], 20, 100); 
		     pdf.text(this.curriculumvitae.university, 80, 100);
		     pdf.text(jimsGlobals.cv_attributes[5], 20, 110);
		     pdf.text(this.curriculumvitae.degree, 80, 110);
		     pdf.text(jimsGlobals.cv_attributes[6], 20, 120);
		     pdf.text(this.curriculumvitae.gpa, 80, 120);		     
		     pdf.setDrawColor(153, 165, 177);
			pdf.line(20, 130, 200, 130);
			
			pdf.text(jimsGlobals.cv_attributes[7], 20, 140);
		     pdf.text(this.curriculumvitae.name, 80, 140);
		     pdf.text(jimsGlobals.cv_attributes[8], 20, 150);
		     pdf.text(this.curriculumvitae.birthdate, 80, 150);
		     pdf.text(jimsGlobals.cv_attributes[9], 20, 160);
		     pdf.text(this.curriculumvitae.references, 80, 160);
		      
		      pdf.text('page 01',150,285);
		      
		      pdf.save(this.curriculumvitae.name); // Generated PDF   
		    });  
	    }
	}  

}
