var inquirer = require("inquirer");
var Word = require('./Word.js');
var Letter = require('./Letter.js');
var randomWord = require('random-words');
var answer = new randomWord(1)[0];
var guess; 
var guessLeft =10;
var guessed= [];
var gameover =false;

//************************************************
// **     Above reserved for initializing app     **
//************************************************
function clearScreen(){
// this command clears the console before displaying result [windows powershell users]
process.stdout.write('\033c');
// this command clears the console before displaying result [linux users... probably mac also. Does nothing on windows powershell]
console.log('\033[2J'); 
console.log('-------------Hangman------------------')
}
clearScreen();



    var newWord = new Word(answer,guess,guessed);
    newWord.addLetter(answer,guess);
function promptLetter (){
    guessLeft --
    if  ( guessLeft >-1)  {
    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "Pick a letter"
          }
      ]).then(function(response) {
            
            clearScreen();
            guess = response.letter;
          console.log('\nguessed: '+guess);
          console.log('(answer is: '+answer+')');
          console.log('guesses left ' + guessLeft);
          
        newWord.letterChecker(answer,guess,gameover);

          console.log(newWord.display.join(' '));
          console.log('\n-------------Hangman------------------\n')

          if(!gameover){
            promptLetter();
          }
          

        } );
    } else { console.log('game over. would you like to play again?')}
}

promptLetter();