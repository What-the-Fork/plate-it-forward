import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {httpConfig} from "../../../utils/http-config.js";
import {useDispatch} from "react-redux";
import {fetchCenterByPartnershipRestaurantId} from "../../../store/partnerCenter.js";
import {Link} from "react-router-dom";

export const PartnershipRequestListing = (props) => {
    const dispatch = useDispatch()
    const {center, restaurantId} = props
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
            <Container className={'bg-light p-4 justify-content-center border'}>
                <Row className={'gx-md-5 gy-5'}>
                    <Col md={5} className={'text-center'}>
                        <Image className={'img-fluid rounded'} width={200} src={'https://i.ibb.co/jWjShTx/empty-Center-Profile-Image.png'} alt={'community center profile img'}/>
                    </Col>
                    <Col md={7} className={'fs-5'}>
                        <h3>{centerName}</h3>
                        <p>{centerAddress}</p>
                        <p>{centerPhone}</p>
                        <Link className={'link-dark'} to={'#'}><p>{centerWebsiteUrl}</p></Link>
                        <Col>
                            <Button
                                onClick={submitPartnershipRequest}
                                className={'btn btn-dark'}>
                                Request Partnership
                            </Button>
                        </Col>
                    </Col>

                </Row>
            </Container>
        </>
    )
}