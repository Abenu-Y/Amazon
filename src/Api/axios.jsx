import axios from "axios";

export const  instance = axios.create({
    // baseURL:'http://127.0.0.1:5001/netflix-e14db/us-central1/api',
    baseURL:'https://amazon-backend-3hgv.onrender.com/'
    // baseURL:'http://localhost:1235'
})

