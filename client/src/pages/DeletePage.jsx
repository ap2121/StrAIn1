import React from 'react'
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
const DeletePage = () => {
  
  const [description, setDescription] = useState({})
  let {id} = useParams()
  const navigate = useNavigate()
  const getDescription = async () => {
    const description = await axios.get(`http://localhost:4001/desc/getdesc/${id}`)
    console.log(description.data)
    setDescription(description.data)
  }

  const deleteDescription = async (e) => {
    e.preventDefault()
    const deleted = await axios.post(`http://localhost:4001/desc/deletedesc/${id}`)
    if(deleted) {
      navigate('/mydesc')
    }
  }

  useEffect(() => {
    getDescription()
  }, [id])
    return (
    <div>
      <p>{description?.desc}</p>
      <button onClick={deleteDescription}>Confirm Deletion</button>
    </div>
  )
}

export default DeletePage