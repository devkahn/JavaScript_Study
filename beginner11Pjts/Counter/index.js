

const valueEl = document.querySelector('.value');
const plusBtn = document.querySelector('.btn-plus');
const minusBtn = document.querySelector('.btn-minus');
const resetBtn = document.querySelector('.btn-reset');


let value = 0;

resetBtn.addEventListener('click', ()=>{
    value = 0;
    setValue();

});

plusBtn.addEventListener('click', function(){
    value++;
    setValue();
})

minusBtn.addEventListener('click', function(){
    value--;
    setValue();
})


function setValue(){
    valueEl.innerText = value;
    if(value>0){
        valueEl.style.color='darkgreen';

    }
    else if(value <0){
        valueEl.style.color = 'red';
    }
    else{
        valueEl.style.color = 'black';
    }
}