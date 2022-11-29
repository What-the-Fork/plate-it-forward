import React, {useEffect} from 'react'
import styles from './center.module.css'
import {Col, Container, Image, Row} from "react-bootstrap";
import ReactDOM from "react-dom/client";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCenters} from "../../store/centers.js";
import {CenterListing} from "./CenterListing.jsx";

export const CenterDirectory = (props) => {
    const {centers} = props


    return (
        <>
            <section className={'py-5'}>
                {centers.map(center => <CenterListing center = {center} key = {center.centerId}/>)}
            </section>
        </>
    )
}

// function CenterList(props) {
//     const centers = props.centers;
//     const listCenters = centers.map((center) =>
//         <li>{center}</li>
//     );
//     return (
//         <ul>{listCenters}</ul>
//     );
// }
//
// const centers = [1, 2, 3, 4, 5];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<CenterList centers={centers} />);