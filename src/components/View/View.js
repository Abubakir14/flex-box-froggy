import classes from './View.module.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Frog from './Frog/Frog'
import Lilypad from './Lilypad/Lilypad'
import { useEffect, useRef } from 'react'
import { GameActions } from '../../store'

const View = () => {
    const dispatch = useDispatch()
    const current = useSelector((state) => state.game.currentLevel)
    const level = useSelector((state) =>state.game.levels.find((item) => item.level === current));
    const style = useSelector((state) => state.game.value);
    // console.log()

    const FroggyRef = useRef() 

    useEffect(() => {
        if(level.trueAnswer.trim() === style.trim()) {
            dispatch(GameActions.complete());
        } else {
            dispatch(GameActions.notComplete())
        }
        FroggyRef.current.style = style;
    }, [style])

    return (
        <div className={classes.view}>
            <div className={classes.board}>
                <div ref={FroggyRef} className={classes.pond}>
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