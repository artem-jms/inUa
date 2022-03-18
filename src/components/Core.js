import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Auth from "./Auth";
import Header from "./app/Header";

const Core = observer(() => {

    const {user} = useContext(Context)

    if (!user.auth) {
        return (
        <div style={{height: '100%'}}>


            <Auth />
        </div>)
    } else return (
        <div>
            Всё работает!
        </div>
    );

});

export default Core;