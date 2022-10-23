import { Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import { adminlogout } from "../store/reducers/authReducers";

const AdminNav = ({openSideBar}) => {
  const dispatch=useDispatch();
  return (
    <nav className="fixed left-0 sm:left-64 top-4 right-0 mx-4">
          <div className="bg-gray-800 w-full flex p-4 sm:justify-end justify-between items-center">
          <i class="bi bi-filter-left text-white text-2xl sm:hidden block cursor-pointer" onClick={openSideBar}></i>
             <button onClick={()=>dispatch(adminlogout())} className="py-2 px-4 bg-indigo-600 text-white capitalize">Logout</button>
          </div>
    </nav>
  )
}

export default AdminNav
