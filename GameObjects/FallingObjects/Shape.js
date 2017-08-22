/// <reference path = "../../lib/typescript/phaser.d.ts"/>
///<reference path="../Explosion.ts"/>
var FallingObjects;
(function (FallingObjects) {
    var Shape = (function () {
        function Shape(_a) {
            var game = _a.game, scoreGivenPerDestroyedShape = _a.scoreGivenPerDestroyedShape, shapeTypeAsString = _a.shapeTypeAsString, shapeVelocityNumber = _a.shapeVelocityNumber, _b = _a.circleDiameter, circleDiameter = _b === void 0 ? 50 : _b, _c = _a.rectWidth, rectWidth = _c === void 0 ? 30 : _c, _d = _a.rectHeight, rectHeight = _d === void 0 ? 30 : _d;
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
        Shape.prototype.getColorArray = function () {
            return this.colorArray;
        };
        Shape.prototype.setColorArray = function (colorArray) {
            this.colorArray = colorArray;
        };
        Shape.prototype.getCircleDiameter = function () {
            return this.circleDiameter;
        };
        Shape.prototype.setCircleDiameter = function (circleDiameter) {
            this.circleDiameter = circleDiameter;
        };
        Shape.prototype.getRectWidth = function () {
            return this.rectWidth;
        };
        Shape.prototype.setRectWidth = function (rectWidth) {
            this.rectWidth = rectWidth;
        };
        Shape.prototype.getRectHeight = function () {
            return this.rectHeight;
        };
        Shape.prototype.setRectHeight = function (rectHeight) {
            this.rectHeight = rectHeight;
        };
        Shape.prototype.getShapeScore = function () {
            return this.shapeScore;
        };
        Shape.prototype.getScoreGivenPerDestroyedShape = function () {
            return this.scoreGivenPerDestroyedShape;
        };
        Shape.prototype.getState = function () {
            return this.state;
        };
        Shape.prototype.setShapeRespawnHeightCordinates = function (shapeRespawnHeightCordinates) {
            this.shapeRespawnHeightCordinates = shapeRespawnHeightCordinates;
        };
        Shape.prototype.create = function () {
            this.state = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
            this.game.physics.arcade.enable(this.state);
            this.explosions = new FallingObjects.Explosion(this.game);
            this.explosions.create();
            this.shapeScore = 0;
            this.addShape(this.colorArray[0]);
        };
        Shape.prototype.update = function (currentScore) {
            this.totalScore = currentScore;
            for (var i = 0; i < this.state.children.length; i++) {
                var shape = this.state.children[i];
                this.checkShapePosition(shape, this.totalScore);
            }
        };
        Shape.prototype.checkShapePosition = function (shape, currentScore) {
            var shapesCurrentColor = shape.children[0].graphicsData[0].fillColor;
            if (shape.y > this.game.height + 15) {
                if (shapesCurrentColor !== this.colorArray[0]) {
                    var maximumScore = localStorage.getItem("maxScore");
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
                else {
                    shape.destroy();
                    var rndColorIndx = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
                    var rndColor = this.colorArray[rndColorIndx];
                    this.addShape(rndColor);
                }
            }
        };
        Shape.prototype.addShape = function (color) {
            var self = this;
            var x = Math.random() * (this.game.width - 40);
            var graphic = this.game.add.graphics(0, 0);
            graphic.lineStyle(5, 0x000000, 0.8);
            graphic.beginFill(color, 1);
            var shapeGraphic;
            switch (this.shapeTypeAsString) {
                case "circle":
                    shapeGraphic = graphic.drawCircle(0, 0, this.circleDiameter);
                    break;
                case "triangle":
                    shapeGraphic = graphic.moveTo(0, 0);
                    shapeGraphic.lineTo(40, 0);
                    shapeGraphic.lineTo(40, 40);
                    break;
                case "rect":
                    shapeGraphic = graphic.drawRect(0, 0, this.rectWidth, this.rectHeight);
                    break;
                default:
                    throw "The type of the shape doesnt match!";
            }
            graphic.endFill();
            var shape = this.state.create(x, this.shapeRespawnHeightCordinates, null);
            shape.addChild(shapeGraphic);
            shape.body.velocity.y = this.shapeVelocityNumber;
            shape.inputEnabled = true;
            if (this.colorArray[0] !== color) {
                shape.events.onInputDown.add(this.clickShapeListener, this);
            }
            else {
                shape.events.onInputDown.add(function () {
                    self.game.state.start("GameOver", false, false, self.totalScore);
                });
            }
            shape.events.onInputOver.add(function () {
                this.game.canvas.style.cursor = "all-scroll";
            }, this);
            shape.events.onInputOut.add(function () {
                this.game.canvas.style.cursor = "default";
            }, this);
        };
        Shape.prototype.clickShapeListener = function (shape) {
            var explosion = this.explosions.explosions.getFirstExists(false);
            explosion.reset(shape.body.x, shape.body.y);
            explosion.play('Explode', 30, false, true);
            shape.destroy();
            var rndColorIndx = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            var rndColor = this.colorArray[rndColorIndx];
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
        };
        return Shape;
    }());
    FallingObjects.Shape = Shape;
})(FallingObjects || (FallingObjects = {}));
