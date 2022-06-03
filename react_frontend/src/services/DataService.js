import axios from "axios";

const API_BASE_URL = "http://localhost:8080/";

class DataScervice {
    getChallengebyName(name){
        return axios.get(API_BASE_URL+name.toString());
    }

    postChallenge(record){
        axios({
            method: 'post',
            url: API_BASE_URL+'save',
            data: record
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default new DataScervice()

