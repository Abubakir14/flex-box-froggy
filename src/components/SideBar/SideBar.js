import Editor from '../Editor/Editor'
import Header from '../Header/Header'
import Instructions from '../Instruction/Instruction'
import classes from './SideBar.module.css'

const SideBar = () => {
    return <div  className={classes.sidebar}>
        <Header/>
        <Instructions/>
        {/* <p>Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно 
        помочь лягушонку Фроги и его друзьям написанием CSS кода! Направь 
        этого лягушонка на лилию справа используя свойство
        <div className={classes.dropdown}><code className={classes.help}>justify-content</code>
        <div className={classes['dropdown-content']}>
            <p>Выравнивает flex-элементы вдоль главной оси</p>
            <span>Flex-start '(default)'</span>
            <span>flex-end</span>
            <span>center</span>
            <br/>
            <span>space-between</span>
            <span>space-around</span>
            <span>space-evenly</span>
        </div>
        </div>,
        которое выравнивает элементы горизонтально и принимает следующие значения:
        flex-start: Элементы выравниваются по левой стороне контейнера.
        flex-end: Элементы выравниваются по правой стороне контейнера.
        center: Элементы выравниваются по центру контейнера.
        space-between: Элементы отображаются с одинаковыми отступами между ними.
        space-around: Элементы отображаются с одинаковыми отступами вокруг них.
        Например, justify-content: flex-end; сдвинет лягушонка вправо.</p> */}
        <Editor/>
    </div>
}

export default SideBar