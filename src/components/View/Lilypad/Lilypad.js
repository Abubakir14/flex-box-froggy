import React from 'react'
import classes from '../View.module.css'

const Lilypad = ({ className, specialStyle }) => {
    return (
      <div className={`${classes.lilypad} ${className}`} style={specialStyle}>
        <div className={classes.bg}></div>
      </div> 
    );
};

export default Lilypad