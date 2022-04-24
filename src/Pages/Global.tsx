import React from "react";
import axios from "axios";
import { Table, Typography } from 'antd';

const { Title } = Typography;

const dataSource = [
  {
    key: '1',
    name: 'Shouryan',
    makeyear: 2022,
    state: 'MI',
    score: 850
  },
  {
    key: '2',
    name: 'Aditya',
    makeyear: 2020,
    state: 'MI',
    score: 700
  },
  {
    key: '3',
    name: 'Kanika',
    makeyear: 2016,
    state: 'MI',
    score: 650
  },
  {
    key: '4',
    name: 'Hallie',
    makeyear: 2018,
    state: 'MI',
    score: 750
  },
  {
    key: '5',
    name: 'Kawthar',
    makeyear: 2021,
    state: 'MI',
    score: 600
  },
];

function getData() {
  axios.get('http://localhost:8000/api/drivers/')
      .then(function (response) {
          console.log(response.data[2].username);
          return response.data
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Make/Year',
    dataIndex: 'makeyear',
    key: 'makeyear',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'Stellar Score',
    dataIndex: 'score',
    key: 'score',
  },
];


export default function Global (): JSX.Element {
    

    return (
        <div>
            <Title>National Leaderboard</Title>
            <br />
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
};