import React from 'react'
import './SidebarOption.css'

function SidebarOption({title,Icone}) {
  return (
    <div className='sidebarOption'>
        {Icone && <Icone className="sidebarOption__icone"/>}
        {Icone ?<h4>{title}</h4>:<p>{title}</p>}
   
    </div>
  )
}

export default SidebarOption
