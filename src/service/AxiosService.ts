const axios = require("axios");

const HOST = "http://localhost:5000"

const requestSimulation = (universe:Array<Number>,universe_criteria:Number,portfolio_cnt:Number,
    rebalancing_term:Number,start_date:Number,end_date:Number,factors:Array<Number>)=>{

    var formData = new FormData();
    formData.append("universe",universe.toString());
    formData.append("universe_criteria", universe_criteria.toString());
    formData.append("portfolio_cnt", portfolio_cnt.toString());
    formData.append("rebalancing_term", rebalancing_term.toString());
    formData.append("start_date", start_date.toString());
    formData.append("end_date", end_date.toString());
    formData.append("factors", factors.toString());

    return new Promise((resolve, reject) => {
        axios.post(HOST + '/v1/factor', formData)
            .then((res:any) => {
                resolve(res.data);
            })
            .catch((err:any) => {
                console.error(err);
                reject(err);
            })
    });
}

export {requestSimulation}

const getUniversList = ()=>{
    return new Promise((resolve, reject) => {
        axios.get(HOST + '/v1/static/univers')
            .then((res:any) => {
                resolve(res.data);
            })
            .catch((err:any) => {
                console.error(err);
                reject(err);
            })
    });
}

export {getUniversList}

const getBusindessType = ()=>{
    return new Promise((resolve, reject) => {
        axios.get(HOST + '/v1/static/business_type')
            .then((res:any) => {
                resolve(res.data);
            })
            .catch((err:any) => {
                console.error(err);
                reject(err);
            })
    });
}
export {getBusindessType}

const getFactors = ()=>{
    return new Promise((resolve, reject) => {
        axios.get(HOST + '/v1/factor')
            .then((res:any) => {
                resolve(res.data);
            })
            .catch((err:any) => {
                console.error(err);
                reject(err);
            })
    });
}
export {getFactors}