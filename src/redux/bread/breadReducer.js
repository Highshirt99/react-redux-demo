import { BUY_BREAD } from "./breadTypes"

const initialState = {
    numOfBreads: 30
}

const breadReducer = (state = initialState, action) =>{
switch(action.type){
    case BUY_BREAD: return{
        ...state,
        numOfBreads: state.numOfBreads -1
    }

    default: return state;
}
}

export default breadReducer