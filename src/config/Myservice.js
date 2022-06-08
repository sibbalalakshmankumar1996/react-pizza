import { APIURL } from "./URL";
import { PIZZAURL } from "./PIZZAURL";
import axios from 'axios';

function createUser(data){
    return axios.post(APIURL, data)
}
function getUser(){
    return axios.get(APIURL)
}

function getPizzaDetails(){
    return axios.get(PIZZAURL)
}

export {createUser, getUser, getPizzaDetails}

