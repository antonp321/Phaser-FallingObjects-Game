/// <reference path = "../../lib/typescript/phaser.d.ts"/>
///<reference path="../Explosion.ts"/>

module FallingObjects{
    import Sprite = Phaser.Sprite;
    export class Shape {

        game : Phaser.Game;
        state: Phaser.Group;
        explosions: Explosion;
        colorArray;
        increaseDifficultyCounter: number;
        shapeScore: number;
        scoreGivenPerDestroyedShape: number;
        shapeTypeAsString: string;
        shapeVelocityNumber: number;
        totalScore: number;
        shapeRespawnHeightCordinates: number;
        circleDiameter: number;
        rectWidth:number;
        rectHeight:number;

        constructor({game, scoreGivenPerDestroyedShape, shapeTypeAsString, shapeVelocityNumber, circleDiameter = 50, rectWidth = 30, rectHeight = 30}: {game:Phaser.Game, scoreGivenPerDestroyedShape:number, shapeTypeAsString:string, shapeVelocityNumber:number, circleDiameter?: number, rectWidth?:number, rectHeight?:number}){
            this.game = game;
            this.circleDiameter = circleDiameter;
            this.rectWidth = rectWidth;
            this.rectHeight = rectHeight;
            this.shapeTypeAsString = shapeTypeAsString;
            this.shapeVelocityNumber = shapeVelocityNumber;
            this.scoreGivenPerDestroyedShape = scoreGivenPerDestroyedShape;
            this.colorArray = [0xFF0000, 0xFFFF00, 0x00FF00, 0x0000FF, 0xFFAA00, 0xFFFFFF, 0x669999, 0x666633, 0x660066, 0x003300];
            this.shapeRespawnHeightCordinates = -40;
            this.increaseDifficultyCounter = 0;
            this.shapeScore = 0;
        }

        getColorArray(){
            return this.colorArray;
        }

        setColorArray(colorArray){
            this.colorArray = colorArray;
        }

        getCircleDiameter():number{
            return this.circleDiameter;
        }

        setCircleDiameter(circleDiameter){
            this.circleDiameter = circleDiameter;
        }

        getRectWidth():number{
            return this.rectWidth;
        }

        setRectWidth(rectWidth){
            this.rectWidth = rectWidth;
        }

        getRectHeight():number{
            return this.rectHeight;
        }

        setRectHeight(rectHeight){
            this.rectHeight = rectHeight;
        }

        getShapeScore():number{
            return this.shapeScore;
        }

        getScoreGivenPerDestroyedShape():number{
            return this.scoreGivenPerDestroyedShape;
        }

        getState():Phaser.Group{
            return this.state;
        }

        setShapeRespawnHeightCordinates(shapeRespawnHeightCordinates){
            this.shapeRespawnHeightCordinates = shapeRespawnHeightCordinates;
        }

        create(){
            this.state = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
            this.game.physics.arcade.enable(this.state);

            this.explosions = new Explosion(this.game);
            this.explosions.create();
            this.shapeScore = 0;

            this.addShape(this.colorArray[0]);
        }

        update(currentScore){
            this.totalScore = currentScore;
            for(let i = 0; i < this.state.children.length; i++){
                let shape = this.state.children[i];
                this.checkShapePosition(shape, this.totalScore);
            }
        }

        checkShapePosition(shape, currentScore){
            let shapesCurrentColor = shape.children[0].graphicsData[0].fillColor;

            if (shape.y > this.game.height + 15)
            {
                if(shapesCurrentColor !== this.colorArray[0]) {

                    let maximumScore = localStorage.getItem("maxScore");

                    if (maximumScore === null) {
                        localStorage.setItem("maxScore", currentScore.toString());
                        maximumScore = currentScore.toString();
                    }
                    else {
                        if (parseInt(maximumScore) <= currentScore) {
                            maximumScore = currentScore.toString();
                            localStorage.setItem("maxScore", currentScore.toString());
                        }
                    }
                    this.game.state.start("GameOver", false, false, currentScore);
                }
                else{
                    shape.destroy();

                    let rndColorIndx = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
                    let rndColor = this.colorArray[rndColorIndx];

                    this.addShape(rndColor);
                }
            }
        }

        addShape(color){
            let self = this;
            let x = Math.random() * (this.game.width - 40);
            let graphic = this.game.add.graphics(0, 0);
            graphic.lineStyle(5, 0x000000, 0.8);
            graphic.beginFill(color, 1);
            let shapeGraphic;
            switch(this.shapeTypeAsString){
                case "circle":
                    shapeGraphic = graphic.drawCircle(0, 0, this.circleDiameter);
                    break;
                case "triangle":
                   shapeGraphic = graphic.moveTo(0,0);
                   shapeGraphic.lineTo(40,0);
                   shapeGraphic.lineTo(40,40);
                    break;
                case "rect":
                    shapeGraphic = graphic.drawRect(0, 0, this.rectWidth, this.rectHeight);
                    break;
                default:
                    throw "The type of the shape doesnt match!";
            }
            graphic.endFill();
            let shape = this.state.create(x, this.shapeRespawnHeightCordinates, null);
            shape.addChild(shapeGraphic);
            shape.body.velocity.y = this.shapeVelocityNumber;
            shape.inputEnabled = true;

            if(this.colorArray[0] !== color) {
                shape.events.onInputDown.add(this.clickShapeListener, this);
            }
            else{
                shape.events.onInputDown.add(function(){
                    self.game.state.start("GameOver", false,false, self.totalScore);
                });
            }

            shape.events.onInputOver.add(function () {
                this.game.canvas.style.cursor = "all-scroll";
            }, this);

            shape.events.onInputOut.add(function(){
                this.game.canvas.style.cursor = "default";
            }, this);
        }

        clickShapeListener(shape) {

                let explosion = this.explosions.explosions.getFirstExists(false);
                explosion.reset(shape.body.x, shape.body.y);
                explosion.play('Explode', 30, false, true);

                shape.destroy();

                let rndColorIndx = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
                let rndColor = this.colorArray[rndColorIndx];

                this.addShape(rndColor);

                if (this.increaseDifficultyCounter === 5) {
                    this.addShape(0xFF0000);
                }
                else if (this.increaseDifficultyCounter === 15) {
                    this.addShape(0xFF0000);
                }
                else if (this.increaseDifficultyCounter === 25) {
                    this.addShape(0xFF0000);
                }
                else if (this.increaseDifficultyCounter === 35) {
                    this.addShape(0xFF0000);
                }

                this.shapeScore += this.scoreGivenPerDestroyedShape;

                this.increaseDifficultyCounter += 1;

                this.game.canvas.style.cursor = "default";

        }

    }
}