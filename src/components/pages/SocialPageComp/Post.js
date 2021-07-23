import "./post.css";
import { MoreVert } from "@material-ui/icons";
//import { Users } from "../../dummyData";
//import { useState } from "react";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/images/farmprofile.jpg"
              alt=""
            />
            <span className="postUsername">John Doe</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Blue Berries out of stock</span>
          <img className="postImg" src="/images/outofstock.jpg" alt=""/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/images/like.png" alt="" />
            <img className="likeIcon" src="/images/heart.png" alt="" />
            <span className="postLikeCounter">28 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/images/farmprofile.jpg"
              alt=""
            />
            <span className="postUsername">John Doe</span>
            <span className="postDate">5 days ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">15% Sale going for the next 24 hours</span>
          <img className="postImg" src="/images/sale.jfif" alt=""/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/images/like.png" alt="" />
            <img className="likeIcon" src="/images/heart.png" alt="" />
            <span className="postLikeCounter">80 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">15 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post