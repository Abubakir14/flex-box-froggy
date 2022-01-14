import LineNumbers from '../line-numbers/line-numbers'
import Button from '../UI/Button'
import classes from './Editor.module.css'
import { useSelector } from 'react-redux'

const Editor = () => {
    const currentLevel = useSelector((state) => state.game.currentLevel);
    const level = useSelector((state) =>state.game.levels.filter((item) => item.level === currentLevel)[0]);
    return (
        <div className={classes.editor}>
            <div className={classes.css}>
                <LineNumbers/>
                <pre className={classes.pre}>#pond {"{"} <br/> {"display: flex; "} </pre>
                <textarea style={{ height: 24 * level.pondheight + 'px'}} autoFocus autoCapitalize='none' className={classes.code} ></textarea>
                <pre>{ '}' }</pre>
                <Button className={classes.button}>Следующий</Button>
            </div>
        </div>
    )
}
export default Editor