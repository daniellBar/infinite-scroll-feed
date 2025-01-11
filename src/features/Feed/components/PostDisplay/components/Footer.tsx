import Typography from "../../../../../components/Typography/Typography";
import { getLikedIcon } from "../utils";
import likeIcon from "./../../../../../assets/icons/like.svg";
import commentIcon from "./../../../../../assets/icons/comment.svg";

interface Props {
  commentsNum: number;
  likesNum: number;
  isLiked: boolean;
  handleClickLike: () => void;
}

export const Footer = ({
  commentsNum,
  likesNum,
  isLiked,
  handleClickLike,
}: Props) => {
  return (
    <div className="flex flex-col px-6 gap-4 pb-2">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src={likeIcon} alt="like" />
          <Typography className="!text-greys-25">{likesNum} Likes</Typography>
        </div>

        <Typography className="!text-greys-25">
          {commentsNum} Comments
        </Typography>
      </div>

      <div className="border-t-[1px] border-t-[neutrals-50]"></div>

      <div className="flex h-[40px] px-[20%] justify-between items-center">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleClickLike}
        >
          <img src={getLikedIcon(isLiked)} alt="like" />

          <Typography color={isLiked ? "#0A66C2" : "#484E4C"} weight="medium">
            Like
          </Typography>
        </div>

        {/* dummy comment section */}
        <div className="flex gap-1 items-center cursor-not-allowed">
          <img src={commentIcon} alt="comment" />
          <Typography className="!text-dark-50" weight="medium">
            Comment
          </Typography>
        </div>
      </div>
    </div>
  );
};
