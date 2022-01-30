///////////////////////////////////////////////////////////////////////////////////////////////////
/////BELANGRIJK
/////
/////Voordat je gebruik gaat maken van deze code eerst tijdelijke toegang aanvragen via deze link: https://cors-anywhere.herokuapp.com/corsdemo
/////
/////Hierna kan je het project bekijken zonder CORS foutmeldingen.
/////Je zult echter niet alle afbeeldingen kunnen inladen vanwege beperkte toegang.
///////////////////////////////////////////////////////////////////////////////////////////////////

let index = 0
let pokeimg
let icoon

function preload(){
  pokedex = loadJSON('data/pokedex.json')
  pokeimg = loadImage("https://cors-anywhere.herokuapp.com/http://www.serebii.net/pokemongo/pokemon/001.png")
 }


function setup() {
  createCanvas(windowWidth, windowHeight)
  background(240)
  ////////////
  //Draw Pokedex
  ////////////
  let x = width/2-400
  let y = height/2-300
  
  //Linkerkant
  strokeWeight(4);
  stroke('black');
  //Rode achtervlak
  fill('#DC0B2E');
  beginShape();
  vertex(x, y);
  vertex(x, y+600);
  vertex(x+750, y+600);
  vertex(x+750, y+100);
  vertex(x+600, y+100);
  vertex(x+500, y+50);
  vertex(x+400, y+50);
  vertex(x+400, y);
  vertex(x, y);
  endShape();
  //Schaduw
  stroke("#8D172B");
  strokeWeight(6);
  line(x+4, y+105, x+200, y+105)
  line(x+200, y+105, x+300, y+55);
  line(x+300, y+55, x+348, y+55);

  //Scharnier
  //Schaduw
  fill("#8D172B");
  noStroke();
  rect(x+390, y+50, 10, 550)
  //Licht
  fill("#E6657D");
  rect(x+360, y+50, 5, 550);
  //Scharnier zelf
  strokeWeight(4);
  stroke('black');
  noFill();
  rect(x+350, y+50, 50, 550);
  rect(x+350, y+50, 50, 50);
  rect(x+350, y+550, 50, 50);

  //Zwarte lijnen details
  line(x+398, y+50, x+300, y+50);
  line(x+300, y+50, x+200, y+100);
  line(x+200, y+100, x+2, y+100);

  strokeWeight(2);
  noFill();
  beginShape();
  vertex(x+7, y+107);
  vertex(x+7, y+594);
  vertex(x+344, y+594);
  vertex(x+344, y+59);
  vertex(x+300, y+59);
  vertex(x+200, y+107);
  vertex(x+7, y+107);
  endShape();

  //Linksbovenvlak
  strokeWeight(2);
  stroke('black');
  fill("#DAE4DB")
  circle(x+50, y+50, 65)
  fill('#4EA5DC');
  circle(x+50, y+50, 50);
  noStroke();
  fill("#A5D8F6");
  circle(x+45, y+45, 15);

  strokeWeight(2);
  stroke('black');
  fill('red');
  circle(x+100 ,y+20 ,15);
  fill('yellow');
  circle(x+125 ,y+20 ,15);
  fill('green');
  circle(x+150 ,y+20 ,15);

  //Scherm
  //Grijs buiten
  strokeWeight(3);
  fill("#DEDEDE");
  beginShape();
  vertex(x+50, y+150);
  vertex(x+50, y+320);
  vertex(x+80, y+350);
  vertex(x+300, y+350);
  vertex(x+300, y+150);
  vertex(x+50, y+150);
  endShape();

  //Details
  strokeWeight(2);
  stroke('Black');
  fill("red");
  circle(x+155, y+163, 10);
  circle(x+195, y+163, 10);
  circle(x+85, y+330, 15);
  line(x+250, y+325, x+274, y+325);
  line(x+250, y+332, x+274, y+332);
  line(x+250, y+339, x+274, y+339);

  //Onder scherm
  strokeWeight(4);
  fill("#232324")
  circle(x+50, y+400, 40)

  fill("#232324")
  beginShape();
  vertex(x+259, y+450);
  vertex(x+259, y+484);
  vertex(x+225, y+484);
  vertex(x+225, y+516);
  vertex(x+259, y+516);
  vertex(x+259, y+550);
  vertex(x+291, y+550);
  vertex(x+291, y+516);
  vertex(x+325, y+516);
  vertex(x+325, y+484);
  vertex(x+291, y+484);
  vertex(x+291, y+450);
  vertex(x+259, y+450);
  endShape();

  //Rechterkant
  //Rode schaduw lijn
  noFill();
  strokeWeight(4);
  stroke("#8D172B");
  beginShape();
  vertex(x+410, y+60);
  vertex(x+410, y+591);
  vertex(x+740, y+591);
  vertex(x+740, y+110);
  vertex(x+598, y+110);
  vertex(x+498, y+60);
  vertex(x+410, y+60);
  endShape();
  //Zwarte lijnen detail
  stroke("black");
  strokeWeight(2);
  beginShape();
  vertex(x+407, y+57);
  vertex(x+407, y+594);
  vertex(x+743, y+594);
  vertex(x+743, y+107);
  vertex(x+598, y+107);
  vertex(x+498, y+57);
  vertex(x+407, y+57);
  endShape();

  //Blauw scherm eronder
  fill("#4DA2DA");
  stroke("black");
  rect(x+450, y+250, 250, 100);
  strokeWeight(2);
  for(i=0;i<4;i++){
    line(x+500+(50*i),y+250, x+500+(50*i), y+350)
 
  }
  line(x+450, y+300, x+700, y+300);

  //Onder details
  strokeWeight(4);
  fill("#232324")
  rect(x+650, y+370, 50, 10, 20)
  rect(x+590, y+370, 50, 10, 20)

  fill("#DEDEDE")
  rect(x+450, y+425, 120, 50);
  strokeWeight(2);
  line(x+510, y+425, x+510, y+475);

  //Pijlen
  line(x+525, y+450, x+555, y+450);
  line(x+545, y+440, x+555, y+450);
  line(x+545, y+460, x+555, y+450);

  line(x+465, y+450, x+495, y+450);
  line(x+465, y+450, x+475, y+440);
  line(x+465, y+450, x+475, y+460);

  fill("#232324");
  strokeWeight(4);
  rect(x+450, y+525, 100, 30, 7);
  rect(x+600, y+525, 100, 30, 7);
}

function draw() {
let x = width/2-400
let y = height/2-300
//Bovenscherm
strokeWeight(4);
stroke('black');
fill("#51AE60");
rect(x+450, y+150, 250, 75, 5);
fill('Black');
noStroke();
textAlign(CENTER);
textSize(20);
text(pokedex.pokemon[index].name, x+575, y+180)
textAlign(LEFT)
  textSize(12);
  text(`WEIGHT:`, x+480, y+197)
text(pokedex.pokemon[index].weight + " kg", x+480, y+215)  
  text(`HEIGHT:`, x+610, y+197)
  text(pokedex.pokemon[index].height + " m", x+610, y+215)

//Linksonder scherm
strokeWeight(4);
stroke("black");
fill("#51AE60")
rect(x+50, y+450, 150, 100, 10)
noStroke();
fill("black");
text("POKEDEX NR.:", x+65, y+475)
text(pokedex.pokemon[index].num, x+65, y+493)
text("CAUGHT:", x+65, y+511)
text(pokedex.pokemon[index].caught, x+65, y+529)

//Rechterkant Gele lamp

strokeWeight(4);
stroke("black");
    fill("yellow")
    circle(x+680, y+450, 50)

//Pokemon afbeelding
imageMode(CENTER);
  //Scherm zelf
  noStroke();
  fill("#232324");
  rect(x+75, y+175, 200, 140, 5);
  image(pokeimg, x+175, y+245, 180, 120);

//console.log(pokeimg)

//Next - Prev evolution
strokeWeight(4);
stroke('black')
if(pokedex.pokemon[index].prev_evolution){
  fill('lime')
  rect(x+100, y+397, 50, 10, 20)
}else{
  fill("red")
  rect(x+100, y+397, 50, 10, 20)
}
if(pokedex.pokemon[index].next_evolution){
  fill("lime");
  rect(x+175, y+397, 50, 10, 20)
}else{
  fill("#1A5E80");
  rect(x+175, y+397, 50, 10, 20)
}

}


function finishedLoadingData(data){
  pokedex = data  
}

function mousePressed(){
  let x = width/2-400
  let y = height/2-300

  if (mouseX > x+510 && mouseX < x+570 && mouseY > y+425 && mouseY < y+475){
    index++
  }
  if (mouseX > x+450 && mouseX < x+510 && mouseY > y+425 && mouseY < y+475){
    index--
  }

  if (index >= pokedex.pokemon.length){
    index = 0
}
if (index < 0){
  index = 150
}

pokeimg = loadImage('https://cors-anywhere.herokuapp.com/' + pokedex.pokemon[index].img)
}
