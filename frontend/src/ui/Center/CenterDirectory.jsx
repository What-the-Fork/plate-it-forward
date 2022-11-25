import React from 'react'
import styles from './center.module.css'
import {Col, Container, Image, Row} from "react-bootstrap";
import ReactDOM from "react-dom/client";

export function CenterDirectory () {
    return (
        <>
            <section className={'py-5'}>
                <Container>
                    <Row className={'gx-md-5 gy-5'}>
                        <Col md={5} className={'text-center'}>
                            <Image className={'img-fluid'} src={'https://www.placecage.com/c/250/250'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={7} className={'fs-5'}>
                            <h3>Jackie Daytona Volleyball Comm. Center</h3>
                            <p>137 New Holland Ave, Lancaster, PA 17602</p>
                            <p>(717) 793-3039</p>
                            <p>jdcommcenter.com</p>
                        </Col>
                        <Col md={12} className={'d-flex justify-content-evenly fs-5'}>
                            <p className={' p-2 bg-light text white'}>Nadja</p>
                            <p className={' p-2 bg-light text white'}>Nandor's</p>
                            <p className={' p-2 bg-light text white'}>Guillermo's</p>
                        </Col>
                    </Row>

                    <Row className={'gx-md-5 gy-5'}>
                        <Col md={5} className={'text-center'}>
                            <Image className={'img-fluid'} src={'https://www.placecage.com/c/250/250'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={7} className={'fs-5'}>
                            <h3>Jackie Daytona Volleyball Comm. Center</h3>
                            <p>137 New Holland Ave, Lancaster, PA 17602</p>
                            <p>(717) 793-3039</p>
                            <p>jdcommcenter.com</p>
                        </Col>
                        <Col md={12} className={'d-flex justify-content-evenly fs-5'}>
                            <p className={' p-2 bg-light text white'}>Nadja</p>
                            <p className={' p-2 bg-light text white'}>Nandor's</p>
                            <p className={' p-2 bg-light text white'}>Guillermo's</p>
                        </Col>
                    </Row>

                    <Row className={'gx-md-5 gy-5'}>
                        <Col md={5} className={'text-center'}>
                            <Image className={'img-fluid'} src={'https://www.placecage.com/c/250/250'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={7} className={'fs-5'}>
                            <h3>Jackie Daytona Volleyball Comm. Center</h3>
                            <p>137 New Holland Ave, Lancaster, PA 17602</p>
                            <p>(717) 793-3039</p>
                            <p>jdcommcenter.com</p>
                        </Col>
                        <Col md={12} className={'d-flex justify-content-evenly fs-5'}>
                            <p className={' p-2 bg-light text white'}>Nadja</p>
                            <p className={' p-2 bg-light text white'}>Nandor's</p>
                            <p className={' p-2 bg-light text white'}>Guillermo's</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

// function CenterList(props) {
//     const centers = props.centers;
//     const listCenters = centers.map((center) =>
//         <li>{center}</li>
//     );
//     return (
//         <ul>{listCenters}</ul>
//     );
// }
//
// const centers = [1, 2, 3, 4, 5];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<CenterList centers={centers} />);