import React from "react";
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

export default function Cars (): JSX.Element {
    return (
        <div>
            <Row  justify='center'>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/abarth/Brand-Abarth-Hero.jpg" />}
                        onClick={() => window.open("http://www.abarth.com")}
                    >
                        <Meta title="Explote Abarth" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/alfa-romeo/Brand-Alfa-Romeo-Hero.jpg" />}
                        onClick={() => window.open("https://www.alfaromeousa.com")}
                    >
                        <Meta title="Explote Alfa Romero" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/chrysler/Brand-Chrysler-Hero.jpg" />}
                        onClick={() => window.open("https://www.chrysler.com")}
                    >
                        <Meta title="Explote Chrysler" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/dodge/Brand-Dodge-Hero.jpg" />}
                        onClick={() => window.open("https://www.dodge.com")}
                    >
                        <Meta title="Explote Dodge" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/fiat/New_500.jpg" />}
                        onClick={() => window.open("http://fiat.com")}
                    >
                        <Meta title="Explote Fiat" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/lancia/Brand-Lancia-Hero.jpg" />}
                        onClick={() => window.open("http://lancia.com")}
                    >
                        <Meta title="Explote Lancia" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/maserati/Brand-Maserati-Hero.jpg" />}
                        onClick={() => window.open("https://www.maserati.com/us/en?redirect=1")}
                    >
                        <Meta title="Explote Maserati" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/ram/RAMFamily-Hero-Lighter.jpg" />}
                        onClick={() => window.open("https://www.ramtrucks.com")}
                    >
                        <Meta title="Explote Ram" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/citroen/Brand-Citroen-Hero.jpg" />}
                        onClick={() => window.open("https://www.citroen.com/en/")}
                    >
                        <Meta title="Explote Citroën" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/ds-automobiles/Brand-DS-Hero.jpg" />}
                        onClick={() => window.open("http://dsautomobiles.co.uk/")}
                    >
                        <Meta title="Explote DS Automobiles" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/peugeot/Brand-Peugeot-Hero.jpg" />}
                        onClick={() => window.open("https://www.peugeot.com/en/")}
                    >
                        <Meta title="Explote Peugeot" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/vauxhall/Brand-Vauxhall-Hero.jpg" />}
                        onClick={() => window.open("https://www.vauxhall.co.uk")}
                    >
                        <Meta title="Explote Vauxhall" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                        width: 300,
                        height: 300,
                        margin: "45px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                        cover={<img alt="investor" src="https://www.stellantis.com/content/dam/stellantis-corporate/brands/opel/Brand-Opel-Hero.jpg" />}
                        onClick={() => window.open("https://www.vauxhall.co.uk")}
                    >
                        <Meta title="Explote Opel" />
                    </Card>
                </Col>
            </Row>
        </div>
    )
};