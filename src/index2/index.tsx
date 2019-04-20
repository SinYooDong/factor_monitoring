import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Card,CardTitle, CustomInput, Row, Container, Badge,Breadcrumb ,BreadcrumbItem } from 'reactstrap';

class index extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Form style={{ width: "100%" }}>
                        <h1><Badge color="secondary">Multi-factors</Badge></h1>
                        <p>Build, Code, and Trade Your inverstment ideas. Factor에 대한 자세한 설명은 Factor 설명을 참고해 주세요.</p>
                        <h1><Badge color="secondary">Preset</Badge></h1>
                        <Breadcrumb>
                            <BreadcrumbItem active>선택안함</BreadcrumbItem>
                            <BreadcrumbItem>가치 투자형</BreadcrumbItem>
                            <BreadcrumbItem>성장주 투자형</BreadcrumbItem>
                            <BreadcrumbItem>보수적 투자형</BreadcrumbItem>
                            <BreadcrumbItem>센티먼트형</BreadcrumbItem>
                        </Breadcrumb>
                        <br/>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={3}>유니버스 설정</Label>
                            <Col sm={9}>
                                <div>
                                    <Label check>
                                        <CustomInput type="checkbox" id="kospi" label="KOSPI"/>
                            </Label>
                                </div>
                                <div>
                                    <Label check>
                                        <CustomInput type="checkbox" id="kosdaq" label="KOSDAQ"/>
                            </Label>
                                </div>
                                <br />
                                <Input type="select">
                                    <option value="1">100억 이상</option>
                                    <option value="2">2개</option>
                                    <option value="3">3개</option>
                                    <option value="4">4개</option>
                                    <option value="5">5개</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={3}>투자포트폴리오 종목 개수</Label>
                            <Col sm={9}>
                                <Input type="select">
                                    <option value="1">1개</option>
                                    <option value="2">2개</option>
                                    <option value="3">3개</option>
                                    <option value="4">4개</option>
                                    <option value="5">5개</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={3}>Rebalancing 주기</Label>
                            <Col sm={9}>
                                <Input type="select">
                                    <option value="1">일 단위</option>
                                    <option value="2">주 단위</option>
                                    <option value="3">월 단위</option>
                                    <option value="4">년 단위</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelectMulti" sm={3}>시뮬레이션 기간</Label>
                            <Col sm={9}>
                                <Row>
                                    <Col xs="5">
                                        <Input
                                            type="date"
                                            name="date"
                                            id="exampleDate"
                                            placeholder="date placeholder"
                                        />
                                    </Col>
                                    <Col xs="2">
                                        ~
                  </Col>
                                    <Col xs="5">
                                        <Input
                                            type="date"
                                            name="date"
                                            id="exampleDate"
                                            placeholder="date placeholder"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                        <h1><Badge color="secondary">Factors</Badge></h1>
                        <FormGroup row>
                            <Label for="exampleText" sm={3}>Value</Label>
                            <Col sm={9}>
                                <Row>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox1" label="PER_Traling" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="PBR_Traling" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="PER E3" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="PBR E3" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox5" label="12Fwd PER E3" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox6" label="12Fwd PBR E3" />
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={3}>Momenturm</Label>
                            <Col sm={9}>
                                <Row>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="eq1" label="EPS 1주전 대비 변화율" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="eq2" label="ERS 1개월 전 대비 변화율" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="eq3" label="EPS 6개월 전 대비 변화율" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="eq4" label="EPS 분기 상승률" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="eq5" label="EPS 12Fwd" />
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={3}>Quality</Label>
                            <Col sm={9}>
                                <Row>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="rq1" label="ROE" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="rq2" label="ROA" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="rq3" label="DPS" />
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={3}>Price</Label>
                            <Col sm={9}>
                                <Row>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="asd1" label="1주 수익률" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="asd2" label="1달 수익률" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="asd3" label="3달 수익률" />
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={3}>Sentiment</Label>
                            <Col sm={9}>
                                <Row>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="za1" label="평균매수량 대비 외국인 매수량(%)" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="za2" label="평균매수량 대비 개인 매수량(%)" />
                                    </Col>
                                    <Col sm={4}>
                                        <CustomInput type="checkbox" id="za3" label="평균매수량 대비 기간 매수량(%)" />
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 10 }}>
                                <Button color="success">시뮬레이션실행</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default index;