/// <reference path = "../lib/typescript/phaser.d.ts"/>

module FallingObjects{
    export class FirstBackground{
        game : Phaser.Game;
        image: Phaser.Sprite;
        velocity: number;

        constructor(game:Phaser.Game, key:string, velocity:number, group?:Phaser.Group){
            this.game = game;
            this.image = this.game.add.sprite(0, 0, key, 0, group);
            this.velocity = velocity;
        }

        update(){

        }

    }
}