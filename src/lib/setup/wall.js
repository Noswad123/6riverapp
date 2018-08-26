 import {generateRandomNumber} from '../Utils'
class Wall{
    constructor( rangeY, rangeX,squareSize){
        this.x=generateRandomNumber(rangeX)*squareSize
        this.y=generateRandomNumber(rangeY)*squareSize
    }
}

function generateWall(settings){
    let tempWall=new Wall(settings.rows, settings.columns, settings.squareSize)
    return tempWall
}

export function generateWallArray(settings){
    let wallArray= []
    for(let i=0; i<settings.numWalls;i++){
        wallArray.push(generateWall(settings))
    }
    return wallArray
}