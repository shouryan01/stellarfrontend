import React from "react";
import { Space, Row, Col } from 'antd';
import Score from "../Components/Score";
import Speed from "../Components/Speed";


export default function Summary (): JSX.Element {
    return (
        <Space wrap> 
            <Row wrap>
                <Col>
                    <Score />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Speed />
                </Col>
            </Row>
        </Space>
    )
};