import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assets/imgs/logo-m.png";
import Container from "../Container/Container";

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.footer__nav}>
                    <ul>
                        <li>
                            <a href="/" className={classes.logo}>
                                <img src={logo} alt="logo" />
                            </a>
                        </li>
                        <li>
                            <a href="/">О проекте</a>
                        </li>
                        <li>
                            <a href="/">Пользовательское соглашение</a>
                        </li>
                        <li>
                            <a href="/">Получить виджет</a>
                        </li>
                        <li>
                            <a href="/">Обратная связь</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.footer__line}></div>
                <div className={classes.footer__bottom}>
                    <p>© 2003-2022 Единый интегратор по созданию и поддержке государственных информационных систем UZINFOCOM </p>
                </div>
            </Container>
        </footer>
    );
}
