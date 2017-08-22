/// <reference path = "../lib/typescript/phaser.d.ts"/>
var FallingObjects;
(function (FallingObjects) {
    var Explosion = (function () {
        function Explosion(game) {
            this.game = game;
        }
        Explosion.prototype.create = function () {
            this.explosions = this.game.add.group();
            this.explosions.createMultiple(30, 'Explode');
            this.explosions.forEach(this.createExplosion, this);
        };
        Explosion.prototype.update = function () {
        };
        Explosion.prototype.createExplosion = function (expl) {
            expl.anchor.x = 0.5;
            expl.anchor.y = 0.5;
            expl.animations.add('Explode');
        };
        return Explosion;
    }());
    FallingObjects.Explosion = Explosion;
})(FallingObjects || (FallingObjects = {}));
