import Phaser from "phaser";

export default class MainMenu extends Phaser.Scene{
    constructor(){
        super("MainMenu");
    }
    create(){
        this.add.text(640,360,"THOUGHTLESS",{fontSize: "48px", color: "#ffffff"}).setOrigin(0.5);
    }
}