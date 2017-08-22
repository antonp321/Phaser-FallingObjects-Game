/// <reference path = "../lib/typescript/phaser.d.ts"/>

module FallingObjects{
    export class Menu extends Phaser.State{

        create(){
            this.game.add.sprite(0.5, 0.5, "MenuBackground");

            let playButton = this.game.add.button(this.game.width*0.52, this.game.height *0.4, "PlayMenuButton", this.startGame, this);
            playButton.input.priorityID = 1;
            playButton.anchor.set(0.5);

            let exitButton = this.game.add.button(this.game.width*0.52, this.game.height * 0.6, "ExitMenuButton", this.exitGame, this);
            exitButton.input.priorityID = 0;
            exitButton.anchor.set(0.5);

        }

        update(){

        }

        startGame(){
            this.game.state.start("Game");
        }

        exitGame(){
            window.close();
        }
    }
}