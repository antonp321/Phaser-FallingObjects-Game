/// <reference path = "../lib/typescript/phaser.d.ts"/>
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
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            this.game.load.image("MenuBackground", "imgs/MenuBackground.jpg");
            this.game.load.image("PlayMenuButton", "imgs/playButton.png");
            this.game.load.image("ExitMenuButton", "imgs/exitButton.png");
            this.game.load.image("GameFirstBackground", "imgs/firstBackground.jpg");
            this.game.load.image("GameSecondBackground", "imgs/secondBackground.png");
            this.game.load.image("GameThirdBackground", "imgs/thirdBackground.jpg");
            this.game.load.spritesheet("Explode", "imgs/explode.png", 128, 128);
            this.game.load.image("GameOverBackground", "imgs/blackBackground.jpg");
            this.game.load.image("Score", "imgs/scoreImage.png");
            this.game.load.image("MaxScore", "imgs/maxScore.png");
            this.game.load.image("ExitGame", "imgs/exitGame.png");
            this.game.load.image("PlayAgain", "imgs/playAgain.png");
        };
        Boot.prototype.create = function () {
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
            var boot = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, "MenuBackground");
            boot.anchor.set(0.5, 0.5);
            this.game.state.start("Menu");
        };
        return Boot;
    }(Phaser.State));
    FallingObjects.Boot = Boot;
})(FallingObjects || (FallingObjects = {}));
