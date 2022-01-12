import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./GameSlice";

const store = configureStore({
    reducer: {
        levels: GameSlice
    },
})

export default store