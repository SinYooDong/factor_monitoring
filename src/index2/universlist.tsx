import React, { Component } from 'react';
import { Col, FormGroup, Label, CustomInput,Input } from 'reactstrap';
import { getUniversList } from "../service/AxiosService";

interface Props{

}
interface Stats{
    loading : Boolean,
    list : any
}

class universlist extends Component<Props,Stats> {
    constructor(props:any){
        super(props);
        this.state = {loading:false,list:[]}
        getUniversList().then(list=>{
            this.loadingEnd(list)
        });
    }
    loadingEnd = (list:any)=>{
        this.setState({loading:true,list:list})
    }
    render() {
        return (
            <FormGroup row>
                <Label for="exampleEmail" sm={3}>유니버스 설정</Label>
                <Col sm={9}>
                    {/* {(this.state.loading)
                        ? (
                            this.state.list.map((item:any)=>(
                                <div key={item.index}>
                                    <Label check>
                                        <CustomInput type="checkbox" id={item.text} label={item.text}/>
                                    </Label>
                                </div>
                            ))
                        )
                        : (
                            "loading..."
                        )
                    } */}
                    <br />
                    <Input type="select" name={"universe_criteria"}>
                    <option value="20000000">200억 이상</option>
                      <option value="10000000">100억 이상</option>
                      <option value="1000000">10억 이상</option>
                      <option value="1000000">1억 이상</option>
                      <option value="500000">5000천만 이상</option>
                    </Input>
                </Col>
            </FormGroup>
        );
    }
}

export default universlist;