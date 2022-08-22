import "./post.css"
import { MoreVert } from "@material-ui/icons"
import {Users} from "../../dummyData"

export const Post = ({ post }) => {
     return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={ Users.filter((u) => u.id === post?.userId)[0].profilePicture} className="postProfileImg" alt="" />
                        <span className="postUsername">{ Users.filter((u) => u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{ post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{ post.desc}</span>
                    <img src={post.photo } className="postImg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/heart.png" className="likeIcon" alt="" />
                        <img src="/assets/like.png" className="likeIcon" alt="" />
                        <span className="postLikeCounter">{ post.like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{ post.comment} Comments</span>
                    </div>

                </div>
            </div>
        </div>
    )
}