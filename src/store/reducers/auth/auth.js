// Actions
import { AUTHENTICATE } from "../../actions/auth/auth";


const initialState = {
    userData: {
        userName: "",
        userEmail: "",
        userAvatar: "",
        uid: "",
        token:"",
        userType:"",
        authenticatedMethod: "",
        isAuth: false
    }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
        
        return{
            ...state,
            userData: action.authenticatedUser
        }
    default: return state
    }
}
