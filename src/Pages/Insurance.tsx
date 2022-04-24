import React from "react";
import { Card, Row, Col, Typography } from 'antd';
const { Meta } = Card;
const { Title } = Typography;

export default function Insurance (): JSX.Element {
    return (
        <div>
            <Title>Special Offers Just For You!</Title>
            <Row  justify='center'>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 800,
                        height: 500,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://res.cloudinary.com/value-penguin/image/upload/c_limit,dpr_1.0,f_auto,h_1600,q_auto,w_1600/v1/referral_logos/us/insurance/statefarm-2" />}
                        onClick={() => window.open("http://www.statefarm.com")}
                    >
                        <Meta title="Save up to 5% because of your stellar score!" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 800,
                        height: 500,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.insurancejournal.com/app/uploads/2014/03/geico.jpg" />}
                        onClick={() => window.open("http://www.geico.com")}
                    >
                        <Meta title="See what Geico has to offer!" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 800,
                        height: 500,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://images.contentstack.io/v3/assets/blt62d40591b3650da3/blt72c5ebc95e884f8c/5ca763a5082f61c34628d081/share-opengraph-1200.png" />}
                        onClick={() => window.open("http://www.progressive.com")}
                    >
                        <Meta title="Save up to 10% because of your stellar score!" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 800,
                        height: 500,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.allstate.com/resources/Allstate/images/mobile/cards/allstate-logo-social-cards-v3.jpg" />}
                        onClick={() => window.open("http://www.allstate.com")}
                    >
                        <Meta title="See what Allstate has to offer!" />
                    </Card>
                </Col>
            </Row>
        </div>
    )
};