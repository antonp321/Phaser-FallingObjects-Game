/// <reference path = "../lib/typescript/phaser.d.ts"/>

module FallingObjects {
    export class Boot extends Phaser.State{

        preload(){
            this.game.load.image("MenuBackground", "imgs/MenuBackground.jpg");
            this.game.load.image("PlayMenuButton", "imgs/playButton.png");
            this.game.load.image("ExitMenuButton", "imgs/exitButton.png");
            this.game.load.image("GameFirstBackground", "imgs/firstBackground.jpg");
            this.game.load.image("GameSecondBackground", "imgs/secondBackground.png");
            this.game.load.image("GameThirdBackground", "imgs/thirdBackground.jpg");
            this.game.load.spritesheet("Explode", "imgs/explode.png", 128, 128);
            this.game.load.image("GameOverBackground", "imgs/blackBackground.jpg");
            this.game.load.image("Score", "imgs/scoreImage.png");
            this.game.load.image("MaxScore", "imgs/maxScore.png");
            this.game.load.image("ExitGame", "imgs/exitGame.png");
            this.game.load.image("PlayAgain", "imgs/playAgain.png");
        }

        create(){
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
            let boot:Phaser.Image = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, "MenuBackground");
            boot.anchor.set(0.5, 0.5);
            this.game.state.start("Menu");
        }
    }
}
