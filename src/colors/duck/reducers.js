import {CHANGE_COLOR} from "./actions"


const colorsReducer = (state= [], action)=>{
    if(action.type === CHANGE_COLOR)
        return{
          navBar: action.payload.navBar,
          icons: action.payload.icons,
          main: action.payload.main,
          bg1: action.payload.bg1,
          bg2: action.payload.bg2,
          paragraph: action.payload.paragraph

      }
    return state
}

export default colorsReducer
