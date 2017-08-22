/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="Game.ts"/>

module FallingObjects{
    export class GameOver extends Phaser.State{

        score:number;

        init(score:number, maxScore:string){
            this.score = score;
        }

        create(){

            let maxScore = localStorage.getItem("maxScore");

            this.game.add.sprite(0.5, 0.5, "GameOverBackground");

            let scoreImage = this.game.add.image(this.game.width*0.2, this.game.height *0.1, 'Score');
            let maxScoreImage = this.game.add.image(this.game.width*0.21, this.game.height *0.27, 'MaxScore');

            let playButton = this.game.add.button(this.game.width*0.52, this.game.height *0.55, "PlayAgain", this.startGame, this);
            this.game.add.text(this.game.width*0.57,this.game.height *0.14, this.score.toString(), { font: '74px Arial', fill: '#fff' });
            this.game.add.text(this.game.width*0.60,this.game.height *0.31, maxScore, { font: '74px Arial', fill: '#fff' });
            playButton.input.priorityID = 1;
            playButton.anchor.set(0.5);

            let exitButton = this.game.add.button(this.game.width*0.52, this.game.height * 0.7, "ExitGame", this.exitGame, this);
            exitButton.input.priorityID = 2;
            exitButton.anchor.set(0.5);
        }

        update(){

        }

        startGame(){
            this.game.state.start("Game");
        }

        exitGame(){
            window.close();
        }
    }
}