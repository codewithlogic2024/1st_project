import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://www.talesoffinance.com/api/', // Replace with your actual API base URL
  timeout: 5000, // Set a timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers as needed, such as authentication headers
  },
});


export default axiosInstance;
