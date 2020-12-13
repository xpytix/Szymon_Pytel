import {CHANGE_BUTTON, CHANGE_FONT, CHANGE_ICON, CHANGE_NAVBAR, CHANGE_PAGE_INCREMENT,CHANGE_PAGE_DECREMENT} from "./actions"
import {CHANGE_BODY} from "./actions"

const initialState =
        {
            navBar: "#23232e",
            body: "#23232e",
            button: "",
            font: "#fff",
            pageAboutMe: 0,
        }


const colorsReducer = (state =initialState, action)=>{
    switch (action.type) {
        case CHANGE_NAVBAR:
            return {
                ...state,
                    navBar: action.payload.navBar
                }
        case CHANGE_BODY:
            return{
                ...state,
                    body: action.payload.body
                }
        case CHANGE_ICON:
            return{
                ...state,
                icon: action.payload.icon
            }
        case CHANGE_BUTTON:
            return{
                ...state,
                button: action.payload.button
            }
        case CHANGE_FONT:
            return{
                ...state,
                font: action.payload.font
            }
        case CHANGE_PAGE_INCREMENT:
            return{
                ...state,
                pageAboutMe: state.pageAboutMe +1

            }
        case CHANGE_PAGE_DECREMENT:
            return{
                ...state,
                pageAboutMe: state.pageAboutMe -1

            }
        default:
            return state;
    }
}
export default colorsReducer
