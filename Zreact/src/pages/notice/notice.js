import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Alert, Button, Input} from "antd";
import {connect, useDispatch, useSelector} from "react-redux";
import {Counter} from "../../components/counter";
import {setIsLoading} from '../../store/models/counterSlice'
import Marquee from "react-fast-marquee";

const Notice = (props) => {
    const dispatch = useDispatch()

    function getVuex() {
        dispatch(setIsLoading({msg: '后会过去不如风斗将来', isL: false}))
    }

    let [count, setCount] = useState(0);

    function getCount() {
        setCount(count += 1)
    }

    //默认副作用
    useEffect(() => {
        console.log("默认副作用")
    }, [])

    //count 变化后执行的副作用
    useEffect(() => {
        console.log("ok--count 变化后执行的副作用")
    }, [count])
    //useMemo 类似于计算属性
    useMemo(() => {
        console.log('memo')
    }, [count])

    // useRef 获取元素或者组件实例 可以访问子组件的方法等
    let refInput = useRef(null)
    const getInputValue = () => {
        console.log('输入框:')
        console.log(refInput)
        refInput.current.focus();
    }

    return (
        <div>
            <h2>useEffect,useMemo</h2>
            <Button type='primary' onClick={getCount}>增加count</Button>
            <h3>{count}</h3>

            <h2>Redux</h2>
            <Button type='primary' onClick={getVuex}>触发Redux方法</Button>
            <Counter/>

            <h2>useRef</h2>
            <Button type='primary' onClick={getInputValue}>获取输入框的值</Button>
            <Input ref={refInput} placeholder='输入内容'  allowClear/>

        </div>
    );
};

let select = (state) => {
    return {
        type: state.type
    }
}
export default connect(select)(Notice);
