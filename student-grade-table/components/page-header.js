

class PageHeader {
 constructor(headerElement){
   this.headerElement = headerElement;
   console.log(this.headerElement);
 }

 updateAverage(newAverage){
  //  this.pageheader.average = newAverage;
   var badge = document.querySelector('.badge');
   badge.textContent = newAverage;

   console.log(newAverage);

 }

}
