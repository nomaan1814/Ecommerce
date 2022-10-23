import { Link } from "react-router-dom"

const Sidebar = ({side,closeSideBar}) => {
  return (
    <div className={`fixed top-0 sm:left-0 ${side} w-64 h-screen bg-gray-800 z-10 transition-all`}>
     <div className='bg-white p-4 flex justify-between items-center'>
        <img src='/logo.svg' alt='logo'/>
        <i class="bi bi-x-lg text-2xl sm:hidden block cursor-pointer" onClick={closeSideBar}></i>
     </div>
     <ul className="mt-4">
        <li className="px-4 py-2 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
        <i class="bi bi-card-list mr-2 inline-block text-lg"></i><Link to="/dashboard/products" className="text-base capitalize">products</Link>
        </li>
        <li className="px-4 py-2 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
        <i class="bi bi-bag-check mr-2 inline-block text-lg"></i><Link to="/dashboard/products" className="text-base capitalize">Orders</Link>
        </li>
        <li className="px-4 py-2 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
        <i class="bi bi-people-fill mr-2 inline-block text-lg"></i><Link to="/dashboard/products" className="text-base capitalize">Customers</Link>
        </li>
     </ul>
    </div>
  )
}

export default Sidebar
