/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="Game.ts"/>
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
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameOver.prototype.init = function (score, maxScore) {
            this.score = score;
        };
        GameOver.prototype.create = function () {
            var maxScore = localStorage.getItem("maxScore");
            this.game.add.sprite(0.5, 0.5, "GameOverBackground");
            var scoreImage = this.game.add.image(this.game.width * 0.2, this.game.height * 0.1, 'Score');
            var maxScoreImage = this.game.add.image(this.game.width * 0.21, this.game.height * 0.27, 'MaxScore');
            var playButton = this.game.add.button(this.game.width * 0.52, this.game.height * 0.55, "PlayAgain", this.startGame, this);
            this.game.add.text(this.game.width * 0.57, this.game.height * 0.14, this.score.toString(), { font: '74px Arial', fill: '#fff' });
            this.game.add.text(this.game.width * 0.60, this.game.height * 0.31, maxScore, { font: '74px Arial', fill: '#fff' });
            playButton.input.priorityID = 1;
            playButton.anchor.set(0.5);
            var exitButton = this.game.add.button(this.game.width * 0.52, this.game.height * 0.7, "ExitGame", this.exitGame, this);
            exitButton.input.priorityID = 2;
            exitButton.anchor.set(0.5);
        };
        GameOver.prototype.update = function () {
        };
        GameOver.prototype.startGame = function () {
            this.game.state.start("Game");
        };
        GameOver.prototype.exitGame = function () {
            window.close();
        };
        return GameOver;
    }(Phaser.State));
    FallingObjects.GameOver = GameOver;
})(FallingObjects || (FallingObjects = {}));
