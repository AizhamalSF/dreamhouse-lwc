let personalInfo ={
    interests : 'playing komuz',
    isMarried : true,
    kids:2

};
personalInfo['interests'];
personalInfo['isMarried'];
personalInfo['kids'];

let compLanguages = ['JavaScript','Java','Apex','HTML' ];
var quantityOfCompLanguages =compLanguages.length();
console.log(quantityOfCompLanguages);
let resume= {
    Certifications: ['Admin ', 'AppBuilder ','PD1'],
    Experience: [
        {
            title: 'Teacher',
            startDate : 2008,
            endDate : 2011,
            salary : '40k',
            duration : function() {

                
                return this.endDate - this.startDate;
            }
        },
        {
            title : 'Lawyer',
            startDate : 2013,
            endDate : 2020,
            salary : '30k',
            duration : function() {
                return this.endDate - this.startDate;
            }
        }
    ],
    Education: ['SecPondary special education in Journalism', 'LLM'],
    Hi: function (){
        console.log( 'My name is Aizhamal. I have '+this.Certifications+'.')
    }
}
resume.Hi();
resume.Experience[0].duration();
console.log(resume.Experience[0].duration());
