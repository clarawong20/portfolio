/* Description: Processing Assignment #1
   Author: Clara Wong
   Last Date of Edit: November 2, 2018
   Artwork: https://vidalcuglietta.com/wp-content/uploads/2018/07/winter-painting-ideas-best-of-175-best-winter-art-lessons-images-on-pinterest-of-winter-painting-ideas.jpg 
   */
   
   //Snow
   float[] xAxis = new float[300];
   float[] yAxis = new float[300];
   float[] yMovement = new float[300];
   float[] flakeSize = new float[300];
   float smallFlakeSize = 1.5;
   float bigFlakeSize = 6;
   
   //Timer for blinking circle
   float time;
   String info;
   
   void settings() {
     size(600, 700);
  
   }
   
   void setup() {
     noStroke();
     smooth();
    
     for(int loop = 0; loop < 300; loop++) {
      xAxis[loop] = random(width);
      yAxis[loop] = random(height);
      yMovement[loop] = random(0.5, 1.5);
      flakeSize[loop] = random(smallFlakeSize, bigFlakeSize); 
   } 
   }
   
   void draw() {
     background(79, 117, 139);
     
     //Snowy Ground behind the fence
     fill(255);
     triangle(10, 460, 0, 490, 0, height);
     triangle(10, 460, 0, height, 400, 655);
     arc(380, 700, 240, 280, radians(45), radians(405));
     quad(400, 563, 422, 700, 600, 700, 600, 630);
     arc(300, 620, 300, 100, radians(360), radians(580)); 
     triangle(345, 565, 180, 590, 230, 700);
     triangle(600, 630, 600, 590, 500, 600);
     
     //Tree
     fill(5, 5, 5);
     strokeWeight(1);
     rectMode(CORNERS);
     rect(442, height, 485, 385);
     rect(440, 400, 470, 700);
     strokeWeight(15);
     stroke(0);
     line(480, 480, 560, 450);
     line(560, 450, 600, 420);
     strokeWeight(14);
     line(460, 195, 330, 120);
     line(467, 195, 469, 170);
     line(469, 165, 430, 55);
     line(477, 195, 535, 0);
     line(380, 147, 335, 5);
     line(335, 5, 130, 10);
     line(430, 55, 405, 0);
     line(527, 30, 565, 0);
     line(512, 70, 500, 0);
     strokeWeight(10);
     line(545, 450, 560, 380);
     line(545, 460, 600, 470);
     line(310, 118, 250, 95);
     line(350, 65, 160, 60);
     line(160, 60, 130, 80);
     line(160, 60, 120, 50);
     line(440, 90, 480, 35);
     line(550, 160, 565, 100);
     line(565, 100, 600, 60);
     line(550, 50, 600, 45);
     line(325, 397, 260, 420);
     line(280, 330, 250, 340);
     line(350, 295, 280, 280);
     line(330, 119, 200, 119);
     line(430, 55, 370, 0);
     line(505, 20, 450, 0);
     line(510, 80, 600, 10);
     strokeWeight(12);
     line(485, 280, 600, 200);
     line(520, 256, 600, 235);
     line(485, 275, 550, 160);
     line(550, 160, 580, 130);
     line(580, 130, 600, 135);
     line(460, 410, 250, 390);
     line(460, 400, 415, 260);
     line(460, 400, 280, 330);
     line(460, 400, 290, 240);
     strokeWeight(7);
     line(561, 380, 551, 330);
     line(560, 380, 520, 335);
     line(265, 120, 200, 160);
     line(420, 170, 400, 120);
     line(400, 120, 407, 95);
     line(400, 120, 390, 93); 
     line(350, 398, 300, 370);
     line(380, 400, 350, 440);
     line(280, 330, 240, 290);
     line(308, 260, 240, 240);
     line(415, 260, 380, 230);
     line(415, 260, 415, 220);
     line(428, 310, 445, 280);
     strokeWeight(1);
     rect(458, 410, 484, 230);
     triangle(484, 318, 445, 190, 484, 190); 
     triangle(440, 405, 415, 405, 440, 425);
    
     //Horizontal Fence Poles
     stroke(105, 148, 170);
     strokeWeight(9);
     line(0, 480, 10, 480);
     line(0, 550, 10, 550);
     line(7, 480, 73, 490);
     line(7, 550, 73, 575);
     line(73, 490, 138, 520);
     line(73, 575, 138, 580); 
     line(138, 525, 213, 525);
     line(138, 583, 213, 586);
     line(213, 525, 288, 550);
     line(213, 586, 288, 598);
     line(288, 550, 350, 555);
     line(288, 608, 350, 605); 
     stroke(112, 160, 173);
     line(350, 553, 427, 568);
     line(350, 609, 427, 609);
     line(427, 568, 500, 595);
     line(427, 620, 500, 645);
     line(500, 595, 590, 595);
     line(500, 645, 590, 638);
     
     //Circle behind bird and vertical fence
     fill(169, 212, 232);
     noStroke();
     ellipse(213, 485, 35, 35);
    
     //White circle behind last fence pole
     fill(255);
     ellipse(590, 565, 26, 26);
    
     //Vertical Fence Poles
     strokeWeight(1);
     noStroke();
     fill(105, 148, 170);
     rect(5, 450, 15, height); 
     rect(68, 465, 78, height);
     rect(133, 480, 143, height);
     rect(208, 495, 218, height);
     rect(283, 520, 293, height);
     rect(345, 530, 355, height);
     fill(144, 190, 193);
     rect (422, 550, 432, height);
     rect(505, 560, 515, height);
     rect (585, 560, 595, height);
          
     //Snow on fence and trees
     stroke(255);
     strokeWeight(7);
     line(100, 493, 130, 510); 
     line(220, 520, 260, 535);
     line(341, 547, 310, 545);
     line(418, 559, 402, 555);
     line(435, 562, 470, 576);
     line(290, 385, 323, 390);
     line(390, 395, 440, 400);
     line(485, 468, 520, 455);
     line(555, 445, 580, 425);
     line(325, 282, 295, 275);
     line(485, 257, 500, 230);
     line(430, 170, 460, 185);    
     line(330, 110, 365, 130);    
     line(600, 40, 570, 41);
     strokeWeight(5);
     line(600, 230, 560, 240);
     line(595, 130, 580, 125);
     line(580, 125, 560, 140);
     line(460, 185, 462, 170);
     line(390, 10, 410, 30);
     line(435, 42, 444, 71);
     line(210, 115, 250, 115);
    
     
     //Snowy Ground at the bottom
     fill(255);
     noStroke();
     triangle(0, 600, 0, 700, width, 700); 
     rect(396, 680, width, 700);
       
    //White Circles that change colours when mouse is pressed
    fill(255);
    if (mousePressed) {
       fill(random(131, 213), random(183, 237), random(143, 218));
     
      } 
     ellipse(90, 0, 30, 30);
     ellipse(440, 0, 30, 30);
     ellipse(530, 30, 30, 30);
     ellipse(105, 50, 30, 30);
     ellipse(300, 80, 41, 41);
     ellipse(380, 105, 25, 25);
     ellipse(25, 170, 25, 25);
     ellipse(250, 160, 28, 28);
     ellipse(550, 140, 28, 28);
     ellipse(140, 230, 28, 28);
     ellipse(380, 180, 26, 26);
     ellipse(575, 178, 30, 30);
     ellipse(200, 280, 27, 27);
     ellipse(255, 265, 27, 27);
     ellipse(450, 275, 28, 28);
     ellipse(70, 310, 25, 25);
     ellipse(210, 330, 26, 26);
     ellipse(340, 310, 26, 26);
     ellipse(60, 390, 30, 30);
     ellipse(240, 410, 26, 26);
     ellipse(530, 380, 25, 25);
     ellipse(165, 500, 25, 25);
     ellipse(380, 490, 23, 23); 
      
     //Super Light Blue Circles
     fill(169, 212, 232);
     ellipse(480, 40, 30, 30);
     ellipse(435, 110, 30, 30);
     ellipse(580, 500, 26, 26);
     
     //Light Blue Circles to dark blue circles
    fill(131, 177, 206);
    info = "Time: " + time;
    text(info, 5, 695);
    
    time = time +1;
    
    if(time > 100) {
      fill(53, 85, 106);
      
    }
    if(time > 200) {
      fill (131, 177, 206);
      time = 0;
    }

     ellipse(40, 30, 35, 35);
     ellipse(310, 10, 25, 25);
     ellipse(375, 7, 25, 25);
     ellipse(530, -10, 35, 35);
     ellipse(580, -8, 50, 50);
     ellipse(45, 80, 35, 35);
     ellipse(385, 80, 25, 25);
     ellipse(600, 110, 28, 28);
     ellipse(190, 120, 28, 28);
     ellipse(300, 145, 28, 28);
     ellipse(280, 185, 23, 23);
     ellipse(105, 270, 25, 25);
     ellipse(225, 265, 25, 25);
     ellipse(385, 235, 25, 25);
     ellipse(30, 310, 28, 28);
     ellipse(270, 288, 26, 26);
     ellipse(600, 253, 27, 27);
     ellipse(140, 330, 26, 26);
     ellipse(520, 340, 23, 23);
     ellipse(70, 370, 28, 28);
     ellipse(260, 365, 26, 26);
     ellipse(330, 430, 24, 24); 
     
     //Dark Blue Circles to light blue circles
     fill(53, 85, 106);
     if (time > 100) {
       fill(131, 177, 206);
     }
     if (time > 200) {
       fill(53, 85, 106);
       time = 0;
     }
     ellipse(130, 10, 33, 33);
     ellipse(335, 20, 27, 27); 
     ellipse(465, 10, 25, 25);
     ellipse(120, 90, 28, 28);
     ellipse(330, 98, 26, 26);
     ellipse(405, 100, 28, 28);
     ellipse(485, 95, 30, 30);
     ellipse(600, 65, 30, 30);
     ellipse(40, 130, 29, 29);
     ellipse(200, 160, 28, 28);
     ellipse(465, 150, 24, 24);
     ellipse(600, 170, 30, 30);
     ellipse(55, 230, 27, 27);
     ellipse(240, 240, 27, 27);
     ellipse(420, 220, 28, 28);
     ellipse(130, 290, 27, 27);
     ellipse(230, 290, 30, 30);
     ellipse(45, 370, 30, 30);
     ellipse(235, 385, 30, 30);
     ellipse(100, 450, 30, 30);
     ellipse(350, 450, 30, 30);
     ellipse(580, 530, 27, 27);
     ellipse(550, 325, 27, 27);
     
     //Green Circles to grey circles
     fill(155, 180, 174);
     if (time > 50) {
       fill(122, 135, 142);
     }
     if (time > 150) {
       fill(155, 180, 174);
       time = 0;
     }
     ellipse(10, 10, 34, 34);
     ellipse(220, 25, 30, 30);
     ellipse(310, 30, 27, 27);
     ellipse(490, 2, 34, 34);
     ellipse(570, 25, 27, 27);
     ellipse(410, 72, 27, 27);
     ellipse(110, 130, 26, 26);
     ellipse(430, 145, 24, 24);
     ellipse(20, 350, 27, 27);
     ellipse(325, 333, 25, 25);
     ellipse(170, 380, 28, 28);
     ellipse(592, 350, 28, 28);
     ellipse(90, 425, 28, 28);
     ellipse(340, 500, 27, 27);
     ellipse(280, 228, 30, 30);
     ellipse(590, 193, 26, 26);
     
     //Dark Grey Circles to green circles
     fill(122, 135, 142);
       if (time > 50) {
       fill(155, 180, 174);
     }
     if (time > 150) {
       fill(122, 135, 142);
       time = 0;
     }

     ellipse(395, 35, 32, 32);
     ellipse(180, 85, 26, 26);
     ellipse(240, 92, 26, 26);
     ellipse(600, 87, 24, 24);
     ellipse(80, 180, 28, 28);
     ellipse(195, 145, 25, 25);
     ellipse(340, 160, 26, 26);
     ellipse(200, 210, 26, 26);
     ellipse(393, 212, 26, 26);
     ellipse(160, 305, 27, 27);
     ellipse(530, 315, 26, 26);
     ellipse(600, 315, 30, 30);
     ellipse(290, 365, 32, 32);    
     ellipse(605, 400, 26, 26);
     ellipse(40, 440, 27, 27);
     ellipse(150, 430, 24, 24);
     ellipse(260, 427, 26, 26);
     ellipse(325, 455, 27, 27);
     ellipse(410, 445, 25, 25);
     ellipse(545, 520, 27, 27);
     
     //Red Bird on Fence (in painting)
     stroke(0);
     strokeWeight(3);
     line(mouseX, mouseY + 20, mouseX, mouseY + 15); //feet
     line(mouseX, mouseY + 20, mouseX - 4, mouseY + 20);
     noStroke();
     fill(196, 16, 16);
     triangle(mouseX, mouseY + 15, mouseX - 13, mouseY, mouseX + 14, mouseY); //body
     triangle(mouseX - 13, mouseY, mouseX + 5, mouseY, mouseX - 3, mouseY - 20); //wings
     fill(0);
     triangle(mouseX - 11, mouseY + 3, mouseX - 11, mouseY - 5, mouseX - 17, mouseY); //beak
     //mouseX = 213
     //mouseY = 475
    
     //Snow
     for(int loop = 0; loop < 300; loop++) {
       fill(225);
       ellipse(xAxis[loop], yAxis[loop], flakeSize[loop], flakeSize[loop]);
       yAxis[loop] += yMovement[loop];
     
     if (yAxis[loop] > height) {
       yAxis[loop] = 0;
       }
     if (xAxis[loop] > width) {
       xAxis[loop] = 0;
      
     }
     }

       }
     
