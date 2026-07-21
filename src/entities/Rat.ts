import Phaser from "phaser";
export default class Rat extends Phaser.Physics.Arcade.Sprite{
    rescued = false;
    recruiting = false;
    indicator!: Phaser.GameObjects.Sprite;
    progressBar!: Phaser.GameObjects.Graphics;
    recruitProgress = 0;
    constructor(scene: Phaser.Scene, x: number, y: number){
        super(scene, x, y, "atlas", "units/rat/dead/00");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(1);
        this.indicator = scene.add.sprite(x, y - 1, "atlas");
        this.indicator.play("recruit-indicator");
        this.indicator.setScale(1);
        this.setDepth(10);
    }
    startRecruit(){
        if(this.rescued || this.recruiting)
            return;
        this.recruiting = true;
        this.indicator.destroy();
        this.progressBar = this.scene.add.graphics();
        this.progressBar.setDepth(20);
    }
    updateRecruit(delta: number){
        if(!this.recruiting)
            return;
        this.recruitProgress += delta;
        const percent = Phaser.Math.Clamp(this.recruitProgress/2000, 0, 1);
        this.progressBar.clear();
        this.progressBar.fillStyle(0x000000);
        this.progressBar.fillRect(this.x - 25, this.y - 45, 50, 6);
        this.progressBar.fillStyle(0x55ff55);
        this.progressBar.fillRect(this.x - 25, this.y - 45, 50*percent, 6);
        if(percent >= 1){
            this.rescue();
        }
    }
    rescue(){
        if(this.rescued)
            return;
        this.rescued = true;
        this.recruiting = false;
        this.progressBar.destroy();
        this.setTexture("atlas", "units/rat/idle/00");
        this.play("rat-idle");
    }
}