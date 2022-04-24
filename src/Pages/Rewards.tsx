import Confetti from 'react-dom-confetti';
import React from "react";
import { Table, Typography, Tag, Button } from 'antd';

const { Title } = Typography;

const dataSource = [
    {
      key: '1',
      name: 'Welcome Gift',
      points: 0,
      status: "unlocked!",
      access: <Button type="primary" shape="round">Celebrate</Button>
 
    },
    {
      key: '2',
      name: 'Amateur Fan',
      points: 10,
      status: "LOCKED",

    },
    {
      key: '3',
      name: 'Serious Fan',
      points: 100,
      status: "LOCKED",

    },
    {
      key: '4',
      name: 'Ultra Fan',
      points: 1000,
      status: "LOCKED",

    },
    {
      key: '5',
      name: 'Surprise',
      points: 10000,
      status: "LOCKED",

    },
  ];

  const columns = [
    {
      title: 'Reward Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Required Points',
      dataIndex: 'points',
      key: 'points',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Access Link',
      dataIndex: 'access',
      key: 'access',
    }
]

export default function Rewards (): JSX.Element {
    const config = {
        angle: "279",
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
    

    return (
        <div>
            <Title>Congratulations!</Title>
            <Table dataSource={dataSource} columns={columns} />
            
            {/* <Confetti active={ someProp } config={ config }/> */}
        </div>
    )
};