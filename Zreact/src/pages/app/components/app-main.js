import React, {useState} from 'react';
import './app-main.scss'

const AppMain = () => {
    const [visible, setVisible] = useState(false)
    //打开菜单
    const openMenu = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }
    return (
        <section className="main-wrap">
            侧边栏
        </section>
    );
}


export default AppMain;
