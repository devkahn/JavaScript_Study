/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

let numberOfEnemies = 100;
let enemiesArray = [];

/*
enemy1  =  {
    x:0,
    y:0,
    width:200,
    height:200,
}
*/

class Enemy {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
        this.speed = Math.random() * 4  - 2;
        this.num = Date.now();
    }
    update(){
        this.x += this.speed;
        this.y += this.speed;
    }
    draw() {
        if(this.num % 2 === 0) ctx.fillRect(this.x, this.y, this.width, this.height);
        else ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
    
}


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enermy =>{
        enermy.update();
        enermy.draw();
    });

    requestAnimationFrame(animate);
}
animate();