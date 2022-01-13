import { createSlice } from "@reduxjs/toolkit"
import classes from './GameSlice.module.css'

const initState = {

    currentLevel: 1,
    
    levels: [
    {
        level: 1,
        question: <p>
        Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно 
        помочь лягушонку Фроги и <br/> его друзьям написанием CSS кода! Направь 
        этого лягушонка на лилию справа используя <br/> свойство
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
        <br/>
        <br/>
            <div className={classes['element-container']}>
        <code className={classes.help}>flex-start</code>
        : Элементы выравниваются по левой стороне контейнера.
        <br/>
        <code className={classes.help}>flex-end</code>
        : Элементы выравниваются по правой стороне контейнера.
        <br/>
        <code className={classes.help}>center</code>
        : Элементы выравниваются по центру контейнера.
        <br/>
        <code className={classes.help}>space-between</code>
        : Элементы отображаются с одинаковыми отступами между ними.
        <br/>
        <code className={classes.help}>space-around</code>
        : Элементы отображаются с одинаковыми отступами вокруг них.
        <br/>
        <br/>
    </div>
        Например, <code className={classes.help}>justify-content: flex-end;</code> сдвинет лягушонка вправо.
    </p>
    },
    {
        level: 2,
        question: <p>
            Используй <code className={classes.help}>justify-content</code> еще раз, 
            чтоб помочь этим лягушатам попасть на их
            лилии.<br/> Помни, что это свойство CSS 
            выравнивает элементы горизонтально 
            и принимает следующие значения:
        <br/>
        <br/>
            <div className={classes['element-container']}>
        <code className={classes.help}>flex-start</code>
        : Элементы выравниваются по левой стороне контейнера.
        <br/>
        <code className={classes.help}>flex-end</code>
        : Элементы выравниваются по правой стороне контейнера.
        <br/>
        <code className={classes.help}>center</code>
        : Элементы выравниваются по центру контейнера.
        <br/>
        <code className={classes.help}>space-between</code>
        : Элементы отображаются с одинаковыми отступами между ними.
        <br/>
        <code className={classes.help}>space-around</code>
        : Элементы отображаются с одинаковыми отступами вокруг них.
        <br/>
        <br/>
    </div>
    </p>
    },
    {
        level: 3,
        question: <p>
        Помоги всем трем лягушатам найти их лилии,
        просто используя <code className={classes.help}>justify-content.</code> В этот
        <br/>
        раз, у лилий 
        много пространства вокруг.
        <br/>
        <br/>
        Если ты чувствуешь, что забыл возможные значения 
        свойства, ты можешь навести курсор на название свойства,
        чтоб посмотреть их. Попробуй навести курсор на <code className={classes.help}>justify-content.</code>
        </p>
    },
    {
        level: 4,
        question: <p>
        Теперь лилии по краям уплыли к берегам,
        увеличив пространство между ними. Используй <code className={classes.help}>justify-content.</code>
        В этот раз, у лилий одинаковое расстояние между ними.
        </p>
    },
    {
        level: 5,
        question: <p>
            Теперь используй <code className={classes.help}>align-items</code> чтоб помочь 
            лягушатам добратся к нижней части пруда. 
            <br/>
            Это CSS свойство выравнивает элементы вертикально 
            и принимает следующие значения:
            <br/>
            <br/>
            <div className={classes['element-container']}>
                <code className={classes.help}>flex-start</code>
                : Элементы выравниваются по верхнему краю контейнера.
                <br/>
                <code className={classes.help}>flex-end</code>
                : Элементы выравниваются по нижнему краю контейнера.
                <br/>
                <code className={classes.help}>center</code>
                : Элементы выравниваются вертикально по центру контейнера.
                <br/>
                <code className={classes.help}>baseline</code>
                : Элементы отображаются на базовой линии контейнера.
                <br/>
                <code className={classes.help}>stretch</code>
                : Элементы растягиваются, чтоб заполнить контейнер.
                <br/>
                <br/>
            </div>
        </p>
    },
    {
        level: 6,
        question: <p>
            Направь лягушонка в центр пруда, используя 
            <code className={classes.help}>justify-content</code> 
            и <code className={classes.help}>align-items</code> вместе.
        </p>
    },
    {
        level: 7,
        question: <p>
            Лягушатам снова нужно пересечь пруд. 
            В этот раз к лилиям, с достаточно большим <br/>пространством 
            вокруг них. Используй комбинацию <code className={classes.help}>justify-content</code> 
            и <code className={classes.help}> align-items.</code>
        </p>
    },
    {
        level: 8,
        question: <p>
            Лягушатам нужно выстроиться в порядке их лилий, 
            используя <code className={classes.help}>flex-direction.</code> 
            Это CSS <br/> свойство задает
            направление, в котором будут расположены элементы 
            в контейнере, и <br/> принимает следующие значения:
            <br/>
            <br/>
            <div className={classes['element-container']}>
                <code className={classes.help}>row</code>
                : элементы размещаются по направлению текста.
                <br/>
                <code className={classes.help}>row-reverse:</code>
                : элементы отображаются в обратном порядке к направлению текста.
                <br/>
                <code className={classes.help}>column</code>
                : элементы располагаются сверху вниз.
                <br/>
                <code className={classes.help}>column-reverse</code>
                : элементы располагаются снизу вверх.
                <br/>
                <br/>
            </div>
        </p>
    },
    {
        level: 9,
        question: <p>
            Помоги лягушатам расположиться на своих
            лилиях используя <code className={classes.help}>flex-direction.</code>  Это CSS
            свойство задает направление, в котором будут
            расположены элементы в контейнере и <br/> принимает 
            следующие значения:
            <br/>
            <br/>
            <div className={classes['element-container']}>
                <code className={classes.help}>row</code>
                : элементы размещаются по направлению текста.
                <br/>
                <code className={classes.help}>row-reverse:</code>
                : элементы отображаются в обратном порядке к направлению текста.
                <br/>
                <code className={classes.help}>column</code>
                : элементы располагаются сверху вниз.
                <br/>
                <code className={classes.help}>column-reverse</code>
                : элементы располагаются снизу вверх.
                <br/>
                <br/>
            </div>
        </p>
    },
    {
        level: 10,
        question: <p>
            Помоги лягушатам попасть на свои лилии.
            Хоть и кажется, что они почти на своих 
            местах, все же придется применить и 
            <code className={classes.help}>flex-direction.
            </code> и <code className={classes.help}>justify-content,</code> 
            чтоб поместить их на <br/>свои лилии.
            <br/>
            <br/>
            Заметь, что когда ты устанавливаешь 
            направление в обратном порядке для 
            ряда или колонки, начало (start) и 
            конец (end) тоже меняются местами.
        </p>
    },
    {
        level: 11,
        question: <p>
            Помоги лягушатам найти их лилии с помощью <code className={classes.help}>flex-direction.</code> и 
            <code className={classes.help}>justify-content,</code> 
            <br/>
            <br/>
            Заметь, когда в качестве направления
            выбрана колонка, то             
            <code className={classes.help}>justify-content,</code>  
            влияет на вертикальное выравнивание, а 
            <code className={classes.help}>align-items,</code> 
            на горизонтальное.
        </p>
    },
    {
        level: 12,
        question: <p>
            Помоги лягушатам найти их лилии с помощью <code className={classes.help}>flex-direction,</code> и 
            <code className={classes.help}>justify-content.</code>  <br/>
        </p>
    },
    {
        level: 13,
        question: <p>
            Помоги лягушатам найти их лилии с помощью <code className={classes.help}>flex-direction,</code>
            <code className={classes.help}>justify-content.</code> и <br/> 
            <code className={classes.help}>align-items.</code> 
        </p>
    },
    {
        level: 14,
        question: <p>
            Иногда изменения порядка отображения 
            элементов в контейнере недостаточно. 
            В таких <br/> случаях мы можем применить свойство 
            <code className={classes.help}>order.</code> для конкретных элементов. По умолчанию, 
            значение этого свойства у элементов равно 0, 
            но мы можем задать положительное или 
            отрицательное целое число этому свойству.
            <br/>
            <br/>
            Используй свойство <code className={classes.help}>order.</code>, чтоб разместить лягушат на своих лилиях.
        </p>
    },
    {
        level: 15,
        question: <p>
            Используй свойство <code className={classes.help}>order.</code>, чтоб отправить красного лягушонка на его лилию.
        </p>
    },
    {
        level: 16,
        question: <p>
            Еще одно свойство, которое ты 
            можешь применить к определенному 
            элементу это <code className={classes.help}>align-self.</code>Это свойство 
            принимает те же значения, что и <code className={classes.help}>align-items.</code>
        </p>
    },
],
}

const GameSlice = createSlice({
    name: 'levelreducer',
    initialState: initState,
    reducers: {
        currentState(state, action) {
            if (action.payload > 16 || action.payload === 0) {
              return;
            }
            state.currentLevel = action.payload 
          },
    }
}
)


export default GameSlice