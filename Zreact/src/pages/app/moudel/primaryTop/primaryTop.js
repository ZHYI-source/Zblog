import React from 'react';
import {Avatar} from "antd";
import HeaderSearch from "../headerSearch/headerSearch";
import {useNavigate} from "react-router-dom";
import './primaryTop.scss'

const PrimaryTop = (props) => {
    const navigate = useNavigate()
    const goRouter = (path) => {
        navigate(path)
    }
    return (
        <div id='primary-top'>
            <div className='primary-header'>
                            <span className='header-title' onClick={() => {
                                goRouter('/')
                            }}>
                                 <Avatar className='primary-logo' src="https://joeschmoe.io/api/v1/random"/>
                                 <span className='page-name'>HOME</span>
                            </span>
                <HeaderSearch/>
                <span className='header-icon' onClick={() => {
                    props.openMenu()
                }}>
                                ✨
                </span>
            </div>
        </div>
    );
};

export default PrimaryTop;