
        import {Link, useNavigate, useParams} from "react-router-dom"
        import {useState, useEffect} from "react";
        import { experimentalStyled as styled } from '@mui/material/styles';
        import { Card, TextField, Typography,Button,Box,Paper,Grid } from '@mui/material';
        import Cats from './Cats';
        // import toast, { Toaster } from 'react-hot-toast';
        import {getCatById,udpateCat} from '../services/apiCalls';
       
        const UpdateCat = () => {
            const {id} = useParams();
            const navigate = useNavigate();
            const [state,setState] = useState({
                id:'',
        
name:'',
color:'',
});

            const handleInputs = (e) => {
                setState({
                    ...state,
                    [e.target.name]: e.target.value
                })
            }
            

            //Get record byId for update
            const CallGetById = async () => {
                const response =  await getCatById(id);
                if(response){
            

            setState({
            id:response.id,    
                
name:response.name,
color:response.color,
});

                }
              }
            
  
              useEffect(()=>{
                CallGetById(id);
              },[id])
            
  
            //create handle submit
            const handleSubmit = async (e) => {
                e.preventDefault();
                await udpateCat(state);
                navigate('/Cats');
              
            };
            

            return(
                <>
                <form onSubmit={handleSubmit}>  
                <Box sx={{width:'100%'}}>
                      <Paper sx={{ padding: '0px 25px 25px 45px' }}>           
                      <Typography variant="h6" sx={{ padding: '10px 0px 10px 0px'}}>Update Cat</Typography>
            

                        <Box mb={2} sx={{ width: 500, maxWidth: '100%' }}>
                        <TextField name="name" onChange={handleInputs} value={state.name} size="small" 
                        id="outlined-number" fullWidth label="Enter name" type="text" />
                        </Box>
                        

                        <Box mb={2} sx={{ width: 500, maxWidth: '100%' }}>
                        <TextField name="color" onChange={handleInputs} value={state.color} size="small" 
                        id="outlined-number" fullWidth label="Enter color" type="text" />
                        </Box>
                        
         
                  <Button type="submit" variant="contained" color="primary" sx={{ ml: 22, mt: 1, backgroundColor: "dodgerblue" }}>
                  Update
                  </Button>
                 
              </Paper>
           </Box>
           </form> 
           <Cats/>
           </>
    );
}
export default UpdateCat;
    