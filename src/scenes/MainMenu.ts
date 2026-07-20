import Phaser from "phaser";
import { GAME_WIDTH, GAME_HEIGHT} from "../constants/Config";

export default class MainMenu extends Phaser.Scene{
    constructor(){
        super("MainMenu");
    }
    create(){
        this.add.text(GAME_WIDTH/2,GAME_HEIGHT/2,"THOUGHTLESS", {fontFamily: "Thoughtless", fontSize: "48px", color: "#ffffff"}).setOrigin(0.5);
    }
}