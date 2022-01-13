import React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import classes from './Switcher.module.css'
import LevelsWrapper from "../levelsWrapper/levelsWrapper"
import { GameActions } from "../../store"

const Switcher = () => {
    const dispatch = useDispatch()
    const current = useSelector(state => state.game.currentLevel)
    const levels = useSelector(state => state.game.levels)
    const [show, setShow] = useState(false)
    
    const Show = () => {
        setShow(prevState => !prevState)
    }
    const nextLevel = (level) => {
        dispatch(GameActions.currentState(level))
    }
    const increment = () => {
        dispatch(GameActions.currentState(current + 1))
    }
    const decrement = () => {
        dispatch(GameActions.currentState(current - 1))
    }
    
    return (
    <div className={classes['level-counter']}>
    <span className={`${classes.arrow} ${classes.left} ${classes.disabled}`} onClick={decrement}>
            <span className={classes.triangle}></span>
        </span> 
            <span className={classes['level-indicator']} onClick={Show}>
                <span className={`${classes.labelLevel} ${classes.translate}`}>Уровень</span>  
                <span className={classes.current}>{current}</span>  
                <span className={`${classes.labelOf} ${classes.translate}`}>из</span>  
                <span className={classes.total}>16</span>  
                <span className={classes.caret}>~</span>  
        </span>   
        {show && <LevelsWrapper />}
        <span className={`${classes.arrow} ${classes.right}`} onClick={increment}>
            <span className={classes.triangle}></span>
        </span>
    </div>
)
}
export default Switcher