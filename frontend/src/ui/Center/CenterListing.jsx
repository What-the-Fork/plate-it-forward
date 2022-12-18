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
            <Container className={'bg-light p-4 justify-content-center border'}>
                <Row className={'gx-md-5 gy-5 align-items-center'}>
                    <Col md={4} className={'text-center'}>
                        <Image className={'img-fluid rounded'} width={200}
                               src={'https://i.ibb.co/jWjShTx/empty-Center-Profile-Image.png'}
                               alt={'community center profile img'}/>
                    </Col>
                    <Col md={8} className={'fs-5'}>
                        <h3 className={'display-6'}><strong>{centerName}</strong></h3>
                        <p>{centerAddress}</p>
                        <p>{centerPhone}</p>
                        <Link to={'#'}>{centerWebsiteUrl}</Link>
                        <h5 className={'mt-4'}>Partnering Restaurants</h5>
                        <p id={'partner-map'} className={'gx-sm-5 d-flex align-items-start justify-content-between'}>
                            {partnerRestaurants.map(partnerRestaurant => <p>{partnerRestaurant.restaurantName}</p>)}
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
