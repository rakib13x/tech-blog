"use server";

import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/axiosInstance";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";



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


