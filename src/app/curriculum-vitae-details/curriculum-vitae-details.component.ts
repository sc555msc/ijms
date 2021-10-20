
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
		      pdf.setFontSize(24);
		      pdf.setFont("bold");
		      pdf.text(this.curriculumvitae.nic, 20, 20);
		      pdf.setFontSize(16);
		      pdf.setFont("times");
		      pdf.text('address : ' + this.curriculumvitae.birthdate, 20, 30);
		      pdf.text('contact_no : ' + this.curriculumvitae.contact_no, 20, 40);
		      pdf.save(this.curriculumvitae.name); // Generated PDF   
		    });  
	    }
	}  

}
