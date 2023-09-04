import React from 'react';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import './menuList.scss'
const MenuList = (props) => {
    const navigate = useNavigate()
    const goRouter=(path)=>{
        navigate(path)
        props.onClose()
    }
    return (
        <nav className="menu-box">
            {/*<div className='menu-logo' onClick={()=>goRouter('/')}>*/}
            {/*    <img alt='logo' src={logo}/>*/}
            {/*</div>*/}
            <div className='nav-item' onClick={()=>goRouter('/')}>
                <span className='item-icon'>#</span>
                <span className='item-name'>Home</span>
            </div>
            <div className='nav-item' onClick={()=>goRouter('/notice')}>
                <span className='item-icon'>#</span>
                <span className='item-name'>Notifications</span>
            </div>
            <div className='nav-item'>
                <span className='item-icon'>#</span>
                <span className='item-name'>List</span>
            </div>
            <div className='nav-item'>
                <span className='item-icon'>#</span>
                <span className='item-name'>More</span>
            </div>
            <Button type="primary" size='large' shape="round"  className='head-btn'>Tweet</Button>
        </nav>
    );
};

export default MenuList;