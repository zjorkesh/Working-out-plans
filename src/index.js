function displayplan (response){
  let planElement = document.querySelector("#fitness-plan");

  planElement.innerHTML = "";

 let typewriter = new Typewriter(planElement, {
    delay: 10,
    cursor: "",
  });

  typewriter
    .typeString(response.data.answer)
    .start();
}

function generatePlan(event){
    event.preventDefault();

    let instructionElement = document.querySelector("#user-instructions");
    let planElement = document.querySelector("#fitness-plan");
    
    let apiKey = "8f8ba35f23t75fbc75d7do5424f8040b";
    let prompt = `Create a weekly workout plan for ${instructionElement.value}`;
    let context = `You are a certified fitness coach. Return ONLY raw HTML. Do not use markdown. Generate a COMPLETE workout plan for all 7 days: 1, 2, 3, 4, 5, 6, and 7. write whole days'plan. Keep the response concise. Each day must have exactly 2 exercises. Use only <strong>, <br>, <ul>, and <li> tags. Wrap the title (weekly ${instructionElement.value} workout plan) in <h2 class="plan-title">`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    planElement.classList.remove("hidden");
    planElement.innerHTML = `
    <div class="loading">
    <span class="hourglass">⏳</span>
    Generating your personalized ${instructionElement.value} workout plan<span class="dots"></span>
  </div>
  `;
   

    axios.get(apiUrl).then(displayplan);
}

let planFormElement = document.querySelector("#plan-generator-form");
planFormElement.addEventListener("submit", generatePlan);
