import Editor from '../Editor/Editor'
import Header from '../Header/Header'
import Instructions from '../Instruction/Instruction'
import classes from './SideBar.module.css'

const SideBar = () => {
    return <div  className={classes.sidebar}>
        <Header/>
        <Instructions/>
        <Editor/>
    </div>
}

export default SideBar