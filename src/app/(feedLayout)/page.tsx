import FeedPosts from "@/components/modules/feed";
import { getAllPosts } from "@/services/post";
import { IPost } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed",
};

interface IProps {
  searchParams: {
    search: string;
    category: string;
  };
}

const INITIAL_NUMBERS_OF_POSTS = "5";

export default async function Home({ searchParams }: IProps) {
  const params = searchParams
    ? {
        searchTerm: searchParams.search,
        category: searchParams.category,
        limit: INITIAL_NUMBERS_OF_POSTS,
      }
    : undefined;

  const data = await getAllPosts(params);
  const posts = data?.data as IPost[];

  return <FeedPosts initialPosts={posts} />;
}
