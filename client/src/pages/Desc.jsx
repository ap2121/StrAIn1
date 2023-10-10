import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react'


const Desc = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        strainName: "",
        cross1: "",
        cross2: ""
    })
    const [description, setDescription] = useState({})
    const [descBool, setDescBool] = useState(false)
    const {user} = useAuth0()
    
    
   
    const randomGifs = ['https://cdn.wallpapersafari.com/28/50/jrLPQV.gif', 'https://media0.giphy.com/media/B8lrRCcd4gpcFgdV0W/giphy.gif', 'https://66.media.tumblr.com/41840b7b743bc48e176a60e748c5b8e4/tumblr_no79k59sfH1up0xuqo1_640.gif', 'https://i0.wp.com/www.frukmagazine.com/wp-content/uploads/2016/03/giphy-weed.gif?resize=500%2C375', 'https://media4.giphy.com/media/syM3flEjg1LxKynIsB/200.webp?cid=ecf05e47dgbhzammbb7q8n4p6o3n0y00886z173mz7t2ut2o&ep=v1_gifs_search&rid=200.webp&ct=g', 'https://media1.giphy.com/media/F3WEit3gatJ6mAxelU/200.webp?cid=ecf05e47v9ljvkikfedp822a9hmszv49a76fngkvcw9542cz&ep=v1_gifs_search&rid=200.webp&ct=g', 'https://media2.giphy.com/media/uLGU15ZlBFfLW/200.webp?cid=ecf05e47u4prfjwc9yhzpxhmbqjc3jdilsavtqpv4q4znqeq&ep=v1_gifs_search&rid=200.webp&ct=g', 'https://media0.giphy.com/media/NMEM8c3x5eC3K/giphy.webp?cid=ecf05e476qmu4uy4n7ct7xuw561sin6mtca1jbuptt4jgv47&ep=v1_gifs_search&rid=giphy.webp&ct=g', 'https://media3.giphy.com/media/YKq54CCqHpeeY/200.webp?cid=ecf05e47a7svxztsw95kofmzljhrzhug728m1obtj60mf45v&ep=v1_gifs_search&rid=200.webp&ct=g']
    const navigate = useNavigate()
    

   
    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
    
                [e.target.name]: e.target.value
                
            }
            
        })
        
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axios.post(`http://localhost:4001/desc/newdesc/${user?.email}`, {...formData})

            if(res) {
                setDescription(res.data)
                setLoading(false)
                setDescBool(true)
                
            }

        } catch(error) {
            throw error
        }
    }
    
const retryFacade = async (e) => {
    e.preventDefault()
   const deleted =  await axios.post(`http://localhost:4001/desc/deletedesc/${description?._id}`)
    if(deleted) {
        setDescBool(false)
        navigate('/newdesc')
    }
    
}
    
    
    const formView = (
        
            <div className='full-cnt'>
                
           
            <div className='card-cnt'>
            <div className='desc-card'>
              <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Strain Name" name="strainName" onChange={handleChange} value={formData.strainName}/>
                <p className="title">Strain Name</p>
                <input type="text" placeholder="Enter First Cross" name="cross1" onChange={handleChange} value={formData.cross1}/>
                <p className="title">Cross 1</p>
                <input type="text" placeholder="Enter Second Cross" name="cross2" onChange={handleChange} value={formData.cross2}/>
                <p className="title">Cross 2</p>
                <button>Create</button>
                
              </form>
              
            </div>
            </div>
            
            
         </div>
        
    )
    
    
    
    const loadingView = (
        <div className='full-cnt'>
        
           
            <div className='card-cnt'>
            <div className='loading-card' style={{background:`url(${randomGifs[Math.floor(Math.random() * randomGifs.length)]})`, backgroundSize:'cover'}}>
              
        
            </div>
            </div>
            
            
            
         </div>
    )
    if(descBool) {
        return (
            <div className='full-cnt'>
        
           
            <div className='card-cnt'>
            <div className='post-card'>
            <div className="content-cnt">
            <p className="desc-text">{description?.desc}</p>
            <div className="btn-cnt">
            <button className="post-btn" onClick={() => {setDescBool(false); navigate('/mydesc'); setFormData({
                    strainName: "",
                    cross1: "",
                    cross2: ""
                })}}>Save</button>
            <button className="post-btn" onClick={retryFacade}>Retry</button>
            </div>
            </div>

            
            </div>
            
            </div>
           
            
            
            
         </div>
        )
    }
    
    return (
        <div>
            {loading ? loadingView: formView }
        </div>
    )
   
    
}
export default Desc