import axios from "axios";
import { Post } from "../../types";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";
import { ImagesDisplay } from "./components/ImagesDisplay";

interface Props {
  post: Post;
  handleClickLike: (postId: string) => void;
}

export const PostDisplay = ({ post,handleClickLike }: Props) => {
  const {
    id,
    username,
    avatar,
    date,
    shopName,
    text,
    images,
    likes,
    comments,
    didLike,
  } = post;

  return (
    <div className="flex flex-col gap-4 shadow-post">
      <Header
        avatar={avatar}
        name={username}
        time={date}
        company={shopName}
        description={text}
      />

      <ImagesDisplay imgs={images} />

      <Footer commentsNum={comments} likesNum={likes} isLiked={didLike} handleClickLike={()=>handleClickLike(id)}/>
    </div>
  );
};
