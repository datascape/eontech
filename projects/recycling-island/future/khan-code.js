/***********************************************************************************
* Recycling Island Code
* Click the canvas, then use UP, DOWN, LEFT, and Right to move and colect the trash!
* Kol Made This!!!
************************************************************************************/

// STEPS TO CONVERT FOR FROM KHAN TO WEB
// 1. include this line to setup a 400x400 pixel canvas
void setup() { 
  size(400, 400); 
} 
// 2. Replace mouseIsPressed with mousePressed. And keyIsPressed with keyPressed.
// 3. Change "var draw = function()" to "void draw()" below.
// 4. Update "background" lines to add 0 value for transparency.

// The next two will already be done by reusing the 5 lines that follow...
// 5. Change "getImage" to "loadImage" below.
// 6. Change images to local file paths.

var Avatar = loadImage("../img/pem/sketchup/pembot-sm.png");
var Trash = loadImage("../img/icons/agua_64.png");
var Diamond1 = loadImage("../img/icons/diamond-blue.png");
var Diamond2 = loadImage("../img/icons/diamond-green.png");
var Diamond3 = loadImage("../img/icons/diamond-orange.png");
var BiggerBoatMetalCost = 40;
var BiggerBoatSyngasCost = 25;
var DiggingDeeperCost = 100;
var BiggerBoatMetalCost1 = 40;
var BiggerBoatSyngasCost1 = 25;
var DiggingDeeperCost1 = 100;
var Diamondtype = 0;
var PickDiamond = 0;
var DiamondX = 1;
var DiamondY = 1;
var DiamondXend = 40;
var DiamondYend = 40;
var xpos = 100;
var ypos = 200;
var step = 8;
var trashX = 1;
var trashY = 1;
var trashYend = 40;
var trashXend = 20;
var HeavyMetals = 0;
var SynGas = 0;
var SynGasGain = 1;
var HeavyMetalGain = 1;
var DiamondRandom = 0;
var DiamondLuck = 48;
var UpgradeList = false;
var DiamondCost = 0;
var Powertime = 0;
var PowerRunout = 29;
var Length = 128;
var X = 271;
var Y1 = 55;
var YP1 = 40;
var Y2 = 94;
var YP2 = 28;
var Y3 = 123;
var YP3 = 31;
var Y4 = 155;
var YP4 = 34;
var Y5 = 190;
var YP5 = 17;
var Y6 = 208;
var YP6 = 17;
var Y7 = 225;
var YP7 = 20;
var batterysize = 100;
var recharges = 5;
var recharging = true;
var moving = false;
var tick = 0;
minute();
background(0, 13, 255, 0);

void draw() {
    background(0, 13, 255, 0);

    tick--;
    
    moving = false;
    
    Powertime++;
    
    if(Powertime > PowerRunout && SynGas > 0 && recharging === false) {
        Powertime = 0;
        SynGas = SynGas - 1;
    }
    
    if(SynGas > batterysize) {
        SynGas = batterysize;
    }
    
    PowerRunout = 29;
    
    BiggerBoatMetalCost1 = BiggerBoatMetalCost - 1;
    BiggerBoatSyngasCost1 = BiggerBoatSyngasCost - 1;
    DiggingDeeperCost1 = DiggingDeeperCost - 1;
            
        if(SynGas > 0 && recharging === false) {
            if (keyPressed && keyCode === RIGHT){
                xpos = xpos + step;
                moving = true;
            }
            
            if (keyPressed && keyCode === DOWN){
                ypos = ypos + step;
                moving = true;
            }
            
            if (keyPressed && keyCode === UP){
                ypos = ypos - step;
                moving = true;
            }
            
            if (keyPressed && keyCode === LEFT){
                xpos = xpos - step;
                moving = true;
            }
        }
        
    if (xpos > 310) {
        xpos = 309;
    }
    
    if (xpos < -26) {
        xpos = -25;
    }
    
    if (ypos > 275) {
        ypos = 274;
    }
    
    if (ypos < -26) {
        ypos = -25;
    }
    
    if(moving === true) {
        PowerRunout = 19;
    }
    
    if (xpos > trashX && xpos < trashXend && ypos > trashY &&  ypos < trashYend) {
        trashX = random(40,230);
        trashY = random(0,230);
        HeavyMetals = HeavyMetals + HeavyMetalGain;
        if(SynGas < batterysize) {
            SynGas = SynGas + SynGasGain;
        }
        DiamondRandom = random(0,DiamondLuck);
    }
    
    if (xpos > DiamondX && xpos < DiamondXend && ypos > DiamondY && ypos < DiamondYend && Diamondtype > 0) {
       HeavyMetals = HeavyMetals + HeavyMetalGain;
       SynGas = SynGas + SynGasGain;
       DiamondRandom = 0;
       Diamondtype = 0;
    }
    
    if (DiamondRandom > 48 && PickDiamond < 1) {
        DiamondX = random(40,220);
        DiamondY = random(0,230);
        Diamondtype = 1;
        DiamondRandom = 0;
    }
    
        if (DiamondRandom > 48 && PickDiamond < 2 && PickDiamond > 0.999999999999999999999999999999999999999999) {
        DiamondX = random(40,300);
        DiamondY = random(0,230);
        Diamondtype = 2;
        DiamondRandom = 0;
    }
    
        if (DiamondRandom > 48 && PickDiamond < 3.1 && PickDiamond > 1.999999999999999999999999999999999999999999) {
        DiamondX = random(40,300);
        DiamondY = random(0,230);
        Diamondtype = 3;
        DiamondRandom = 0;
    }
    
    if (Diamondtype === 1) {
        image(Diamond1,DiamondX,DiamondY);
    }
    
        if (Diamondtype === 2) {
        image(Diamond2,DiamondX,DiamondY);
    }
    
        if (Diamondtype === 3) {
        image(Diamond3,DiamondX,DiamondY);
        }
    
    /***
    if (mousePressed && mouseX > 274 && mouseX < 399 && mouseY > 58 && mouseY < 96 && HeavyMetals > 19) {
        SynGasGain = SynGasGain + 1;
        HeavyMetals = HeavyMetals - 20;
    }
    
    if(mousePressed && mouseX > 274 && mouseX < 399 && mouseY > 98 && mouseY < 140 && SynGas > 19) {
        SynGas = SynGas - 20;
        HeavyMetalGain = HeavyMetalGain + 3;
    }
    
    if(mousePressed && mouseX > 274 && mouseX < 399 && mouseY > 141 && mouseY < 186 && HeavyMetals > 39 && SynGas > 24) {
        HeavyMetalGain = HeavyMetalGain + 10;
        SynGasGain = SynGasGain + 10;
        HeavyMetals = HeavyMetals - 40;
        SynGas = SynGas - 25;
    }
    
    if(mousePressed && mouseX > 274 && mouseX < 399 && mouseY > 186 && mouseY < 246 && HeavyMetals > 99 && SynGas > 99) {
        DiamondLuck++;
        HeavyMetals = HeavyMetals - 100;
        SynGas = SynGas - 100;
    }
    
    if(mousePressed && mouseX > 274 && mouseX < 399 && mouseY > 246 && mouseY < 290 && HeavyMetals > 49 && SynGas > 44) {
        step++;
        HeavyMetals = HeavyMetals - 50;
        SynGas = SynGas - 45;
    }
    ***/

    if(mousePressed && mouseX > 274 && mouseX < 399 && mouseY > 0 && mouseY < 15 && UpgradeList === false && tick <= 0) {
        UpgradeList = true;
        tick = 10;
    }

    
    if(mousePressed && mouseX > 274 && mouseX < 399 && mouseY > 0 && mouseY < 15 && UpgradeList === true && tick <= 0) {
        UpgradeList = false;
        tick = 10;
    }
    

    //UpgradeList
    if(UpgradeList === true) {
    fill(0, 0, 0);
    rect(X,Y1,Length,YP1);
    fill(255, 255, 255);
    text("SynGas production line\n$20",272,75);
    
    fill(0, 0, 0);
    rect(X,Y2,Length,YP2);
    fill(255, 255, 255);
    text("HeavyMetal\nProduction Line $20",275,107);
    
    fill(0, 0, 0);
    rect(X,Y3,Length,YP3);
    fill(255, 255, 255);
    text("More Bots!\n$"+BiggerBoatMetalCost,275,136);
    
    fill(0, 0, 0);
    rect(X,Y4,Length,YP4);
    fill(255, 255, 255);
    text("Digging Deeper!!!\n$"+DiggingDeeperCost,275,168);
    
    fill(0, 0, 0);
    rect(X,Y5,Length,YP5);
    fill(255, 255, 255);
    text("Better Motors! $50",275,199);
    
    fill(0, 0, 0);
    rect(X,Y6,Length,YP6);
    fill(255, 255, 255);
    text("Rusty Motors! $55",275,218);
    
    fill(0, 0, 0);
    rect(X,Y7,Length,YP7);
    fill(255, 255, 255);
    text("Battery size+ $80",275,238);
        
    if(mousePressed && mouseX > X && mouseX < 399 && mouseY > Y1 && mouseY < (YP1+Y1) && HeavyMetals > 19 && recharging === false && tick <= 0) {
        SynGasGain = SynGasGain + 1;
        HeavyMetals = HeavyMetals - 20;
        tick = 10;
    }
    
    if(mousePressed && mouseX > X && mouseX < 399 && mouseY > Y2 && mouseY < (YP2+Y2) && SynGas > 19 && recharging === false && tick <= 0) {
        SynGas = SynGas - 20;
        HeavyMetalGain = HeavyMetalGain + 1;
        tick = 10;
    }
    
    if(mousePressed && mouseX > X && mouseX < 399 && mouseY > Y3 && mouseY < (YP3+Y3) && HeavyMetals > BiggerBoatMetalCost1-1 && SynGas > BiggerBoatSyngasCost-1 && recharging === false && tick <= 0) {
        HeavyMetalGain = HeavyMetalGain + 10;
        SynGasGain = SynGasGain + 10;
        HeavyMetals = HeavyMetals - BiggerBoatMetalCost;
        SynGas = SynGas - BiggerBoatSyngasCost;
        BiggerBoatMetalCost = BiggerBoatMetalCost * 2;
        BiggerBoatSyngasCost = BiggerBoatSyngasCost * 2;
        tick = 10;
    }
    
    if(mousePressed && mouseX > X && mouseX < 399 && mouseY > Y4 && mouseY < (YP4+Y4) && HeavyMetals > DiggingDeeperCost1-1 && SynGas > DiggingDeeperCost1-1 && recharging === false && tick <= 0) {
        DiamondLuck++;
        DiamondCost = DiamondCost + 10;
        HeavyMetals = HeavyMetals - DiggingDeeperCost;
        SynGas = SynGas - 10;
        DiggingDeeperCost = DiggingDeeperCost + 20;
        tick = 10;
    }
    
    if(mousePressed && mouseX > X && mouseX < 399 && mouseY > Y5 && mouseY < (YP5+Y5) && HeavyMetals > 49 && SynGas > 44 && recharging === false && tick <= 0) {
        step++;
        HeavyMetals = HeavyMetals - 50;
        SynGas = SynGas - 45;
        tick = 10;
    }
    
    if(mousePressed && mouseX > X && mouseX < 399 && mouseY > Y6 && mouseY < (YP6+Y6) && SynGas > 54 && HeavyMetals > 59 && recharging === false && tick <= 0) {
        HeavyMetals = HeavyMetals - 60;
        SynGas = SynGas - 55;
        step--;
        tick = 10;
    }
    
    if(mousePressed && mouseX > X && mouseX < 399 && mouseY > Y7 && mouseY < (YP7+Y7) && SynGas > 19 && HeavyMetals > 79 && recharging === false && tick <= 0) {
        HeavyMetals = HeavyMetals - 80;
        SynGas = SynGas - 20;
        batterysize = batterysize + 10;
        tick = 10;
    }
        
}
    
    PickDiamond = random(0,3);
    image(Avatar,xpos,ypos);
    image(Trash,trashX,trashY);
    trashXend = trashX + 50;
    trashYend = trashY + 110;
    DiamondXend = DiamondX + 100;
    DiamondYend = DiamondY + 100;
    fill(255, 255, 255);
    text("Value Collected $"+HeavyMetals,2,11);
    text("Power Remaining "+ SynGas + "/" + batterysize + " vA",2,25);
 /***   
    fill(255, 0, 0);
    rect(271,55,128,41);
    fill(17, 74, 112);
    text("SinGas production line\nHeavyMetal cost = 20",275,75);
    fill(255, 0, 0);
    rect(271,96,128,42);
    fill(17, 74, 112);
    text("HeavyMetal\nProduction Line\nSinGas cost = 20",275,107);
    fill(255, 0, 0);
    rect(271,138,128,46);
    fill(17, 74, 112);
    text("Bigger Boats!!!\nHeavyMetal Cost = 40\nSinGas Cost = 25",275,152);
    
    fill(255, 0, 0);
    rect(271,184,128,60);
    fill(17, 74, 112);
    text("Diamonds!!!\nHeavyMetal\nCost = 100\nSinGas Cost = 100",275,199);
    
    fill(255, 0, 0);
    rect(271,244,128,44);
    fill(17, 74, 112);
    text("Speed!!!\nHeavyMetal Cost = 50\nSinGasCost = 45",275,257);
    
    fill(255, 0, 0);
    rect(271,288,128,45);
    fill(17, 74, 112);
    text("Slowness!!!\nHeavyMetal Cost = 60\nSinGas Cost = 55",275,300);
    ***/


    fill(0, 0, 0);
    rect(271,0,128,15);
    fill(255, 255, 255,255);

    if(UpgradeList === false){
        text("Show modifications",275,12);
    }else if(UpgradeList === true){
        text("Hide modifications",275,12);
    }
    
    fill(255, 0, 0);
    //text("X = "+mouseX,100,100);
    //text("Y = "+mouseY,100,120);
    
    fill(0, 0, 0);
    rect(271,380,128,20);
    fill(255, 255, 255);
    text("Recharge " + recharges + " left",275,395);
    
        if(mousePressed && mouseX > 271 && mouseX < 399 && mouseY > 380 && mouseY < 399 && recharges > 0 && SynGas === 0) {
            recharges--;
            recharging = true;
        }
        
        if(SynGas < 100 && recharging === true) {
            SynGas++;
        }
        
        if(SynGas === 100 && recharging === true) {
            recharging = false;
        }
};
