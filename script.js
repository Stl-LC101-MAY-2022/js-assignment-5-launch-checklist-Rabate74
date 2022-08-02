// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");



// const { formSubmission } = require("./scriptHelper");



window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        
 //        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const pickedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);       
    })


    let form = document.getElementById("launchForm");
    
    // console.log(this.document.getElementById("launchForm").innerHTML);
    form.addEventListener("submit", function(){
        event.preventDefault();
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        // console.log("hello"); 
        
        let copilotNameInput = document.querySelector("input[name=copilotName]");

        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        
        let cargoMassInput = document.querySelector("input[name=cargoMass]");

        let list = document.getElementById('faultyItems');
        if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput === "" || cargoMassInput === "") {
            alert('All fields are required')
           
        }
        
        
        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
        });
        
    });



   
