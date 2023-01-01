import {configureStore} from '@reduxjs/toolkit';
import AuthService from './services/authService';
import authReducer from './reducers/authReducers';
import categoryService from './services/categoryService';
import globalReducer from './reducers/globalReducer';
const Store=configureStore({
    reducer:{
         [AuthService.reducerPath]:AuthService.reducer,
         [categoryService.reducerPath]:categoryService.reducer,
         "authReducer":authReducer,
         "globalReducer":globalReducer
    }
})
export default Store;