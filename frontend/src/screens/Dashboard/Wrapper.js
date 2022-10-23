import React from 'react'
import AdminNav from '../../components/AdminNav'
import Sidebar from '../../components/Sidebar'
import {useState} from 'react'

const Wrapper = ({children}) => {
    const [side,setSide]=useState('-left-64')
    const openSideBar=()=>{
        setSide('left-0')
    }
    const closeSideBar=()=>{
        setSide('-left-64')
    }
  return (
    <div>
       <Sidebar side={side} closeSideBar={closeSideBar}/>
    <AdminNav openSideBar={openSideBar}/>
    <section className='sm:ml-64 ml-0 bg-gray-900 h-screen pt-28 px-4s'>
       <div className='bg-gray-800 text-white p-4 '>
       {children}
               </div>
    </section>
    </div>
  )
}

export default Wrapper
