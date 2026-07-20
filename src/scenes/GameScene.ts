import Phaser from "phaser";
import Player from "../entities/Player";

export default class GameScene extends Phaser.Scene{
    player!: Player;
    constructor(){
        super("GameScene");
    }
    create(){
        this.player = new Player(this,640,360);
        this.cameras.main.startFollow(this.player);
    }
    update(){
        this.player.update();
    }
}