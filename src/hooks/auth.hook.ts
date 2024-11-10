import { registerUser } from "@/services/auth";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUserRegister = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (payload) => await registerUser(payload),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message, {
          id: "user-register",
        });
      }
      if (data.success) {
        toast.success(data?.message, {
          id: "user-register",
        });
      }
    },
  });
};
