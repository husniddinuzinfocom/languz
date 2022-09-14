import React from "react";
import Card from "./Card/Card";
import classes from "./Cards.module.scss";
import { data } from "./Mock";
import ads_img from "../../assets/imgs/ads.webp";
import Container from "../Container/Container";



export default function Cards() {
  return (
    <main className={classes.cards}>
      <Container>
        <div className={classes.cards__title}>
          <p>
            <span>Lang.uz</span> - это сайт для изучения языков в увлекательной
            форме. Учить язык теперь просто и интересно! Подготовьтесь к
            экзамену IELTS или пройдите пробный MOCK
          </p>
        </div>
      </Container>
      <Container>
        <div className={classes.cards__wrapper}>
          {data.map((item, index) => <Card {...item} key={index} />)}
        </div>
      </Container>
      <Container>
        <div className={classes.ads_content}>
          <img src={ads_img} alt="ads_img" />
        </div>
      </Container>
      <div className={classes.cards__left__bg}></div>
      <div className={classes.cards__right__bg}></div>
      <div className={classes.cards__bottom__bg}></div>
    </main>
  );
}
