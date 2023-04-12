let navbar = document.querySelector('.navbar');
document.querySelector("#menu-btn").onclick =() =>{
    navbar.classList.toggle('active');    
    cartiItem.classList.remove('active');
    searchItem.classList.remove('active');
}

let cartiItem = document.querySelector('.cart-items-container');
document.querySelector("#cart-btn").onclick =() =>{
    cartiItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
}

let searchItem = document.querySelector('.search-form');
document.querySelector("#search-btn").onclick =() =>{
    searchItem.classList.toggle('active');
    navbar.classList.remove('active');
    cartiItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartiItem.classList.remove('active');
    searchItem.classList.remove('active');
}