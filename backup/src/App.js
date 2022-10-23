
    //import './App.css';
    import {useEffect,useState} from 'react';
    import Routing from './routes/Routing';
    import {Hub, syncExpression, Predicates } from 'aws-amplify';
    import { DataStore } from '@aws-amplify/datastore';
    import {Cat} from './models/index';

    function App() {
        useEffect(() => {
          const pullData = async () => {
            const models = await DataStore.query(Cat)
            console.log("Model Synceddddd",models)
          }
          pullData()
        }, []) 
    document.body.style.backgroundColor = "#f8f8f8";
    return (
        <ThemeProvider>
        <Routing/>   
        </ThemeProvider>  
    );
    }
    export default App;
    