import Obstacle from "./obstacle";

class Robot extends Obstacle{}

export function generateRobot(canvas,numRobots){
    let robotArray =[]
    
    for(let i=0; i<numWalls;i++){
        wallArray.push(generateWall(canvas,wallArray))
    }
    
    return wallArray
}
function generateWall(canvas,wallArray){
    let tempWall=new Wall(canvas.rows, canvas.columns, canvas.squareSize)
    while(!isWall(wallArray,tempWall.x,tempWall.y))
    {
        tempWall=new Wall(canvas.rows, canvas.columns, canvas.squareSize)
    }
    return tempWall
}

function isWall(wallArray, x,y){
    return (wallArray.some(wall=>wall.x==x &&wall.y==y))
}