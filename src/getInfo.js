
import axios from "axios"

export default function getInfo( url, params){

    return new Promise( (resolve, reject)=>{

        axios.post( url, params)

        .then( (response)=>{
            resolve(response)
        })
        .catch( (err)=>{
            reject( err)
        })
    })
}