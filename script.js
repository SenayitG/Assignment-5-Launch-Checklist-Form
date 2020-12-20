// Write your JavaScript code here!

window.addEventListener("load", function(){
   
   // This block of code shows how to format the HTML once you fetch some planetary JSON!
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        
      return response.json();

  }).then(function(json){
     let missionTarget = document.getElementById("missionTarget");
     missionTarget.innerHTML = `<h2>Mission Destination</h2>
     <ol>
        <li>Name: ${json[3].name}</li>
        <li>Diameter: ${json[3].diameter}</li>
        <li>Star: ${json[3].star}</li>
        <li>Distance from Earth: ${json[3].distance}</li>
        <li>Number of Moons: ${json[3].moons}</li>
     </ol>
     <img src="${json[3].image}">`;

  })

  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel");
  let cargoMass = document.querySelector("input[name=cargoMass]");
  let faultyItems = document.getElementById("faultyItems");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let heading2 = document.getElementsByTagName("h2")[0]
  let amountFormErrors = [];
  let i = 0 ;
  let canWeTravel = true ;

  let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      canWeTravel = true;

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         amountFormErrors.push("Do not leave any fields empty");
      }
      
      if (isNaN(fuelLevel.value)){
         amountFormErrors.push("Fuel Level should be a number");
     }

      if (isNaN(cargoMass.value)){
        amountFormErrors.push("Cargo Mass should be a number");
     }
     
     if(isNaN(pilotName.value) === false && pilotName.value.length > 0){

        amountFormErrors.push("Pilot Name needs to be string!");
     } 

     if(isNaN(copilotName.value) === false && copilotName.value.length > 0){
        amountFormErrors.push("Copilot Name needs to be a string!");
     } 

     if (amountFormErrors.length > 0){
       while(i < amountFormErrors.length){
          alert(amountFormErrors[i])
          i = i + 1
       }
     }
     else{

     pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready to launch` ;
     copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready to launch` ;
     
     function NotReadyForLaunch(){
        heading2.style.color = "red";
        heading2.innerHTML = "Shuttle not ready to launch";
        faultyItems.style.visibility = "visible";
        canWeTravel = false ;
     }

     if(fuelLevel.value < 10000){ 
        NotReadyForLaunch()
        document.getElementById("fuelStatus").innerHTML = `Fuel level is too low for launch`;
       
     }

     if(cargoMass.value > 10000){
        NotReadyForLaunch()
        document.getElementById("cargoStatus").innerHTML = `Cargo mass is too heavy for launch`;
     }


     if(canWeTravel === true){
        heading2.style.color = "green";
        heading2.innerHTML = "Shuttle is ready to launch";
        faultyItems.style.visibility = 'hidden';
     }
     
     event.preventDefault();
     }
  });

 
});
