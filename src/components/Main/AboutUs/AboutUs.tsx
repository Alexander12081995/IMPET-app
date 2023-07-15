"use client"

import css from "./AboutUs.module.css";

export const AboutUs = () => {
    return (
        <div className={css.wrapper}>

            <div className={css.container}>
                <div className={css.blockAbout}>
                    <h2 className={css.title}>О НАС</h2>
                </div>

                <div className={css.blockImg}>
                    <div>
                        <img src={"/img/Mentoring.png"} alt="mentoring"/>
                    </div>
                    <div>
                        <img src={"/img/IT.png"} alt="IT"/>
                    </div>
                </div>
            </div>

            <p className={css.text}>МЫ - ГРУППА IT-ЭНТУЗИАСТОВ</p>
        </div>
    )
}