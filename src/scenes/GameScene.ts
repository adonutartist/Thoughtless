import Phaser from "phaser";
import Player from "../entities/Player";

export default class GameScene extends Phaser.Scene{
    player!: Player;
    constructor(){
        super("GameScene");
    }
    create(){
        const map = this.make.tilemap({ key: "forest"});
        console.log(map.tilesets);
        const tileset = map.addTilesetImage("forest", "forestTiles", 16, 16, 0, 0);
        if(!tileset){
            throw new Error("couldnt load forest tileset.");
        }
        map.layers.forEach(layer => {
            map.createLayer(layer.name, tileset);
        });
        this.player = new Player(this, 128, 96);
        this.cameras.main.setZoom(2);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    }
    update(){
        this.player.update();
    }
}