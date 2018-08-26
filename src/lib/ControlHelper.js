export const Commands = {
    move: "moveRobot",
    left: "left",
    right: "right",
    place: "placeRobot",
    restart: "restartSimulator",
    stepai: "stepAI"
};

export function place (paramsArray,{squareSize}) {
   
    let newPos = [parseInt(paramsArray[0],10)*squareSize,parseInt(paramsArray[1],10)*squareSize,""]
    if(paramsArray[2])
    {
        newPos[2]=paramsArray[2]
    }
    return newPos
}

export function processCommand(command) {
    
    const sanitizedValue = command.trim().toLocaleLowerCase();
    
    const sanitizedValueArray = sanitizedValue.split(' ');
    const firstWordEntered = sanitizedValueArray.splice(0, 1)[0];
    let cmdMethod = Commands[firstWordEntered];
    let params=sanitizedValueArray
    if (cmdMethod) {
        params = processParams(params)
    } else {
        cmdMethod="updateStatus"
        params="Invalid Command"
    }
    return {cmd:cmdMethod,params:params}
    
}
function processParams(params){   
    params=processPlaceParams(params)
    return params
}
function processPlaceParams(params){
    params=params.toString().split(',').filter(param=>param!=="")
    console.log(params)
    return params
}