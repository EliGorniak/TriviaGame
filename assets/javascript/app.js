// all questions that will be displayed:
const allQuestions = [{
    question: "What is the name of the character played by Johnny Depp in the Pirates of the Caribbean film series?",
    options: ["Captain Jack The Brave", "Captain Jack Sword", "Jake The Great", "Captain Jack Sparrow"],
    answer: "Captain Jack Sparrow",
    questionId: 1
},
{
    question: "Which 1997 action thriller film stars Nicolas Cage, John Cusack, and John Malkovich??",
    options: ["Titanic", "PulpFiction", "Reservoir Dogs", "Con Air"],
    answer: "Con Air",
    questionId: 2
},
{
    question: "What song from the Disney film “Coco” won the 2018 Academy Award for Best Original Song??",
    options: ["Remember Me", "Singing in the Rain", "I'll love you", "Hola, que tal!"],
    answer: "Remember Me",
    questionId: 3
},
{
    question: "How the Grinch Stole Christmas is a 2000 American Christmas fantasy comedy film starring which actor as the Grinch??",
    options: ["Leonardo Di Caprio", "John Cusack", "Jim Carrey", "Harvey Keitel"],
    answer: "Jim Carrey",
    questionId: 4
},
{
    question: "Which actor played Freddie Mercury in the 2018 film Bohemian Rhapsody??",
    options: ["Jared Letto", "Rami Malek", "Guy Pearce", "Orlando Bloom"],
    answer: "Rami Malek",
    questionId: 5
},
{
    question: "Eddie Murphy’s first major motion picture role was in what movie released in 1982 co-starring Nick Nolte??",
    options: ["48 Hours", "Seven", "Inception", "Die Hard"],
    answer: "48 Hours",
    questionId: 6
},
{
    question: "The song “Eye of the Tiger” by the band Survivor was the theme song for what movie released in 1982?",
    options: ["Back to the Future", "Amadeus", "Ghostbusters", "Rocky III"],
    answer: "Rocky III",
    questionId: 7
},
{
    question: "With twelve Oscar nominations and three wins, who is the most nominated male actor in Academy Awards history??",
    options: ["Dustin Hoffman", "Robert Redford", "Jack Nicholson", "Jeremy Irons"],
    answer: "Jack Nicholson",
    questionId: 8
},
{
    question: "Who won more Academy Awards in his lifetime than any other person?",
    options: ["Meryl Stripp", "Susan Sarandon", "Walt Disney", "Robert de Niro"],
    answer: "Walt Disney",
    questionId: 9
},
{
    question: "In the Harry Potter series, what is the name of Harry’s pet owl??",
    options: ["Hedwig", "Aragog", "Fluffy", "Fawkes"],
    answer: "Hedwig",
    questionId: 10
}];

function showWelcome() {
    showDiv("welcomeScreen");
    hideDiv("showQuiz");
    hideDiv("resultQuiz");
    hideDiv("timeOut");
    hideDiv("timer");
    hideDiv("submitButton");

}

function showDiv(el) {
    var display = document.getElementById(el).style.display;
    document.getElementById(el).style.display = 'block';
}

function hideDiv(el) {
    var display = document.getElementById(el).style.display;
    document.getElementById(el).style.display = 'none';
}

// function that starts the game
function startGame() {
    hideDiv("welcomeScreen");
    showDiv("showQuiz");
    hideDiv("resultQuiz");
    hideDiv("timeOut");
    showDiv("timer");
    showDiv("submitButton");
    displayQuiz();
    startTimer();
}


// function to show all the questions in the HTML page: 
function displayQuiz() {
    const output = []; // the variable who will keep questions and choices in HTML
    allQuestions.forEach((currentQuestion) => {

        // we'll want to store the list of answer choices
        const answers = [];

        // and for each available answer...
        var option;
        for (var i = 0; i < currentQuestion.options.length; i++) {
            option = currentQuestion.options[i];
            // ...add an HTML radio button
            answers.push(
                `<label>
                  <input type="radio" name="question${currentQuestion.questionId}" value="${option}">
                  ${option}
                </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>`
        );
    }
    );
    document.getElementById("showQuiz").innerHTML = output.join();
}

var counter = 60;
var timer;
function startTimer() {
    timer = setInterval(function () {
        document.getElementById("time-remaining").innerText = counter;
        console.log(counter--);
        if (counter < 0) {
            clearInterval(timer);
            showTimeOut();
        }
    }, 1000);
}

var correctAns = 0;
var incorrectAns = 0;
function checkAnswers() {
    for (var i = 0; i < allQuestions.length; i++) {
        var el = document.getElementsByName("question${allQuestions[i].questionId}");
        for (var j = 0; j < el.length; j++) {
            

            // TODO: check answers from array allQuestions with radio buttons.
            // TODO: show the answers in function showResults.
            // TODO: at the end, final style CSS.
        }
    }

};

function showResults() {
    hideDiv("showQuiz");
    showDiv("resultQuiz");
    hideDiv("timeOut");
    hideDiv("timer");
    hideDiv("submitButton");
};

function checkResults() {
    clearInterval(timer);
    showResults();    
}

function showTimeOut() {
    hideDiv("showQuiz");
    hideDiv("resultQuiz");
    showDiv("timeOut");
    hideDiv("timer");
    hideDiv("submitButton");
}