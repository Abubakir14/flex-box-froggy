import { createSlice } from "@reduxjs/toolkit"

const initState = {

    currentLevel: 1,
    
    levels: [
    {
        level: 1,
        question: <p>Добро пожаловать в Flexbox Froggy. 
            Игра, в которой тебе нужно помочь лягушонку 
            Фроги и его друзьям написанием CSS кода! 
            Направь этого лягушонка на лилию справа используя
            свойство justify-content, которое выравнивает 
            элементы горизонтально и принимает следующие значения:</p>
    },
    {
        level: 2,
        question: <p>Используй justify-content еще раз, 
            чтоб помочь этим лягушатам попасть на их
            лилии. Помни, что это свойство CSS 
            выравнивает элементы горизонтально 
            и принимает следующие значения:</p>
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
          },
    }
}
)


export default GameSlice