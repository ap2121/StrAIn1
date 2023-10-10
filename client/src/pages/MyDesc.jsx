import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const MyDesc = () => {
  const [descriptions, setDescriptions] = useState([]
    ) 
  const {user, isAuthenticated} = useAuth0()
  const navigate = useNavigate()
  const userEmail = user?.email
  const getDescriptions = async () => {
    const desc = await axios.get(`http://localhost:4001/desc/mydesc/${userEmail}`)
    console.log(desc?.data)
    setDescriptions(desc?.data)

  }

  useEffect(() => {
    getDescriptions()
  }, [userEmail, descriptions.length])
  
 

  const descView = descriptions.map((desc) => (
    <div key={desc?._id} >
      
      <div className='view-card'>
         <div>
         <h1>{desc?.strainName}</h1>
         <p>{desc?.desc}</p>
         <div className='d-btn-cnt'>
         <button className="delete-btn"onClick={() => navigate(`/confirm/${desc?._id}`)}>Delete</button>
         </div>
        </div>
      </div>

    </div>
  ))

  return (
    <div className='full-view-cnt'>
      
      {descView}
      </div>
      
    
   
  )
}

export default MyDesc