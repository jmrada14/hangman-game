window.onload = function () {
    //Variables
    var wordHidden = document.getElementById('wordHidden');
    var lives = document.getElementById('lives');
    var guesses = document.getElementById('guessedWords');
    var newGame = document.getElementById('newgame')
    var planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn',
        'uranus', 'neptune', 'pluto']
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    function newGame() {
        var lives = 6;
        lives.innerHTML = lives;
        console.log(lives)
        var guessData = "";
        var guessesArray = [];
        guesses.innerHTML = guessesArray;
        var dashes = 0;
        var letters = 0;
        var randomWord = planets[Math.floor(Math.random()*planets.length)];
        console.log(randomWord);

        var splitIt = randomWord.split('');
        console.log(splitIt)
        var blanksArray = splitIt.map
    }

}