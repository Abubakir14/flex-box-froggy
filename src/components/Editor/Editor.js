import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LineNumbers from '../line-numbers/line-numbers'
// import Button from '../UI/Button'
import { GameActions } from '../../store'
import classes from './Editor.module.css'

const Editor = () => {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.game.currentLevel);
    const level = useSelector((state) =>state.game.levels.filter((item) => item.level === current)[0]);

    const [state, setState] = useState('')


    useEffect(() => {
        dispatch(GameActions.gameStyle(''));
        setState('')
    }, [level.level]);

    const getStyleChange = (e) => {
        setState(e.target.value);
        dispatch(GameActions.gameStyle(e.target.value))
    };

    const nextLevel = () => {
        if(!level.isValid) {
            return
        }
        dispatch(GameActions.currentState(current + 1))
    }
    const disabled = () => {
        const btnIsDisabled = level.isValid ? `${classes.enabled} ${'animate__animated animate__swing'}`: classes.disabled;
        return btnIsDisabled;
    };
    
    return (
        <div className={classes.editor}>
            <div className={classes.css}>
                <LineNumbers/>
                <pre className={classes.pre}>#pond {"{"} <br/> {"display: flex; "} </pre>
                <textarea style={{ height: 24 * level.pondheight + 'px'}} 
                autoFocus 
                value={state}
                onChange={getStyleChange}
                autoCapitalize='none' 
                className={classes.code} ></textarea>
                <pre>{ '}' }</pre>
                <button className={`${classes.button} ${disabled()}`} 
                onClick={nextLevel}>Следующий</button>
            </div>
        </div>
    )
}
export default Editor