import React, {useState} from 'react';
import Header from "./app/Header";
import module from './modules/auth.module.css'
import Input from "./app/Input";
import classNames from "classnames";
import {BadPasswords} from "../config";
import Loader from "./app/Loader";
const Auth = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [isLogin, setIsLogin] = useState(true)

    const [passValid, setPassValid] = useState(undefined)
    const [loginValid, setLoginValid] = useState(undefined)
    const [confirmValid, setConfirmValid] = useState(undefined)

    const validateLogin = (value) => {
        if (value.length === 0) { setLoginValid(undefined) } else {
            if (value.length > 4) {setLoginValid(true)} else {setLoginValid(false)}
        }
    }

    const validatePassword = (value) => {
        for (let i = 0; i < BadPasswords.length; i++) { if (BadPasswords[i] === value) return false }
        if (value.length === 0) { setPassValid(undefined) } else {
            if (value.length > 4) {setPassValid(true)} else {setPassValid(false)}
        }
    }

    const validateConfirm = (value) => {
        if (value.length === 0) { setConfirmValid(undefined) } else {
            if (value === password) {setConfirmValid(true)} else {setConfirmValid(false)}
        }
    }

    const Change = (value, data) => {
        switch (data) {
            case 'LOGIN':
                validateLogin(value)
                break
            case 'PASSWORD':
                validatePassword(value)
                if (value === confirmPassword) {setConfirmValid(true)} else {setConfirmValid(false)}
                break
            case 'CONFIRM':
                validateConfirm(value)
                break
        }
    }

    const CheckValid = () => {
        if (isLogin) {
            if (loginValid === undefined) setLoginValid(false)
            if (passValid === undefined) setPassValid(false)
            return !!(loginValid && passValid);
        } else {
            if (loginValid === undefined) setLoginValid(false)
            if (passValid === undefined) setPassValid(false)
            if (confirmValid === undefined) setConfirmValid(false)


            return !!(loginValid && passValid && confirmValid);
        }


    }

    const Submit = () => {
        if (isLogin) {

            if (CheckValid()) {
                SuccessfulAuth()
            }

            // Login

        } else {
            // Register
            if (CheckValid()) {
                SuccessfulAuth()
            }
        }
    }

    const SuccessfulAuth = () => {
        setLogged(true)
        setTimeout(() => setShowLoader(true), 600)
        setTimeout(() => document.getElementById("auth-form").remove(), 600);
    }

    const [logged, setLogged] = useState(false)
    const [showLoader, setShowLoader] = useState(false)


    return (
        <div className={classNames(module.auth, {[module.auth__active]: logged})}>

            <Header />

            <div className={classNames(module.loader, {[module.loader__active]: showLoader})}>
                <Loader />
            </div>
            <form id={'auth-form'} className={classNames(module.auth__form, {[module.auth__form__active]: logged})}>
                <div className={classNames({[module.reg]: isLogin}, {[module.reg__active]: !isLogin})}>
                    Реєстрація
                </div>
                <div className={classNames({[module.reg]: !isLogin}, {[module.reg__active]: isLogin})}>Авторизація</div>
                <div className={module.auth__form__c}>

                <div className={module.inputs}>
                    <div className={module.input}>
                        Введіть логін
                    <Input
                        name={'LOGIN'}
                        onChange={Change}
                        valid={loginValid}
                        max={20}
                        type={'text'}
                        setValue={setLogin}
                        value={login}
                        placeholder={''}/>
                    </div>
                    <div className={module.input}>
                        Введіть пароль
                    <Input
                        name={'PASSWORD'}
                        onChange={Change}
                        max={30}
                        valid={passValid}
                        type={'password'}
                        setValue={setPassword}
                        value={password}
                        placeholder={''}/>
                    </div>
                    <div className={classNames(module.input,
                        {[module.confirm] : isLogin},
                        {[module.confirm__active] : !isLogin})}>
                        Підтвердіть пароль
                        <Input
                            valid={confirmValid}
                            name={'CONFIRM'}
                            onChange={Change}
                            max={30}
                            type={'password'}
                            setValue={setConfirmPassword}
                            value={confirmPassword}
                            placeholder={''}/>
                    </div>
                    <div className={module.register}>
                        <span>{isLogin ? 'Немає аккаунту? - ' : 'Вже зареєстровані? - '}</span>
                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            className={module.link}>{isLogin ? 'Зареєструйтеся' : 'Увійдіть в аккаунт'}</span>
                    </div>

                    <button
                        value={'Увійти'}
                        type={'button'}
                        onClick={Submit}
                        className={module.button}>
                        <div className={classNames({[module.reg__btn]: isLogin}, {[module.reg__btn__active]: !isLogin})}>
                            Зареєструватися
                        </div>
                        <div className={classNames({[module.reg__btn]: !isLogin}, {[module.reg__btn__active]: isLogin})}>
                            Увійти
                        </div>
                    </button>
                </div>


                </div>
            </form>



        </div>
    );
};

export default Auth;