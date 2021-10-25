export class Vacancy {
      v_id: String;
	  position: String;
	due_date: String;
	company: String;
	skills: String[];
	experince: String;
	catogery:String;
    
    constructor(v_id: String,  due_date: String,  position: String,  company: String, skills: String[], experince: String, type:String, catogery:String){
          this.v_id = v_id;
		  this.due_date = due_date;
		  this.position = position;
		  this.company = company;
		  this.skills = skills;
		  this.experince = experince;
		  this.catogery = catogery;
		  
    }
 }