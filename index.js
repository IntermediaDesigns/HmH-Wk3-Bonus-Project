let mainCow = document.querySelector(".cow"); // cow to click
let otherCow = document.querySelector(".goldenCow"); // main cow turns into a gold cow when you reach $1B
let milkCounter = document.querySelector("#bottleCount")[0]; // milk counter
let sellMilkButton = document.querySelector("#milkMoney")[0]; // button
let totalCount = document.querySelector("#total"); // total money earned
let hireWorkButton = document.querySelector("#hireWorker"); // hires a worker
let buyCowButton = document.querySelector("#buyCow"); // buys a cow
let beCeoButton = document.querySelector("#beCeo"); // become a ceo
let cowPlanetButton = document.querySelector("#cowPlanet"); // buys a planet
let multiverseButton = document.querySelector("#multiverse"); // rule the multiverse
let workerNumber = document.querySelector("#workerCount"); //number of workers


let workerBottles = document.querySelector("#bottleCount1"); // 1 worker equals 1 bottle that sells for $25.00 per click
let cowNumber = document.querySelector("#cowCount"); // number of cows
let cowBottles = document.querySelector("#bottleCount2"); // 1 cow equals 2 bottles for $40.00 per click
let farmNumber = document.querySelector("#farmCount"); // number of farms
let farmBottles = document.querySelector("#bottleCount3") // 1 farm equals 10 bottles for $150.00 per click
let ceoNumber = document.querySelector("#ceoCount"); // number of ceo buildings
let ceoBottles = document.querySelector("#bottleCount4"); // 1 ceo equals 100 bottles for $1,000.00 per click
let planetNumber = document.querySelector("#planetCount"); // number of planets
let planetBottles = document.querySelector("#bottleCount5"); // 1 planet equals 10,000 bottles for $50,000.00
let multiNumber = document.querySelector("#multiCount"); // number of multiverses
let multiBottles = document.querySelector("#bottleCount6"); // 1 multiverse equals 100,000 bottles for $1,000,000.00 per click

let milkCount = 0;
let workerCount = 0;
let cowCount = 0;
let farmCount = 0;
let ceoCount = 0;
let planetCount = 0;
let multiCount = 0;

const workerCost = 25;
const cowCost = 40;
const farmCost = 150;
const ceoCost = 1000;
const planetCost = 50000;
const multiCost = 1000000;


function updateCounts() {
       milkCounter.textContent = milkCount;
       workerNumber.textContent = workerCount;
       cowNumber.textContent = cowCount;
       farmNumber.textContent = farmCount;
       ceoNumber.textContent = ceoCount;
       planetNumber.textContent = planetCount;
       multiNumber.textContent = multiCount;
   };

// Update total money earned
function updateTotal() {
       totalCount.textContent = milkCount * 0.5;
   }




// 1 worker = 1 bottle per sec // Hire 1 worker for $25
hireWorkButton.addEventListener('click', function() {
       if (milkCount >= workerCost) {
           milkCount -= workerCost;
           workerCount++;
           updateCounts();
           updateTotal();
       }
   });

// 1 cow = 2 bottles per sec // Buy 1 cow for $40
buyCowButton.addEventListener('click', function() {
       if (milkCount >= cowCost) {
           milkCount -= cowCost;
           cowCount++;
           updateCounts();
           updateTotal();
       }
   });

// 1 farm = 10 bottles per sec // Buy 1 farm for $150


// 1 building = 100 bottles per sec // Be CEO for $1,000


// 1 planet = 1000 bottles per sec // Buy planet for $50,000


// 1 multiverse = 10,000 bottles per sec // Buy multiverse for $1,000,000


// 1 golden cow =  black cow turns into a gold cow when you reach $1B

// Each bottle sells for $.50
// counter increases per # of bottles and totals x .05 per bottle
// Update milk count every second
setInterval(function() {
       milkCount += workerCount + cowCount * 2 + farmCount * 10 + ceoCount * 100 + planetCount * 1000 + multiCount * 10000;
       updateCounts();
       updateTotal();
   
       // Check if milk count has reached 1,000,000,000
       if (milkCount >= 1000000000) {
           // Change the cow
           mainCow.style.display = 'none';
           otherCow.style.display = 'block';
       }
   }, 1000);