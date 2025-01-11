import { useEffect, useState } from "react";
import { PageLayout } from "../../layout/PageLayout/PageLayout";
import { PostDisplay } from "./components/PostDisplay/PostDisplay";
import { useGetItems } from "./Feed.api";
import { Post } from "./types";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

export const Feed = () => {
  const [skip, setSkip] = useState(0);
  const [updatedPosts, setUpdatedPosts] = useState<Post[]>([]);

  const { data: postsData, isLoading, refetch, isFetching } = useGetItems(skip);

  useEffect(() => {
    if (!isLoading && !isFetching) {
      refetch();
    }
  }, [skip]);

  useEffect(() => {
    const fetchedPosts = postsData?.data.data;
    if (fetchedPosts?.length) {
      setUpdatedPosts((prevPosts) => [...prevPosts, ...fetchedPosts]);
    }
  }, [postsData?.data.data]);

  useInfiniteScroll({
    initFetch: () => setSkip((prevSkip) => prevSkip + 6),
    hasMore: postsData?.data?.hasMore || false,
    isLoading: isLoading || isFetching,
  });

  const handleClickLike = (postId: string) => {
    setUpdatedPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      const postIndex = updatedPosts.findIndex(({ id }) => id === postId);

      if (postIndex !== -1) {
        const { didLike, likes } = updatedPosts[postIndex];

        updatedPosts[postIndex] = {
          ...updatedPosts[postIndex],
          didLike: !didLike,
          likes: didLike ? likes - 1 : likes + 1,
        };
      }

      return updatedPosts;
    });
  };

  return (
    <PageLayout>
      <div className="flex flex-col gap-6 pt-6">
        {isLoading ? (
          <div>Loading posts...</div>
        ) : (
          updatedPosts?.map((post) => (
            <PostDisplay
              key={post.id}
              post={post}
              handleClickLike={handleClickLike}
            />
          ))
        )}

        {isFetching && !isLoading && (
          <div className="text-center text-gray-500 mt-4">Loading posts...</div>
        )}

        {postsData?.data?.hasMore && !isLoading && <div className="h-1"></div>}
      </div>
    </PageLayout>
  );
};
