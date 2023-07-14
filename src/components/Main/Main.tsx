"use client"

import { AboutUs } from "./AboutUs/AboutUs"
import { Counter } from "./Counter/Counter"
import { WhatAreWeDoing } from "./WhatAreWeDoing/WhatAreWeDoing"

export const Main = () => {
    return(
        <div>
            <AboutUs/>
            <WhatAreWeDoing/>
            <Counter/>
        </div>
    )
}