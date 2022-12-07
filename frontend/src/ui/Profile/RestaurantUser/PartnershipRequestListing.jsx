import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {httpConfig} from "../../../utils/http-config.js";
import {useDispatch} from "react-redux";
import {fetchCenterByPartnershipRestaurantId} from "../../../store/partnerCenter.js";

export const PartnershipRequestListing = (props) => {
    const dispatch = useDispatch()
    const {center, restaurantId} = props
    console.log(center)
    const {centerId, centerName, centerAddress, centerPhone, centerWebsiteUrl} = center
    function submitPartnershipRequest() {
        httpConfig.post('/apis/partnership', {partnershipCenterId: centerId, partnershipRestaurantId: restaurantId})
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    dispatch(fetchCenterByPartnershipRestaurantId(restaurantId))
                }
            });
    }
    return (
        <>
            <Container>
                <Row className={'gx-md-5 gy-5'}>
                    <Col md={5} className={'text-center'}>
                        <Image className={'img-fluid'} src={'http://placekitten.com/250/250'} alt={'Nick Cage doing Nick Cage things'}/>
                    </Col>
                    <Col md={7} className={'fs-5'}>
                        <h3>{centerName}</h3>
                        <p>{centerAddress}</p>
                        <p>{centerPhone}</p>
                        <p>{centerWebsiteUrl}</p>
                    </Col>
                    <Col>
                            <Button
                                onClick={submitPartnershipRequest}
                                className={'ms-auto d-flex justify-content-end'}>
                                Request Partnership
                            </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}