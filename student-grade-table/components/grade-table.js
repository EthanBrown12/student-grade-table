

class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
    this.updateGrades = this.updateGrades.bind(this);
  }
  updateGrades(grades) {
      // this.tableElement.innerHTML="";

     for(var i = 0; i < grades.length; i++) {
       var row = document.createElement("tr");
       var studentName = document.createElement("td");
       studentName.textContent = grades[i].name;
       var courseName = document.createElement("td");
       courseName.textContent = grades[i].course;
       var studentGrade = document.createElement("td");
       studentGrade.textContent = grades[i].grade;
       row.append(studentName, courseName, studentGrade)
       this.tableElement.append(row);

     }
  }
}
