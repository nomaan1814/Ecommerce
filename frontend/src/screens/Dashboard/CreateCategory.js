import React from 'react'
import ScreenHeader from '../../components/ScreenHeader'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

const CreateCategory = () => {
  return (
    <>
    <Wrapper>
        <ScreenHeader>
             <Link to='/dashboard/categories' className='btn-dark'><i class="bi bi-arrow-left-short"></i> Categories List </Link>
        </ScreenHeader>
        <form className='w-full md:w-8/12'>
             <h3 className='text-lg capitalize mb-3'>Create Category</h3>
             <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Category name...'/>
             </div>
             <div className='mb-3'>
                <input type="submit" value="create category" className='btn-indigo'/>
             </div>
        </form>
    </Wrapper>
   </>
  )
}

export default CreateCategory
