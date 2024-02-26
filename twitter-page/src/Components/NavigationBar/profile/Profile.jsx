import React, { useEffect, useState } from 'react'
import './profile.css'
import dotIcon from './Group.svg'



const Profile = () => {
    const [profile,setProfile] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://sandbox.nextleap.app/page/fetch");
            const data = await response.json();
            setProfile(data.loggedInUser);
          } catch (error) {
            console.error("Error fetching trends:", error);
          }
        };
    
        fetchData();
      }, []);


    return(
        <div className='profile'>
            <div className='pfp-container'>
                <img src={profile.imageData?.url} alt="" />
            </div>
            <div className='user-info'>
                <div className='username'>
                    {profile.userName}
                </div>
                <div className='userid'>
                    {profile.userId}
                </div>
            </div>
            {/* <div className='dot-icon'>
                <img src={dotIcon} alt="" />
            </div> */}
        </div>


    )

}



export default Profile