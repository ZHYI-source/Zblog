import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './models/counterSlice'
import systemSlice from "./models/systemSlice";


const store = configureStore({
    reducer: {
        //引入所有reducer模块
        counter: counterReducer,
        system: systemSlice,
    }
})

export default store