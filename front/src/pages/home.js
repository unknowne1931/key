import React from 'react'
import { FaBeer, FaList, FaPlus } from 'react-icons/fa'; // fa = FontAwesome
import { useNavigate } from 'react-router-dom'; // for navigation

const Home = () => {
  const navigator = useNavigate(); // for navigation
  return (
    <div>
      <center>
        <h1 className='stawro'>staWro</h1>

        <div className='container-01'>
            
            <div onClick={()=>{navigator('/list')}} className='container-sub-01'>
              <FaList className='icon-01' />
              <span>List</span>
            </div>

            <div onClick={()=>{navigator('/add')}} className='container-sub-01'>
              <FaPlus className='icon-01' />
              <span>Add</span>
            </div>

        </div>

        </center>
    </div>
  )
}

export default Home

