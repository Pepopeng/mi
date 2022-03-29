import axios from "axios";
import qs from "qs";

export default function request(config,method='get',data={}){
    if(method=='get'){
        let instance=axios.create({
            baseURL:'http://localhost/mi/',
            timeout:5000
        })
        instance.interceptors.request.use(config=>{return config },error => {console.log(error)})
        instance.interceptors.response.use(config=>{return config.data},error => {
            console.log(error)})

        return instance(config)
    }
    else {
        // let params = new URLSearchParams();
        // params.append('username', 'admin');
        // params.append('password', '123456');
        let data1 = qs.stringify(data);
        let instance=axios.create({
            baseURL:'http://localhost/mi/',
            timeout:5000,
        })
        instance.interceptors.request.use(config=>{return config },error => {console.log(error)})
        instance.interceptors.response.use(config=>{return config.data},error => {
            console.log(error)})
        return instance.post('http://localhost/mi/'+config, data1)
    }



}