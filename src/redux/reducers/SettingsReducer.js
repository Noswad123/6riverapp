const SettingsReducer = (state={rows:12,columns:12,squareSize:50,numWalls:1}, {type, payload})=>{ 
    switch(type){
        case "UPDATE_SETTINGS":
            return {...state,
                rows : payload.rows,
                columns : payload.columns,
                squareSize : payload.squareSize,
                numWalls:payload.numWalls
            }     
        default:
            return state;
    }
  };
  export default SettingsReducer