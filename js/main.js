

(() => {

  console.log('hello from JS!');
 
  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector('h1');
 
   allSVGs = document.querySelectorAll(".svg");


   
  function changeText() {
    myHeading.textContent = "MY SVG ICONS...";
  }

  
  function logSVG() {
    console.log(this.id);
  }

  
  toggleButton.addEventListener("click", changeText);



  allSVGs.forEach(item => item.addEventListener("click", logSVG));

 
})();

//--------------------

(() => {

  var star= document.querySelector("#star");
  var galaxy= document.querySelector("#galaxy");
  var globe = document.querySelector("#globe");
  var orbit = document.querySelector("#orbit");
  var saturn = document.querySelector("#saturn");

   

     function star()
     {
      console.log(this.id);
     }


     function galaxy()
     {
      console.log(this.id);
     }


     function globe()
     {
      console.log(this.id);
     }


     function globe()
     {
      console.log(this.id);
     }
  
  function orbit()
     {
      console.log(this.id);
     }

     function saturn()
     {
      console.log(this.id);
     }

     


  alien.addEventListener("click", star;

  galaxy.addEventListener("click", galaxy;

  globe.addEventListener("click", globe);

  orbit.addEventListener("click", orbit);

  saturn.addEventListener("click", saturn);

  
})();