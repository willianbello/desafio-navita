import axios from "axios";
const uri = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

export default{
    obterTodos(){
        return axios
            .get(`${uri}`)
            .then(res => res.data)
            .catch(err => err);
    }
}
