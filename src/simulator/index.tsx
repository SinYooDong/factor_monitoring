import React, { Component } from 'react';
import { Container, Row, Col, Badge, Card, CardBody, CardTitle, Label, Input, CustomInput, Button, Table } from 'reactstrap';

import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';
import queryString from "query-string"
import { requestSimulation } from "../service/AxiosService"
import moment from "moment";
import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/core';


interface Props {
    children: any,
    history: any
}

interface State {
    loading: boolean
}

class index extends Component<Props, State> {

    params: any = null;

    constructor(props: any) {
        super(props);
        this.state = {
            loading: true
        }
        let parsed: any = queryString.parse(this.props.history.location.search);
        parsed.universe_criteria = Number(parsed.universe_criteria);
        parsed.portfolio_cnt = Number(parsed.portfolio_cnt);
        parsed.factors.forEach((item: any, index: number) => {

            parsed.factors[index] = Number(item);
        })
        parsed.start_date = moment(parsed.start_date).unix();
        parsed.end_date = moment(parsed.end_date).unix();
        this.params = parsed;

        requestSimulation([], this.params.universe_criteria, this.params.portfolio_cnt, 0, this.params.start_date, this.params.end_date, this.params.factors).then((list: any) => {
            this.data = list.map((item: any) => {
                let name = moment(item.time * 1000).format("YYYY-MM-DD");
                return {
                    name: name, uv: item.sum_rate_of_return, pv: item.sum_rate_of_return, amt: item.sum_rate_of_return,
                }
            })
            this.setState({ loading: false })
        }).catch(err => {
            console.error(err);
            alert("에러 발생, 개발자에게 문의해주세요.")
        })

    }
    data = [
        {
            name: 'Page A', uv: 590, pv: 800, amt: 1400,
        }
    ];
    override = css`
        text-align: center;
        margin-top: 300px;
    `;
    render() {
        return (
            <Container>
                {(this.state.loading == true)
                    ? (
                        <ScaleLoader css={this.override} color={'#123abc'} />
                    )
                    : (
                        <React.Fragment>
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
                                    <Table dark>
                                        <thead>
                                            <tr>
                                                <th>날짜</th>
                                                <th>수익률</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.data.map((item: any) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{item.name}</th>
                                                        <td>{item.uv}%</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
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
                        </React.Fragment>
                    )
                }
            </Container>
        );
    }
}

export default index;