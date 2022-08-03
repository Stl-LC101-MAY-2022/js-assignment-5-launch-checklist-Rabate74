// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  
               let div = document.getElementById("missionTarget")
               div.innerHTML =  `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    let results = testInput
    
    if (results === String('')) {
        return 'Empty'
     }
     else if (isNaN(results) === true) {
        return 'Not a Number'

   } else if (isNaN(results) === false) {
        return 'Is a Number'
   }

   return results;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const faultyItems = document.getElementById('faultyItems');
  const pilotStatus = document.getElementById('pilotStatus');
  const copilotStatus = document.getElementById('copilotStatus');
  const fuelStatus = document.getElementById('fuelStatus');
  const cargoStatus = document.getElementById('cargoStatus');
  const launchStatus = document.getElementById('launchStatus');

  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel)=== 'Empty')  {
   alert('All fields are required')
      launchStatus.innerText = `Awaiting Information Before Launch`;
      list.style.visibility = 'hidden'
      launchStatus.sytle.color = ""
  
} else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
   console.log('a number');
   alert('Fields must be the correct type')
   launchStatus.innerText = `Awaiting Information Before Launch`
   launchStatus.sytle.color = ""
   list.style.visibility = "hidden"
} 
else {
    
      list.style.visibility = "visible";
      pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerText = `Co-pilot ${copilot} is ready for launch`;
      


    if (fuelLevel < 10000) {
      faultyItems.style.visibility = 'visible';
      fuelStatus.innerHTML = `Fuel level too low for launch`;
      launchStatus.style.color = 'red';
      launchStatus.innerHTML = `Shuttle not ready for launch`;
      
      
   
   } 
   else {
      faultyItems.style.visibility = 'visible';
      fuelStatus.innerHTML = `Fuel level high enough for launch`;
  
      
      
   }
   if (cargoLevel > 10000) {
      faultyItems.style.visibility = 'visible';
      cargoStatus.innerHTML = `Cargo Mass too high for launch`;
      launchStatus.style.color = 'red';
      launchStatus.innerText = `Shuttle not ready for launch`;
     
      
   }
    else {
      // faultyItems.style.visibility = 'hidden';
      cargoStatus.innerHTML = `Cargo Mass low enough for launch`;
      
      
      
   }
   if (fuelLevel >= 10000 && cargoLevel <= 10000) {
      launchStatus.innerText = `shuttle is ready for launch`;
      launchStatus.style.color = 'green';
      fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            faultyItems.style.visibility = 'hidden';
   } 
}
}







  
    
 
   


async function myFetch() {
        let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
      return response.json()  
    });
        

    return planetsReturned;
}

function pickPlanet(planets) {
   let x = Math.floor((Math.random() * planets.length));
   return planets[x];
   
   
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
