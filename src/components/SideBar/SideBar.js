import Editor from '../Editor/Editor'
import Header from '../Header/Header'
import classes from './SideBar.module.css'

const SideBar = () => {
    return <div  className={classes.sideBar}>
        <Header/>
        
        <Editor/>
    </div>
}

export default SideBar