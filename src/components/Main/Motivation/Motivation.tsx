"use client"

import Image from "next/image";
import css from "./Motivation.module.css";

export const Motivation = () => {
    return(
        <div className={css.container}>
            <div className={css.blockContent}>
                <h2 className={css.title}>ТЕХНОЛОГИИ</h2>
                <p className={css.contentText}>МЫ СОЗДАЕМ ОБУЧАЕМ, МОТИВИРУЕМ, ЗНАКОМИМ И ОБЪЕДИНЯЕМ ТАЛАНТЫ ИЗ МИРА IT И БИЗНЕСА</p>
                <p className={css.text}>Начни свой путь в мире IT вместе с нами. Мы работаем с основными восстребованными технологиями.</p>
            </div>
            <div className={css.blockImg}>
                <Image src={"/img/Technologies1.png"} alt="It" width={478} height={963}/>
                <Image src={"/img/Technologies2.png"} alt="People" width={478} height={963}/>
            </div>
        </div>
    )
}