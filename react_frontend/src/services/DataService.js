import axios from "axios";

const API_BASE_URL = "http://localhost:8080/";

class DataScervice {
    getChallengebyName(name){
        return axios.get(API_BASE_URL+name.toString(), {headers: {'Content-Type': 'application/json'}});
    }

    postChallenge(record){
        axios({
            method: 'post',
            url: API_BASE_URL+'saveRabbitMQ',
            data: record,
            headers: {
                contentType: "application/json",
                dataType: "json"
            }
        })
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    postUser(record){
        axios({
            method: 'post',
            url: API_BASE_URL+'saveUser',
            data: record,
            headers: {
                contentType: "application/json",
                dataType: "json"
            }
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

