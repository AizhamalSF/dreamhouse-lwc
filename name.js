<script>
let resume = {
    Certifications: ['Admin ', 'AppBuilder ','PD1'],
    Experience: [
        {
            title : 'School teacher',
            startDate : 2009,
            endDate : 2011,
            salary : '80k',
            duration : function() {
                return this.endDate - this.startDate;
            }
        },
        {
            title : 'Reservations Agent',
            startDate : 2010,
            endDate : 2014,
            salary : '100k',
            duration : function() {
                return this.endDate - this.startDate;
            }
        }
    ],
    Education: ['BA in Education', 'MA in Education'],
    Hi: function (){
        console.log( 'My name is Assem. I have '+this.Certifications+'.')
    }
}
resume.Hi();
resume.Experience[0].duration();
console.log(resume.Experience[0].duration());
</script>