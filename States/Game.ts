/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="../GameObjects/FallingObjects/Rect.ts"/>
///<reference path="../GameObjects/FallingObjects/Triangle.ts"/>
///<reference path="../GameObjects/FallingObjects/Circle.ts"/>
///<reference path="../Level/MainLevel.ts"/>


module FallingObjects {
    export class Game extends Phaser.State{

        circle: Circle;
        rect: Rect;
        triangle: Triangle;
        currentLevel: MainLevel;
        scoreText;
        score: number;

        circleScorePerDestroyedObject: number;
        rectScorePerDestroyedObject: number;
        triangleScorePerDestroyedObject: number;

        constructor(){
            super();
        }

        create(){

            let warning = "WARNING: Do NOT Touch The Red Ones...";

            let backgrounds = [
                'GameFirstBackground',
                'GameSecondBackground',
                'GameThirdBackground'
            ];


            let backgroundIndx = Math.floor(Math.random() * (2 - 0 + 1)) + 0;


            this.currentLevel = new MainLevel(this.game, backgrounds[backgroundIndx]);
            this.currentLevel.create();

            this.game.add.text(this.game.width*0.66,this.game.height *0.03, warning, { font: '16px Arial', fill: '#FF0000' });

            this.circle = new Circle(this.game);
            this.circle.create();

            this.rect = new Rect(this.game);
            this.rect.create();

            this.triangle = new Triangle(this.game);
            this.triangle.create();

            this.score = 0;
            this.circleScorePerDestroyedObject = this.circle.getScoreGivenPerDestroyedShape();
            this.rectScorePerDestroyedObject = this.rect.getScoreGivenPerDestroyedShape();
            this.triangleScorePerDestroyedObject = this.triangle.getScoreGivenPerDestroyedShape();

            this.scoreText = this.game.add.text(10, 20, 'Score : ' + this.score, { font: '34px Arial', fill: '#fff' });
        }

        update(){
            if(this.circle.getShapeScore() === this.circleScorePerDestroyedObject){
                this.circleScorePerDestroyedObject += this.circle.getScoreGivenPerDestroyedShape();
                this.score += this.circle.getScoreGivenPerDestroyedShape();
            }
            if(this.rect.getShapeScore() === this.rectScorePerDestroyedObject){
                this.rectScorePerDestroyedObject += this.rect.getScoreGivenPerDestroyedShape();
                this.score += this.rect.getScoreGivenPerDestroyedShape();
            }
            if(this.triangle.getShapeScore() === this.triangleScorePerDestroyedObject){
                this.triangleScorePerDestroyedObject += this.triangle.getScoreGivenPerDestroyedShape();
                this.score += this.triangle.getScoreGivenPerDestroyedShape();
            }
            this.scoreText.text = 'Score : ' + this.score;

            this.circle.update(this.score);
            this.rect.update(this.score);
            this.triangle.update(this.score);
        }
    }
}