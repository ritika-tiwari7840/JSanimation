// Animation for navigation page

function navAnimation() {
    let canva = document.getElementById('navigation');
    console.log(canva)

    canva.width = window.innerWidth;
    canva.height = window.innerHeight;


    var c = canva.getContext('2d');


    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius

        this.draw = () => {

            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = '#e0115f'
            c.stroke();

        }

        this.update = () => {


            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx
            }

            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy
            }
            this.x += this.dx;  // this is velocity of circle as circle is moving 1px per frame 
            this.y += this.dy;

            this.draw();

        }
    }

    var circle = new Circle(200, 200, 3, 3, 10);


    var x = Math.random() * innerWidth;
    var dx = (Math.random() - 0.5) * 10;//for randow velocity 
    var radius = 30;
    var y = Math.random() * innerHeight;
    var dy = (Math.random() - 0.5) * 10;



    let circleArray = [];
    for (let i = 0; i < 100; i++) {

        var radius = 30;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 10;//for randow velocity 
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dy = (Math.random() - 0.5) * 10;

        circleArray.push(new Circle(x, y, dx, dy, 10))
    }

    function animate() {

        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight)


        circle.update();

        for (let index = 0; index < circleArray.length; index++) {
            circleArray[index].update()

        }

        if (x + radius > innerWidth || x - radius < 0) {
            dx = -dx
        }

        if (y + radius > innerHeight || y - radius < 0) {
            dy = -dy
        }
        x += dx;  // this is velocity of circle as circle is moving 1px per frame 
        y += dy;

    }

    animate();
}


navAnimation();



// for Instruction window

function instruct() {
    let homeContainer = document.getElementsByClassName("home-container");
    console.log("ritika", homeContainer);
    homeContainer[0].style.display = "none";
    let canva = document.getElementById('navigation');
    canva.style.display = "none";

    let instruct = document.getElementById('instruction');
    instruct.style.display = "flex";



}


function closeInstruct(){
    let instruct = document.getElementById('instruction');
    instruct.style.display = "none";
  gameAnimation();
}




function gameAnimation() {
  


        let gameContainer = document.getElementById("game-container");
        console.log(gameContainer)
        gameContainer.style.display = "flex";




        // for Event Listener

        let startX = 0, startY = 0, endX = 0, endY = 0;
        let isDragging = false;
        let distance = 0;

        // When mouse button is pressed, capturing the starting position
        window.addEventListener("mousedown", function (e) {
            startX = e.clientX;
            startY = e.clientY;
            isDragging = true;
        });

        // When mouse button is released, capturing the ending position and calculate distance
        window.addEventListener("mouseup", function (e) {
            if (isDragging) {
                endX = e.clientX;
                endY = e.clientY;
                isDragging = false;

                // Calculate distance using the Pythagorean theorem
                distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
                distance = distance.toFixed(0);
                animate();

            }
        });











        // for game logic

        let game = document.getElementById("game");

        var c = game.getContext('2d');
        var radius = 20;
        var y = game.height - radius;
        let objDist = 0;
        let dist = 0;
        let id;



        c.beginPath();
        c.arc(game.width - 150, y, 20, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.lineWidth = 5;
        c.stroke();

        function animate() {

            console.log("distance is ", distance);
            // requestAnimationFrame(animate);
            c.clearRect(0, 0, game.width, game.height);
            id = requestAnimationFrame(animate);
            c.beginPath();
            c.arc(game.width - 150, y, 20, 0, Math.PI * 2, false);
            c.strokeStyle = "blue";
            c.lineWidth = 5;
            c.stroke();
            if (dist == distance) {
                console.log("Animation stopped!", id);

                cancelAnimationFrame(id);
                if (dist == objDist) {

                    c.strokeStyle = "green";
                    c.stroke()
                }
                else {
                    c.strokeStyle = "red";
                    c.stroke();
                    // c.clearRect(0,0,game.width,game.height);
                    gameAnimation();
                    return;
                }
            }
            dist = dist + 1;
            y -= 0.5;
        }

    }



