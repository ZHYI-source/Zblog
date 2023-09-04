import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    isLoading: '窗前明月光'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        /*
        * 参数说明：
        * state:initialState  action :{payload: "你好",type:"counter/setIsLoading"}
        * */
        setIsLoading: (state, action) => {
            state.isLoading = action.payload.msg
        },
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, setIsLoading} = counterSlice.actions

export default counterSlice.reducer