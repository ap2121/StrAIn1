import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
const Navbar = () => {
  const navigate = useNavigate()
  const {user, isAuthenticated} = useAuth0()
    return (
    <div>
        {isAuthenticated && <div className='nav-cnt'>
        <h6 onClick={() => navigate('/')}>Home</h6>
        <h6 onClick={() => navigate('/newdesc')}>New Description</h6>
        <h6 onClick={() => navigate('/mydesc')}>My Descriptions</h6>
        <h6 onClick={() => navigate('/about')}>About</h6>
        </div>}
        

    </div>
  )
}

export default Navbar