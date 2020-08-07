import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const actionBar = makeStyles({
    ultilityBar: {
        padding: '10px '
    }
})


function ActionBar({ wklyRandomRecipe, clearRecipeLineUp, addToLikeed }) {
    const classes = actionBar()
    return (
        <div className={classes.ultilityBar}>
            <Button variant="contained" color="primary" onClick={wklyRandomRecipe}>Random</Button>
            <Button variant="contained" color="secondary" onClick={clearRecipeLineUp}>Clear</Button>
            <Button variant="contained" onClick={addToLikeed}>Liked</Button>
        </div>
    )
}

export default ActionBar