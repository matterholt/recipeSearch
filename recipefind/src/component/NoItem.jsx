import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const noItemStyle = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: ' 100vw',
    },
})
const NoItem = () => {
    const classes = noItemStyle()
    return (<h3 className={classes.container}>No Items Yet! </h3>)
}

export default NoItem