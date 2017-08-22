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
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Menu.prototype.create = function () {
            this.game.add.sprite(0.5, 0.5, "MenuBackground");
            var playButton = this.game.add.button(this.game.width * 0.52, this.game.height * 0.4, "PlayMenuButton", this.startGame, this);
            playButton.input.priorityID = 1;
            playButton.anchor.set(0.5);
            var exitButton = this.game.add.button(this.game.width * 0.52, this.game.height * 0.6, "ExitMenuButton", this.exitGame, this);
            exitButton.input.priorityID = 0;
            exitButton.anchor.set(0.5);
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype.startGame = function () {
            this.game.state.start("Game");
        };
        Menu.prototype.exitGame = function () {
            window.close();
        };
        return Menu;
    }(Phaser.State));
    FallingObjects.Menu = Menu;
})(FallingObjects || (FallingObjects = {}));
