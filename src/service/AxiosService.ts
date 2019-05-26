const axios = require("axios");

const HOST = "http://15.164.34.97:5000"

const requestSimulation = (universe:Array<Number>,universe_criteria:Number,portfolio_cnt:Number,
    rebalancing_term:Number,start_date:Number,end_date:Number,factors:Array<Number>)=>{

        let requestBody = {
            universe_criteria : universe_criteria,
            portfolio_cnt : portfolio_cnt,
            rebalancing_term : rebalancing_term,
            start_date : start_date,
            end_date : end_date,
            factors : factors
        }

    return new Promise((resolve, reject) => {
        axios.post(HOST + '/v1/simulation', requestBody)
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