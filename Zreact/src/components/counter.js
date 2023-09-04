import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/models/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const isLoading = useSelector((state) => state.counter.isLoading)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                {isLoading}
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    增加
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    减少
                </button>
            </div>
        </div>
    )
}