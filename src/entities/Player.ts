import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite{
    speed: number = 150;
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    constructor(scene: Phaser.Scene, x: number, y: number){
        super(scene,x,y,"atlas","player/idle/00");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.cursors = scene.input.keyboard!.createCursorKeys();
        this.setScale(5);
    }
    update(){
        const body = this.body as Phaser.Physics.Arcade.Body;
        body.setVelocity(0);
        if(this.cursors.left.isDown){
            body.setVelocityX(-this.speed);
        }
        else if(this.cursors.right.isDown){
            body.setVelocityX(this.speed);
        }
        if(this.cursors.up.isDown){
            body.setVelocityY(-this.speed);
        }
        else if(this.cursors.down.isDown){
            body.setVelocityY(this.speed);
        }
    }
}