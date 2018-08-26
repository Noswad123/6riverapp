export const Commands = {
    move: "moveRobot",
    left: "left",
    right: "right",
    place: "place",
    restart: "restartSimulator"
};

export function place (cmd) {
    const newPos = cmd.split(','); // get x y f from the command
    if (newPos.length < 3) {
        this.printErrors('incorrect position / direction');
    } else {
        const newX = parseInt(newPos[0].trim(),10);
        const newY = parseInt(newPos[1].trim(),10);
        const newF = newPos[2].trim().toLowerCase();

        if (this.canvasView.validateBound(newX, 'maxX') &&
            this.canvasView.validateBound(newY, 'maxY') &&
            this.canvasView.validateFacing(newF)) {
            this.x = newX;
            this.y = newY;
            this.f = newF;
        }
    }
}

export function processCommand(command) {
    
    const sanitizedValue = command.trim().toLocaleLowerCase();
    
    const sanitizedValueArray = sanitizedValue.split(' ');
    const firstWordEntered = sanitizedValueArray.splice(0, 1)[0];
    let cmdMethod = Commands[firstWordEntered];
    let params=""
    if (cmdMethod) {
        params = processParams(params)
    } else {
        cmdMethod="updateStatus"
        params="invalid Command"
    }
    return {cmd:cmdMethod,params:params}
    
}
function processParams(params){
    console.log("Your Params")
    console.log(params)
    return "none"
}