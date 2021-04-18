import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    title: {
        marginLeft: '10px'
    },
    linkTitle: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#fff',
        '& :hover': {
            textDecoration: 'underline'
        }
    }
})

function Navbar() {
    const classes = useStyles()
    return (
        <AppBar position="sticky">
           <Toolbar>
               <Link to='/' className={classes.linkTitle}>
                 <GitHubIcon/>
                 <Typography variant='h2' className={classes.title}>
                     Github User Search
                    </Typography>
                </Link> 
           </Toolbar> 
        </AppBar>
    )
}

export default Navbar
