import React, { Component } from 'react';
import { Col, FormGroup, Label, CustomInput,Input,Row } from 'reactstrap';
import { getFactors } from "../service/AxiosService";

interface Props {

}
interface Stats {
    loading: Boolean,
    list: any
}

class factor_list extends Component<Props, Stats> {

    factor_texts:Array<String> = [
        // "Value","Momenturm","Quality","Price","Sentiment"
        "Value"
    ]
    constructor(props:any){
        super(props);
        this.state = {loading:false,list:[]};
        
        getFactors().then((list:any)=>{
            this.loadingEnd(list)
        })
    }

    loadingEnd(list:any){
        this.setState({loading:true,list:list})
    }

    render() {
        return (
            <React.Fragment>
                {(this.state.loading)
                 ?(
                     this.state.list.map((factors:any,index:number)=>(
                        <FormGroup row ket={this.factor_texts[index]}>
                        <Label for="exampleText" sm={3}>{this.factor_texts[index]}</Label>
                        <Col sm={9}>
                            {factors.map((factor:any)=>(
                                <Col sm={4} key={factor.text}>
                                    <CustomInput type="checkbox" value={factor.index} name={"factors"} id={factor._id} label={factor.text} />
                                </Col>
                            ))}
                            {/* <Row>
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
                            </Row> */}
                        </Col>
                    </FormGroup>
                     ))
                 )
                 :("loading...")
                }
                {/* <FormGroup row>
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
            </FormGroup> */}
            </React.Fragment>
        );
    }
}

export default factor_list;