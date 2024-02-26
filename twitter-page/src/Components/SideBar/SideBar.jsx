import React, { useEffect, useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar';
import Search from './Search/Search';
import Trending from './Trending/Trending';
import './SideBar.css'
import FollowSection from './FollowSection/FollowSection';

const SideBar = () => {
    const [sideBar,setSideBar] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://sandbox.nextleap.app/page/fetch');
                const data = await response.json();
                setSideBar(data);
            } catch(error){
                console.log("Eror Fetching Twitter Data:",error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='side-bar'>
            <Search/>
            <Trending/>
            <FollowSection/>
        </div>
    )

}

export default SideBar;