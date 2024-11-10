"use server";
import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/axiosInstance";


import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

// register a new user
export const registerUser = async (payload: FormData) => {
  try {
    const res = await axiosInstance.post("/auth/register", payload);

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};








export const getNewAccessToken = async () => {
  try {
    const refreshToken = (await cookies()).get("tth_refresh_token")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
    });
    return res?.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};
