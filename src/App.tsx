import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Container, Row, Col, Badge, Card, CardBody, CardTitle, Label, Input, CustomInput, Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <h1><Badge color="secondary">Multi-factors</Badge></h1>
        <p>Build, Code, and Trade Your inverstment ideas. Factor에 대한 자세한 설명은 Factor 설명을 참고해 주세요.</p>
        <Row>
          <Col xs="3">
            <Card body inverse color="primary">
              <CardTitle>Preset</CardTitle>
              <div>
                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="가치 투자형" />
                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="성장주 투자형" />
                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="보수적 투자형" />
                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="센티먼트형" />
              </div>
            </Card>
          </Col>
          <Col xs="9">
            <Row>
              <Col xs="6">
                <Card body outline color="primary">
                  <CardTitle>유니버스 설정</CardTitle>
                  <CardBody>
                    {/* <div>
                      <Label check>
                        <Input type="checkbox" /> KOSPI
                  </Label>
                    </div>
                    <div>
                      <Label check>
                        <Input type="checkbox" /> KOSDAQ
                  </Label>
                    </div> */}
                    <br />
                    <Input type="select" name={"universe_criteria"}>
                      <option value="20000000">200억 이상</option>
                      <option value="10000000">100억 이상</option>
                      <option value="1000000">10억 이상</option>
                      <option value="1000000">1억 이상</option>
                      <option value="500000">5000천만 이상</option>
                    </Input>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="6">
                <Card body outline color="primary" style={{ height: "100%" }}>
                  <CardTitle>투자포트폴리오 종목 개수</CardTitle>
                  <CardBody>
                    <Input type="select" name={"portfolio_cnt"}>
                      <option value="1">1개</option>
                      <option value="2">2개</option>
                      <option value="3">3개</option>
                      <option value="4">4개</option>
                      <option value="5">5개</option>
                    </Input>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              {/* <Col xs="4">
                <Card body outline color="primary">
                  <CardTitle>Rebalancing 주기</CardTitle>
                  <CardBody>
                    <Input type="select">
                      <option value="1">일 단위</option>
                      <option value="2">주 단위</option>
                      <option value="3">월 단위</option>
                      <option value="4">년 단위</option>
                    </Input>
                  </CardBody>
                </Card>
              </Col> */}
              <Col>
                <Card body outline color="primary">
                  <CardTitle>시뮬레이션 기간</CardTitle>
                  <CardBody>
                    <Row>
                      <Col xs="5">
                        <Input
                          type="date"
                          name="start_date"
                          id="exampleDate"
                          placeholder="시뮬레이션 시작 기간"
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
                          placeholder="시뮬레이션 종료 기간"
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="1">

          </Col>
          <Col xs="10">
            <h2><Badge color="secondary">Factors</Badge></h2>
            <Row>
              <Col>
                <Card body inverse color="warning">
                  <CardTitle>Value</CardTitle>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="PER_Traling" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="PBR_Traling" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="PER E3" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="PBR E3" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="12Fwd PER E3" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="12Fwd PBR E3" />
                </Card>
              </Col>
              <Col>
                <Card body inverse color="warning">
                  <CardTitle>Momenturm</CardTitle>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="EPS 1주전 대비 변화율" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="ERS 1개월 전 대비 변화율" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="EPS 6개월 전 대비 변화율" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="EPS 분기 상승률" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="EPS 12Fwd" />

                </Card>
              </Col>
              <Col>
                <Card body inverse color="warning">
                  <CardTitle>Momenturm</CardTitle>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="ROE" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="ROA" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="DPS" />
                </Card>
              </Col>
              <Col>
                <Card body inverse color="warning">
                  <CardTitle>Momenturm</CardTitle>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="1주 수익률" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="1달 수익률" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="3달 수익률" />
                </Card>
              </Col>
              <Col>
                <Card body inverse color="warning">
                  <CardTitle>Momenturm</CardTitle>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="평균매수량 대비 외국인 매수량(%)" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="평균매수량 대비 개인 매수량(%)" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="평균매수량 대비 기간 매수량(%)" />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Button color="danger" size="lg" block>시뮬레이션 실행</Button>
      </Container>
    );
  }
}

export default App;
