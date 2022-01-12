import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./GameSlice";

const store = configureStore({
    reducer: {
        game: GameSlice.reducer
    },
})
export const GameActions = GameSlice.actions
export default store