"use client"

import Image from "next/image";
import css from "./counter.module.css";

export const Counter = () => {
    return(
        <div className={css.container}>

            <div className={css.leftBlock}>
                <div className={css.textBlock}>
                    <h2 className={css.title}>СКОЛЬКО НАС?</h2>
                    <p className={css.text}>Наше сообщество стремительно растет и развивается. Наша команда это целеустремленные, доброжелательные и активные люди, которые стремятся улучшить мир через идеи.</p>
                </div>
                <div className={css.imgBlock}>
                    <Image src={"/img/statistic.png"} alt="statistic" width={844} height={409}/>
                </div>
            </div>

            <Image src={"/img/comands.png"} alt="comands" width={910} height={1040} className={css.img}/>
            
        </div>
    )
}