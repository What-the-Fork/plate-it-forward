import React from 'react'
// import styles from './center.module.css'
import {Container, Row} from "react-bootstrap";
import {Pin} from "./Pin.jsx";
import Map from 'react-map-gl'

export function DirectoryMap (props) {
    const {centers} = props
    // const [centers] = React.useState([
    //     { centerLat: 35.332, centerLng: -106.652 },
    //     { centerLat: 35.339, centerLng: -106.656 },
    //     { centerLat: 35.40, centerLng: -106.666 },
    //     { centerLat: 35.23, centerLng: -106.4444 }
    // ])


    return (
        <>
            <Container>
                <Row className={'justify-content-center'}>
                    <Map
                        initialViewState={{
                            latitude: 35.1206,
                            longitude: -106.6288,
                            zoom: 9.5
                        }}
                        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                        style={{ width: 600, height: 400 }}
                        mapStyle='mapbox://styles/mapbox/streets-v12'
                    >
                        {centers.map((centers, index) =>
                            <Pin lat={centers.centerLat} lng={centers.centerLng} index={index} key={index} />)}
                    </Map>
                </Row>
            </Container>
        </>
    )
}