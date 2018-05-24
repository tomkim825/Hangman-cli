// this command clears the console before displaying result [windows powershell users]
process.stdout.write('\033c');
// this command clears the console before displaying result [linux users... probably mac also. Does nothing on windows powershell]
console.log('\033[2J');
console.log('-------------Hangman------------------')
var guess = 'a';
var answer ='answer';
var guessLeft =10;


var Word = function(){
    this.letters = [];
    this.numberLetters = answer.length;
    this.addLetter = function(letter){
      for( var i=0; i<answer.length; i++){
          this.letters.push( new Letter(guess,answer[i]).display    )
      }
    }
    };

var Letter = function(guess1,answer1){
if( guess1 === answer1){
    this.display = answer1
} else {this.display = '_'};
}; 

var gameWord = new Word();

function runGame(){
    guessLeft --;
    console.log(guessLeft);
    if ( guessLeft >0 ){
        
        gameWord.letters = [];
        gameWord.addLetter();
        console.log(gameWord.letters.join('  ')); 
        runGame();
    } else { console.log('game over')}
   
}

runGame();





