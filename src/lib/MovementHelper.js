export class Info{
	construtctor(pos){
		this.newPos=pos
		this.status=""
	}
	
}
export function moveAI(robot, settings, wallArray, goal){
	if(robot.x+settings.squareSize/2!==goal.x){
		if(robot.x>goal.x)
			robot.f="west"
		else
			robot.f="east"
	}else{
		if(robot.y+settings.squareSize/2!==goal.x)
		{
			if(robot.y>goal.y)	
				robot.f="north"
			else
				robot.f="south"
		}
	}
	return getNewPosition(robot,settings.squareSize)
}
export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function rotate(direction,{x,y,f}){
    var newIndex = Directions.findIndex(d=>d===f)+direction;
    if (newIndex<0)
      newIndex=3;
    if(newIndex>3)
      newIndex=0
      return [x, y,Directions[newIndex]]
  }
export const Directions=["north","east","south","west"]

export function getNewPosition(robot, squareSize){
	let posArray = movementMapper[robot.f](robot.x,robot.y,squareSize)
	posArray.push(robot.f)
	return posArray
}
const movementMapper={
	north:(x,y,distance)=> [x, y-distance],
	east:(x,y,distance)=>[x + distance, y],
	south:(x,y,distance)=>[x,y + distance],
	west:(x,y,distance)=>[x - distance,y]
}
export function isValidMove(newInfo, settings, wallArray,goal ){
	if(checkWallList(newInfo.newPos,wallArray)||atEdge(newInfo.newPos,settings))
	{
		newInfo.newStatus="Something is in the way"
		return false
	}else
	{
		newInfo.newStatus=atGoal(newInfo.newPos,goal)?"Goal!!!!":"Move Successful"
		if(!isValidFacing(newInfo.newPos[2]))
		{
			newInfo.newPos[2]="west"
			newInfo.newStatus+="  but you can't face that way"
		}
		return true
	}
}
function isValidFacing(facing){
	return Directions.some(direction=>direction===facing)
}
function atEdge(newPos, settings){
	return newPos[0]<0||newPos[0]>=(settings.columns)*settings.squareSize ||
	newPos[1]<0 ||newPos[1]>=(settings.rows)*settings.squareSize
}

function atGoal(newPos,goal){
	return (newPos[0]===goal.x-25 && newPos[1]===goal.y-25)
}

function checkWallList(newPos,wallArray){
	return wallArray.some(wall=>AtWall(newPos,wall))	
}

function AtWall	(newPos, wall){
	return(newPos[0]===wall.x && newPos[1]===wall.y)
} 