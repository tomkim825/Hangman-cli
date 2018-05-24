// --------------------------------------------------------------Disclaimer -----------------------------------------------------------//
// any non-standard indentation is intentionally used. It helps me visualize and keep track. Can clean up before production //
// --------------------------------------------------------------Disclaimer ----------------------------------------------------------//
var inquirer = require("inquirer");
var Word = require('./Word.js');
var randomWord = require('random-words');
var random = new randomWord(1)[0];
var answer = new Word(random);
var guessLeft =10;
var guessed= [];
//************************************************
// **     Above reserved for initializing app     **
//************************************************

//.... and this is where the fun begins..... //

//======[  START  ]=========
//  clearScreen() run every guess  =
//======[  START  ]=========
function clearScreen(){
    // clears the console before displaying result [windows powershell users]
    process.stdout.write('\033c');
    // clears the console before displaying result [linux users... probably mac also. Does nothing on windows powershell]
    console.log('\033[2J'); 
    // header
    console.log('-------------Hangman------------------\n')
}
//======[   END   ]=========
//  clearScreen() run every guess  =
//======[   END   ]=========

//----- initial screen setup before user enters 1st letter-----//
 clearScreen();
 answer.showAnswer();
 console.log('\n-------------Hangman------------------\n')
//----- initial screen setup before user enters 1st letter-----//

// --------------------------------------[ START playHangman() -- actual gameplay]--------------------------------------
function playHangman() {
    //===========   Checks if you have guesses left     =========== 
    if (guessLeft > 0) {
        // ********* [  START ] - INQUIRER *********
        inquirer.prompt([
            {type: "input",
            name: "letter",
            message: "Pick a letter:"}
        ])
        .then(function(response){
            clearScreen();
            guess = response.letter;
            // ---- IF USER TYPED IN MULTIPLE LETTERS, LET THEM KNOW & STARTOVER-----
            if (guess.length >1){
                console.log( "that's more than one letter. Try again \n\n" );
                playHangman();
            } 
            // ----OTHERWISE. . . -----
            else {
                // ----IF GUESS WAS TYPED IN ALREADY, LET THEM KNOW ----  
                if (guessed.indexOf(guess) !== -1) {  console.log("Already guessed that one. Try again!")  } 
                // ---- OTHERWISE  ACCEPT LETTER AND PUSH INTO ARRAY OF LETTERS ALREADY GUESSED & MOVE ON----
                else {
                    guessed.push(guess);
                    // ----IF LETTER GUESSED IS IN ANSWER, LET THEM KNOW ----  
                    if (random.indexOf(guess) !== -1)   { console.log('[correct]\n') } 
                    // ----OTHERWISE, LET THEM KNOW THEY GOT IT WRONG & LOSE A GUESS ----  
                    else { 
                        console.log('[incorrect] -- guesses left reduced by one\n');
                        guessLeft--;
                    };
                    //----  THEN RUN WORD.GUESS() TO CHECK LETTERS AND SWITCH BOOLEANS -> DISPLAY LETTER OR '_'  ----
                    answer.guess(guess);
                    // ----THEN POST INFO ----                   
                    console.log('you guessed: '+guess);
                    console.log('letters guessed so far: [ ' +guessed.join(', ')+' ]');
                    console.log('(answer is "'+random+'")');
                    console.log("guesses left: " + guessLeft+ '\n');
                }
            }
            // ----TAKE ANSWER AND REMOVE SPACES FOR COMPARISON ----
            // ----console.log(string) in Word.showAnswer() console logs letter / '_'  ----  
            var compactedAnswer =  answer.showAnswer().trim().split(" ").join('');
            console.log('\n-------------Hangman------------------\n') //<- FOOTER    
            //----TESTS IF ANSWER W/O SPACES IS THE ANSWER (no dashes left -> gameover) ----
            if (compactedAnswer === random ) {
                console.log("You solved it. Run index.js to play again");
                return;  
            }
            //   function recursion to repeat. Exit conditions are running out of guesses or solving it 
            playHangman(); 
      }); 
      // ********* [  END ] - INQUIRER  (EVERYTHING OPERATES IN PROMISE SECTION) *********
    }
     //===========   No guesses left = GAMEOVER     ===========  
    else {  console.log("You lose. Run index.js to play again")   };
  };  
// --------------------------------------[ END playHangman() -- actual gameplay]--------------------------------------

// -- COMMAND TO RUN FUNCTION TO GET IT STARTED --
playHangman();