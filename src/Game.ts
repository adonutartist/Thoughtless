import Phaser from "phaser";
import Boot from "./scenes/Boot";
import Preload from "./scenes/Preload";
import MainMenu from "./scenes/MainMenu";
import GameScene from "./scenes/GameScene";
import UIScene from "./scenes/UIScene";
import { BACKGROUND_COLOR, GAME_HEIGHT, GAME_WIDTH } from "./constants/Config";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    backgroundColor: BACKGROUND_COLOR,
    pixelArt: true,
    parent: "game",
    physics: {default: "arcade", arcade: {debug: true}},
    scene: [Boot, Preload, MainMenu, GameScene, UIScene]
};

new Phaser.Game(config);