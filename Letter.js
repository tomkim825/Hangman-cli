// --------------------------------------------------------------Disclaimer -----------------------------------------------------------//
// any non-standard indentation is intentionally used. It helps me visualize and keep track. Can clean up before production //
// --------------------------------------------------------------Disclaimer ----------------------------------------------------------//

// --------------------------------------[  start constructor  ]--------------------------------------
var Letter = function(letter) {
    // [string stores answer]   &   [boolean stores state] 
    this.letter = letter; 
    this.guessed = false; 

    // ------------------------[  START  ]------------------------
    // -- displayLetter() Boolean determines letter or ' _ '  -- 
    // ------------------------[  START  ]------------------------
    this.displayLetter = function() {
        if (this.guessed) { return (this.letter) } 
        else                    { return "_" };
    };
    // -------------------------[ END ]--------------------------
    // -- displayLetter() Boolean determines letter or ' _ '  -- 
    // -------------------------[ END ]--------------------------

       ////////////////////[  START  ]//////////////////////
     // checker() to check guess and set boolean  // 
    /////////////////////[  START  ]////////////////////
    this.checker = function(guess) {
        if (guess === this.letter)  { this.guessed = true }; 
        this.displayLetter();
    }
     //////////////[  END  ]//////////////////
    //  checker() & run displayLetter()  // 
  ////////////////[  END  ]////////////////
};
// --------------------------------------[  end constructor  ]--------------------------------------

// Export module for Word.js
module.exports = Letter;