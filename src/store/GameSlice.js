import { createSlice } from "@reduxjs/toolkit"
import initState from "./InitialState"

const GameSlice = createSlice({
    name: 'levelReducer',
    initialState: initState,
    reducers: {
        
    }
})


export default GameSlice