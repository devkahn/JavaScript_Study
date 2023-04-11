const choiceBtnd = document.querySelectorAll('.btn');
const rockBtn = document.querySelector('.btn-rock');
const paperBtn = document.querySelector('.btn-paper');
const scissorsBtn = document.querySelector('.btn-scissors');
const gameBnt = document.querySelector('.btn-play');

console.log(choiceBtnd);

let userChoiceIndex = 0;

rockBtn.addEventListener('click', function(){
    clearActive();
    rockBtn.classList.add('btn-active');
    setUserChoice(1);
})
paperBtn.addEventListener('click', function(){
    clearActive();
    paperBtn.classList.add('btn-active');
    setUserChoice(2);
})
scissorsBtn.addEventListener('click', function(){
    clearActive();
    scissorsBtn.classList.add('btn-active');
    setUserChoice(3);
})
gameBnt.addEventListener('click', function(){
    let comNum =Math.floor((Math.random()*3)+1);
    console.log("user:" + userChoiceIndex +"/ Com :" + comNum);
    if(userChoiceIndex === comNum){
        alert('비김');
    }
    else if(
        (userChoiceIndex === 1 && comNum === 3) ||
        (userChoiceIndex === 2 && comNum === 1) ||
        (userChoiceIndex === 3 && comNum === 2)
    ){
        alert('이김');
    }
    else{
        alert('짐');
    }
})



function clearActive(){
    choiceBtnd.forEach(function(btn){
        if(btn.classList.contains('btn-active')){
            btn.classList.remove('btn-active');
        } 
    });
}

function setUserChoice(userChoice){
    userChoiceIndex = userChoice;
    const userChoiceEl = document.querySelector('.user-choice h5');

    let choiceText ;
    if(userChoiceIndex === 1){
        choiceText = 'Rock';
    }
    else if(userChoiceIndex ===2){
        choiceText = 'Paper';
    }
    else if(userChoiceIndex ===3){
        choiceText = 'Scissors';
    }
    else{
        choiceText='NONE';
    }
    userChoiceEl.innerText = "User Choice : " + choiceText;
}

