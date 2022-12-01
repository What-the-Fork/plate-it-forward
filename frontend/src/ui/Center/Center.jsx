import React, {useEffect} from "react"
import {CenterHeader} from "./CenterHeader.jsx";
import {CenterDirectory} from "./CenterDirectory.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCenters} from "../../store/centers.js";
import {DirectoryMap} from "./DirectoryMap.jsx";

export function Center() {

    const centers = useSelector(state => state.centers ? state.centers : [])

    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchAllCenters())
    }
    useEffect(initialEffects, [dispatch])

    console.log(centers)

    return (
        <>
            <CenterHeader />
            <DirectoryMap centers={centers}/>
            <CenterDirectory centers={centers}/>
        </>
    )
}