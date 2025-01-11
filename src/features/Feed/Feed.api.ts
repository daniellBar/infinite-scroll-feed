import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { FeedPostsResponse } from "./types";

const connectionsUrl = "https://backend.tedooo.com/hw/feed.json";

export const getPosts = (skip: number) => {
  return axios.get<FeedPostsResponse>(`${connectionsUrl}?skip=${skip}`);
};

export const useGetItems = (
  skip: number,
  options?: Omit<
    UseQueryOptions<
      AxiosResponse<FeedPostsResponse>,
      Error,
      AxiosResponse<FeedPostsResponse>,
      ["feed-posts"]
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["feed-posts"],
    queryFn: () => getPosts(skip),

    // the data arrives very fast so use this queryFn for delay in the scroll

    // queryFn: () =>
    //   new Promise<AxiosResponse<FeedPostsResponse>>((resolve) => {
    //     setTimeout(() => {
    //       getPosts(skip).then(resolve);
    //     }, 2000);
    //   }),
    ...options,
  });
};
