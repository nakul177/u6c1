import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {get_city_data} from "../Redux/City/action.js"
export const Home = () => {
  const {city} = useSelector((state) => state.city) 
const disptach = useDispatch()
  useEffect(() =>{
disptach(get_city_data())
  },[])

  return (
    <>
    <AppBar>
      <Toolbar sx={{backgroundColor:"lightgreen" }}>
      <Link style={{textDecoration:"none" }} to={"/add-country"}>  <Button variant='outlined' sx={{ marginLeft:"500px" , color:"black"}}>Add Country</Button></Link>
      <Link style={{textDecoration:"none"}}to={"/add-city"}> <Button variant='outlined' sx={{marginLeft:"200px" , color:"black"}}>Add City</Button></Link>
      </Toolbar>
    </AppBar>
    <Box sx={{width:"90%" , margin:"auto" , marginTop:"100px"}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Population</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {city.map((el) => (
            <TableRow
              key={el.id}
              sx={{ 'td,tr,th': { border: "1px solid black" } }}
            >
              <TableCell component="th" scope="row">
               {el.id}
              </TableCell>
              <TableCell align="center">{el.country_name}</TableCell>
              <TableCell align="center">{el.city_name}</TableCell>
              <TableCell align="center">{el.population}</TableCell>
              <TableCell align="center"><Button variant='outlined' sx={{ color:"black"}}>Edit</Button></TableCell>
              <TableCell align="center"><Button variant='outlined' sx={{ color:"black"}}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>
  )
}