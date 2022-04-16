import axios from "axios"

export const COUNTRY_LOADING = "COUNTRY_LOADING"
export const COUNTRY_ERR = "COUNTRY_ERR"
export const COUNTRY_GET = "CTIY_GET"


export const Country_Loading = () =>(
    {type:COUNTRY_LOADING}
)

export const Country_Err = () =>(
    {type:COUNTRY_ERR}
)

export const Country_Get = (payload) =>(
    {type : COUNTRY_GET , payload }
)


export const Country = ({country}) => (disptach) =>{
       disptach(Country_Loading())
       axios.post(`http://localhost:3001/country` , {country}).then(() =>{
           disptach(Country_Get({country}))
       }).catch((err) =>{
           disptach(Country_Err())
       })  
}