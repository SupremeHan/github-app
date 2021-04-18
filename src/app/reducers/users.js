import { GET_USERS, GET_USER_REPO } from '../actions/types'

const initialState = {
    users: [],
    repos: [],
    isLoading: true
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
                isLoading: false
            }
        case GET_USER_REPO:
            return {
                ...state,
                repos: payload,
                isLoading: false
            }
        default:
            return state
    }
}