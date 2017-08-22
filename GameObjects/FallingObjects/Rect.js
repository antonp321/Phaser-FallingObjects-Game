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
    var Rect = (function (_super) {
        __extends(Rect, _super);
        function Rect(game) {
            return _super.call(this, { game: game, scoreGivenPerDestroyedShape: 20, shapeTypeAsString: 'rect', shapeVelocityNumber: 95 }) || this;
        }
        Rect.prototype.create = function () {
            _super.prototype.create.call(this);
        };
        Rect.prototype.update = function (currentScore) {
            _super.prototype.update.call(this, currentScore);
            for (var i = 0; i < _super.prototype.getState.call(this).children.length; i++) {
                var rect = _super.prototype.getState.call(this).children[i];
                rect.angle += 3;
            }
        };
        return Rect;
    }(FallingObjects.Shape));
    FallingObjects.Rect = Rect;
})(FallingObjects || (FallingObjects = {}));
