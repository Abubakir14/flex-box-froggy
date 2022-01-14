import React from 'react'
import classes from '../View.module.css'

const Lilypad = ({ className }) => {
    return (
      <div className={`${classes.lilypad} ${className}`}>
        <div className={classes.bg}></div>
      </div>
    );
  };

export default Lilypad