import React, { useEffect } from 'react'
import ScreenHeader from '../../components/ScreenHeader'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { clearMessage } from '../../store/reducers/globalReducer'

const Categories = () => {
  const {success}=useSelector(state=>state.globalReducer);
  const dispatch=useDispatch()
  console.log(success);
  useEffect(()=>{
     return ()=>{
       dispatch(clearMessage())
     }
  },[])
  return (
    <>
    <Wrapper>
        <ScreenHeader>
             <Link to='/dashboard/create-category' className='btn-dark'>Add Categories <i class="bi bi-plus"></i></Link>
        </ScreenHeader>
        {success && <div className='alert-success'>{success}</div> }
       
      kjfhhjghcghjzxhjghudgshuds lorejkfnjbvjbfsjihghgfhuguhgikjhsdkjghbgvsxghajhabahjdshuguegyueruhrukjtkjdthiutriuethiujgvxghxgh\xgvgsvghs
        bhjvhdvghdvhdvvdhjvhjvfhvhjvgtfxgrirgufguefgiufghushgdhugawhuadvdhgvdkaef
        gwuadsvshzsghsdgvdfhjdgyuegueriuthiukyudg
        
    </Wrapper>
   </>
  )
}

export default Categories
