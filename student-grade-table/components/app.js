
class App {
  constructor(gradeTable) {
  this.handleGetGradesError = this.handleGetGradesError.bind(this);
  this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  this.gradeTable = gradeTable;
  }

  handleGetGradesError(error){
    console.log(error);
}

  handleGetGradesSuccess(grades) {
    console.log(this.gradeTable);
    this.gradeTable.updateGrades(grades);
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
   }
  }
