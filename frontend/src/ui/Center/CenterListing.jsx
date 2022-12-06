import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const CenterListing = (props) => {
    const {center} = props
    console.log(center)
    const {centerId, centerName, centerAddress, centerPhone, centerWebsiteUrl} = center
    // const {restaurantName} = partner


    const partnerRestaurants = useSelector(state => {
        if (state.partners[centerId] === undefined) {
            return []
        } else {
            return state.partners[centerId]
        }
    })
    console.log(partnerRestaurants)

    return (
        <>
            <Container className={'bg-light p-4 justify-content-center'}>
                <Row className={'gx-md-5 gy-5 align-items-center'}>
                    <Col md={5} className={'text-center'}>
                        <Image className={'img-fluid rounded'} src={'http://placekitten.com/250/250'} alt={'Nick Cage doing Nick Cage things'}/>
                    </Col>
                    <Col md={7} className={'fs-5'}>
                        <h3 className={'display-6'}><strong>{centerName}</strong></h3>
                        <p>{centerAddress}</p>
                        <p>{centerPhone}</p>
                        <Link to={'#'}>{centerWebsiteUrl}</Link>
                    </Col>
                    <Col md={12} className={'d-flex justify-content-evenly fs-5'}>
                        {partnerRestaurants.map(partnerRestaurant =>  <p className={' p-2 bg-light text white'}>{partnerRestaurant.restaurantName}</p>)}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

