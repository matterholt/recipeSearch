import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles({
    container: {
        display: 'grid',
        backgroundColor: 'gray',
        placeItems: 'center',
        padding: '10px'
    }
})



export default function RecipeSearch() {
    const [searchItem, setSearchItem] = useState('')
    const classes = useStyle();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(searchItem)

    }

    return (
        <div className={classes.container}>
            <h3>Search</h3>
            <form onSubmit={handleSubmit}>
                <input
                    value={searchItem}
                    onChange={e => setSearchItem(e.target.value)}
                    placeHolder="Search Recipe"
                />
                <button type='submit'>Search</button>

            </form>
        </div>

    )
}