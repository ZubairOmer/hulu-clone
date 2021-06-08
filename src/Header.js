import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import SearcIcon from '@material-ui/icons/Search'
import PersonOutLineIcon from '@material-ui/icons/PersonOutline'

export default function Header() {
    return (
        <div className='header'>
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Collection</p>
                </div>
                <div className="header__icon">
                    <SearcIcon />
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PersonOutLineIcon />
                    <p>Account</p>
                </div>
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="hulo-logo" />
        </div>
    )
}
