import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ViewBoard.module.css';

function ViewBoard() {
  const current = useSelector((state) => state.game.currentLevel);
  const level = useSelector(
    (state) =>
      state.game.currentLevels.filter((item) => item.level === current)[0]
  );
  console.log(level);
  const froggys = () => {
    return level.colors.map((color) => (
      <Froggy key={color} className={classes[color]} />
    ));
  };
  const lilypads = () => {
    return level.colors.map((color) => (
      <Lilypad key={color} className={classes[color]} />
    ));
  };
  return (
    <div className={classes.view}>
      <div className={classes.board}>
        <div className={classes.pond}>{froggys()}</div>
        <div className={classes.background} style={level.lilypad}>
          {lilypads()}
        </div>
      </div>
    </div>
  );
}
const Froggy = ({ className }) => {
  return (
    <div className={`${classes.frog} ${className}`}>
      <div className={classes.bg}></div>
    </div>
  );
};
const Lilypad = ({ className }) => {
  return (
    <div className={`${classes.lilypad} ${className}`}>
      <div className={classes.bg}></div>
    </div>
  );
};
export default ViewBoard;