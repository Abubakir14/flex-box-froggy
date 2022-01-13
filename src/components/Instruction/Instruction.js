import { current } from '@reduxjs/toolkit';
import React from 'react';
// import classes from './Instructions.module.css';
import { useSelector } from 'react-redux';

function Instructions() {
  const current = useSelector((state) => state.game.currentLevel);
  const levels = useSelector((state) => state.game.levels.filter((item) => item.level === current))

  return  <div >
    {levels.map((item) => item.question)}
  </div>;
}
export default Instructions;