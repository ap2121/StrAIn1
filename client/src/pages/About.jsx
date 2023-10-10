import React from 'react'
import {useState} from 'react'
import axios from 'axios'

const About = () => {
 const [about, setAbout] = useState({})
 const [aboutBool, setAboutBool] = useState(false)
 const [loading, setLoading] = useState(false) 
 
 const randomGifs = ['https://cdn.wallpapersafari.com/28/50/jrLPQV.gif', 'https://media0.giphy.com/media/B8lrRCcd4gpcFgdV0W/giphy.gif', 'https://66.media.tumblr.com/41840b7b743bc48e176a60e748c5b8e4/tumblr_no79k59sfH1up0xuqo1_640.gif', 'https://i0.wp.com/www.frukmagazine.com/wp-content/uploads/2016/03/giphy-weed.gif?resize=500%2C375', 'https://media4.giphy.com/media/syM3flEjg1LxKynIsB/200.webp?cid=ecf05e47dgbhzammbb7q8n4p6o3n0y00886z173mz7t2ut2o&ep=v1_gifs_search&rid=200.webp&ct=g', 'https://media1.giphy.com/media/F3WEit3gatJ6mAxelU/200.webp?cid=ecf05e47v9ljvkikfedp822a9hmszv49a76fngkvcw9542cz&ep=v1_gifs_search&rid=200.webp&ct=g', 'https://media2.giphy.com/media/uLGU15ZlBFfLW/200.webp?cid=ecf05e47u4prfjwc9yhzpxhmbqjc3jdilsavtqpv4q4znqeq&ep=v1_gifs_search&rid=200.webp&ct=g', 'https://media0.giphy.com/media/NMEM8c3x5eC3K/giphy.webp?cid=ecf05e476qmu4uy4n7ct7xuw561sin6mtca1jbuptt4jgv47&ep=v1_gifs_search&rid=giphy.webp&ct=g', 'https://media3.giphy.com/media/YKq54CCqHpeeY/200.webp?cid=ecf05e47a7svxztsw95kofmzljhrzhug728m1obtj60mf45v&ep=v1_gifs_search&rid=200.webp&ct=g']

 const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const newAbout = await axios.get('http://localhost:4001/desc/newabout')
    
    if(newAbout) {
        console.log(newAbout)
        setAbout(newAbout?.data)
        setLoading(false)
        setAboutBool(true)
        
    }
 }

  const buttonView = (
    <div className='full-cnt'>
        <div style={{display:'flex', justifyContent: 'center'}}>
        <div className='about-card'>
        <button onClick={handleSubmit}>Click to learn more</button>
        </div>
        </div>
    </div>
  ) 

  const loadingView = (
    <div className='full-cnt'>
        <div className='about-card' style={{background:`url(${randomGifs[Math.floor(Math.random() * randomGifs.length)]})`, backgroundSize:'cover'}}>
        
        </div>
    </div>
  )
    if(aboutBool) {
        return (
            <div className='full-cnt'>
            <div className='about-card-content'>
                <p>{about?.content}</p>
            </div>
        </div>
        )
    }

    return (
    <div style={{display:'flex', justifyContent:'center'}}>
        {loading ? loadingView : buttonView }
    </div>
  )

  
}

export default About