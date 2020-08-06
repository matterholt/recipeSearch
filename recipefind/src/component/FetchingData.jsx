import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles({
    fetchContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '150px',
        width: '550px',
        position: 'absolute',
        top: '35vh',
        left: '25vw',
        flexFlow: 'column',
        alignItems: 'center',
        background: '#ffbfbf',
        borderRadius: '10px'

    }

})

const FetchingData = () => {
    const classes = useStyles();
    return (
        <div className={classes.fetchContainer}>
            <h3>Fetching Data</h3>
            <CircularProgress />
        </div>
    )
}


export default FetchingData