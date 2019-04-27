const axios = require("axios");

const HOST = "http://localhost:5000"

const requestSimulation = (universe,universe_criteria,portfolio_cnt,rebalancing_term,start_date,end_date,factors)=>{

    var formData = new FormData();
    formData.append("universe",universe);
    formData.append("universe_criteria", universe_criteria);
    formData.append("portfolio_cnt", portfolio_cnt);
    formData.append("rebalancing_term", rebalancing_term);
    formData.append("start_date", start_date);
    formData.append("end_date", end_date);
    formData.append("factors", factors);

    return new Promise((resolve, reject) => {
        axios.post(HOST + '/v1/factord', formData,)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.error(err);
                reject(err);
            })
    });
}