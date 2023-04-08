const farBtnEl = document.querySelector(".fa-solid");
const menuEl  = document.querySelector(".menu");


farBtnEl.addEventListener('click', function(){
    if(menuEl.classList.contains('show-menu')){
        menuEl.classList.remove('show-menu');
    }
    else{
        menuEl.classList.add('show-menu');
    }


});