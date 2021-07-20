import "./feed.css";
import Post from "./Post";
import Share from "./Share";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  )
}