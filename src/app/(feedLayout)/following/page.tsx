import FollowingFeedPosts from "@/components/modules/following-feed";
import { getFollowingUsersPosts } from "@/services/post";
import { IPost } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Following Feed",
};

interface IProps {
  searchParams: {
    search: string;
    category: string;
  };
}

export default async function FollowingUsersPosts({ searchParams }: IProps) {
  const params = searchParams
    ? { searchTerm: searchParams.search, category: searchParams.category }
    : undefined;

  const data = await getFollowingUsersPosts(params);
  const posts = data?.data as IPost[];

  return <FollowingFeedPosts initialPosts={posts} />;
}
