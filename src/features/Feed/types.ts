export interface FeedPostsResponse {
  data: Post[];
  hasMore: boolean;
}

export interface Post {
  id: string;
  avatar: string;
  comments: number;
  date: string;
  didLike: boolean;
  images: string[];
  likes: number;
  premium: boolean;
  shopId: string;
  shopName: string;
  text: string;
  userId: string;
  username: string;
}
