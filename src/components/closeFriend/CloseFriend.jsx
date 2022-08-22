import "./closeFriend.css"

export const CloseFriend = ({user}) => {
    return (
        <>
            <li className="sidebarFriend">
                <img src={user.profilePicture} alt="ProfilePicture" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{ user.username }</span>
            </li>
        </>
    )
}