"use client";

import { useUser } from "@/context/user.provider";
import { getProfileInfo } from "@/services/auth";
import { IUser } from "@/types";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiUser } from "react-icons/hi2";
import { IoDiamondOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

interface IProps {}

const SubscriptionsStatus = ({}: IProps) => {
  const [loading, setLoading] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const { user } = useUser();
  const pathname = usePathname(); // Detects the current route

  const getUser = async () => {
    setLoading(true);
    try {
      const profileData = await getProfileInfo();
      const currentUser = (profileData.data as IUser) ?? {};
      setIsPremium(currentUser?.isPremiumUser);
    } catch (error) {
      console.error("Failed to fetch profile info:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [pathname, user]); // Runs whenever `pathname` or `user` changes

  return (
    <>
      {loading ? (
        <div className="p-4 border border-default/50 rounded-xl w-full max-w-sm">
          <Skeleton className="h-6 w-32 mb-1 rounded" />
          <Skeleton className="h-6 w-full mb-1 rounded" />
          <Skeleton className="h-6 w-3/4 mb-1 rounded" />
          <Skeleton className="h-6 w-24 rounded" />
        </div>
      ) : (
        <>
          {!isPremium ? (
            <div className="p-4 border border-default/50 rounded-xl">
              <h3 className="font-semibold">Upgrade to Premium</h3>
              <p className="mb-2">
                Unlock premium features designed to enhance your writing
                journey.
              </p>
              <Button
                size="sm"
                href="/subscriptions"
                as={Link}
                startContent={<IoDiamondOutline />}
                radius="sm"
                color="primary"
              >
                Go Premium
              </Button>
            </div>
          ) : (
            <div className="p-4 border border-default/50 rounded-xl">
              <h3 className="font-semibold">Premium Member</h3>
              <p className="mb-2">
                Your subscription status is active. Enjoy the premium features.
              </p>
              <Button
                size="sm"
                href={`/profile/@${user?.username}`}
                as={Link}
                startContent={<HiUser />}
                radius="sm"
                color="primary"
              >
                Go to Profile
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SubscriptionsStatus;
