
import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from "react-router-dom";
// import Cats from './Cats';  
// import { CatCreateAction } from '../store/asyncMethods/CatMethod';
// import { fetchCats } from '../store/asyncMethods/CatMethod';
import { Card, TextField, Typography,Button,Box,Paper,Grid } from '@mui/material';
// import toast, { Toaster } from 'react-hot-toast';
import {saveCat} from '../services/apiCall';
const CreateCat = (props) => { 

 
const {id} = useParams();    

const [state, setState] = useState({

name:'',
color:'',
id:'32dbc9bd-57d2-42ee-844c-dfe46fead0ad',
})

const handleInputs = (e) => {
setState({
...state,
[e.target.name]: e.target.value,
});
}

const handleSubmit = (e) => {
e.preventDefault();
saveCat(state);
}



return ( 
<>       

<Box sx={{width:'100%'}}>  
<Paper sx={{ padding: '0px 25px 25px 45px' }}>
<Typography variant="h6" sx={{padding:'10px 0px 10px 0px'}}>Update Cat</Typography>
<form onSubmit={handleSubmit}> 
<Box mb={2} sx={{ width: 500, maxWidth: '100%' }}>
<TextField name="name" onChange={handleInputs} value={state.name} size="small" 
id="outlined-number" fullWidth label="Enter name" type="text" />
</Box>


<Box mb={2} sx={{ width: 500, maxWidth: '100%' }}>
<TextField name="color" onChange={handleInputs} value={state.color} size="small" 
id="outlined-number" fullWidth label="Enter color" type="text" />
</Box>


<Button type="submit" variant="contained" color="primary" sx={{ ml: 22, mt: 1, backgroundColor: "dodgerblue" }}>
Submit
</Button>

</form>
</Paper>




</Box>

</>
)}
export default CreateCat;