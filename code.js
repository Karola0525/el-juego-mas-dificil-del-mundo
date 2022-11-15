var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1267ea3b-f6b1-462d-80ed-0073bda6a268"],"propsByKey":{"1267ea3b-f6b1-462d-80ed-0073bda6a268":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/FBsDvrzaxjfRibHpzJH7Br8gzBq6O27K/category_faces/asterisk_circle.png","frameSize":{"x":132,"y":126},"frameCount":9,"looping":true,"frameDelay":2,"version":"FBsDvrzaxjfRibHpzJH7Br8gzBq6O27K","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":378},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FBsDvrzaxjfRibHpzJH7Br8gzBq6O27K/category_faces/asterisk_circle.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

calle1=createSprite(190,120,420,3)
calle2=createSprite(190,260,420,3)
var car1=createSprite(100,130,10,10)
car1.shapeColor="pink"
car1.setAnimation("car1")
car1.scale=0.2
var car2=createSprite(215,130,10,10)
car2.shapeColor="purple"
var car3=createSprite(165,250,10,10)
car3.shapeColor="purple"
var car4=createSprite(270,250,10,10)
car4.shapeColor="pink"
var sam=createSprite(20,190,13,13)
sam.shapeColor="blue"

car1.velocityY=8
car2.velocityY=8
car3.velocityY=-8
car4.velocityY=-8
var vidas=0

function draw() {
  background("white")
  textSize(20);
  fill("purple");
  
  text("Vidas: "+vidas, 150, 30);
  
  noStroke();
  fill("yellow");
  rect(0, 120, 52, 140);
  noStroke();
  fill("cyan");
  rect(345, 120, 52, 140);
   
  
  
  car1.bounceOff(calle1)
  car1.bounceOff(calle2)
  car2.bounceOff(calle1)
  car2.bounceOff(calle2)
  car3.bounceOff(calle1)
  car3.bounceOff(calle2)
  car4.bounceOff(calle1)
  car4.bounceOff(calle2)
  if (keyDown("right")) {
    sam.x=sam.x+2
    
  }
  if (keyDown("left")) {
    sam.x=sam.x-2
  }
  
  if (sam.isTouching(car1)||sam.isTouching(car2)|| sam.isTouching(car3)||sam.isTouching(car4)) {
    sam.x=20
    sam.y=190
    vidas=vidas+1
    
  }
  
  
  
  
  
  
  
  
  
  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
