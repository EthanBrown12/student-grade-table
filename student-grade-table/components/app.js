
class App {
  constructor(gradeTable, pageHeader) {
  this.handleGetGradesError = this.handleGetGradesError.bind(this);
  this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  this.gradeTable = gradeTable;
  this.pageHeader = pageHeader;

  }

  handleGetGradesError(error){
    console.log(error);
}

  handleGetGradesSuccess(grades) {
    console.log(this.gradeTable);
    this.gradeTable.updateGrades(grades);
    var totalSum = 0;
    for(var i =0; i< grades.length; i++){
      totalSum += grades[i].grade;
    }
    var average = totalSum / grades.length;
    this.pageHeader.updateAverage(average);
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
