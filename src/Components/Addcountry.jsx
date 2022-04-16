import React, { useState } from 'react'
import  {useDispatch}  from "react-redux"
import {Country}   from "../Redux/Country/action.js"

export const Addcountry = () => {
    const [country , setCountry] = useState("")
    const dispatch = useDispatch()
   const handleSubmit = () =>{
     const  payload = {
          country
       }
      dispatch(Country(payload))
   }


  return (
    <div>
  <input type=" text" placeholder='country' value={country} onChange={(e)=>{
      setCountry(e.target.value)
  }} />
  <button onClick={() => {
   handleSubmit()
  }} >Add Country</button>
    </div>
  )
}
