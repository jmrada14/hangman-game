window.onload = function() {
  
    // document get by ID variables
    var hiddenWord = document.getElementById("hiddenWord");
    var lives1 = document.getElementById("lives");
    var guesses1 = document.getElementById("guessedWords");
    var newGame1 = document.getElementById("newGame");
    //array of words
    var words = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn',]
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
    function newGame() {
      // reset score
      var lives = 9;
      lives1.innerHTML = lives;
      
      // GATHER USER GUESS AND DISPLAY
      var storedGuess = "";
      var arrayGuess = [];
      guesses1.innerHTML = arrayGuess;
      
      // game progress variables keep track of solved letters
      var dash = 0;
      var letters = 0;
      
      // pick random item from array
      var randomWord = words[Math.floor(Math.random()*words.length)];
      console.log(randomWord);
  
      //display random word in document as blank spaces
      var splitWord = randomWord.split('');
      console.log(splitWord);
      var arrayOfBlanks = splitWord.map(function(val) {
        if (val != " ") {
          return "_";
        } else {
          dash++;
          return "-";
        }
      });
      // join the blanks back together into a string to display on the page
      var stringOfBlanks = arrayOfBlanks.join('');
      // place word blanks on page
      hiddenWord.innerHTML = stringOfBlanks;
    
      // keyup function
      document.onkeyup = function checkKey() {
        var keyPress = event.keyCode
        storedGuess = String.fromCharCode(keyPress).toLowerCase();
  
        // IF STATEMENT TO CHECK IF GUESS IS A LETTER
        if (alphabet.indexOf(storedGuess) !== -1 && arrayGuess.indexOf(storedGuess) === -1)  {
          arrayGuess.push(storedGuess);  
          guesses1.innerHTML = arrayGuess;
          console.log(arrayGuess);
          // IF STATEMENT TO SEE IF GUESS MATCHES WORD
          for (var i = 0; i < splitWord.length; i++) {
            if (storedGuess == splitWord[i].toLowerCase()) {
              arrayOfBlanks[i] = storedGuess;
              hiddenWord.innerHTML = arrayOfBlanks.join('').toUpperCase();
              letters++;
              console.log(letters);
              // TO WIN
              if (letters + dash === randomWord.length) {
                lives1.innerHTML = "YOU WON";
                newGame1.innerHTML = 'PRESS "ENTER" TO CONTINUE';
                newGame1.style.visibility = "visible";
                document.onkeyup = false;
                document.onkeyup = function() {
                  if (event.key === "Enter") {
                  newGame();
                  newGame1.style.visibility = "hidden";
                  }
                } // Reset the game
              } // END WIN CONDITION
            } // END IF MATCH 
          } // END MATCH LOOP
          
        // DECREASING LIVES IF WRONG GUESS
        if (randomWord.indexOf(storedGuess) === -1) {
          lives -= 1;
          lives1.innerHTML = lives;
          if (lives <= 0) {
            lives1.innerHTML = "YOU LOST";
            newGame1.innerHTML = 'PRESS "ENTER" TO CONTINUE';
            newGame1.style.visibility = "visible";
            document.onkeyup = false;
            document.onkeyup = function() {
              if (event.key === "Enter") {
              newGame();
              newGame1.style.visibility = "hidden";
              }
            } // Reset the game
          } // End of lose condition
        } // END DECREASE LIVES
      } // END OF ALPHABET CHECK 
    } // end of onkeyup function
   } // end newGame();
   newGame();
  } //end of page ready
  
   
 