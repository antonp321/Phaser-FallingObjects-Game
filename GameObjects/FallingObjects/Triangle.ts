/// <reference path = "../../lib/typescript/phaser.d.ts"/>
///<reference path="Shape.ts"/>
///<reference path="../Explosion.ts"/>


module FallingObjects{
    export class Triangle extends Shape{

        constructor(game:Phaser.Game){
            super({game:game, scoreGivenPerDestroyedShape:30, shapeTypeAsString:'triangle', shapeVelocityNumber:130});
        }

        create(){
            super.create();
        }

        update(currentScore){
            super.update(currentScore);

            for(let i = 0; i < super.getState().children.length; i++){
                let triangle = super.getState().children[i];
                triangle.angle += 2;
            }
        }
    }
}