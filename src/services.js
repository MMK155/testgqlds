import { API, DataStore, graphqlOperation } from 'aws-amplify';
import {Cat} from './models/index';
export const saveCat = async (data) => {
    
    try {
      const response = await DataStore.save(new Cat(data));
      if (response) {
        console.log('Cat Added successfully',response);
        return response;
      }
    } catch (err) {
      console.log('Error in Saving Cat with Ds',err);
    }
  };