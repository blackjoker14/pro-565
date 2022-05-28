function preload() {
  
  img =("")
  
}

function setup() {
  
  canvas = createCanvas(600, 400);
  canvas.position(390,250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  
  image(video, 150, 100, 300, 200);

  tint(tint_color);
  fill(0, 250, 40);
  rect(80, 38, 450, 20);
  rect(80, 340, 450, 20);

  rect(40,70,20, 300);
  rect(540,70,20, 300);
  
  fill(255,0,0)
  circle(50,50, 90, 90);
  circle(550,50, 90, 90);
  circle(50,350, 90, 90);
  circle(550,350, 90, 90);


}


function take_snapshot(){
  save('student_name.png');
}

