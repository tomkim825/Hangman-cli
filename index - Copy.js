var inquirer = require("inquirer");
var Word = require('./word.js');
var randomWord = require('random-words');
var answer = new randomWord(1)[0];
var guess;
//************************************************
// **     Above reserved for initializing app     **
//************************************************

// this command clears the console before displaying result [windows powershell users]
process.stdout.write('\033c');
// this command clears the console before displaying result [linux users... probably mac also. Does nothing on windows powershell]
console.log('\033[2J');
console.log('-------------Hangman------------------')
inquirer.prompt([
    {
        type: "input",
        name: "letter",
        message: "Pick a letter"
      }
  ]).then(function(response) { 
        guess = response.letter;
      console.log('\nguessed: '+guess);
      console.log(answer);
      var newWord = new Word();
      newWord.addLetter();
      console.log(newWord);
      console.log(newWord.letters.join(' ')); 
    } );

var Word = function(guess){
    this.letters = [];
    this.numberLetters = answer.length;
    this.addLetter = function(letter){
        for( var i=0; i<answer.length; i++){
            this.letters.push( new Letter(guess,answer[i]))
            console.log(new Letter(guess,answer[i]));
            console.log(answer[i]);
        }
    }
};

var Letter = function(guess,answer){
    this.guessed = false;
    if( guess === answer){
    this.guessed = true 
    };

}; 
