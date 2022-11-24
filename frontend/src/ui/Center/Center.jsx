import React from "react"
import {CenterHeader} from "./CenterHeader.jsx";
import {CenterDirectory} from "./CenterDirectory.jsx";
import {Map} from "./Map.jsx";

export function Center() {
    return (
        <>
            <CenterHeader />
            <Map />
            <CenterDirectory />
        </>
    )
}