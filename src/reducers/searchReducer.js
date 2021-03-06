import {CHANGE_SEARCH_FIELD} from '../actions/types'

const initialState = {
    searchField: ''
}

const searchReducer = (state=initialState,action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state
    }
}

export default searchReducer