
import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';
const {setGlobalState, useGlobalState} = createGlobalState({

   
    
    isTurkish: false,
  

});


export {useGlobalState, setGlobalState};