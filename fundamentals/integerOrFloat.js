function latinLetters(number, operator, secondNum){
  let rez = 0;
    switch(operator){
    case "*" : rez = number * secondNum; break;
    case "/" : rez = number / secondNum; break;
    case "+" : rez = number + secondNum; break;
    case "-" : rez = number - secondNum; break;
  }
  console.log(rez);
}
latinLetters(25.5,

    '-',
    
    3)