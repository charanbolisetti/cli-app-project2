var readlineSync=require('readline-sync');
const chalk=require('chalk');
var score=0;

var userName=readlineSync.question(chalk.bgCyan("What's your Name? "));

console.log(chalk.bgYellow("Welcome " + userName));

console.log("-------------------------------------------");

console.log(chalk.black.bgGreenBright("This quiz was all about to test your knowledge on Avengers"));
console.log("-------------------------------------------");
console.log(chalk.bgRed("AVENGERS"));
console.log(chalk.bgYellow("IRON MAN"));
console.log(chalk.bgCyan("CAPTAIN AMERICA"));
console.log(chalk.bgRed("THOR"));
console.log(chalk.bgBlueBright("HULK"));
console.log(chalk.bgMagenta("BLACK WIDOW"));
console.log(chalk.bgYellow("BLACK PANTHER"));
console.log("-------------------------------------------");




function load(question,answer){
    console.log(currentQuestion.question);
    console.log("a)" + currentQuestion.a);
    console.log("b)" + currentQuestion.b);
    console.log("c)" + currentQuestion.c);
    console.log("d)" + currentQuestion.d);
    var userAnswer=readlineSync.question("Enter your option: ");
    if(userAnswer === answer){
      console.log(chalk.cyanBright("You are Right?"));
      score=score+1;
    }else{
      console.log(chalk.cyanBright("You are Wrong"));
      score=score-1;
    }
    console.log(chalk.yellowBright("Your score is " + score));
    console.log("---------------");
  }