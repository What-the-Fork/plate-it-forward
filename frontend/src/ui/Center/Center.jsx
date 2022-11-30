import React, {useEffect} from "react"
import {CenterHeader} from "./CenterHeader.jsx";
import {CenterDirectory} from "./CenterDirectory.jsx";
import {Map} from "react-map-gl";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCenters} from "../../store/centers.js";
import {Container, Row} from "react-bootstrap";

export function Center() {

    const [points] = React.useState([
        { lat: 35.332, lng: -106.652 },
        { lat: 35.339, lng: -106.656 },
        { lat: 35.40, lng: -106.666 },
        { lat: 35.23, lng: -106.4444 }
    ])

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
            <Container>
                <Row className={'justify-content-center'}>
                    <h1>Center Map</h1>
                    <Map
                        initialViewState={{
                    latitude: 35.33,
                    longitude: -106.65,
                    zoom: 9
                        }}
                        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                        style={{ width: 600, height: 400 }}
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        >
                        {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index} />)}
                    </Map>
                </Row>
            <CenterDirectory centers={centers}/>
        </>
    )
}