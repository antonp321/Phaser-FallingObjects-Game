/// <reference path = "../../lib/typescript/phaser.d.ts"/>
///<reference path="Shape.ts"/>
///<reference path="../Explosion.ts"/>
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
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle(game) {
            return _super.call(this, { game: game, scoreGivenPerDestroyedShape: 10, shapeTypeAsString: 'circle', shapeVelocityNumber: 115 }) || this;
        }
        Circle.prototype.create = function () {
            _super.prototype.create.call(this);
        };
        Circle.prototype.update = function (currentScore) {
            _super.prototype.update.call(this, currentScore);
        };
        return Circle;
    }(FallingObjects.Shape));
    FallingObjects.Circle = Circle;
})(FallingObjects || (FallingObjects = {}));
