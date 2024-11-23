import React from 'react'
  import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcone from '@mui/icons-material/Cottage'
import SearchIcone from '@mui/icons-material/QueryStats';
import LibraryIcone from '@mui/icons-material/Class';
import { useDataLayerValue } from "./DataLayer";

import { getTokenFromResponse } from "./spotify";




function Sidebar() {
  // const [{ playlists },dispatch] = useDataLayerValue(); 
  const [{ playlists }, dispatch] = useDataLayerValue();
  // console.log(  " ",playlists);

  return (
    <div className='sidebar'>
   <img className='sidebar_logo'
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
    />
    <SidebarOption Icone = {HomeIcone} title="Home"/>
    <SidebarOption  Icone = {SearchIcone}title="Search"/>
    <SidebarOption  Icone = {LibraryIcone} title ="Your Library"/>

    <br/>

<strong className='sidebar_title'>PLAYESTST</strong>
<hr/>
{playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}



    </div>
  )
}

export default Sidebar
