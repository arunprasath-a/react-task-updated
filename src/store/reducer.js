
const initialState = {
    userName: "",
    password: "",
    

}

const reducer = (state = initialState, action) => {

    const newState = { ...state };


  //console.log("reducer", action)

    switch (action.type) {
        case "NAME_CHANGE":
            return Object.assign({}, newState, { userName: action.nameValue }) ;
        case "PASS_CHANGE":
            return Object.assign({}, newState, { password: action.passValue });
            case "ON_LOG_OUT":
            return Object.assign({}, newState, { userName: "",password: "" });
        default:
            return newState;
            
    }
    


}

export default reducer;