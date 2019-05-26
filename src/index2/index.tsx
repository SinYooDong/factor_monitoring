import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Card,CardTitle, CustomInput, Row, Container, Badge,Breadcrumb ,BreadcrumbItem } from 'reactstrap';
import UniversList from "./universlist";
import FactorList from "./factor_list";
import moment from "moment";

class index extends Component {

    default_start_date = moment().add(-1,"years").format("YYYY-MM-DD");
    default_end_date = moment().format("YYYY-MM-DD");

    constructor(props:any){
        super(props);
    }

    // onSubmitEvent = (e:any)=>{
    //     e.preventDefault();
        
    //     let universe_criteria = e.target.elements.universe_criteria.value;
    //     let portfolio_cnt = e.target.elements.portfolio_cnt.value;
    //     let start_date = e.target.elements.start_date.value;
    //     let end_date = e.target.elements.end_date.value;
    //     let factors = [];

    //     let factorCheckboxs = document.getElementsByName("factors");

    //     factorCheckboxs.forEach((box:any)=>{
    //         if(box.checked){
    //             factors.push(box.value);
    //         }
    //     })

    //     console.log("universe_criteria ", universe_criteria);
    //     console.log("portfolio_cnt ", portfolio_cnt);
    //     console.log("start_date ", start_date);
    //     console.log("end_date ", end_date);
    //     console.log("factors", factors);
    //     //history.
    //     this.props.history.push("/simulator");
    //     ///history.push("/simulator");
    // }

    render() {
        return (
            <Container>
                <Row>
                    <Form action={"/simulator"} method={"get"} style={{ width: "100%" }}>
                        <h1><Badge color="secondary">Multi-factors</Badge></h1>
                        <p>Build, Code, and Trade Your inverstment ideas. Factor에 대한 자세한 설명은 Factor 설명을 참고해 주세요.</p>
                        <h1><Badge color="secondary">Preset</Badge></h1>
                        {/* <Breadcrumb>
                            <BreadcrumbItem active>선택안함</BreadcrumbItem>
                            <BreadcrumbItem>가치 투자형</BreadcrumbItem>
                            <BreadcrumbItem>성장주 투자형</BreadcrumbItem>
                            <BreadcrumbItem>보수적 투자형</BreadcrumbItem>
                            <BreadcrumbItem>센티먼트형</BreadcrumbItem>
                        </Breadcrumb> */}
                        <br/>
                        <UniversList />
                        <FormGroup row>
                            <Label for="examplePassword" sm={3}>투자포트폴리오 종목 개수</Label>
                            <Col sm={9}>
                                <Input type="select" name={"portfolio_cnt"}>
                                    <option value="1">1개</option>
                                    <option value="2">2개</option>
                                    <option value="3">3개</option>
                                    <option value="4">4개</option>
                                    <option value="5">5개</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        {/* <FormGroup row>
                            <Label for="exampleSelect" sm={3}>Rebalancing 주기</Label>
                            <Col sm={9}>
                                <Input type="select">
                                    <option value="1">일 단위</option>
                                    <option value="2">주 단위</option>
                                    <option value="3">월 단위</option>
                                    <option value="4">년 단위</option>
                                </Input>
                            </Col>
                        </FormGroup> */}
                        <FormGroup row>
                            <Label for="exampleSelectMulti" sm={3}>시뮬레이션 기간</Label>
                            <Col sm={9}>
                                <Row>
                                    <Col xs="5">
                                        <Input
                                            type="date"
                                            name="start_date"
                                            id="exampleDate"
                                            defaultValue={this.default_start_date}
                                            placeholder="date placeholder"
                                        />
                                    </Col>
                                    <Col xs="2">
                                        ~
                  </Col>
                                    <Col xs="5">
                                        <Input
                                            type="date"
                                            name="end_date"
                                            id="exampleDate"
                                            defaultValue={this.default_end_date}
                                            placeholder="date placeholder"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                        <h1><Badge color="secondary">Factors</Badge></h1>
                        <FactorList />
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 10 }}>
                                <Button type={"submit"} color="success">시뮬레이션실행</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default index;