import classes from './levelsWrapper.module.css'
import { useSelector, useDispatch } from 'react-redux'
import LevelItem from '../LevelItem/LevelItem'
import { GameActions } from '../../store'

const LevelsWrapper = () => {
    const dispatch = useDispatch()
    const levels = useSelector(state => state.game.levels)

    const nextLevel = (level) => {
        dispatch(GameActions.currentState(level))
    }

    return (
        <div className={`${classes.levelsWrapper} ${classes.tooltip}`}>
            <div className={classes.levels}>
                <span>
                {levels.map((item) => {
            return (
              <LevelItem nextLevel={nextLevel} item={item}>
                {item.level}
              </LevelItem>
            );
          })}
                </span>
            </div>
            <div className={` ${classes.labelReset} ${classes.translate}`}>Сбросить</div>
        </div>
    )
}
export default LevelsWrapper