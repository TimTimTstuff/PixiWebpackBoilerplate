import * as PIXI from 'pixi.js'
import './style/main.css'
import './style/main.css'
import {GameLoop, FPSReport} from '@timtimtstuff/tstuffgametools/distj'

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x7AD9B5
})

const x = new GameLoop()
const fps = new FPSReport(20)
x.addUpdate(()=>{
    console.log(fps.calculateFps(GameLoop.deltaTime))
})

x.start()
document.getElementById('game-area')?.appendChild(app.view)
setTimeout(() => {
    x.stop()
}, 3000);