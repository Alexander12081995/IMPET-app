"use client"

import Image from "next/image";
import css from "./aboutUs.module.css";

export const AboutUs = () => {
    return(
        <div className={css.container}>
            <div className={css.blockImg}>
                <h2 className={css.title}>О НАС</h2>
                <div>
                    <Image src={"/img/Mentoring.png"} alt="mentoring" width={439} height={718} className={css.img}/>
                    <Image src={"/img/IT.png"} alt="IT" width={439} height={718}/>
                </div>
            </div>

            <p className={css.text}>МЫ - ГРУППА IT-ЭНТУЗИАСТОВ</p>
        </div>
    )
}