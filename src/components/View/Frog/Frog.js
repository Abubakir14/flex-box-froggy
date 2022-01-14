import React from "react";
import classes from '../View.module.css'

const Frog = ({ className }) => {
    return (
        <div className={`${classes.frog} ${className}`}>
            <div className={classes.bg}></div>
        </div>
    );
};

export default Frog