import React from "react"
import {AboutUs} from "./AboutUs";
import {Header} from "./Header";
import {Stats} from "./Stats";

export function Home() {
    return (
        <>
            <Header />
            <AboutUs />
            <Stats />
        </>
    )
}