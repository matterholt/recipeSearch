import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    recipeModel: {
        position: 'absolute',
        width: '400px',

    }
})

export default function SelectedRecipes() {
    const modal = useStyles()
    return (

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="model-title"
            aria-describedby
        />
    )
}