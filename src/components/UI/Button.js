import classes from './Button.module.css'

const Button = (props) => {
    return <div className={`${classes.button} ${classes.translate} ${classes.disabled}`} onClick={props.onClick}>
        {props.children}
    </div>
}

export default Button