import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const actionBar = makeStyles({
    utilityBar: {
        padding: '10px',
        display: 'flex',
        justifyContent: ' space-evenly',
    }
})


function ActionBar({ wklyRandomRecipe, clearRecipeLineUp, addToLiked }) {
    const classes = actionBar()
    return (
        <div className={classes.utilityBar}>
            <Button variant="contained" color="primary" onClick={wklyRandomRecipe}>Random</Button>
            <Button variant="contained" onClick={addToLiked}>Liked</Button>
            <Button variant="contained" color="secondary" onClick={clearRecipeLineUp}>Clear</Button>
        </div>
    )
}

export default ActionBar