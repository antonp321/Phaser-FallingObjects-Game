/// <reference path = "../lib/typescript/phaser.d.ts"/>

module FallingObjects{
    export class Explosion{
        game: Phaser.Game;
        explosions : Phaser.Group;

        constructor(game:Phaser.Game){
            this.game = game;
        }

        create(){
            this.explosions = this.game.add.group();
            this.explosions.createMultiple(30, 'Explode');
            this.explosions.forEach(this.createExplosion, this);
        }

        update(){

        }

        createExplosion(expl) {
            expl.anchor.x = 0.5;
            expl.anchor.y = 0.5;
            expl.animations.add('Explode');
        }

    }
}