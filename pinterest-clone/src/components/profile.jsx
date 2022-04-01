import React from 'react'
import "./profile.css"
const Profile = () => {
  return (
        <>
     <div className="MainDiv">
       <img className="ProfileImg" src="https://avatars.githubusercontent.com/u/93372584?v=4" alt="imgLogo" />
        <h1 className="Name">Ankit Singh</h1>
        <h5 className="UserName">@AnkitSingh60</h5>
        <div className="SocialFollowing">
        <span>179.5k followers</span> · <span>0 followings</span>
        </div> 
       </div>
      
        <div className='IconDiv'>
       <div className='AddDiv'>
       <span className='AddSpan'>+</span>
       </div>

       <div className='AddDiv'>
       <span className='QusSpan'>?</span>
       </div>
      </div>
        </>
  )
}


export default Profile
