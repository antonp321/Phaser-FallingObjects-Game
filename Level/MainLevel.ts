/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="../GraphUtil/firstBackground.ts"/>

module FallingObjects{
    export class MainLevel {
        game : Phaser.Game;

        background: FirstBackground;
        levelGroup: Phaser.Group;
        backgroundImg: string;

        constructor(game:Phaser.Game, backgroundImg){
            this.game = game;
            this.backgroundImg = backgroundImg;
        }

        create(){
            this.levelGroup = this.game.add.group();
            this.background = new FirstBackground(this.game, this.backgroundImg, 2.5, this.levelGroup);

        }

        update(){

        }
    }
}