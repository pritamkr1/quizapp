let question = [
  {
    quiz: "What is your name?",
    aOption: "Pritam Kumar",
    bOption: "Shubham Kumar",
    cOption: "Rahul Kumar",
    dOption: "Raju Kumar",
  },
  {
    quiz: "where are you from",
    aOption: "Hazaribagh",
    bOption: "Ranchi",
    cOption: "Bokaro",
    dOption: "Dhanbaad",
  },
  {
    quiz: "what is your hobby",
    aOption: "Sleeping",
    bOption: "Coding",
    cOption: "reading",
    dOption: "Swimming",
  },
  {
    quiz: "favourite place",
    aOption: "Home",
    bOption: "office",
    cOption: "Garden",
    dOption: "School",
  },
];

//selecting item

const questionName = document.querySelector('.question-head');
const questionA = document.querySelector('#a-option');
const questionB = document.querySelector('#b-option');
const questionC = document.querySelector('#c-option');
const questionD = document.querySelector('#d-option');
const message = document.querySelector('.done');
const btnSubmit = document.querySelector('.btn-check');
const checkClass = document.querySelectorAll('.anwser');

let currentQuiz = 0;

let yourScore = 0;

function gotSelected(){
    let answer = undefined;
    checkClass.forEach(function(eachClass){
        
       if(eachClass.checked){
         return yourOption = eachClass.id;
       }
    });
    return answer;
}

function deSelected(){
    checkClass.forEach(function(eachClass){

        eachClass.checked = false;

    });
}



function showQuiz(){
    deSelected();
    let firstQuiz = question[currentQuiz];
    questionName.innerHTML = firstQuiz.quiz;
    questionA.textContent = firstQuiz.aOption;
    questionB.textContent = firstQuiz.bOption;
    questionC.textContent = firstQuiz.cOption;
    questionD.textContent = firstQuiz.dOption;

}

showQuiz();

btnSubmit.addEventListener('click', function(){
    gotSelected();

        currentQuiz++;
        if(currentQuiz < question.length){
            showQuiz();
        }else{
            var showMessage = `you are done!! and your score is ${yourScore}`;
            message.textContent = showMessage;
        }
    
    
   
});