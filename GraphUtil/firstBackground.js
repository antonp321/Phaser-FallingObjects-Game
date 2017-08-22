/// <reference path = "../lib/typescript/phaser.d.ts"/>
var FallingObjects;
(function (FallingObjects) {
    var FirstBackground = (function () {
        function FirstBackground(game, key, velocity, group) {
            this.game = game;
            this.image = this.game.add.sprite(0, 0, key, 0, group);
            this.velocity = velocity;
        }
        FirstBackground.prototype.update = function () {
        };
        return FirstBackground;
    }());
    FallingObjects.FirstBackground = FirstBackground;
})(FallingObjects || (FallingObjects = {}));
