
class App {
  constructor(gradeTable, pageHeader, gradeForm) {
  this.handleGetGradesError = this.handleGetGradesError.bind(this);
  this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  this.createGrade = this.createGrade.bind(this);
  this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
  this.handleCreateGradesSuccess = this.handleCreateGradesSuccess.bind(this);
  this.gradeTable = gradeTable;
  this.pageHeader = pageHeader;
  this.gradeForm = gradeForm;

  }



  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var totalSum = 0;
    for(var i =0; i< grades.length; i++){
      totalSum += grades[i].grade;
    }
    var average = totalSum / grades.length;
    this.pageHeader.updateAverage(average);
  }

  handleGetGradesError(error) {
    console.log(error);
  }


   getGrades() {
    $.ajax({
      url:"https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      headers: {
        "X-Access-Token": "XNQfRY22"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })

  }
   start(){

    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
   }

  createGrade(name, grade, course) {
      console.log(name, grade, course);
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      data: {
        "name": name,
        "course":course,
        "grade":grade
      },
      headers: {
        "X-Access-Token": "XNQfRY22"
      },
      success: this.handleCreateGradesSuccess,
      error: this.handleCreateGradeError
    })
  }

  handleCreateGradeError(error) {
    console.log(error);
  }

  handleCreateGradesSuccess() {
    this.getGrades();
  }



  }
