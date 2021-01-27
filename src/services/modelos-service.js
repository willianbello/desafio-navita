import axios from "axios";
const uri = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

export default{
    obterModelosMarca(id){
        return axios
            .get(`${uri}/${id}/modelos`)
            .then(res => res.data)
            .catch(err => err);
    }
}
