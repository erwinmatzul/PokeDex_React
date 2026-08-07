import axios from "axios";

const ApiClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2", //url de la api
    timeout: 5000, //tiempo en espera, para esperar la respuesta de la API
    headers: {
        "Content-Type": "application/json", //Que siempre la respuesta venga en JSON
        'Accept': 'application/json' //Acceptar los datos en JSON
    }
})

export {ApiClient}


