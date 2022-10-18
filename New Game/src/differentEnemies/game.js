window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 800;

  class Game {
    constructor(ctx, width, height) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.enemies = [];
      this.enemyInterval = 1000;
      this.enemyTimer = 0;
      this.enemyTypes = ['worm', 'ghost'];
    }
    update(deltaTime) {
      if (this.enemyTimer > this.enemyInterval) {
        this.enemies = this.enemies.filter((obj) => !obj.markedForDeletion);
        this.#addNewEnemy();
        this.enemyTimer = 0;
      } else {
        this.enemyTimer += deltaTime;
      }
      this.enemies.forEach((obj) => obj.update(deltaTime));
    }
    draw() {
      this.enemies.forEach((obj) => obj.draw(this.ctx));
    }
    #addNewEnemy() {
      const randomEnemy =
        this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
      if (randomEnemy == 'worm') this.enemies.push(new Worm(this));
      else if (randomEnemy == 'ghost') this.enemies.push(new Ghost(this));
      // this.enemies.sort((a, b) => {
      //   return a.y - b.y;
      // });
    }
  }

  class Enemy {
    constructor(game) {
      this.game = game;

      this.markedForDeletion = false;
    }
    update(deltaTime) {
      this.x -= this.vx * deltaTime;
      this.frame++;
      if (this.frame > 5) {
        this.frame = 0;
      }
      if (this.x < 0 - this.width) this.markedForDeletion = true;
    }
    draw(ctx) {
      ctx.drawImage(
        this.image,
        this.spriteWidth * this.frame,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  class Worm extends Enemy {
    constructor(game) {
      super(game);
      this.spriteWidth = 229;
      this.spriteHeight = 171;
      this.width = this.spriteWidth * 0.5;
      this.height = this.spriteHeight * 0.5;
      this.x = this.game.width;
      this.y = this.game.height - this.height;
      this.image = worm;
      this.frame = 0;
      this.vx = Math.random() * 0.1 + 0.1;
    }
  }
  class Ghost extends Enemy {
    constructor(game) {
      super(game);
      this.spriteWidth = 261;
      this.spriteHeight = 209;
      this.width = this.spriteWidth * 0.5;
      this.height = this.spriteHeight * 0.5;
      this.x = this.game.width;
      this.y = Math.random() * this.game.height * 0.5;
      this.image = ghost;
      this.frame = 0;
      this.vx = Math.random() * 0.2 + 0.1;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = 0.5;
      super.draw(ctx);
      ctx.restore;
    }
  }

  const game = new Game(ctx, canvas.width, canvas.height);

  let lastTime = 0;

  const animate = (timeStamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.update(deltaTime);
    game.draw();
    requestAnimationFrame(animate);
  };
  animate(0);
});
