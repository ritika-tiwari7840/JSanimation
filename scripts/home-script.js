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

// for closing instruction window


function closeInstruct() {
    let instruct = document.getElementById('instruction');
    instruct.style.display = "none";
    countAnimation(true);
}




// for showing hit and miss attempts of gift


function state(state,c) {
   
    let red = document.getElementById('red');
    red.style.display = 'flex';
    console.log(red.children)
    pChild = red.children[0];
    imgChild = red.children[1];
    btnChild = red.children[2];

    if (state == 0) {
        pChild.innerHTML = "You Miss The Gift";
        console.log(red.children);
    }
    else if (state == 1) {
        pChild = red.children[0];
        pChild.innerHTML = " Congrats !!! You got The Gift";

        imgChild = red.children[1];
        btnChild = red.children[2];
        btnChild.style.backgroundColor = "green";

        imgChild.setAttribute('src', 'images/pop.gif');
        imgChild.setAttribute('class', 'green');

    }

}

// to count number of attempts

let count = 1;
function countAnimation(boolVar) {
    let red = document.getElementById('red');
    red.style.display = 'none';
    let gift = document.getElementById('gift');
    if (count == 1) {
        gift.setAttribute('src', 'images/vim.png');
    }
    else if (count == 2) {
        gift.setAttribute('src', 'images/bottle.png');

    }
    else {
        gift.setAttribute('src', 'images/teddy.png');

    }
    if (count >= 1 && count <= 3) {
        count = count + 1;
        gameAnimation(boolVar);

    }




}


//game function for using game logics

function gameAnimation(boolVar) {



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

            console.log("In game Animation", boolVar);
            if (boolVar == true) {
                animate(boolVar);
            }

        }
    });


    // for game logic

    let game = document.getElementById("game");

    var c = game.getContext('2d');
    var radius = 20;
    var y = game.height - radius;
    let objDist = game.height;
    let dist = 0;
    let id;



    c.beginPath();
    c.arc(game.width - 150, y, 20, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.lineWidth = 5;
    c.stroke();

    function animate(boolVar) {

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
            if (dist >= objDist) {

                c.strokeStyle = "green";
                c.stroke();
                state(1,c)
            }
            else {

                c.strokeStyle = "red";
                c.stroke();

                state(0,c);


                return;
            }
        }
        dist = dist + 1;
        y -= 0.5;
    }

}



