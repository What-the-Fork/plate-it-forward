import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {httpConfig} from "../../../utils/http-config.js";
// import {fetchPartnershipsByPartnershipCenterId} from "../../../store/partner.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchPendingByPartnershipCenterId} from "../../../store/pendingPartnerships.js";


export const PartnershipAccept = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    const {partner, centerId} = props
    const {restaurantId} = partner
    // const restaurant = useSelector(state => state.restaurants ? state.restaurants.filter(restaurant => restaurant.restaurantId === partnershipRestaurantId && !partnershipApproved)[0] : null)
    function submitPartnershipAccept() {
        httpConfig.put('/apis/partnership', {partnershipCenterId: centerId, partnershipRestaurantId: restaurantId, partnershipApproved: true})
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    dispatch(fetchPendingByPartnershipCenterId(centerId))
                }
            });
    }
    function submitPartnershipDeny() {
        httpConfig.delete(`/apis/partnership/centerId/${centerId}/restaurantId/${restaurantId}`)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    dispatch(fetchPendingByPartnershipCenterId(centerId))
                }
            });
    }
    return (
        <>
            <Container>
                 <Row className={'gx-md-5 gy-5'}>
                    <h3>You have a partnership request!</h3>
                    <Col md={5} className={'text-center'}>
                        <Image className={'img-fluid rounded'} src={'https://i.ibb.co/6FTWLQx/empty-Restaurant-Profile-Image.png'} alt={'Cat Cage doing Cage things'}/>
                    </Col>
                    <Col md={7} className={'fs-5'}>
                        <h3>{partner.restaurantName}</h3>
                        <p>{partner.restaurantAddress}</p>
                        <p>{partner.restaurantContactName}</p>
                        <p>{partner.restaurantContactPhone}</p>
                        <p>{partner.restaurantNameUrl}</p>
                    </Col>
                    <Col>
                        <Button
                            onClick={submitPartnershipAccept}
                            className={'ms-auto d-flex justify-content-end btn btn-dark'}>
                            Accept Partnership
                        </Button>

                        <Button
                            onClick={submitPartnershipDeny}
                            className={'ms-auto mt-2 d-flex justify-content-end btn btn-dark'}>
                            Deny Partnership
                        </Button>
                    </Col>
                </Row>

            </Container>
        </>
    )
}