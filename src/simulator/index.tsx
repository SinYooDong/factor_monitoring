import React, { Component } from 'react';
import { Container, Row, Col, Badge, Card, CardBody, CardTitle, Label, Input, CustomInput, Button, Table } from 'reactstrap';

import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';



class index extends Component {
    // constructor(props) {
    //     super(props);

    // }
    data = [
        {
            name: 'Page A', uv: 590, pv: 800, amt: 1400,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700,
        },
    ];
    render() {
        return (
            <Container>
                <h1><Badge color="secondary">Simulation Result</Badge></h1>
                <h2>Factor 별 수익률</h2>
                <Row>
                    <Col xs="4">
                        <Table>
                            <thead>
                                <tr>
                                    <th>항목</th>
                                    <th>값</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">최대 수익률</th>
                                    <td>10.81%</td>
                                </tr>
                                <tr>
                                    <th scope="row">최대 손실률</th>
                                    <td>(5.31)%</td>
                                </tr>
                                <tr>
                                    <th scope="row">초과수익률의 단순누적합</th>
                                    <td>54%</td>
                                </tr>
                                <tr>
                                    <th scope="row">기간 수익률</th>
                                    <td>67%</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs="8">
                        <Card body inverse color="warning">
                            <CardTitle>수익률</CardTitle>
                            <Table dark>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>multifactor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2013-02-28</th>
                                        <td>10.81%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
                <br />
                <h2>수익률 그래프</h2>
                <Row>
                    <ComposedChart
                        width={1100}
                        height={400}
                        data={this.data}
                        margin={{
                            top: 20, right: 80, bottom: 20, left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} />
                        <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </Row>
            </Container>
        );
    }
}

export default index;