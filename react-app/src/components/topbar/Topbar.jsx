import { Search } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LogoutIcon from '@mui/icons-material/Logout';
import { LogOut } from "../../context/AuthActions";


export default function Topbar() {
    const { user, dispatch} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleLogOut = () =>{
        localStorage.removeItem(user);
        dispatch(LogOut());
    }

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">Lamasocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friend, post or video" className="searchInput"></input>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">3</span>
                    </div>
                    <div className="logOut" onClick={handleLogOut}>
                        <LogoutIcon/>
                    </div>
                </div>
                <Link to={"/profile/" + user.username}>
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noavatar.jpeg"} alt="" className="topbarImg" />
                </Link>
            </div>
        </div>

    );
}