let pipes = [];

function setup() {
  createCanvas(400, 400);
  makePipes();
  buttonAdd = createButton('Add');
  buttonAdd.mousePressed(add);

   buttonRandom = createButton('Random');
   buttonRandom.mousePressed(redo);

   buttonSort = createButton('Sort');
   buttonSort.mousePressed(sorty);

}

function draw() {
  background("#00F6F0");
  showPipes();



}

function makePipes() {
  
    var pipe = {
      x: 20 + 20 * pipes.length,
      y: 300,
      width: 15,
      height: random(-200),
      margin: 10
    };
    pipes.push(pipe);
  
  

}
function add(){
    if(pipes.length<18){
makePipes();
    console.log("b");
    }
}

function redo(){
   
    console.log(1);
}
ordonat = true;
function sorty() {
    let ordonat = false;k=0;
   while (!ordonat) {
      ordonat = true;k++;
      for (let i = 0; i <= pipes.length ; i++) {
        if ( pipes[i].height > pipes[i + 1].height) {
          ordonat = false;
          let aux = pipes[i].x;
          pipes[i].x = pipes[i + 1].x;
          pipes[i + 1].x = aux;
          console.log(1);
        }
      }
    }
  }
  

function showPipes() {

  for (let i = 0; i < pipes.length; i++) {
     ;
    rect(pipes[i].x, pipes[i].y, pipes[i].width, pipes[i].height);
  }
  
}
