const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const convertHex = ["F","E","D","C","B","A","9","8","7","6","5","4","3","2","1","0"]
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = '#'
    let textColor ='#'
    for (let i = 0; i < 6; i++) {
        var rdNum = getRandomNumber();
        hexColor += hex[rdNum];
        textColor += convertHex[rdNum];
    }

    color.textContent = hexColor;
    color.style.color= textColor;
    document.body.style.backgroundColor = hexColor;
});


function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}

