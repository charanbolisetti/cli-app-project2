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


  var highestScorer=[
    {
      name:"raju",
      score:"10"
    },
    {
      name:"naidu",
      score:"9"
    }
  ]





  var questionOne={
    question : chalk.black.bgGreenBright("What is the real name of tony stark? "),
    a : "Robert Downey",
    b : "Robert Steve",
    c : "Robert smith",
    d : "Robert Alan",
    answer : "a"
  }
  
  var questionTwo={
    question : chalk.black.bgGreenBright("How many series are there in iron man? "),
    a : "1",
    b : "2",
    c : "3",
    d : "4",
    answer : "c"
  }
  
  var questionThree={
    question : chalk.black.bgGreenBright("The purple gem is also known as? "),
    a : "real stone",
    b : "power stone",
    c : "Thunder stone",
    d : "Mighty stone",
    answer : "b"
  }
  
  var questionFour={
    question : chalk.black.bgGreenBright("The Tesseract was stolen by? "),
    a : "Thor",
    b : "loki",
    c : "Thanos",
    d : "hulk",
    answer : "b"
  }
  
  var questionFive={
    question : chalk.black.bgGreenBright("Who is the strongest Avenger? "),
    a : "Thor",
    b : "hulk",
    c : "iron man",
    d : "Black widow",
    answer : "a"
  }
   var questionSix={
     question : chalk.black.bgGreenBright("In which year black panther was released? "),
     a : "2016",
     b : "2017",
     c : "2018",
     d : "2019",
     answer : "c"
   }
  
   var questionSeven={
     question : chalk.black.bgGreenBright("What is the first Iron Man suit built and created by Tony Stark? "),
     a : "mark 1",
     b : "mark 2",
     c : "mark 3",
     d : "mark 4",
     answer : "a"
   }
  
   var questionEight={
     question : chalk.black.bgGreenBright("What is the last movie of avengers series? "),
     a : "Avengers EndGame",
     b : "Avengers ultron",
     c : "Avengers Infinity war",
     d : "Avengers Age of ultron",
     answer : "a"
   }
  
   var questionNine={
     question : chalk.black.bgGreenBright("Heroine Name of Captain Marvel?"),
     a : "brie larson",
     b : "brie roman",
     c : "brie yan",
     d : "brie john",
     answer : "a"
   }
  
   var questionTen={
     question : chalk.black.bgGreenBright("Shield name of Captain America? "),
     a : "vibranium shield",
     b : "ultra shield",
     c : "Thunder shield",
     d : "mega shield",
     answer : "a"
   }
  





   var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  load(currentQuestion.question,currentQuestion.answer);
}
console.log(chalk.bgRed.underline.bold("Yay,Your final score is " + score));
console.log(" ");






if(score==10){
    console.log("Hurray,congrats you are the new high scorer");
    highestScorer.unshift({'name':userName,'score':score});
  }
  else{
    console.log("Try one more time to become the new high scorer");
  }
  
  console.log(" ");
  




  console.log(chalk.bgCyan("------------------SCORE BOARD-------------"));

 for(var i=0;i<highestScorer.length;i++){
   var currentHighestScorer=highestScorer[i];
   console.log(chalk.bgYellow(currentHighestScorer.name + "-------->" + currentHighestScorer.score
   ));
 }