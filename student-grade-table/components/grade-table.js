

class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.updateGrades = this.updateGrades.bind(this);
    this.onDeleteClick = onDeleteClick;
  }

  updateGrades(grades) {
      // this.tableElement.innerHTML="";
     for(var i = 0; i < grades.length; i++) {
       this.renderGradeRow(grades, this.deleteGrade);
       if(!grades){
         hiddenP.classList.remove(".d-none");
       }else{

       }
     }

  }


  onDeleteClick(deleteGrade){

  }

  renderGradeRow(data, deleteGrade) {
    var row = document.createElement("tr");
    var studentName = document.createElement("td");
    studentName.textContent = grades[i].name;
    var courseName = document.createElement("td");
    courseName.textContent = grades[i].course;
    var studentGrade = document.createElement("td");
    studentGrade.textContent = grades[i].grade;
    var deleteButtonTd = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "DELETE";
    deleteButtonTd.append(deleteButton);
    row.append(studentName, courseName, studentGrade, deleteButtonTd)
    this.tableElement.append(row);
  }
}
