import React from 'react'
// import styles from './center.module.css'
import {Container, Row} from "react-bootstrap";
import {Pin} from "./Pin.jsx";
import Map from 'react-map-gl'

export function DirectoryMap () {

    const [points] = React.useState([
        { lat: 35.332, lng: -106.652 },
        { lat: 35.339, lng: -106.656 },
        { lat: 35.40, lng: -106.666 },
        { lat: 35.23, lng: -106.4444 }
    ])

    return (
        <>
            <Container>
                <Row className={'justify-content-center'}>
                    <Map
                        initialViewState={{
                            latitude: 35.33,
                            longitude: -106.65,
                            zoom: 9
                        }}
                        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                        style={{ width: 600, height: 400 }}
                        mapStyle='mapbox://styles/mapbox/streets-v12'
                    >
                        {points.map((point, index) =>
                            <Pin lat={point.lat} lng={point.lng} index={index} key={index} />)}
                    </Map>
                </Row>
            </Container>
        </>
    )
}