import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ComponentFixture,TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

describe('AppComponent', () => {
	  const routes: Routes = [
	    { path: '', component: HomeComponent }
	  ];
	  beforeEach(async(() => {
	    TestBed.configureTestingModule({
	      declarations: [
	        AppComponent,
	        HomeComponent
	      ],
	      imports: [
	        RouterModule.forRoot(routes)	        
	      ],
	      providers: [
	        { provide: APP_BASE_HREF, useValue: '/' }
	      ],
	      schemas: [
	    	  CUSTOM_ELEMENTS_SCHEMA
	    	]
	    }).compileComponents();
	  }));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title Industrial Job Management System', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Industrial Job Management System');
  });
  
  it('should have address in footer', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('footer').textContent).toContain('S4 PiNi Ltd, Lake Gregory, Nuwara Eliya, Sri Lanka');
  }));
  
});
