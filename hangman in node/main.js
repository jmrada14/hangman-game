let inquirer = require('inquirer';)
let wordList = require('wordsDb');
let randomWord = require('randomword')
console.log('--------------------- Hello World ----------------------')
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
let word;
let random;

function selectWord() {
    random = wordList[Math.floor(Math.random() * wordList.length)]
    console.log(random)
    word = new Word(random)
    word.underScores()
}


selectWord()


function guessLetter() {
    inquirer.prompt([{
        name: 'letter',
        type: 'input',
        message : "try to guess the word, pick a letter"
    }]).then(answers => {
        console.log(answers.letter)
        let userGuess = answers.letter
        word.letterSelected(userGuess)
        console.log(word.underScores.join(""))
        console.log(random)
        if(word.underScores.join("") != random){
            askForLetter()
        } (word.underScores.join("") == random ){
            console.log("You win")

        }
    })


}

function Letter(letter) {
    this.letter = letter;
    this.visible = false;
};
Letter.prototype.shower = function (){
    if(this.visibl === true ) {
        return this.letter
    }
    return "_";
}

Letter.prototype.userGuess = function (guess) {
    if(guess.toUpperCase() === this.letter.toUpperCase()){
        this.visible = true
        return true
    }
    return false;
}

guessLetter()