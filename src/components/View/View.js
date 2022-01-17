import classes from './View.module.css'
import React from 'react'
import { useSelector } from 'react-redux'
import Frog from './Frog/Frog'
import Lilypad from './Lilypad/Lilypad'

const View = () => {
    const current = useSelector((state) => state.game.currentLevel)
    const level = useSelector((state) =>state.game.levels.find((item) => item.level === current));

    return (
        <div className={classes.view}>
            <div className={classes.board}>
                <div className={classes.pond}>
                    {level.colors.map((color, i) => (<Frog key={i + 1} className={classes[color]}/>))}
                </div>
                <div className={classes.background} style={level.lilypad}>
                    {level.colors.map(( (color, i ) => {
                        let specialStyle = {}
                        if(level.lilypad) {
                            specialStyle = level.lilypad
                        }
                        if(color === level.lilypadItem?.color) specialStyle = level.lilypadItem?.style
                        return (
                            <Lilypad key={i}  className={classes[color]} specialStyle={specialStyle} />
                            )
                    }))}
                </div>
            </div>
        </div>
    )
}

export default View