import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRepos } from '../actions/users'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarIcon from '@material-ui/icons/Star';
import CallMergeIcon from '@material-ui/icons/CallMerge';
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    repo: {
        justifyContent: 'center',
    },
    repoCard: {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        background: '#1F1F23',
        borderRadius: '7px',
        margin: '20px',
        width: '250px',
        height: '220px',
        padding: '20px 15px',
        position: 'relative',
        '& h3': {
            margin: '10px 0px'
        },
        '& p': {
            margin: '10px 0px'
        },
    },
    repoBtnWrapper: {
        position: 'absolute',
        bottom: '15px',
        right: '20px'
    },
    repoBtn: {
        '& a': {
            textDecoration: 'none',
            color: '#fff'
        }
    },
    iconsWrapper: {
        position: 'absolute',
        bottom: '15px',
        left: '5px',
        display: 'flex'
    },
    icon: {
        margin: '0px 5px',
        '& :hover': {
            cursor: 'pointer'
        }
    },
    title: {
        margin: "20px"
    },
    repoError: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'white',
        },
        '& button': {
            margin: '20px 0px'
        }
    }
})

function Repos({ getRepos, users: { repos } }) {
    const classes = useStyles()
    const { id } = useParams()
    
    useEffect(() => {
        getRepos(id)
    },[])

    const shorten = (text, max) => {
        return text && text.length > max ? 
            text.slice(0, max)
            .split(' ')
            .slice(0, -1)
            .join(' ') 
        : text
    }
   
    return (
        <React.Fragment>
        <Typography variant='h1' align='center' className={classes.title}>Repositories</Typography>
        <Grid container className={classes.repo}>
            {
                repos.length < 1 ? (
                    <div className={classes.repoError}>
                    <Typography variant='h3'>This user has no repositories!</Typography>
                    <Button variant='contained' color='primary'>
                        <Link to='/'>Go Back</Link>
                    </Button>
                    </div>
                ): (
                repos.map(repo => (
                    <Grid item xs={3} key={repo.id} className={classes.repoCard}>
                        <div>
                            <Typography variant='h4'>{repo.name}</Typography>
                                {
                                    repo.description ?
                                    (
                                        <Typography variant='body1'>{shorten(repo.description, 120)}...</Typography>
                                    )
                                    : (
                                        <Typography variant='body1'>No description</Typography>
                                    )
                                }
                            <Typography variant='body1'>
                                <Moment format='YY/MM/DD'>
                                    {repo.created_at}
                                </Moment>
                            </Typography>
                            <Typography variant='body1'>
                                {
                                    repo.license ? (repo.license.name) : (null)
                                }
                            </Typography>
                        </div>
                        <div className={classes.iconsWrapper}>
                            <span title="Forks" className={classes.icon}>
                                <CallMergeIcon/>
                                {repo.forks_count}
                            </span>
                            <span title="Watchers" className={classes.icon}>
                                <VisibilityIcon/>
                                {repo.watchers_count}
                            </span>
                            <span title="Stargazers" className={classes.icon}>
                                <StarIcon/>
                                {repo.stargazers_count}
                            </span>
                        </div>
                        <div className={classes.repoBtnWrapper}>
                            <Button color='primary' variant='contained' size='small' className={classes.repoBtn}>
                                <a href={repo.svn_url}>Open in a new tab</a>
                            </Button>
                        </div>
                        
                    </Grid>
                ))
                )
            }
        </Grid>
        </React.Fragment>
    )
}

Repos.propTypes = {
    getRepos: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, { getRepos })(Repos)
