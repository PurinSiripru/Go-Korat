import React, { useContext, useState } from "react"
import './Sidebar.css'
import { assets } from "../../assets/assets"
import { Context } from "../../content/Context"
const Sidebar = () =>{

    const [extended,setExtended] = useState(false)
    const {onSent , prevPrompts,setRecentPrompt,newChat} = useContext(Context)
    
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className="sidebar">
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        </div>
    </div>
  )
}

export default Sidebar
