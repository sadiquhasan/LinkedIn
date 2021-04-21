import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux'
import {auth} from './firebase';
import { logout } from './features/userSlice';

function Header() {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="flaticon" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholde="Search" type="text" />
                </div>
            </div> 
            
            <div className="header__right">
              <HeaderOption Icon={HomeIcon} title="Home" />
              <HeaderOption Icon={SupervisorAccount} title="My Network" />
              <HeaderOption Icon={BusinessCenterIcon} title="My Network" />
              <HeaderOption Icon={ChatIcon} title="My Network" />
              <HeaderOption Icon={NotificationIcon} title="My Network" />
              <HeaderOption onClick={logoutOfApp} avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sony.jpeg" />
            </div>
        </div>
    )
}

export default Header
