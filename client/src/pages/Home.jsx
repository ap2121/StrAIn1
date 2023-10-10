import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
const Home = () => {
    const {loginWithPopup, logout, user, isAuthenticated} = useAuth0()
    const navigate = useNavigate()
    
    return (
   <div className='full-cnt'>
        
        
       
    
    <h1 className="title">StrAIn Copy</h1>
    { isAuthenticated && <div className='card-cnt'>
    <div className='card'>
          <button onClick={() => navigate(`/newdesc`)}>New Description</button> 
      <button onClick={() => navigate('/mydesc')}>My Descriptions</button>
      <button>About</button>
      {isAuthenticated && <button onClick={logout}>Logout</button>}
      
      
    </div>
    </div>}
    <h3 className="title">Powered By ChatGPT</h3>
    <div className='login-cnt'>
    {!isAuthenticated && <button onClick={loginWithPopup}>Login</button>}
    {!isAuthenticated && <button onClick={() => navigate('/about')}>About</button>}
    </div>
    
        
       
         
    </div>
    
    
  )
}

export default Home