export class Company {
      c_id: String;
	  title: String;
	  address: String;
	  contact_no: String;
  catogery: String;
    
    constructor(c_id: String,  title: String,  address: String,  contact_no: String, catogery: String){
          this.c_id = c_id;
		  this.title = title;
		  this.address = address;
		  this.contact_no = contact_no;
      this.catogery = catogery;
    }
 }
