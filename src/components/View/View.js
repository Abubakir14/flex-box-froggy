import classes from './View.module.css'
import React from 'react'
import { useSelector } from 'react-redux'
import Frog from './Frog/Frog'
import Lilypad from './Lilypad/Lilypad'

const View = () => {
    const current = useSelector((state) => state.game.currentLevel)
    const level = useSelector((state) =>state.game.levels.filter((item) => item.level === current)[0]);

    // console.log(level.colors);
    return (
        <div className={classes.view}>
            <div className={classes.board}>
                <div className={classes.pond}>
                    {level.colors.map((color, i) => (<Frog key={i + 1} className={classes[color]}/>))}
                </div>
                {console.log(level.lilypad)}
                <div className={classes.background} style={level.lilypad}>
                    {level.colors.map(( (index, i) => <Lilypad key={i} className={classes[index]}/>))}
                </div>
                </div>
            </div>
    )
}

export default View