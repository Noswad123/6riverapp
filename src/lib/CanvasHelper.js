export const robotLines={
	line1:{
	  north:[50,35,25,15],
	south:[50,35,25,35],
	east:[15,0,35,25],
	west:[35,0,15,25]
	},
	line2:{
		north:[25,15,0,35],
		south:[0,15,25,35],
		east:[15,50,35,25],
		west:[35,50,15,25]
	}
}

export class LineDrawer{
	constructor(squareSize){
		this.squareSize=squareSize
		this.thirdSquareSize =Math.floor(this.squareSize/3)
		this.halfSquareSize=Math.floor(this.squareSize/2)
		this.twoThirdSquareSize=this.squareSize-this.thirdSquareSize
	}
	drawRobotLine(line,direction){
		let robotLines={
			line1:{
			north:[this.squareSize,this.twoThirdSquareSize,this.halfSquareSize,this.thirdSquareSize],
			south:[this.squareSize,this.thirdSquareSize,this.halfSquareSize,this.twoThirdSquareSize],
			east:[this.thirdSquareSize,0,this.twoThirdSquareSize,this.halfSquareSize],
			west:[this.twoThirdSquareSize,0,this.thirdSquareSize,this.halfSquareSize]
			},
			line2:{
				north:[this.halfSquareSize,this.thirdSquareSize,0,this.twoThirdSquareSize],
				south:[0,this.thirdSquareSize,this.halfSquareSize,this.twoThirdSquareSize],
				east:[this.thirdSquareSize,this.squareSize,this.twoThirdSquareSize,this.halfSquareSize],
				west:[this.twoThirdSquareSize,this.squareSize,this.thirdSquareSize,this.halfSquareSize]
			}
		}
		return robotLines[line][direction]
	}
	
	drawWallLine(line){
		let wallLines={
			line1:[0,0,this.squareSize,this.squareSize],
			line2:[0,this.squareSize,this.squareSize,0]
		}
		return wallLines[line]
	}
	
}
export function getGridLines({rows, columns,squareSize}){
    var gridLines=[]
    for(let i = 0; i<rows;i++)
        gridLines.push([0,i*squareSize,squareSize*columns,i*squareSize])
    for(let j = 0; j<columns;j++)
        gridLines.push([j*squareSize,0,j*squareSize,squareSize*rows])
    
    return gridLines
}