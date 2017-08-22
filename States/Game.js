/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="../GameObjects/FallingObjects/Rect.ts"/>
///<reference path="../GameObjects/FallingObjects/Triangle.ts"/>
///<reference path="../GameObjects/FallingObjects/Circle.ts"/>
///<reference path="../Level/MainLevel.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FallingObjects;
(function (FallingObjects) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            return _super.call(this) || this;
        }
        Game.prototype.create = function () {
            var warning = "WARNING: Do NOT Touch The Red Ones...";
            var backgrounds = [
                'GameFirstBackground',
                'GameSecondBackground',
                'GameThirdBackground'
            ];
            var backgroundIndx = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
            this.currentLevel = new FallingObjects.MainLevel(this.game, backgrounds[backgroundIndx]);
            this.currentLevel.create();
            this.game.add.text(this.game.width * 0.66, this.game.height * 0.03, warning, { font: '16px Arial', fill: '#FF0000' });
            this.circle = new FallingObjects.Circle(this.game);
            this.circle.create();
            this.rect = new FallingObjects.Rect(this.game);
            this.rect.create();
            this.triangle = new FallingObjects.Triangle(this.game);
            this.triangle.create();
            this.score = 0;
            this.circleScorePerDestroyedObject = this.circle.getScoreGivenPerDestroyedShape();
            this.rectScorePerDestroyedObject = this.rect.getScoreGivenPerDestroyedShape();
            this.triangleScorePerDestroyedObject = this.triangle.getScoreGivenPerDestroyedShape();
            this.scoreText = this.game.add.text(10, 20, 'Score : ' + this.score, { font: '34px Arial', fill: '#fff' });
        };
        Game.prototype.update = function () {
            if (this.circle.getShapeScore() === this.circleScorePerDestroyedObject) {
                this.circleScorePerDestroyedObject += this.circle.getScoreGivenPerDestroyedShape();
                this.score += this.circle.getScoreGivenPerDestroyedShape();
            }
            if (this.rect.getShapeScore() === this.rectScorePerDestroyedObject) {
                this.rectScorePerDestroyedObject += this.rect.getScoreGivenPerDestroyedShape();
                this.score += this.rect.getScoreGivenPerDestroyedShape();
            }
            if (this.triangle.getShapeScore() === this.triangleScorePerDestroyedObject) {
                this.triangleScorePerDestroyedObject += this.triangle.getScoreGivenPerDestroyedShape();
                this.score += this.triangle.getScoreGivenPerDestroyedShape();
            }
            this.scoreText.text = 'Score : ' + this.score;
            this.circle.update(this.score);
            this.rect.update(this.score);
            this.triangle.update(this.score);
        };
        return Game;
    }(Phaser.State));
    FallingObjects.Game = Game;
})(FallingObjects || (FallingObjects = {}));
