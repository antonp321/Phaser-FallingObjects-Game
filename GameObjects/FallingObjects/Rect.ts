/// <reference path = "../../lib/typescript/phaser.d.ts"/>
///<reference path="Shape.ts"/>
///<reference path="../Explosion.ts"/>


module FallingObjects{
    export class Rect extends Shape{

        constructor(game:Phaser.Game){
            super({game:game, scoreGivenPerDestroyedShape:20, shapeTypeAsString:'rect', shapeVelocityNumber:95});
        }

        create(){
            super.create();
        }

        update(currentScore){
            super.update(currentScore);

            for(let i = 0; i < super.getState().children.length; i++){
                let rect = super.getState().children[i];
                rect.angle += 3;
            }
        }
    }
}