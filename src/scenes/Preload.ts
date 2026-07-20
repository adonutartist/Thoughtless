import Phaser from "phaser";

export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    preload(){
        this.load.atlas("atlas","assets/atlas/atlas.webp", "assets/atlas/atlas.json");
    }
    create(){
        console.log("Atlas loaded");
        this.scene.start("GameScene");
    }
}