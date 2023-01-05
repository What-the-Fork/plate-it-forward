import React from 'react'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {SignUpModal} from "../Shared/Components/Navigation/Sign-up/SignUpModal.jsx";
import {Link} from "react-router-dom";

export function Partner() {
    return(
        <>
            <body className={'min-vh-100'}>
            <section className={'bg-light'}>
                <h1 className={'text-center p-4 display-3 border-bottom'}><strong>Partner with us</strong></h1>
            </section>
            <Container className={'p-4'}>
                <Row xl={12}>
                    <Col className={'d-block img-fluid col-xl-4 col-l-8 col-md-10 col-sm-12 m-0 mt-sm-3'}><Image className={'img-fluid rounded'} src={'https://i.ibb.co/xYCyf6S/Adobe-Stock-220711353.jpg'} alt={'Serving Donations'}/></Col>
                    <Col className={'d-block img-fluid col-xl-4 col-l-8 col-md-10 col-sm-12 m-0 mt-sm-3'}><Image className={'img-fluid rounded'} src={'https://i.ibb.co/CQYcDsh/Adobe-Stock-434293293.jpg'} alt={'Volunteers'}/></Col>
                    <Col className={'d-block img-fluid col-xl-4 col-l-8 col-md-10 col-sm-12 m-0 mt-sm-3'}><Image className={'img-fluid rounded'} src={'https://i.ibb.co/bXsB6BJ/Adobe-Stock-176970757.jpg'} alt={'Serving meals'}/></Col>
                </Row>
                <Container className={'gx-md-1 gy-5 p-4 mt-4 justify-content-center'}>
                    <h3 className={'display-6 text-center'}><strong>Become a Restaurant Partner</strong></h3>
                    <section className={'container-md'}>
                    <p>How much food is thrown out after each day or week in your restaurant? Did you know these leftovers can help us end hunger in Albuquerque? Join Plate it Forward to reduce your waste and feed your neighbors in need!</p>
                    <p>Each year, more than 270,000 New Mexicans struggle with hunger – that’s 1 in 8 adults and 1 in 5 children. Albuquerque’s many city and nonprofit resources are constantly stretched and exhausted to meet this growing demand. This is where we and you step in.</p>
                    <p>Please consider becoming a restaurant partner! We currently partner with 5 community centers and 15 local restaurants across town but need to expand our reach. For every new restaurant that joins our team, we’re able to serve 32 more people at each community center per day with just leftovers.</p>
                    <p>In addition to reducing your food waste and feeding those in need, our restaurants also receive a variety of tax benefits since your leftovers are considered donations. You can learn more about this with the following resources:</p>
                    </section>
                    <ul>
                        <li><Link className={'link-dark'} to={'https://policyfinder.refed.org/federal-policy/federal-tax-incentives'}>Policy Finder</Link></li>
                        <li><Link className={'link-dark'} to={'https://www.nmrestaurants.org/donating-excess-food-waste-to-serve-the-hungry/'}>New Mexico Restaurant Association</Link></li>
                        <li><Link className={'link-dark'} to={'https://www.irs.gov/charities-non-profits/charitable-contributions'}>Charitable Contributions</Link></li>
                    </ul>
                    </Container>
                <Container className={'gx-md-1 gy-5 pb-4 mt-4 justify-content-center'}>
                    <SignUpModal />
                </Container>
                </Container>
                {/* NEEDS ALL (EXCEPT PADDING AND MB) TO BE CENTERED */}

            </body>
        </>
    )
}