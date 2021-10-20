export class CurriculumVitae {
      c_id: String;
	  nic: String;
	  name: String;
	  birthdate: String;
	  contact_no: String;
    
    constructor(c_id: String,  nic: String,  name: String,  contact_no: String, birthdate: String){
          this.c_id = c_id;
		  this.nic = nic;
		  this.name = name;
		  this.birthdate = birthdate;
		  this.contact_no = contact_no;
    }
 }