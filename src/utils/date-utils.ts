import { formatDistanceToNow, parseISO } from "date-fns";

export const parseDateToTimePassed = (date: string): string => {
  const postDate = parseISO(date);
  const timeAgo = formatDistanceToNow(postDate, { addSuffix: true });

  if (timeAgo.includes("minute") || timeAgo.includes("hour")) {
    return timeAgo.replace(/minute(s)?/, "m").replace(/hour(s)?/, "h");
  }

  return timeAgo;
};
