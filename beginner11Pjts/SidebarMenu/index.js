const sidebarEl = document.querySelector('.sidebar');
const showSideBarBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-times');



showSideBarBtn.addEventListener('click', function(){
    console.log(sidebarEl);
    sidebarEl.classList.toggle('show-sidebar');
})


closeBtn.addEventListener('click', ()=>{
    sidebarEl.classList.toggle('show-sidebar');

})