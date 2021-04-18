import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/users'
import PropTypes from 'prop-types'
import { Button, Grid, makeStyles } from '@material-ui/core'
import UserCard from './UserCard.jsx'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    searchField: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        margin: '20px 0px',
        '& button': {
            marginLeft: '10px'
        }
    },
    searchResult: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardWrapper: {
        margin: '20px'
    },
    input: {
        width: '300px',
        height: '40px'
    }
})

function Search({ getUsers, users: { users, isLoading } }) {
    const [query, setQuery] = useState('')
    const classes = useStyles()

    const handleChange = e => {
        setQuery(e.target.value)
    }
    const searchUsers = () => {
        getUsers(query)
    }

    return (
        <div>
            <div className={classes.searchField}>
                <input
                    placeholder="Search Users"
                    type="text"
                    className={classes.input}
                    value={query}
                    onChange={handleChange}
                />
                <Button variant='contained' color='primary'>
                    <SearchIcon fontSize='large' onClick={searchUsers}>
                        Search
                    </SearchIcon>
                </Button>
                
            </div>
            <Grid container className={classes.searchResult}>
            {
                isLoading ? (
                    null
                ) : (
                    users.items.map(item => (
                        <Grid item xs={3} className={classes.cardWrapper} key={item.id}>
                            <UserCard user={item} />
                        </Grid>
                    ))
                )
            }
            </Grid>
            
        </div>
    )
}

Search.propTypes = {
    getUsers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    users: state.users,
})

export default connect(mapStateToProps, { getUsers })(Search)
