import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import WorkIcon from "@mui/icons-material/Work";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { QuestionAnswer } from "@mui/icons-material";
import { Users } from "../../dummydata";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "@mui/material";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <ChatIcon className="sidebarIcon" />
                        <Link to="/messenger" style={{textDecoration: "none", color:"black"}}>
                            <span className="sidebarListItemText">Chats</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <PeopleIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswer className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map((u) => {
                        return <CloseFriend key={u.id} user={u} />;
                    })}
                </ul>
            </div>
        </div>
    );
}
