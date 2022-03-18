import React from 'react';
import module from './module/header.module.css'
import Logo from "./Logo";

const Header = ({title}) => {
    return (
        <header className={module.header}>
            <span className={module.title}>
                <Logo fontSize={40}/>
            </span>
        </header>
    );
};

export default Header;