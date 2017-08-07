var w = 600;
var h = 400;

void setup() { 
  size(w, h);
}

void draw() {
  //fill(255,0,0);
  //ellipse(200,200,10,10);
  //rect(200,205,10,10);
  //fill(255,255,255);
  //text('e',200,210);
  
  background(0,0,0);
 
  fill(player.skin[0],player.skin[1],player.skin[2]);
  //ears
  ellipse(player.x-6-player.face*2,player.y-12,4,4);
  ellipse(player.x+6+player.face*2,player.y-12,4,4);
   // head
  ellipse(player.x,player.y-10,12+player.face*4,20);
  
  // arms
  rect(player.x-10,player.y+8,4,4);
  rect(player.x+6,player.y+8,4,4);
  
  // tshirt
  fill(player.tColor[0],player.tColor[1],player.tColor[2]);
  rect(player.x-6,player.y,12,10);
  rect(player.x-10,player.y,4,8);
  rect(player.x+6,player.y,4,8);
  
  /*
  // hat
  rect(player.x-player.face-6, player.y-25, player.face*2+12, 5);
  fill(0,0,100);
  rect(player.x-player.face-6-3, player.y-21, 3, 2);
  */
  
  // tshirt logo
  fill(255,255,255);
  text(player.tshirt,player.x-3,player.y+9);
 
  // eye whites
  fill(255,255,255);
  ellipse(player.x-3-player.face,player.y-11,4,5);
  ellipse(player.x+3+player.face,player.y-11,4,5);
  
  //pupils
  fill(0,0,0);
  ellipse(player.x-3-player.face,player.y-11,1,1);
  ellipse(player.x+3+player.face,player.y-11,1,1);
  
  // mouth
  rect(player.x-3,player.y-5,6,1);
  
  // hair
  for(x = player.x-player.face*2+6, x <= player.x+player.face*x+6; x+=2) {
    ellipse(x,y-20,2,2);
  }
  
  //pants
  fill(0,100,0);
  rect(player.x-4,player.y+10,8,4);
  rect(player.x-4,player.y+14,3,4);
  rect(player.x+2, player.y+14,3,4);
  
  //shoes
  fill(0,0,0);
  rect(player.x-5,player.y+19,5,2);
  rect(player.x+2,player.y+19,5,2);
  
  
}
