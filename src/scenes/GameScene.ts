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
        const tileset = map.addTilesetImage("fulltileset", "environment accessories", 16, 16, 0, 0);
        if(!tileset){
            throw new Error("couldnt load forest tileset.");
        }
        const createdLayers: Phaser.Tilemaps.TilemapLayer[] = [];
        map.layers.forEach(layerData => {
            const layer = map.createLayer(layerData.name, tileset);
            createdLayers.push(layer);
        });
        createdLayers.forEach(layer => {
            console.log("Collision enabled:", layer.layer.name);
            if(layer.layer.properties.some(p => p.name === "collides" && p.value === true)){
                layer.setCollisionByExclusion([-1]);
                console.log(layer.layer.name, layer.getTilesWithin().filter(t => t.collides).length);
                console.log(layer.layer.name, layer.layer.collideIndexes);
            }
        });
        this.player = new Player(this, 90, 300);
        createdLayers.forEach(layer => {
            if(layer.layer.properties.some(p => p.name === "collides" && p.value === true)){
                this.physics.add.collider(this.player, layer);
            }
        });
        this.rat = new Rat(this, this.player.x + 100, this.player.y);
        this.cameras.main.setZoom(3);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 200, map.widthInPixels, map.heightInPixels - 200);
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