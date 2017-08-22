/// <reference path = "../../lib/typescript/phaser.d.ts"/>
///<reference path="Shape.ts"/>
///<reference path="../Explosion.ts"/>


module FallingObjects{
    export class Circle extends Shape{

        constructor(game:Phaser.Game){
            super({game:game, scoreGivenPerDestroyedShape:10, shapeTypeAsString:'circle', shapeVelocityNumber:115});
        }

        create(){
            super.create();
        }

        update(currentScore){
            super.update(currentScore);
        }
    }
}