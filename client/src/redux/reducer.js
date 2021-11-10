import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from "./actionTypes";

const init = {
  user: null,
  errors: null,
  loading: false,
  isAuth:false,
  token:localStorage.getItem("token")
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      case LOGIN:
        case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_FAIL:
      case LOGIN_FAIL:
        case GET_PROFILE_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload,
        loading:false,
        errors:null
      };
      case LOGIN_SUCCESS:
        return{
          ...state,user:payload.user,loading:false,errors:null,isAuth:true,token:payload.token
        }
case GET_PROFILE_SUCCESS:
  return{
    ...state,loading:false,user:payload,errors:null,
  }
    default:
      return state;
  }
};
