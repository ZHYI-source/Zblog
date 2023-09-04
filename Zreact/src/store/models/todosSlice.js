import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState({
    status: 'idle'
})

// Thunk functions
// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//     const response = await client.get('/fakeApi/todos')
//     return response.todos
// })

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoToggled(state, action) {
            console.log('你好啊',action)
        },
    },
})

export const {
    todoToggled
} = todosSlice.actions

export default todosSlice.reducer

