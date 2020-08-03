

class PageHeader {
 constructor(headerElement){
   this.headerElement = headerElement;
  //  console.log(this.headerElement);
 }

 updateAverage(newAverage){
   var badge = document.querySelector('.badge');
   badge.textContent = newAverage;

   console.log(newAverage);

 }

}
