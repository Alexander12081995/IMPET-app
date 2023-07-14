"use client"

import Image from "next/image";
import css from "./header.module.css";
import Link from "next/link";

const navigation = [
    {text: "О НАС"},
    {text: "ЧТО МЫ ДЕЛАЕМ"},
    {text: "СКОЛЬКО НАС"},
    {text: "ТЕХНОЛОГИИ"},
]

export const Header = () => {
    return(
        <div className={css.container}>

            <div className={css.leftBlock}>
                <div className={css.groupLogo}>
                    <Image src={"/img/logo.svg"} alt="logo" width={199} height={124}/>
                    <button className={css.button}>ЗАПИСАТЬСЯ</button>
                </div>
                <div className={css.text}>ТВОРИ УЧИСЬ СОЗДАВАЙ</div>
            </div>

            <div className={css.rightBlock}>
                <ul className={css.groupNav}>
                    {navigation.map((item, index) => (
                        <li key={index} className={css.nav}>
                            <Link href={"/"} className={css.link}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
                    <Image src={"/img/headerImg.png"} width={930} height={848} alt="img" className={css.img}/>
            </div>

        </div>
    )
}