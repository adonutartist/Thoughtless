import Phaser from "phaser";
import Player from "../entities/Player";
import Rat from "../entities/Rat";

export default class GameScene extends Phaser.Scene{
    player!: Player;
    rat!: Rat;
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
        this.player = new Player(this, 128, 370);
        this.rat = new Rat(this, this.player.x + 100, this.player.y);
        this.cameras.main.setZoom(2);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    }
    update(){
        this.player.update();
        const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.rat.x, this.rat.y);
        if(distance < 80){
            this.rat.startRecruit();
        }
        this.rat.updateRecruit(this.game.loop.delta);
    }
}