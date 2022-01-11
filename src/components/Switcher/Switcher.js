import React from "react"
import { useState } from "react"
import classes from './Switcher.module.css'
import LevelsWrapper from "../levelsWrapper/levelsWrapper"

const Switcher = () => {

    const [show, setShow] = useState(false)
    
    const Show = () => {
        setShow(prevState => !prevState)
    }

return (
    <div className={classes['level-counter']}>
    <span className={`${classes.arrow} ${classes.left} ${classes.disabled}`}>
            <span className={classes.triangle}></span>
        </span> 
            <span className={classes['level-indicator']} onClick={Show}>
                <span className={`${classes.labelLevel} ${classes.translate}`}>Уровень</span>  
                <span className={classes.current}>1</span>  
                <span className={`${classes.labelOf} ${classes.translate}`}>из</span>  
                <span className={classes.total}>24</span>  
                <span className={classes.caret}>~</span>  
        </span>   
        {show && <LevelsWrapper/>}
        <span className={`${classes.arrow} ${classes.right}`}>
            <span className={classes.triangle}></span>
        </span>
    </div>
)
}
export default Switcher