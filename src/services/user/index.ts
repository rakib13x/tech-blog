"use server";

import envConfig from "@/config/env.config";

// get user by username
export const getUserByUsername = async (username: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/users/${username}`, {
      cache: "no-store",
      next: {
        tags: ["singleUser"],
      },
    });

    return await res?.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};











