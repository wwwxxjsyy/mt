import axios from 'axios' 
import $qs from 'qs' 

//创建axios实例
axios.defaults.baseURL ='http://10.35.162.132:8002/';
// axios.defaults.baseURL ='http://jsonplaceholder.typicode.com/';
// axios.defaults.baseURL ='http://10.35.161.31:9001/';

axios.interceptors.request.use(
    config => {
      config.data = JSON.stringify(config.data);
      config.headers = {
        'Content-Type':'application/x-www-form-urlencoded'
      }
      return config;
    },
    error => {
      return Promise.reject(err);
    }
  );
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error)
    }
  )

  export default {
    post(url,data={}){
      return new Promise((resolve,reject) => {
        axios.post(url,$qs.stringify(data))
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
      })
    },
    get(url,params={}){
      return new Promise((resolve,reject) => {
        axios.get(url,{
          params:params
        })
          .then(response => {
            resolve(response.data);
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }

// 调用get请求 
// this.http.get('posts').then(res=>{
//     console.log(res.data)
// }) 
// 调用post请求 
// this.http.post('banner/1',{id:1555}).then(res=>{
//     console.log(res.data)
// }) 