const btnStartGame = document.getElementById('button-start-game');
const sectionLanding = document.getElementById('section-landing');
const sectionQuestion = document.getElementById('section-question');
const sectionEndGame = document.getElementById('section-end-game');
const spanTimer = document.getElementById('span-timer');
const questionTitle = document.getElementById('question-title');

let timerId;

// define a question
// title
// choices
  // title
  // isCorrect


// array 
// obj
// string
// number
// boolean
// null




// when the start game button is clicked
btnStartGame.addEventListener('click', function(event){

  showQuestionSection();

});

function endGame(){

  // end game
  // show the end game page
  sectionEndGame.classList.remove('hide');

  // stop the timer
  stopTimer()
  // hide the question section
  sectionQuestion.classList.add('hide');

}

function startTimer(){

  timerId = setInterval(function(){

    // deduct the time by 1
    const timeRemaining = Number(spanTimer.textContent) - 1;
    spanTimer.textContent = timeRemaining;

    // if timeremainig goes below 0
    if(timeRemaining <= 0){
      endGame();
    }
    // end game

  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}


function showQuestion(index){


  const question = questions[index];


  questionTitle.textContent = question.title;


}



function showQuestionSection(){

  // hide the landing page
  sectionLanding.classList.add('hide');
  // show the question section
  sectionQuestion.classList.remove('hide');

  // once we are in the question section
  
  // start the timer
  startTimer();
  

  showQuestion(0)

  // when the clicked on one of the choices
  // check if the choice is correct or not
  
  // if correct
  // display the correct feedback
  // then move on to the next qs
  
  // if wrong 
  // display the wrong feedback
  // deduct 10 sec from the remaining time
  
  // if after deducting the time, and time remaining becomes negative
  // -- end game
  // 
  
  // if time left remains positive,
  // move on to the next qs
  
  
  // if the use click on a choice in the last qs
  // end game
}










// end game section
// if user click on the submit button without entering any input
// show an alert, tell the user to type in an input

// user type in something & click on submit
// store the user initial & highscore in localstorage
// hide the end game page
// show the highscore page


// highscore page
// show all the previous highscore
// grab the data from localstorage

// when user clicked on 'back to home' -- refresh the page



