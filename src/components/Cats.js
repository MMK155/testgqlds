
  import {
    Typography,
    Box,
    Paper,
    Grid,
    Button,
    TableRow,
    Table,
    TableBody,
    TableContainer,
    TableHead
  } from '@mui/material';
  import { styled } from '@mui/material/styles';
  import TableCell, { tableCellClasses } from '@mui/material/TableCell';
    import { useEffect,useState } from 'react';
    // import { useSelector, useDispatch } from 'react-redux';
    // import toast, { Toaster } from 'react-hot-toast';
    import {Link, useNavigate, useParams} from "react-router-dom";
    import {CatList,deleteCat} from '../services/apiCalls';
    
    //custom mui table
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.common.lightslategray,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },

      }));
      
      //custom styling fir row
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
    const Cats = () => {
      const [list,setList] = useState([])
        const {id} = useParams();
        //pid for get users record
        const pid = id; 
        
        // const { redirect, message, loading } = useSelector((state) => state.CatCreateReducer);
        // //const {user: { _id },token,} = useSelector((state) => state.AuthReducer);
        // const { Cats } = useSelector((state) => state.FetchCatsReducer);
        // const dispatch = useDispatch();
        const getList = async () => {
          try{
         const response = await CatList();
         setList(response);
          }catch(err){
              console.log(err);
          }
      }
      
      useEffect(()=>{ 
          getList(); 
      },[])
        return(
        <>    
      <Box sx={{width:'100%'}}>
        <Typography variant="h6">Cat Data</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow  style={{backgroundColor:"green"}}>
    

              <StyledTableCell align="center">Name</StyledTableCell>
            

              <StyledTableCell align="center">Color</StyledTableCell>
            
<StyledTableCell align="center">Action</StyledTableCell>

 </TableRow>
            </TableHead>
 

 <TableBody>
 {list.length > 0 ? list.map((idata) => (
   <StyledTableRow key={idata.id}>
                  
                  
 
<StyledTableCell align="center">{idata.name}</StyledTableCell>
<StyledTableCell align="center">{idata.color}</StyledTableCell>

 <StyledTableCell align="center">

 <Button><Link to={`/update-cat/${idata.id}`} className="btn btn-warning">edit</Link></Button>
 <Button type="button" onClick={() => deleteCat(`${idata.id}`)}>Delete</Button>

 </StyledTableCell>

 </StyledTableRow>
 )) : null }
</TableBody>
</Table>
</TableContainer>

</Box>
</>

);
}
export default Cats;
 