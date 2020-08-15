import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
const reciKey = process.env.REACT_APP_KEY


const useStyle = makeStyles({
    container: {
        display: 'grid',
        backgroundColor: '#bfbfbf',
        placeItems: 'center',
        padding: '10px',
        position: "absolute",
        left: "50%",
        top: '20%',
        transform: 'translateX(-50%)',
        width: '550px',
        borderRadius: '5px'
    }
})



export default function RecipeSearch() {
    const [searchItem, setSearchItem] = useState('')
    const [query, setQuery] = useState('')
    const [error, isError] = useState(false)
    const classes = useStyle();


    useEffect(() => {
        async function fetchData() {
            try {
                const searchPath = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${reciKey}&query=${query}`
                const response = await fetch(searchPath)
                const json = await response.json()
                console.log(json)

            } catch (e) {
                isError(true)
                console.log(e)
            }
        }
        fetchData()

    }, [query])

    return (
        <div className={classes.container}>
            <h3>Search</h3>
            <form onSubmit={e => { e.preventDefault(); setQuery(searchItem) }}>
                <input
                    value={searchItem}
                    onChange={e => { setSearchItem(e.target.value) }}
                    placeHolder="Search Recipe"
                />
                <br />
                <button type='submit'>Search</button>
            </form>
        </div >

    )
}