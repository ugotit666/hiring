// Prepare pixi.js
const app = new PIXI.Application({ backgroundColor: 0xFFFFFF });

document.body.appendChild(app.view);

// Create Eve
const eve = new PIXI.Container();
const eveBody = new PIXI.Graphics();
eveBody.beginFill(0xFFC4CE);
eveBody.drawRect(0, 0, 100, 100);

eve.addChild(eveBody);
eve.pivot.set(eveBody.width / 2, eveBody.height);
eve.position.set(app.screen.width / 2, app.screen.height);

app.stage.addChild(eve);

const initVelocity = { x: 0, y: -10 };
let velocity = initVelocity;

// Define game loop
const gameLoop = () => {
  // Example code
  // eve.y += velocity.y;
  // if (eve.y < eve.height || eve.y > app.screen.height) {
  //   velocity.y = -velocity.y;
  // }

  requestAnimationFrame(gameLoop);
};

// Start the game loop
gameLoop();
