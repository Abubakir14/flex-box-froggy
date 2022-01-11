import React from 'react'
import classes from './Header.module.css'
import Switcher from '../Switcher/Switcher'

const Header = () => {

    return <div className={classes.container}>
    <div><h1 className={classes.title}>Flexbox Froggy</h1></div>
    <Switcher/>
    </div>
}

export default Header