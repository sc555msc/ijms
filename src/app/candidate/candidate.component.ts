import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.sass']
})
export class CandidateComponent implements OnInit {

  candidates: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	  this.http.get('http://127.0.0.1:3000').subscribe(data => {
	    this.candidates = data;
	    console.log(this.candidates);
	  });
  }

}
