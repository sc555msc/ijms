export class Interview {
      cv: String;
	vacancy: String;
	s_date: String;
	time: String;
	subject: String;
	content: String;
	emailSent:String;
    
    constructor(cv: String,	vacancy: String,	s_date: String,	time: String,
    subject: String,	content: String, emailSent:String){
          this.cv = cv;
		  this.vacancy = vacancy;
		  this.s_date = s_date;
		  this.time = time;	
		  this.subject = subject;	
		  this.content = content;
		  this.emailSent = emailSent;		  
    }
 }