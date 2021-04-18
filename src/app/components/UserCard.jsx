import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    userCard: {
        display: 'flex',
        padding: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        '& h3': {
            marginLeft: '20px',
            marginTop: '10px',
            
        },
        '& :hover': {
            textDecoration: 'underline'
        }
    },
    link: {
        textDecoration: 'none',
        cursor: 'pointer'
    }
})

function UserCard({ user }) {
    const classes = useStyles()

    return( 
        <Link to={`/user-repo/${user.login}`} className={classes.link}>
            <Paper className={classes.userCard}>
                <img src={user.avatar_url} alt="img" width="100px"/>
                <Typography variant='h3'>
                    {user.login}
                </Typography>
            </Paper>
        </Link>
        
    )
}

export default UserCard