import {configureStore} from '@reduxjs/toolkit';
import AuthService from './services/authService';
import authReducer from './reducers/authReducers';
const Store=configureStore({
    reducer:{
         [AuthService.reducerPath]:AuthService.reducer,
         "authReducer":authReducer
    }
})
export default Store;