const initialColor = "green"

const changeColor = (state = initialColor, action) => {
    switch(action.type){
        case "red" : return "red"
        case "green" : return "green"
        default: return state
    }
}

export default changeColor;