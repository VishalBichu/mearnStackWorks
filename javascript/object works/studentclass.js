class student {
    constructor(name, rollno, course, total) {
        this.name = name;
        this.rollno = rollno;
        this.course = course;
        this.total = total;

    }
    printstudentdetails() {
        console.log(this.name, this.rollno, this.course, this.total);

    }
}
var st=new student("ram",1,"ms",300)
st.printstudentdetails()