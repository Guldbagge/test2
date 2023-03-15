
// Global var to hold knockout number 6-9
let knockoutNbr = -1;
function setKnockoutNbr(nbr)



{
   knockoutNbr = nbr;
   console.log('knockout number: ' + knockoutNbr);
}

select = document.querySelector('a.btn6')
select.addEventListener('click', () =>{
   setKnockoutNbr(6);
})

select = document.querySelector('a.btn7')
select.addEventListener('click', () =>{
   setKnockoutNbr(7);
})

select = document.querySelector('a.btn8')
select.addEventListener('click', () =>{
   setKnockoutNbr(8);
})

select = document.querySelector('a.btn9')
select.addEventListener('click', () =>{
   setKnockoutNbr(9);
})

// Player puch play button and generate a random number 1-6 and multiplay whit another random number 1-6
start = document.querySelector('a.btnrolldice')
start.addEventListener('click', () =>{
   if (knockoutNbr == -1) {
      window.alert("Please select knockout number!");
   } else if (knockoutNbr == -2) {
      window.alert("Please select new game!");
   } else {
      let RandomNumDice = rolldice();
      // Check against knockoutNbr
      if (RandomNumDice == knockoutNbr){
         // TODO Force update of totalscore to make the latest totalscore
	 // visible before GameOver window is closed
         GameOver(knockoutNbr)
      }
   }
})

function rolldice (){

   // Fetch current total score
   totalscore = document.getElementById('totalscore').innerHTML
   total = 0
  
   // Safty, check for invalid number
   if (!isNaN(parseInt(totalscore))) {
      console.log('totalscore: ' + totalscore);
      // Convert to int (it is a string)
      total = parseInt(totalscore);
   }
   console.log('totalscore old: ' + total);
 
   let RandomNum1 = Math.floor(Math.random() * 6) + 1
   let RandomNum2 = Math.floor(Math.random() * 6) + 1
   let RandomNum = RandomNum1 + RandomNum2
   console.log('rolldice RandomNum: ' + RandomNum);
  
   // New total score
   total = RandomNum + total;

   // Set total score in html
   document.getElementById("totalscore").innerHTML = total;   
   console.log('totalscore new: ' + total);

   // Return the generated random number
   return RandomNum;
}

// For random number of 2 dice and show the number then player press roll dice again

function Reset() {
   console.log('Resetting game!');
   // Reset knockout number
   knockoutNbr = -1;
   document.getElementById("totalscore").innerHTML = 0;   
}


// if players number = game over, if not players number show resultate

function GameOver(nbr){
   window.alert("Ops got " + nbr + '!');
   console.log('Stopping game!');
   // Reset knockout number and keep total score so user still
   // Can see the result
   // -2 => user has to select new game
   knockoutNbr = -2;
}

// If new game butom press relod page

newgame = document.querySelector('a.btnnewgame')
newgame.addEventListener('click', () =>{
   Reset();
})



// Reset on page load
Reset();
