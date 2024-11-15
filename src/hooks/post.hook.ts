
  import { createPost } from "@/services/post";
import { useMutation, useQuery } from "@tanstack/react-query";
  import { toast } from "sonner";

  
  export const useCreatePost = () => {
    return useMutation<any, Error, FormData>({
      mutationKey: ["CREATE_POST"],
      mutationFn: async (payload) => await createPost(payload),
      onSuccess: (data) => {
        if (!data?.success) {
          toast.error(data?.errorSources?.[0]?.message || data?.message, {
            id: "create-post",
          });
        }
        if (data.success) {
          toast.success(data?.message, {
            id: "create-post",
          });
        }
      },
    });
  };
  
  // vote on post
