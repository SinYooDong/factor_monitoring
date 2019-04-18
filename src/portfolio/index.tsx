import React, { Component } from 'react';
import { Container, Row, Col, Badge, Card, CardBody, CardTitle, Label, Input, CustomInput, Button, Table } from 'reactstrap';

class index extends Component {
    render() {
        return (
            <Container>
                <h1><Badge color="secondary">랭크상위</Badge></h1>
                {/* <h2>Factor 별 수익률</h2> */}
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>Multi Factor rank</th>
                                <th>종목코드</th>
                                <th>종목명</th>
                                <th>시총(단위,천억)</th>
                                <th>이번달 수익률</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>A012330</td>
                                <td>현대모비스</td>
                                <td>24</td>
                                <td>(1.2)%</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>A012330</td>
                                <td>현대모비스</td>
                                <td>24</td>
                                <td>(1.2)%</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>A012330</td>
                                <td>현대모비스</td>
                                <td>24</td>
                                <td>(1.2)%</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>A012330</td>
                                <td>현대모비스</td>
                                <td>24</td>
                                <td>(1.2)%</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

export default index;