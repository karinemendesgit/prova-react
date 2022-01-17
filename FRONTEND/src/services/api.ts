import axios from "axios";

const api = axios.create({ baseURL: 'http://127.0.0.1:3333',  
});

/*api.interceptors.request.use(async function (config:any) {
  try {
    const token = await localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.log(error);
  }
})*/

export default api;