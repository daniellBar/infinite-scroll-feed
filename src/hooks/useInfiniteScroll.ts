import { useEffect } from "react";

interface InfiniteScrollOptions {
  initFetch: () => void;
  hasMore: boolean;
  isLoading: boolean;
  offset?: number;
}

export const useInfiniteScroll = ({
  initFetch,
  hasMore,
  isLoading,
  offset = 200,
}: InfiniteScrollOptions) => {
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return;

      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollHeight - scrollTop <= clientHeight + offset) {
        initFetch();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore, offset, fetch]);
};
