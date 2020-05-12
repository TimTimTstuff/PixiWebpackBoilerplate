import * as PIXI from 'pixi.js'
import './style/main.css'
import './style/main.css'
import { GameContext } from './global/GameContext'

const ctx = new GameContext(new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x7AD9B5
}), 'browsergame')

let sprite : PIXI.Sprite 
document.getElementById('game-area')?.appendChild(ctx.canvasApp.view)
PIXI.Loader.shared
    .add('test','../assets/textures/factory.png')
    .load((l,r)=> {
        sprite = new PIXI.Sprite(r.test?.texture)

        GameContext.instance.canvasApp.stage.addChild(sprite)
        ctx.startGame()
    })
let count = 0
ctx.gameLoop.addUpdate(() => {
    count++
    sprite.scale.set(0.1,0.1)
    if(count > 0){
    sprite.position.set(sprite.position.x+1,sprite.position.y+1)
    }else{
        sprite.position.set(sprite.position.x-1,sprite.position.y-1) 
    }

    if(count > 300) {
        count = -300
    }
    console.log('move')
})


