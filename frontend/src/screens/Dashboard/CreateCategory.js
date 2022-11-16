import React from 'react'
import ScreenHeader from '../../components/ScreenHeader'
import Wrapper from './Wrapper'
import { Link, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useCreateMutation } from '../../store/services/categoryService'

const CreateCategory = () => {
   const [state, setState] = useState('');
   const [saveCategory, data] = useCreateMutation()
   const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
   const submitCatgory = (e) => {
      e.preventDefault();
      saveCategory({ name: state })
   }
   const navigate=useNavigate();
   useEffect(()=>{
       if(data.isSuccess){
           navigate('/dashboard/categories')
       }
   },[data?.isSuccess])
   
   return (
      <>
         <Wrapper>
            <ScreenHeader>
               <Link to='/dashboard/categories' className='btn-dark'><i class="bi bi-arrow-left-short"></i> Categories List </Link>
            </ScreenHeader>
            <form className='w-full md:w-8/12' onSubmit={submitCatgory}>
               <h3 className='text-lg capitalize mb-3'>Create Category</h3>
               {errors.length > 0 && errors.map((error, key) => (
                  <div key={key}>
                     <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                        <span class="font-medium">{error.msg}</span>
                     </div>
                  </div>
               ))}
               <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Category name...' onChange={(e) => setState(e.target.value)} />
               </div>
               <div className='mb-3'>
                  <input type="submit" value={data.isLoading ? 'loading....' : 'creaate category'} className='btn-indigo' />
               </div>
            </form>
         </Wrapper>
      </>
   )
}

export default CreateCategory
