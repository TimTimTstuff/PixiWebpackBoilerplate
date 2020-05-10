import * as PIXI from 'pixi.js'
import './style/main.css'
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x7AD9B5
})

document.getElementById('game-area')?.appendChild(app.view)