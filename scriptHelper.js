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
  
} else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
   console.log('a number');
   alert('Fields must be the correct type')
} else {
    
      list.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
      let launchStatus = document.getElementById("launchStatus");

   if (fuelLevel <= 9999) {
      faultyItems.style.visibility = 'visible';
      fuelStatus.innerHTML = `Fuel level is too low for launch`;
      launchStatus.style.color = 'red';
      launchStatus.innerText = `Shuttle not ready for launch`;
   
   } else if (cargoLevel >10000) {
      faultyItems.style.visibility = 'visible';
      cargoStatus.innerHTML = `Cargo Mass is too high for launch`;
      launchStatus.style.color = 'red';
      launchStatus.innerText = `Shuttle not ready for launch`;
   } else {
      faultyItems.style.visibility = 'hidden';
      launchStatus.style.color = "green";
      launchStatus.innerText = `Shuttle is ready for launch`
      pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
      fuelStatus.innerHTML = `Fuel level is acceptable for launch`;
      
   }
}
console.log(pilot);






  
    
 
   
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
