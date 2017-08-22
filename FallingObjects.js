/// <reference path = "lib/typescript/phaser.d.ts"/>
///<reference path="States/Menu.ts"/>
///<reference path="States/Game.ts"/>
///<reference path="States/GameOver.ts"/>
///<reference path="States/Boot.ts"/>
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
(function (FallingObjects_1) {
    var FallingObjects = (function (_super) {
        __extends(FallingObjects, _super);
        function FallingObjects(width, height) {
            var _this = _super.call(this, width, height, Phaser.AUTO, 'falling-objects', { create: function () { return _this.createIt(); } }) || this;
            _this.game = _this;
            return _this;
        }
        FallingObjects.prototype.createIt = function () {
            this.game.state.add("Boot", FallingObjects_1.Boot, false);
            this.game.state.add("Game", FallingObjects_1.Game, false);
            this.game.state.add("Menu", FallingObjects_1.Menu, false);
            this.game.state.add("GameOver", FallingObjects_1.GameOver, false);
            this.game.state.start("Boot");
        };
        return FallingObjects;
    }(Phaser.Game));
    FallingObjects_1.FallingObjects = FallingObjects;
    window.onload = function () {
        new FallingObjects(950, 660);
    };
})(FallingObjects || (FallingObjects = {}));
