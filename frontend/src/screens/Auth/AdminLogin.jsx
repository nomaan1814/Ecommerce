import React, { useEffect, useState } from 'react';
import { useAuthLoginMutation } from '../../store/services/authService';
import { setAdminToken } from '../../store/reducers/authReducers';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [state,setState]=useState({
    email:"",
    password:""
  })
  const handleInputs=(e)=>{
      setState({...state,[e.target.name]:[e.target.value]})
  }
  const [login,response]=useAuthLoginMutation();
  console.log(response);
  const errors=response?.error?.data?.errors?response?.error.data?.errors:[];
  const adminLogin=(e)=>{
    e.preventDefault();
    login(state)
  }
  useEffect(()=>{
      if(response?.isSuccess){
           localStorage.setItem('admin-token',response?.data?.token)
           dispatch(setAdminToken(response?.data?.token));
           navigate('/dashboard/products')
      }
  },[response?.isSuccess])
  return (
    <div className='bg-black1 h-screen flex justify-center items-center'>
         <form className='bg-black2 p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded' onSubmit={adminLogin}>
             <h3 className='mb-3 text-white capitalize font-semibold text-lg'>Dashboard login</h3>
             {errors.length > 0 && errors.map((error, key) => (
                   <div key={key}>
                       <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
  <span class="font-medium">{error.msg}</span> 
</div>
                   </div>
             )) }
             <div className='mb-4'>
                 <input type="email" name='email' autoComplete='off' className='w-full bg-black1 p-4 rounded outline-none text-white' placeholder='Enter Email...' onChange={handleInputs} value={state.email}/>
             </div>
             <div className='mb-4'>
                 <input type="password" name='password' autoComplete='off' className='w-full bg-black1 p-4 rounded outline-none text-white' placeholder='Enter Password...' onChange={handleInputs} value={state.password}/>
             </div>
             <div className="mb-4">
                <input type="submit" value={response.isLoading?'Loading':"sign in"} className="bg-indigo-600 w-full p-3 rounded text-white uppercase font-semi-bold cursor-pointer" />
             </div>
         </form>
    </div>
  )
}

export default AdminLogin
