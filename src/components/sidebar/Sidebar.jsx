
import "./sidebar.css"
import {RssFeed, School, Event, WorkOutline, HelpOutline, Bookmark, Group, PlayCircleFilledOutlined, ChatSharp} from "@material-ui/icons"
import { CloseFriend } from "../closeFriend/CloseFriend"
import {Users} from '../../dummyData'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebaricon" />
                        <span className="sideBarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatSharp className="sidebaricon" />
                        <span className="sideBarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebaricon" />
                        <span className="sideBarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebaricon" />
                        <span className="sideBarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebaricon" />
                        <span className="sideBarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebaricon" />
                        <span className="sideBarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebaricon" />
                        <span className="sideBarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebaricon" />
                        <span className="sideBarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebaricon" />
                        <span className="sideBarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button> 
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend user={u} key={u.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}