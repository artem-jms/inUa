import React from 'react';
import module from './module/logo.module.css'
import {Yellow, Gray, Blue} from "../../config";
const Logo = ({fontSize}) => {
    return (
        <div className={module.block} style={{fontSize: fontSize}}>
            <span className={module.yellow}>{Yellow}</span>
            <span className={module.dot}>{Gray}</span>
            <span className={module.blue}>{Blue}</span>
        </div>
    );
};

export default Logo;