import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: "https://python-backend-ex9x.onrender.com", 
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
