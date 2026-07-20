import Phaser from "phaser";

export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    create(){
        console.log("Preload");
        this.scene.start("MainMenu");
    }
}