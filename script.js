// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetchPlanetaryData()
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass");
      if (pilotName.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         
      }  else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
            alert("Invalid inputs!")
      }  else {
            document.getElementById('faultyItems').style.visibility="visible"
            document.getElementById('pilotStatus').innerText=`${pilotName.value} Ready!`
            document.getElementById('copilotStatus').innerText = `${copilot.value} Ready!`
            validateShuttleLaunch()
            if (fuelLevel.value < 10000) {
               document.getElementById('fuelStatus').innerText = `Insufficient fuel for take-off!`               
               invalidateShuttleLaunch()
            }
            if (cargoMass.value > 10000) {
               document.getElementById('cargoStatus').innerText = `Cargo mass too high for launch!`
               invalidateShuttleLaunch()
               
            }
         }
          
   });
});

function invalidateShuttleLaunch () {
let cancelLaunch= document.getElementById('launchStatus')
   cancelLaunch.innerText = 'Shuttle not ready for launch!'
   cancelLaunch.style.color = "red"
}
function validateShuttleLaunch () {
let prepareLaunch= document.getElementById('launchStatus')
   prepareLaunch.innerText = 'Shuttle is ready for launch!'
   prepareLaunch.style.color = "green"
   document.getElementById('fuelStatus').innerText = `Sufficient fuel for take-off!`
   document.getElementById('cargoStatus').innerText = `Cargo mass acceptable for launch!`
}
function fetchPlanetaryData() {
 let planetNum = Math.floor(Math.random()*6)
 fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
    response.json().then(function(destArray) {
       let planet = destArray[planetNum]
       document.getElementById('missionTarget').innerHTML=`<h2>Mission Destination</h2>
       <ol>
          <li>Name: ${planet.name}</li>
          <li>Diameter: ${planet.diameter}</li>
          <li>Star: ${planet.star}</li>
          <li>Distance from Earth: ${planet.distance}</li>
          <li>Number of Moons: ${planet.moons}</li>
       </ol>
       <img src="${planet.image}">`
    })
 })

}
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
