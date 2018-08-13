import _posts from './data/posts'
import { combineReducers} from 'redux'

function comments(state={}, action) {
    switch (action.type) {
        case "ADD_COMMENT": //add that comment to state

        if (!state[action.postId]) {
            return {
                ...state,
                [action.postId] : [action.comment]
            }
        }else {
            return {
                ...state,
                [action.postId] : [...state[action.postId], action.comment]
            }
        }
                
        default: return state
    }
    return state
}
function posts(state = _posts, action) {
    //removePhoto action -> delete photo from state
    switch (action.type) {
        case 'REMOVE_POST' : return [...state.slice(0, action.index),...state.slice(action.index+1)]
        case 'ADD_POST'    : return [...state, action.post]
        default: return state;

    }
}
const rootReducer = combineReducers({comments, posts})
export default rootReducer