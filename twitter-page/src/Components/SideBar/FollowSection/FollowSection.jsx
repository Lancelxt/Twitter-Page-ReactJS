import {useState, useEffect} from 'react'
import './FollowSection.css'
import bluetick from './bluetick.svg'
const FollowSection = () => {
    const [follow, setFollow] = useState({ title: '', usersToFollow: [] });

 useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetch('https://sandbox.nextleap.app/page/fetch');
            const data = await response.json();
            setFollow(data.followData);
        }
        catch(error){
            console.log("Error Fetching data:",error);
        }
    };
    fetchData();
 }, []);


    return(
<div className='follow-section'>
    <div className='wrapper'>
        <div className='heading'>{follow.title}</div>
        {follow.usersToFollow.map((user,index) => (
            <div key={index} className='users'>
                <div className='user'>
                    <div className='pfp-container'>
                        <img src={user.imageData.url} alt="" srcset="" />
                    </div>
                    <div className='name'>
                        <div className='user-name'>{user.userName}<img src={bluetick}/></div>
                        <div className='user-id'>@{user.userId}</div>
                      
                    </div>
                    <div className='follow-button'>
                        <button>Follow</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    <div className='show-more-button'>Show More</div>

</div>

    )
}

export default FollowSection