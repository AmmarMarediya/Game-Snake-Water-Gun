let u_Choice;
let C_choice;
let i = 0;
let win = 0;
let loss = 0;
alert("Welcome to the Snake Water Gun Game! 🎮 🔕Complete 5 Rounds then final result is visiable\nEnjoy game");
confirm("Game rules📝🔴\n1. Snake beats Water\n2. Water beats Gun\n3. Gun beats Snakes\nAre you ready to play? Click OK to start or Cancel to exit.");
while (i < 5) {
  let computrChoice = Math.floor(Math.random() * 3) + 1;
 
  if (computrChoice == 1) {
    C_choice = "Snake";
  } else if (computrChoice == 2) {
    C_choice = "Water";
  } else {
    C_choice = "Gun";
  }
  u_Choice = prompt("⌨️Enter Snake, Water or Gun");

  let ulogo;
  let clogo;
  // Displaying the user's choice with emoji
  if(u_Choice == "Snake"){
    ulogo = "🐍";
  } else if(u_Choice == "Water"){
    ulogo = "💦";
  } else {
    ulogo = "🔫";
  }
// Displaying the computer's choice with emoji
  if(C_choice == "Snake"){
    clogo = "🐍";
  } else if(C_choice == "Water"){
    clogo = "💦";
  } else {
    clogo = "🔫";
  }

  if (C_choice == u_Choice) {
    alert(`Computer = ${clogo}${C_choice} VS User = ${ulogo}${u_Choice}  \nRound is tie`);
  } else if (C_choice == "Snake" && u_Choice == "Water") {
    alert(`Computer = ${clogo}${C_choice} VS User = ${ulogo}${u_Choice} \nYou are loss the round`);
    loss++;
  } else if (C_choice == "Snake" && u_Choice == "Gun") {
    alert(`Computer = ${clogo}${C_choice} VS User = ${ulogo}${u_Choice} \nYou are win the round`);
    win++;
  } else if (C_choice == "Water" && u_Choice == "Snake") {
    alert(`Computer = ${clogo}${C_choice} VS User = ${ulogo}${u_Choice} \nYou are win the round`);
    win++;
  } else if (C_choice == "Water" && u_Choice == "Gun") {
    alert(`Computer = ${clogo}${C_choice} VS User = ${ulogo}${u_Choice} \nYou are loss the round`);
    loss++;
  } else if (C_choice == "Gun" && u_Choice == "Snake") {
    alert(`Computer = ${clogo}${C_choice} VS User = ${ulogo}${u_Choice} \nYou are loss the round`);
    loss++;
  } else if (C_choice == "Gun" && u_Choice == "Water") {
    alert(`Computer = ${clogo}${C_choice} VS User = ${ulogo}${u_Choice} \nYou are win the round`);
    win++;
  } else if (u_Choice != "Snake" || u_Choice != "Water" || u_Choice != "Gun") {
    alert("Invalid input❌");
  } else if (u_Choice == null || u_Choice == "") {
    alert("Invalid input❌");
    break;
  } else {
    alert("Invalid input❌");
  }
  
  i++;
}
alert(`🧮Total Wins: ${win}, Total Losses: ${loss}`);
if (win > loss) {
    alert("You are the overall winner!🎉🥳");
} else if (loss > win) {
    alert("You are the overall loser!😢");
} else {
    alert("The game is a tie!🤝");
}