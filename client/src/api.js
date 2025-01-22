import axios from 'axios';


const Callapi=(navigate)=>
{
    
    const api = axios.create({
        baseURL: 'http://localhost:3000',
        withCredentials: true 
      });
      
      
      api.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response?.status === 401) {
              navigate("/adminsignin");
        
          }
          return Promise.reject(error);
        }
      );


      return api
}


export default Callapi;