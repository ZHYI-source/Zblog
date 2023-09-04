import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    runTimeInterval: '',
}

export const systemSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        /*
        * 参数说明：
        * state:initialState  action :{payload: "你好",type:"counter/setIsLoading"}
        * */
        initComputeTime: (state, action) => {
            state.runTimeInterval = action.payload
        },
    },
})

export const {initComputeTime} = systemSlice.actions

export default systemSlice.reducer