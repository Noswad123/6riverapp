const WallReducer = (state={numWalls:12}, {type, payload})=>{ 
    switch(type){
        case "UPDATE_NUMWALLS":
            return {...state,
                numWalls : state.numWalls,
            }     
        default:
            return state;
    }
  };
  export default WallReducer