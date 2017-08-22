/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="../GraphUtil/firstBackground.ts"/>
var FallingObjects;
(function (FallingObjects) {
    var MainLevel = (function () {
        function MainLevel(game, backgroundImg) {
            this.game = game;
            this.backgroundImg = backgroundImg;
        }
        MainLevel.prototype.create = function () {
            this.levelGroup = this.game.add.group();
            this.background = new FallingObjects.FirstBackground(this.game, this.backgroundImg, 2.5, this.levelGroup);
        };
        MainLevel.prototype.update = function () {
        };
        return MainLevel;
    }());
    FallingObjects.MainLevel = MainLevel;
})(FallingObjects || (FallingObjects = {}));
