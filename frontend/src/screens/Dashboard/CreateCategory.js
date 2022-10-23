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
        <form className=''>
             <h3 className='text-lg capitalize mb-3'>Create Category</h3>
             <div className='mb-3'>
                <input type="text" />
             </div>
        </form>
    </Wrapper>
   </>
  )
}

export default CreateCategory
