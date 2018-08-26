import {generateRandomNumber} from '../Utils'

class Goal {
    constructor(rangeY, rangeX,squareSize){
        this.x=generateRandomNumber(rangeY)*squareSize+squareSize/2
        this.y=generateRandomNumber(rangeX)*squareSize+squareSize/2
    }
}

export function generateGoal({rows,columns, squareSize}){
    return new Goal(columns, rows, squareSize)
}