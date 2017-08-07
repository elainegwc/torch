function init() {

}

/* ADD YOUR CODE BELOW */

function Rd1() {



var answer = document.getElementById("user_input").value


  if (answer == "USA" ) {
    document.getElementById("question").innerHTML= "Congrats! You have chosen to be a citizen of the United States. 99% of the population here completes primary school, thanks to an abundance of resources. We assume that you will too - move on to secondary school. Likewise, 91% of the population here completes secondary school. Congratulations, you've been sufficiently educated!";
    document.getElementById("btnSubmit").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
  else if (answer == "South Sudan"){
    document.getElementById("question").innerHTML= "Congrats! You have chosen to be a citizen of South Sudan! Would you like to attend school, yes or no?";
    document.getElementById("btnSubmit").style.visibility = 'hidden';
    document.getElementById("SS2").style.visibility = 'visible';
  }

  else if (answer == "China"){
    document.getElementById("question").innerHTML= "Congrats! You have chosen to be a citizen of China. You will attend school, as almost 100% of the population of China does. Will you complete primary school? yes or no"
    document.getElementById("btnSubmit").style.visibility = 'hidden';
    document.getElementById("C2").style.visibility = 'visible';
  }

  else if (answer == "Afghanistan"){
    document.getElementById("question").innerHTML= "Congrats! You have chosen to be a citizen of Afghanistan. Would you like to attend school? yes or no"
    document.getElementById("btnSubmit").style.visibility = 'hidden';
    document.getElementById("A2").style.visibility = 'visible';

  }

  else if (answer == "Guatemala"){
    document.getElementById("question").innerHTML= "Congrats! You have chosen to be a citizen of Guatemala. Would you like to attend school? yes or no"
    document.getElementById("btnSubmit").style.visibility = 'hidden';
    document.getElementById("G2").style.visibility = 'visible';

  }

  else if (answer == "UK"){
    document.getElementById("question").innerHTML= "Congrats! You have chosen to be a citizen of the UK. 100% of the population here completes primary school, thanks to an abundance of resources. We assume that you will too - move on to secondary school. Likewise, 92% of the population here completes secondary school. Congratulations, you've been sufficiently educated!";
    document.getElementById("btnSubmit").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function SS2(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "This is very uncommon, as only 36% of the population attends school. Now that you are in primary school, are you going to graduate? yes or no.";
    document.getElementById("SS2").style.visibility = 'hidden';
    document.getElementById("SS3").style.visibility = 'visible';
  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML= "Unfortunately, this is very common, as 64% of the population has never attended school in South Sudan. The average education level in South Sudan is only 2.3 years.";
    document.getElementById("SS2").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function SS3(){
    var answer = document.getElementById("user_input").value
    if(answer == "yes"){
      document.getElementById("question").innerHTML= "Congrats! Only 41% of people graduate! Are you going to go to secondary school? yes or no";
      document.getElementById("SS3").style.visibility = 'hidden';
      document.getElementById("SS4").style.visibility = 'visible';
    }
    else if (answer == "no"){
      document.getElementById("question").innerHTML= "Oh no, you didn't graduate! Unfortunately, you're not alone. 59% of the population doesn't graduate from primary school. The average education level in South Sudan is only 2.3 years.";
      document.getElementById("SS3").style.visibility = 'hidden';
      document.getElementById("user_input").style.visibility = 'hidden';
    }

}

function SS4(){
    var answer = document.getElementById("user_input").value
    if(answer == "yes"){
      document.getElementById("question").innerHTML= "You're part of the 55% of people who continue to secondary school. Will you graduate? yes or no";
      document.getElementById("SS4").style.visibility = 'hidden';
      document.getElementById("SS5").style.visibility = 'visible';
    }
    else if (answer == "no"){
      document.getElementById("question").innerHTML= "Your education has ended after primary school. 45% of people also choose not to or cannot move on to secondary school. The average education level in South Sudan is only 2.3 years.";
      document.getElementById("SS4").style.visibility = 'hidden';
      document.getElementById("user_input").style.visibility = 'hidden';
    }
}

function SS5(){
    var answer = document.getElementById("user_input").value
    if(answer == "yes"){
      document.getElementById("question").innerHTML= "CONGRATS! Only 6% of people are able to graduate secondary school. The average education level in South Sudan is only 2.3 years.";
      document.getElementById("SS5").style.visibility = 'hidden';
      document.getElementById("user_input").style.visibility = 'hidden';
    }
    else if (answer == "no"){
      document.getElementById("question").innerHTML= "94% of people also don't graduate secondary school in South Sudan. The average education level in South Sudan is only 2.3 years.";
      document.getElementById("SS5").style.visibility = 'hidden';
      document.getElementById("user_input").style.visibility = 'hidden';
    }
}

function C2(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "Congrats! 91% of people graduate! Are you going to go to secondary school? yes or no";
    document.getElementById("C2").style.visibility = 'hidden';
    document.getElementById("C3").style.visibility = 'visible';
  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML= "Oh no, you didn't graduate! Unfortunately, you're not alone. 9% of the population doesn't graduate from primary school. The average education level in China is 9.73 years. ";
    document.getElementById("C2").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function C3(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "You're part of the 94% of people who continue to secondary school. Will you graduate? yes or no";
    document.getElementById("C3").style.visibility = 'hidden';
    document.getElementById("C4").style.visibility = 'visible';
  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML= "Your education has ended after primary school. Only 6% of people also choose not to or cannot move on to secondary school. The average education level in China is 9.73 years. ";
    document.getElementById("C3").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function C4(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "CONGRATS! Only 39% of people are able to graduate secondary school. The average education level in China is 9.73 years.";
    document.getElementById("C4").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';

  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML= "61% of people also don't graduate secondary school. The average education level in China is 9.73 years. ";
    document.getElementById("C4").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function A2(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "This not very common, as only 60% of the population attends school. Now that you are in primary school, are you going to graduate? yes or no.";
    document.getElementById("A2").style.visibility = 'hidden';
    document.getElementById("A3").style.visibility = 'visible';

  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML=  "Unfortunately, this is very common, as 40% of the population has never attended school in Afghanistan. The average education level in Afghanistan is only 3.08 years. ";
    document.getElementById("A2").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function A3(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "Congrats! Only 34% of people graduate! Are you going to go to secondary school? yes or no";
    document.getElementById("A3").style.visibility = 'hidden';
    document.getElementById("A4").style.visibility = 'visible';

  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML= "Oh no, you didn't graduate! Unfortunately, you're not alone. 66% of the population doesn't graduate from primary school. The average education level in Afghanistan is only 3.08 years. ";
    document.getElementById("A3").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function A4(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "You're part of the 90% of people who continue to secondary school. Will you graduate? yes or no";
    document.getElementById("A4").style.visibility = 'hidden';
    document.getElementById("A5").style.visibility = 'visible';

  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML= "Your education has ended after primary school. 10% of people also choose not to or cannot move on to secondary school. The average education level in Afghanistan is only 3.08 years. ";
    document.getElementById("A4").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function A5(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "CONGRATS! Only 14% of people are able to graduate secondary school.The average education level in Afghanistan is only 3.08 years. ";
    document.getElementById("A5").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';

  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML= "86% of people also don't graduate secondary school. The average education level in Afghanistan is only 3.08 years. ";
    document.getElementById("A5").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function G2(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "This is very common, as 95% of the population attends school. Now that you are in primary school, are you going to graduate? yes or no";
    document.getElementById("G2").style.visibility = 'hidden';
    document.getElementById("G3").style.visibility = 'visible';

  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML=  "This is uncommon, as only 5% of the population has never attended school in Guatemala. The average education level in Guatemala is 7.3 years.";
    document.getElementById("G2").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function G3(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "Congrats! 71% of people graduate! Are you going to go to secondary school? yes or no";
    document.getElementById("G3").style.visibility = 'hidden';
    document.getElementById("G4").style.visibility = 'visible';

  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML=  "Oh no, you didn't graduate! Unfortunately, you're not alone. 29% of the population doesn't graduate from primary school. The average education level in Guatemala is 7.3 years.";
    document.getElementById("G3").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function G4(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "You're part of the 75% of people who continue to secondary school. Will you graduate? yes or no";
    document.getElementById("G4").style.visibility = 'hidden';
    document.getElementById("G5").style.visibility = 'visible';

  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML=  "Your education has ended after primary school. 25% of people also choose not to or cannot move on to secondary school. The average education level in Guatemala is 7.3 years.";
    document.getElementById("G4").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}

function G5(){
  var answer = document.getElementById("user_input").value
  if(answer == "yes"){
    document.getElementById("question").innerHTML= "CONGRATS! Only 22% of people are able to graduate secondary school. The average education level in Guatemala is 7.3 years.";
    document.getElementById("G5").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';

  }
  else if (answer == "no"){
    document.getElementById("question").innerHTML=  "78% of people also don't graduate secondary school. The average education level in Guatemala is 7.3 years.";
    document.getElementById("G4").style.visibility = 'hidden';
    document.getElementById("user_input").style.visibility = 'hidden';
  }
}
