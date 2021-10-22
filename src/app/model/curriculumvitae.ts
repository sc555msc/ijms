export class CurriculumVitae {
      c_id: String;
	  nic: String;
	  name: String;
	  birthdate: String;
	  contact_no: String;
	  skills: String[];
	  objective:String;
	  degree:String;
	  university:String;
	  experince:String;
	  publications:String;
	  references:String;
	  gpa:String;
    
    constructor(c_id: String,  nic: String,  name: String,  contact_no: String, birthdate: String,
    skills: String[],objective:String, degree:String,university:String,experince:String,publications:String,references:String,gpa:String	  ){
          this.c_id = c_id;
		  this.nic = nic;
		  this.name = name;
		  this.birthdate = birthdate;
		  this.contact_no = contact_no;
		  this.skills = skills;
		  this.objective = objective;
		  this.degree = degree;
		  this.university = university;
		  this.experince = experince;
		  this.publications = publications;
		  this.references = references;
		  this.gpa = gpa;
    }
 }