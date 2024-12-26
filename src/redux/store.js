import {configureStore} from '@reduxjs/toolkit'
import loremReducer from './loremSlice';

const store = configureStore({
    reducer:{
        lorem: loremReducer,
    },

});
export default store;