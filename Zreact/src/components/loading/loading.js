
import * as React from 'react';
import './loading.scss'
export const Loading = (props) => {
    return (
        <section className='loader-box'>
            <div className="loader-container">
                <div className="loader-child"></div>
                <div className="loader-child"></div>
                <div className="loader-child"></div>
            </div>
            <div>loading...</div>
        </section>

    );
};