import LineNumbers from '../line-numbers/line-numbers'
import Button from '../UI/Button'
import classes from './Editor.module.css'

const Editor = () => {
    return (
        <div className={classes.editor}>
            <div className={classes.css}>
                <LineNumbers/>
                <pre className={classes.pre}>#pond {"{ display: flex; "} </pre>
                <textarea autoFocus autoCapitalize='none' className={classes.code}></textarea>
                <pre>{ '}' }</pre>
                <Button className={classes.button}>Следующий</Button>
            </div>
        </div>
    )
}
export default Editor