import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {httpConfig} from "../../../utils/http-config.js";
import {fetchPartnershipsByPartnershipCenterId} from "../../../store/partner.js";
import {useSelector} from "react-redux";


export const PartnershipAccept = (props) => {
    console.log("im on")
    // const dispatch = useDispatch()
    const {partner} = props
    const {partnershipRestaurantId, partnershipCenterId, partnershipApproved} = partner
    // const restaurant = useSelector(state => state.restaurants ? state.restaurants.filter(restaurant => restaurant.restaurantId === partnershipRestaurantId && !partnershipApproved)[0] : null)
    function submitPartnershipAccept() {
        httpConfig.put('/apis/partnership', {partnershipCenterId, partnershipRestaurantId, partnershipApproved: true})
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    // dispatch(fetchPartnershipsByPartnershipCenterId(centerId))
                }
            });
    }
    function submitPartnershipDeny() {
        httpConfig.delete('/apis/partnership/deletePartnership')
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {}
            });
    }
    return (
        <>
            <Container>
                 <Row className={'gx-md-5 gy-5'}>
                    <h3>You have a partnership request!</h3>
                    <Col md={5} className={'text-center'}>
                        <Image className={'img-fluid'} src={'http://placekitten.com/250/250'} alt={'Cat Cage doing Cage things'}/>
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