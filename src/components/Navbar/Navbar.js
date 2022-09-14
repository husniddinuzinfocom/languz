import React, { useState } from 'react';
import classes from "./Navbar.module.scss";
import logo from "../../assets/imgs/logo-m.png";
import Container from '../Container/Container';

export default function Navbar() {
    const [active, setActive] = useState(false);

    return (
        <>
            <nav className={classes.Navbar}>
                <Container>
                    <div className={classes.Navbar__wrapper}>
                        <div className={classes.col_6}>
                            <div className={classes.menu_wrapper}>
                                <div className={classes.logo_content}>
                                    <a href="/">
                                        <img src={logo} alt="logo" />
                                    </a>
                                    <span>Учите языки вместе с нами!</span>
                                </div>
                                <div className={classes.menu}>
                                    <ul>
                                        <li><a href="/">Узбекский</a></li>
                                        <li><a href="/">Английский</a></li>
                                        <li><a href="/">IELTS</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={classes.col_6}>
                            <ul className={active ? `${classes.register__wrapper} ${classes.active}` : classes.register__wrapper}>
                                <li className={classes.lang_select}>
                                    <div className={classes.select}>
                                        <select id="select" onChange={(e) => e.target.value}>
                                            <option value="ru">Ru</option>
                                            <option value="uz">Uz</option>
                                        </select>
                                        <span className={classes.focus}></span>
                                    </div>
                                </li>
                                <li className={classes.register}>
                                    <a href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.307" height="17.307" viewBox="0 0 17.307 17.307">
                                            <path id="Icon_metro-key" data-name="Icon metro-key" d="M14.469,1.928a5.412,5.412,0,0,0-5.317,6.4L2.571,14.908v3.245a1.082,1.082,0,0,0,1.082,1.082H4.734V18.153H6.9V15.99H9.061V13.826h2.163l1.4-1.4A5.409,5.409,0,1,0,14.469,1.928Zm1.62,5.41a1.622,1.622,0,1,1,1.622-1.622A1.622,1.622,0,0,1,16.089,7.338Z" transform="translate(-2.571 -1.928)" fill="#f9a13d" />
                                        </svg>
                                        <span>Регистрация</span>
                                    </a>
                                </li>
                                <li className={classes.line}>.</li>
                                <li className={classes.login}>
                                    <a href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.227" height="17.782" viewBox="0 0 22.227 17.782">
                                            <path id="Icon_awesome-user-lock" data-name="Icon awesome-user-lock" d="M7.78,8.891A4.445,4.445,0,1,0,3.334,4.445,4.445,4.445,0,0,0,7.78,8.891Zm3.334,2.223a2.191,2.191,0,0,1,.281-1.059,4.753,4.753,0,0,0-.5-.052h-.58a6.046,6.046,0,0,1-5.064,0h-.58A4.669,4.669,0,0,0,0,14.669v1.446a1.667,1.667,0,0,0,1.667,1.667h9.756a2.207,2.207,0,0,1-.309-1.111Zm10-1.111H20V7.224a2.778,2.778,0,0,0-5.557,0V10H13.336a1.111,1.111,0,0,0-1.111,1.111V16.67a1.111,1.111,0,0,0,1.111,1.111h7.78a1.111,1.111,0,0,0,1.111-1.111V11.114A1.111,1.111,0,0,0,21.116,10Zm-3.89,5a1.111,1.111,0,1,1,1.111-1.111A1.111,1.111,0,0,1,17.226,15Zm1.111-5H16.115V7.224a1.111,1.111,0,1,1,2.223,0Z" fill="#f9a13d" />
                                        </svg>
                                        <span>Авторизация</span>
                                    </a>
                                </li>
                                <li className={classes.mob_link}><a href="/">Узбекский</a></li>
                                <li className={classes.mob_link}><a href="/">Английский</a></li>
                                <li className={classes.mob_link}><a href="/">IELTS</a></li>
                            </ul>
                            <div className={classes.menu_icon} onClick={() => setActive(!active)}>
                                <div className={classes.burger}>
                                    {!active ?
                                        <svg
                                            aria-hidden="true"
                                            fill="#1DA76D"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                        </svg> :
                                        <svg
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="CloseIcon"
                                            tabIndex="-1"
                                            fill="#1DA76D"
                                            title="Close">
                                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                        </svg>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
            <div className={active ? `${classes.backdrop} ${classes.active}` : classes.backdrop} onClick={() => setActive(false)}></div>
        </>
    )
}
