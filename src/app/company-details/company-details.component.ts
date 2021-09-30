
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jspdf from 'jspdf';    
import html2canvas from 'html2canvas';  

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyDetailsComponent implements OnInit {

	company : any;	
	
	constructor(private route: ActivatedRoute, private http: HttpClient) { }
	
	ngOnInit() {
		this.getCompanyDetail(this.route.snapshot.params['id']);
	}
		
	getCompanyDetail(id:any) {
		
		this.http.get('http://127.0.0.1:3000/company/'+id).subscribe(data => {
			this.company = data;
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
		      pdf.text(this.company.title, 20, 20);
		      pdf.setFontSize(16);
		      pdf.setFont("times");
		      pdf.text('address : ' + this.company.address, 20, 30);
		      pdf.text('contact_no : ' + this.company.contact_no, 20, 40);
		      pdf.save(this.company.title); // Generated PDF   
		    });  
	    }
	}  

}
