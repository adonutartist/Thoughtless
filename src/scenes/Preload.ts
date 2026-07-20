import Phaser from "phaser";

export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    preload(){
        this.load.atlas("atlas","assets/atlas/atlas.webp", "assets/atlas/atlas.json");
    }
    create(){
        this.createPlayerAnimations();
        this.scene.start("GameScene");
    }
    private createPlayerAnimations(){
        this.anims.create({
            key: "player-idle",
            frames: this.anims.generateFrameNames("atlas",{prefix: "player/idle/", start: 0, end: 4, zeroPad: 2}), frameRate: 5, repeat: -1
        });
        this.anims.create({
            key: "player-walk",
            frames: this.anims.generateFrameNames("atlas", {prefix: "player/move/", start: 0, end: 9, zeroPad: 2}), frameRate: 10, repeat: -1
        });
    }
}