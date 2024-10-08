// Animation for navigation page

function navAnimation(){
var canva = document.querySelector('canvas');
console.log(canva)

canva.width = window.innerWidth;
canva.height = window.innerHeight;


var c = canva.getContext('2d');


function Circle (x,y,dx,dy,radius){
this.x =x;
this.y =y;
this.dx =dx;
this.dy =dy;
this.radius=radius

this.draw=()=>{

    c.beginPath();
    c.arc(this.x,this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = '#e0115f'
    c.stroke();

}

this.update=()=>{

    
    if (this.x + this.radius > innerWidth ||this.x -this.radius <0) {
        this.dx = -this.dx
    }
    
    if (this.y + this.radius > innerHeight || this.y - this.radius <0) {
        this.dy = -this.dy
    }
    this.x += this.dx;  // this is velocity of circle as circle is moving 1px per frame 
    this.y+=this.dy;

this.draw();

}
}

var circle =new Circle(200,200,3,3,10);


var x = Math.random()*innerWidth;
var dx = ( Math.random()-0.5)*10;//for randow velocity 
var radius = 30;
var y=Math.random()*innerHeight;
var dy= (Math.random()-0.5)*10;



let circleArray=[];
for(let i =0; i<100; i++){

    var radius = 30;
    var x = Math.random()*(innerWidth-radius*2)+radius;
    var dx = ( Math.random()-0.5)*10;//for randow velocity 
    var y=Math.random()*(innerHeight-radius*2)+radius;
    var dy= (Math.random()-0.5)*10;

    circleArray.push(new Circle(x,y,dx,dy,10))
}

function animate() {
    
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)


    circle.update();

    for (let index = 0; index < circleArray.length; index++) {
    circleArray[index].update()
        
    }

    if (x + radius > innerWidth || x - radius <0) {
        dx = -dx
    }
    
    if (y + radius > innerHeight || y - radius <0) {
        dy = -dy
    }
    x += dx;  // this is velocity of circle as circle is moving 1px per frame 
    y+=dy;

}

animate();
}


navAnimation();



function gameAnimation(){

console.log("ritika")

}



