import classes from './levelsWrapper.module.css'

const LevelsWrapper = () => {
    return (
        <div className={`${classes.levelsWrapper} ${classes.tooltip}`}>
            <div className={classes.levels}>
                <span className={classes['level-marker']}>1</span>
                <span className={classes['level-marker']}>2</span>
                <span className={classes['level-marker']}>3</span>
                <span className={classes['level-marker']}>4</span>
                <span className={classes['level-marker']}>5</span>
                <span className={classes['level-marker']}>6</span>
                <span className={classes['level-marker']}>7</span>
                <span className={classes['level-marker']}>8</span>
                <span className={classes['level-marker']}>9</span>
                <span className={classes['level-marker']}>10</span>
                <span className={classes['level-marker']}>11</span>
                <span className={classes['level-marker']}>12</span>
                <span className={classes['level-marker']}>13</span>
                <span className={classes['level-marker']}>14</span>
                <span className={classes['level-marker']}>15</span>
                <span className={classes['level-marker']}>16</span>
            </div>
            <div className={` ${classes.labelReset} ${classes.translate}`}>Сбросить</div>
        </div>
    )
}
export default LevelsWrapper