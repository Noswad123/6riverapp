export class Info{
	construtctor(pos){
		this.newPos=pos
		this.status=""
	}
	
}
export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Directions=["north","east","south","west"]

export function getNewPosition(robot, squareSize){
	return movementMapper[robot.f](robot.x,robot.y,squareSize)
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
		return true
	}
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