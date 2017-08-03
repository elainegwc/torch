
function init() {

}

/* ADD YOUR CODE BELOW */
var j = 1;
var points = 0;
function checkPassword() {
var questions = ["In Afghanistan, what percent of woman can read and write?",
"What percent of Argentinians have never been to school?",
"What is the average youth literacy rate in Armenia?",
"What is the average number of years of education people receive in Bangladesh?",
"What percent of people in Brazil have never been to school?",
"What percent of people with low income in Cambodia are literate?",
"What percentage of children from low income families in Congo complete secondary school?",
"What percent of people in Haiti have never been to school?",
"What percent of low income people in India are literate?",
"What is the average number of years of education in Mexico?",
"What is the average number of years of education for people with low income in Nicaragua?",
"End of game, click Enter for your score."]
var answers = ["19","0","100","7","10","50","5","17","52","11","6"];


var answer = document.getElementById("pw").value

if (j<12) {

  document.getElementById("question").innerHTML = questions[j];
  if (answer == answers[j-1] ) {
    points = points + 10;
      window.alert("Correct! Points: " + points);

  }
  else{
    window.alert("Wrong! Answer: " + answers[j-1] + " Points: " + points);
  }
}

else {
  window.alert("Congrats! You have earned " + points + " points out of 110!")
}

j= j+1;
}
