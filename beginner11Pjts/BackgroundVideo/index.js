const videoEl = document.querySelector('.background-video');
const btnEl = document.querySelector('.btn');
const fa = document.querySelector('.fa-solid');

btnEl.addEventListener('click', function(){
    if(btnEl.classList.contains('pause')){
        btnEl.classList.remove('pause');
        videoEl.play();
        fa.classList.add('fa-pause');
        fa.classList.remove('fa-play');
    }
    else{
        btnEl.classList.add('pause')
        videoEl.pause();
        fa.classList.remove('fa-pause');
        fa.classList.add('fa-play');
    }
})



