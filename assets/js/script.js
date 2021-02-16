
var  quizWrapper = document.getElementById('quiz');

var quiz = Array(
    {
        question: 'whats the CSS full meaning',
        ansList : {
            a: 'Casecading style sheet',
            b:'case style sheet',
            c: 'case style sign',
        },
        correctAns : 'a',
    },
    {
        question: 'whats the HTML full meaning?',
        ansList : {
            a: 'hypertext markup language',
            b: 'hypertext prgoraming language',
            c: 'hypertext multi lanuage',
        },
        correctAns : 'b',
    },
    {
        question: 'How do you create an object in JavaScript?',
        ansList : {
            a: 'var obj = {};',
            b:'function Foo() {} var obj = new Foo();',
            c: 'All of these work.',
            d: 'var obj = new Object();',
        },
        correctAns : 'c',
    },
    {
        question: 'Primitive types are passed by :',
        ansList : {
            a: 'Value',
            b: 'Pointer',
            c: 'Reference',
        },
        correctAns : 'a',
    },
);

function setMarkup(){
    var questionList = [];
    quiz.forEach((currentvalue, currentIndex) =>{
         var ansList = [];
            for(let ind in currentvalue.ansList){
                 var checked = '';
                 if(ind === 'a'){
                    checked = 'checked'
                 }
                // alert(ind);
                ansList.push(
                    `<div class="q-list">
                        <input type="radio" name="question${currentIndex}" value="${ind}" id="${ind}${currentIndex}" ${checked}>
                        <label for="${ind}${currentIndex}">${currentvalue.ansList[ind]}</label>
                    </div>
                    `
                )
            }
        questionList.push(
            `<div class="question-item">
                <h3> ${currentvalue.question} </h3>
                <div class="ans-items">
                     ${ansList}
                </div>
            </div>`
        );
    });
    document.getElementById("quiz").innerHTML = questionList.join("");

}

setMarkup();

// result
 
function quizResult(){
    const answerContainers = quizWrapper.querySelectorAll('.ans-items');
    var resultContainer = document.getElementById('resultContainer');
    let correctNumber = 0;

    quiz.forEach((currentvalue, currentIndex) =>{
        var  answerContainer = answerContainers[currentIndex];

        var selector = `input[name=question${currentIndex}]:checked`;
        var userAnswer =(answerContainer.querySelector(selector));
        var ans = userAnswer.value;
        var correct = currentvalue.correctAns;
        if(ans == correct){
            correctNumber++;
        }

    });
    alert(correctNumber);
}

// quizResult();

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', quizResult);

