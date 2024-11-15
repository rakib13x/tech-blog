import Container from "@/components/ui/container";
import { poppins } from "@/config/fonts";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Textarea } from "@nextui-org/input";
import type { Metadata } from "next";
import Link from "next/link";
import { AiOutlineComment } from "react-icons/ai";
import { BiBookmark, BiDownvote, BiUpvote } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, content, coverImage } = (data?.data as IPost) ?? {};

  const description = content?.substring(0, 150) + "...";
  const blogUrl = `https://tech-tunes.vercel.app//blogs/${params?.slug}`;

  return {
    title: title,
    description: description,
    keywords: `${title}, Tech Tunes, blog post, technology, tutorial`,
    openGraph: {
      title: title,
      description: description,
      url: blogUrl,
      images: [{ url: coverImage }],
      siteName: "Tech Tunes",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [coverImage],
    },
  };
}

const DynamicBlogPage = async ({ params }: { params: { slug: string } }) => {
  const {
    _id,
    coverImage,
    title,
    author,
    contentType,
    createdAt,
    isPremium,
    content,
    tags,
    totalViews,
    upVotes,
    downVotes,
    totalComments,
    slug,
  } = (data?.data as IPost) ?? {};


  return (
    <section className="pb-10">
      <Container>
        <>
          {!data?.success ? (
            <>
              {data?.statusCode === 401 && (
                <div className="text center space-y-4 w-full flex flex-col items-center justify-center h-[calc(100vh-410px)]">
                  <p className="text-center text-default-600">
                    Accessing premium content requires logging in.
                  </p>
                  <Button
                    as={Link}
                    href={`/login?redirect=blogs/${params?.slug}`}
                    radius="full"
                    variant="solid"
                    color="primary"
                  >
                    Login
                  </Button>
                </div>
              )}
              {data?.statusCode === 403 && (
                <div className="text center space-y-4 w-full flex flex-col items-center justify-center h-[calc(100vh-410px)]">
                  <p className="text-center text-default-600">
                    {data?.message}
                  </p>
                  <Button
                    as={Link}
                    href="/subscriptions"
                    radius="full"
                    variant="solid"
                    color="primary"
                  >
                    Get Premium
                  </Button>
                </div>
              )}
              {data?.statusCode === 404 && (
                <div className="text center space-y-4 w-full flex flex-col items-center justify-center h-[calc(100vh-410px)]">
                  <p className="text-center text-default-600">Blog not found</p>
                  <Button
                    as={Link}
                    href={`/`}
                    radius="full"
                    variant="solid"
                    color="primary"
                  >
                    Back to Feed
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center mt-4 w-full print:max-w-xl print:mx-auto">
                <Image
                  className="w-full"
                  src={coverImage}
                  alt={`${title}-cover-image`}
                />
              </div>
              <div className="space-y-14 print:space-y-8">
                <div className="space-y-6">
                  <h1
                    className={`${poppins.className} text-3xl lg:text-4xl font-bold text-center`}
                  >
                    {title}
                  </h1>
                  <div className="flex justify-center lg:justify-center items-center space-x-2 lg:space-x-4 mx-auto w-full max-w-xl">
                    <Link
                      href={`/users/@${author?.username}`}
                      className="flex items-center space-x-4"
                    >
                      <Avatar
                        className="h-8 w-8 object-cover"
                        radius="full"
                        src={author?.profilePicture}
                        name={author?.fullName}
                        isBordered
                      />
                      <h3 className="font-medium text-sm lg:text-lg">
                        {author?.fullName}
                      </h3>
                    </Link>
                    <span className="text-default-500">-</span>
                    <div className="text-default-500 text-xs lg:text-base">
                      {new Date(createdAt)?.toDateString()}
                    </div>

                    
                  </div>

                  <div
                    className={`flex flex-col lg:flex-row justify-center items-center gap-4 print:hidden`}
                  >
                    <div className="flex items-center space-x-2">
                      {isPremium && (
                        <Button
                          color="secondary"
                          variant="flat"
                          radius="full"
                          startContent={
                            <IoDiamondOutline className="text-lg" />
                          }
                        >
                          Premium Content
                        </Button>
                      )}

                      {totalViews > 0 && (
                        <Button size="md" variant="flat" radius="full">
                          {totalViews} Views
                        </Button>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 print:hidden">
                      <Button
                        size="md"
                        variant="light"
                        radius="full"
                        startContent={<BiDownvote />}
                      >
                        {downVotes} votes
                      </Button>
                      <Button
                        size="md"
                        variant="light"
                        radius="full"
                        startContent={<BiUpvote />}
                      >
                        {upVotes} votes
                      </Button>
                      <Button
                        size="md"
                        variant="light"
                        radius="full"
                        startContent={<AiOutlineComment />}
                      >
                        {totalComments} comments
                      </Button>
                    </div>
                  </div>
                </div>  
        </>
      </Container>
    </section>
  );
};

export default DynamicBlogPage;
