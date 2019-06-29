window.onload = function() {
  
    // getbyid vars
    var hiddenWord = document.getElementById("hiddenWord");
    var lives1 = document.getElementById("lives");
    var guesses1 = document.getElementById("guessedWords");
    var newGame1 = document.getElementById("newGame");
    //vars
    var words = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn',]
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
    function newGame() {
      var lives = 6;
      lives1.innerHTML = lives;
      var storedGuess = "";
      var arrayGuess = [];
      guesses1.innerHTML = arrayGuess;
      var dash = 0;
      var letters = 0;
      
      // random word
      var randomWord = words[Math.floor(Math.random()*words.length)];
      console.log(randomWord);
  
      //displays random word
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
      // join blanks
      var stringOfBlanks = arrayOfBlanks.join('');
      // word blanks on place
      hiddenWord.innerHTML = stringOfBlanks;

      document.onkeyup = function checkKey() {
        var keyPress = event.keyCode
        storedGuess = String.fromCharCode(keyPress).toLowerCase();
        if (alphabet.indexOf(storedGuess) !== -1 && arrayGuess.indexOf(storedGuess) === -1)  {
          arrayGuess.push(storedGuess);  
          guesses1.innerHTML = arrayGuess;
          console.log(arrayGuess);
          for (var i = 0; i < splitWord.length; i++) {
            if (storedGuess == splitWord[i].toLowerCase()) {
              arrayOfBlanks[i] = storedGuess;
              hiddenWord.innerHTML = arrayOfBlanks.join('').toUpperCase();
              letters++;
              console.log(letters);
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
                } 
              } 
            } 
          }
          
        
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
            } 
          } 
        } 
      }  
    } 
   }
   newGame();
  } 
  
   
 