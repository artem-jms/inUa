import React, {useEffect, useState} from 'react';
import module from './module/main.module.css'
import Core from "../components/Core";

const Main = () => {

    return (
        <div className={module.wrapper}>
            <div className={module.corner}>

            </div>
            <div className={module.main}>
                <div className={module.app}>
                    <Core />
                </div>
            </div>
            <div className={module.corner}>

            </div>
        </div>
    );
};

export default Main;