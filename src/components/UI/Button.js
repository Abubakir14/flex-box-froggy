import classes from './Button.module.css'

const Button = (props) => {
    return <div className={`${classes.button} ${classes.translate} ${classes.disabled}`}>
        {props.children}
    </div>
}

export default Button