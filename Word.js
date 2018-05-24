// --------------------------------------------------------------Disclaimer -----------------------------------------------------------//
// any non-standard indentation is intentionally used. It helps me visualize and keep track. Can clean up before production //
// --------------------------------------------------------------Disclaimer ----------------------------------------------------------//

// require Letter.js module
var Letter = require('./letter.js');

// --------------------------------------[start constructor]--------------------------------------
var Word = function(word) {
    // [array stores letter objects]   &   [string stores word to display]  -> 
    // reason: Can't coherently console.log(array of "objects") so console.log(string). We still need Letter objects to change state & reveal letters
    var wordArray = []; 
    var string = ''; 
    // ****************************[  START  ]*****************************
    // ** for loop to fill empty array. Each game will have new word ** 
    // ****************************[  START  ]*****************************
    for (var i = 0 ; i < word.length; i++) {
        wordArray.push(new Letter(word[i])); 
    };
    // ****************************[  END  ]******************************
    // ** for loop to fill empty array. Each game will have new word ** 
    // ****************************[  END  ]******************************

    // -----------------------------------------------------[  START  ]-------------------------------------------------------------------
    // -- showAnswer() clears string and fills it  with _ or letter  by running displayLetter() Shows it on screen w/console.log  -- 
    // -----------------------------------------------------[  START  ]-------------------------------------------------------------------
    this.showAnswer = function() { 
        string = ''; 
        for (var i=0; i < wordArray.length; i++) {
            string += wordArray[i].displayLetter() + ' ';
        };
        console.log(string); 
        return string;
    }
     // ------------------------------------------------------[  END  ]-------------------------------------------------------------------
    // -- showAnswer() clears string and fills it  with _ or letter  by running displayLetter() Shows it on screen w/console.log  -- 
    // -------------------------------------------------------[  END  ]-------------------------------------------------------------------

       ////////////////////////////////////////[  START  ]///////////////////////////////////////
      // guess() to check guess against every letter by using Letter.checker function // 
     ////////////////////////////////////////[  START  ]//////////////////////////////////////
    this.guess = function(guess) {
        for (var i=0; i < wordArray.length; i++) {
            wordArray[i].checker(guess);
        };
    };
        ////////////////////////////////////////[  END  ]////////////////////////////////////////
      // guess() to check guess against every letter by using Letter.checker function // 
     //////////////////////////////////////////[  END  ]//////////////////////////////////////
};
// --------------------------------------[end constructor]--------------------------------------
// Exports module to be used in index.js
module.exports = Word;