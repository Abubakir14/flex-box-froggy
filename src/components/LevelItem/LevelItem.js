    import classes from './LevelItem.module.css'

    const LevelItem = ({ item, nextLevel, children }) => {
    return (
        <span
        key={item}
        className={classes['level-marker']}
        onClick={() => nextLevel(item.level)}
      >
        {children}
      </span>
    );
  };

  export default LevelItem