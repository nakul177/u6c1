import React from 'react'
import {Route , Routes}  from "react-router-dom"
import { Addcountry } from '../Components/Addcountry'
import { Addctiy } from '../Components/Addctiy'
import { Home } from '../Components/Home'
export const Routing = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add-country' element={<Addcountry/>} />
    <Route path='/add-city' element={<Addctiy/>} />
</Routes>
    </div>
  )
}
