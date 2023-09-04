/*
 * 根页
 * 这里单独分一层是为了热更新能正常监听store的变化
 * 而把Routers放在了另外一个文件里，这样Routers中的内容就能使用connect挂载到redux上了
 * */

/** 所需的各种插件 **/
import React, {useEffect, useState} from "react";
import {Provider, useDispatch} from "react-redux";
import store from "../store";
import RouterView from "../router/index";
import {initComputeTime} from "../store/models/systemSlice";
import {getTimeInterval} from "../utils/util.sys";
import '../styles/index.scss';
export default function RootContainer() {
    const dispatch = useDispatch()
    // 后台获取系统运行时间
    const runAt = '1653264000000'; //2022-05-20 00:00:00
    function initRunTime() {
        //初始化运行时间
        setInterval(() => {
            dispatch(initComputeTime(getTimeInterval(runAt)))
        }, 1000);
    }

    useEffect(() => {
        initRunTime()
    });
    return (
        <Provider store={store}>
            <RouterView/>
        </Provider>
    );
}
