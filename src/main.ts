import "./style.css";

async function start(){
  await document.fonts.load('48px "Thoughtless"');
  await import("./Game");
}

start();