import axios from 'axios'
import { GET_USER_REPO, GET_USERS, USER_ERROR, REPO_ERROR } from './types'

export const getRepos = (username) =>  async (dispatch) => {
    try {
        const res = await axios.get(`https://api.github.com/users/${username}/repos`)

        dispatch({
            type: GET_USER_REPO,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: REPO_ERROR,
            payload: { msg: error.response }
        })
    }
}

export const getUsers = (query) => async (dispatch) => {
    try {
        const res = await axios.get('https://api.github.com/search/users', {
            headers: {
                "Accept": "application/vnd.github.v3+json"
            },
            params: {
                "q":`${query}`,
                "page": 1
            }
        })

        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    } catch(error) {
        console.log(error)
        dispatch({
            type: USER_ERROR,
            payload: { msg: error.response }
        })
    }
}