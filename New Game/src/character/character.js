const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const CROPPED_IMG_WiDTH = 575;
const CROPPED_IMG_HEIGHT = 523;
let gameFrame = 0;
const staggerFrames = 10;

let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', (e) => {
  playerState = e.target.value;
});

const croppedImageAnimations = [];
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 7,
  },
  {
    name: 'run',
    frames: 9,
  },
  {
    name: 'dizzy',
    frames: 11,
  },
  {
    name: 'sit',
    frames: 5,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'bite',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 12,
  },
  {
    name: 'getHit',
    frames: 4,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * CROPPED_IMG_WiDTH;
    let positionY = index * CROPPED_IMG_HEIGHT;
    frames.loc.push({ x: positionX, y: positionY });
  }
  croppedImageAnimations[state.name] = frames;
});

console.log(croppedImageAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    croppedImageAnimations[playerState].loc.length;
  let frameX = CROPPED_IMG_WiDTH * position;
  let frameY = croppedImageAnimations[playerState].loc[position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    CROPPED_IMG_WiDTH,
    CROPPED_IMG_HEIGHT,
    0,
    0,
    CROPPED_IMG_WiDTH,
    CROPPED_IMG_HEIGHT
  );

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
