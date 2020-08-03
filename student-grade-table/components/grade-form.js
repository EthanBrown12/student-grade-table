

class GradeForm {
  constructor(formElement) {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement = formElement;
    this.formElement.addEventListener('submit', this.handleSubmit)
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }



  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }

}



// var formData = new FormData(myForm);
// var name = formData.get("name");
// var course = formData.get("course");
// var grade = formData.get("grade");
// createGrade(name, course, grade);
// event.target.reset();
