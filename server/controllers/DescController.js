require("dotenv").config()
const { OpenAI } = require('openai')
const Desc = require('../models/Description')
const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY
const OPEN_AI_ORG_KEY = process.env.OPEN_AI_ORG_KEY
const openAi = new OpenAI({
    apiKey: OPEN_AI_API_KEY,
    organization: OPEN_AI_ORG_KEY
    
})



const CreateDescription = async (req, res) => {
   
    try {
        const { strainName, cross1, cross2} = req.body
        const userEmail = req.params.email
        const aiDescRes = await openAi.chat.completions.create({
           model: "gpt-3.5-turbo",
           
           messages: [{"role": "user", "content": `Write a  concise cannabis strain for a business, this description is for a strain called ${strainName} which is a cross between the strain ${cross1} and the strain ${cross2}.`}],
           max_tokens: 400
           
    })
        const description = aiDescRes.choices[0].message.content

        const dbDescription = new Desc({userEmail:userEmail, desc: description, strainName})
        dbDescription.save()
        res.send(dbDescription)

    

    } catch(error) {
        throw error
    }

}

const getDescriptions = async (req, res) => {
    try {
        const userEmail = req.params.email
        const descriptions = await Desc.find({userEmail: userEmail})
        return res.json(descriptions)
    } catch(error) {
        throw error
    }

}

const getDescriptionById = async (req, res) => {
    try {
        const id = req.params.id
        const desciption = await Desc.findOne({_id: id})
        return res.json(desciption)
    } catch(error) {
        throw error
    }
}


const createAbout = async (req, res) => {
    
   try {
    const newAbout = await openAi.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content":"Write a very very concise about page about a web app called StrAIn Copy which creates cannabis strain descriptions using chatgpt.  The user only has to enter the strain name, and the two strain crosses and a new cannabis description is created for them using chatgpt. Please use the name of the web app which is StrAIn Copy and talk about more improvements being made in the future."}],
        max_tokens: 300

    })

    if(newAbout) {
        return res.json(newAbout.choices[0].message)
    }
   } catch(error) {
    throw error
   }
    
}
const deleteDescription = async (req, res) => {
    try {
        const id = req.params.id
        const deleted = await Desc.findByIdAndDelete(id)

        if(deleted) {
            res.send(`Description with id of ${id} is deleted`)
        }
    } catch(error) {
        throw error
    }
}

module.exports = {
    CreateDescription,
    getDescriptions,
    deleteDescription,
    getDescriptionById,
    createAbout
}