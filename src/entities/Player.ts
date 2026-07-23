import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite{
    speed: number = 150;
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    constructor(scene: Phaser.Scene, x: number, y: number){
        super(scene,x,y,"atlas","player/idle/00");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        const body = this.body as Phaser.Physics.Arcade.Body;
        body.setSize(10, 20);
        body.setOffset(10, 12);
        this.setCollideWorldBounds(true);
        this.cursors = scene.input.keyboard!.createCursorKeys();
        this.setScale(1);
        this.play("player-idle");
    }
    update(){
        const body = this.body as Phaser.Physics.Arcade.Body;
        body.setVelocity(0);
        let moving = false;
        if(this.cursors.left.isDown){
            body.setVelocityX(-this.speed);
            moving = true;
            this.setFlipX(true);
        }
        else if(this.cursors.right.isDown){
            body.setVelocityX(this.speed);
            moving = true;
            this.setFlipX(false);
        }
        if(this.cursors.up.isDown){
            body.setVelocityY(-this.speed);
            moving = true;
        }
        else if(this.cursors.down.isDown){
            body.setVelocityY(this.speed);
            moving = true;
        }
        if(moving){
            if(this.anims.currentAnim?.key !== "player-walk"){
                this.play("player-walk");
            }
        }
        else{
            if(this.anims.currentAnim?.key !== "player-idle"){
                this.play("player-idle");
            }
        }
    }
}