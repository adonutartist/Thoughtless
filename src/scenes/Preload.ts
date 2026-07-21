import Phaser from "phaser";

export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    preload(){
        this.load.atlas("atlas","assets/atlas/atlas.webp", "assets/atlas/atlas.json");
        this.load.tilemapTiledJSON("forest", "assets/maps/forest.tmj");
        this.load.image("forestTiles", "assets/tiles/forest.png");
    }
    create(){
        this.anims.create({
            key: "recruit-indicator",
            frames: this.anims.generateFrameNames("atlas", {prefix: "units/base/fx/recruitable_indicator/", start: 0, end: 3, zeroPad: 2}), frameRate: 6, repeat: -1
        });
        this.createPlayerAnimations();
        this.createRatAnimations();
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
    private createRatAnimations(){
        this.anims.create({
            key: "rat-idle",
            frames: this.anims.generateFrameNames("atlas",{prefix: "units/rat/idle/", start: 0, end: 1, zeroPad: 2}), frameRate: 5, repeat: -1
        });
        this.anims.create({
            key: "rat-move",
            frames: this.anims.generateFrameNames("atlas", {prefix: "units/rat/move/", start: 0, end: 1, zeroPad: 2}), frameRate: 8, repeat: -1
        });
        this.anims.create({
            key: "rat-attack",
            frames: this.anims.generateFrameNames("atlas", {prefix: "units/rat/attack/", start: 0, end: 1, zeroPad: 2}), frameRate: 8
        });
    }
}