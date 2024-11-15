"use server"

import axiosInstance from "@/lib/axiosInstance";


export type TSubscriptionPayload = {
    type: "Monthly",
    price: number,
    currency: "USD" | "BDT",
    paymentMethod: "Aamarpay"
}

export const subscribePremiumMonthly = async (payload: TSubscriptionPayload) => {
  try {
    const res = await axiosInstance.post("/subscriptions/subscribe", payload);

    return res?.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};


