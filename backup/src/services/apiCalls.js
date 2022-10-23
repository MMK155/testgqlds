
    import { API, DataStore, graphqlOperation } from 'aws-amplify';
    import {Cat} from '../models/index';
    // import {
    //     s,
    //     s,
    //     s,
    //   } from '../graphql/mutations';
    // import {ss, ss } from '../graphql/queries'; 
   
    export const saveCat = async (data) => {
      
      try {
        const response = await DataStore.save(new Cat(data));
        if (response) {
          console.log('Cat added successfully',response);
          return response;
        }
      } catch (err) {
        console.log('Error in Saving Cat ');
      }
    };




    //getCatBy Id:

    export const getCatById = async (id) => {
      try {
        const response = await DataStore.query(Cat, id);
        if (response) {
          console.log('Cat ById fetched');
          return response;
        } else {
          console.log('Error Cat',response);
        }
      } catch (err) {
        console.log(err);
      }
    };

    //getCatList 
    export const CatList = async () => {
      try {
        const response = await DataStore.query(Cat);
        if (response) {
          console.log('Cat List',response);
          return response;
        } else {
          console.log('Error in Cat List');
        }
      } catch (err) {
        console.log(err);
      }
    };
    
    

     export const udpateCat = async (data) => {
      try {
     const original = await DataStore.query(Cat, data.id);
      console.log('original', original);
     const response = await DataStore.save(
      Cat.copyOf(original, (updated) => {
    
updated.name = data.name;
updated.color = data.color;

  })
  );
  if (response) {
    // console.log('Cat Updated Successfully',response);
    return response;
  }
} catch (err) {
  console.log('Error in Updating Cat',err);
}

};

export const deleteCat = async (id) => {
  try {
    const todelete = await DataStore.query(Cat, id);
    new DataStore.delete(todelete);
    if (todelete) {
      // console.log('sesTempalte Delted successfully', todelete);
      return todelete;
    }
  } catch (err) {
    console.log('Error in Deleting Cat', err);
  }
};

