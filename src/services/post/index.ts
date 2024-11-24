//@ts-nocheck
"use server";

import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/axiosInstance";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllPosts = async (
  params?: Record<string, string | undefined>
) => {
  try {
    const url = new URL(`${envConfig.baseApi}/posts`);

    // Append only defined parameters
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== undefined) {
          url.searchParams.append(key, value);
        }
      });
    }

    const res = await fetch(url.toString(), {
    cache: "no-cache",
      next: {
        tags: ["allPosts"],
      },
    });

    return res?.json();
  } catch (err: any) {
    return err;
  }
};



// get following users posts
export const getFollowingUsersPosts = async (
  params?: Record<string, string | undefined>
) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("tth_access_token")?.value;

  try {
    // Create a URL with the base endpoint
    const url = new URL(`${envConfig.baseApi}/posts/following-users`);

    // Append only defined parameters
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== undefined) {
          url.searchParams.append(key, value);
        }
      });
    }

    const res = await fetch(url.toString(), {
      cache: "no-cache", // Consistent with getAllPosts
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        tags: ["allPosts"], // Add this if you want to enable cache invalidation
      },
    });

    return res.json();
  } catch (err: any) {
    return err; // Handle the error as you see fit
  }
};



export const createPost = async (payload: FormData) => {
  try {
    const res = await axiosInstance.post("/posts", payload);

    revalidateTag("allPosts");
    revalidatePath("/")

    return res?.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/posts/${slug}`);

    return res?.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

export const getLoggedInUserPosts = async (
  params?: Record<string, string | undefined>
) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("tth_access_token")?.value;
  try {
    const url = new URL(`${envConfig.baseApi}/posts/my-posts`);

    // Append only defined parameters
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== undefined) {
          url.searchParams.append(key, value);
        }
      });
    }

    const res = await fetch(url.toString(), {
      next: {
        tags: ["myPosts"],
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.json();
  } catch (err: any) {
    return err;
  }
};

export const getPostsByUserId = async (userId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/posts/users/${userId}`, {
      next: {
        tags: ["allPosts"],
      },
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

// upvote/downvote by post id
export const voteOnPost = async (
  postId: string,
  voteType: "upvote" | "downvote"
) => {
  try {
    const res = await axiosInstance.put(
      `/posts/${postId}/vote?voteType=${voteType}`
    );

    revalidateTag("singlePost");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};


// comment on post
export const commentOnPost = async (postId: string, payload: FormData) => {
  try {
    const res = await axiosInstance.post(`/posts/${postId}/comments`, payload);

    revalidateTag("comments");

    return await res?.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

// get all comments by post id
export const getCommentsByPostId = async (postId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/posts/${postId}/comments?limit=20`, {
      next: {
        tags: ["comments"],
      },
    });

    return res?.json();
  } catch (err: any) {
    return err?.response?.data;
  }
};

// delete a blog by admin using id with reason
export const deleteBlogByAdminUsingId = async (
  blogId: string,
  reason: string
) => {
  try {
    const res = await axiosInstance.delete(`/posts/${blogId}/by-admin`, {
      data: { reason },
    });

    revalidateTag("allPosts");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

// delete a blog by user using id
export const deleteBlogByUserUsingId = async (blogId: string) => {
  try {
    const res = await axiosInstance.delete(`/posts/${blogId}`);

    revalidateTag("myPosts");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};


// update a blog by user using id
export const updateBlogByUserUsingId = async (blogId: string, payload: FormData) => {
  try {
    const res = await axiosInstance.put(`/posts/${blogId}`, payload);

    revalidateTag("myPosts");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

// update blog by admin
export const updateBlogByAdmin = async (blogId: string, payload: FormData) => {
  try {
    const res = await axiosInstance.put(`/posts/${blogId}/by-admin`, payload);

    revalidateTag("allPosts");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

// delete comment by logged in user
export const deleteCommentByUser = async (commentId: string) => {
  try {
    const res = await axiosInstance.delete(`/comments/${commentId}`);

    revalidateTag("comments");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
}

// update comment by logged in user
export const updateCommentByUser = async (commentId: string, payload: FormData) => {
  try {
    const res = await axiosInstance.put(`/comments/${commentId}`, payload);

    revalidateTag("comments");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
}