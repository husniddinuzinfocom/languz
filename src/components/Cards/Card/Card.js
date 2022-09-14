import React from 'react';
import classes from "../Cards.module.scss";

export default function Card({ title, description, link, link_title, color,card_bg }) {
  return (
    <div className={classes.cards__item} style={{ backgroundColor: color }}>
      <div className={classes.cards__item__content}>
        <div className={classes.cards__item__content__title} style={{ backgroundColor: color }}>
          <span>{title}</span>
        </div>
        <div className={classes.cards__item__content__desc}>
          <p>{description}</p>
        </div>
        <div className={classes.cards__item__content__btn}>
          <a href={link} style={{ backgroundColor: color }}>{link_title}</a>
        </div>
        <div className={classes.cards__item__content__bg} style={card_bg ? {backgroundImage: `url(${card_bg})`} : {}}></div>
      </div>
    </div>
  )
}
