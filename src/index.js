function generatePlan(event){
    event.preventDefault();

    let planElement = document.querySelector("#fitness-plan");
    //planElement.innerHTML = "There is some functional practices";
    new Typewriter(planElement, {
  strings: ['There is some functional practices'],
  autoStart: true,
  delay:1,
  cursor:"",
});

    
}

let planFormElement = document.querySelector("#plan-generator-form");
planFormElement.addEventListener("submit", generatePlan);
alert("test")