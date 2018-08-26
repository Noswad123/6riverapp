export function getSettings(){
    let settings={
        
        rows:getFormData("rows"),
        columns:getFormData("columns"),
        squareSize:getFormData("squareSize"),
        numWalls:getFormData("numWalls")
    }
    return settings
}

function getFormData(id){
    return parseInt(document.getElementById(id).value,10)
}