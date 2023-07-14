"use client"

import Image from "next/image";
import css from "./Apply.module.css";

export const Apply = () => {
    return(
        <div className={css.wrapper}>
            <div className={css.blockContent}>
                <h2 className={css.title}>ПОДАТЬ ЗАЯВКУ</h2>
                <p className={css.text}>ВЫБЕРИТЕ РОЛЬ В КОТОРОЙ ХОТИТЕ ОФОРМИТЬ ЗАЯВКУ</p>
            </div>
            <div className={css.blockImg}>
                    <img src="/img/Participant.png" alt="Participant"/>
                    <img src="/img/Сustomer.png" alt="Сustomer"/>
            </div>
        </div>
    )
}