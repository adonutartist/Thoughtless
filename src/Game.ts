import Phaser from "phaser";
import Boot from "./scenes/Boot";
import Preload from "./scenes/Preload";
import MainMenu from "./scenes/MainMenu";
import GameScene from "./scenes/GameScene";
import UIScene from "./scenes/UIScene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: "#1b1b1b",
    pixelArt: true,
    parent: "game",
    scene: [Boot, Preload, MainMenu, GameScene, UIScene]
};

new Phaser.Game(config);