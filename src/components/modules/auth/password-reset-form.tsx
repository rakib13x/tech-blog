"use client";

import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import { passwordResetValidationSchema } from "@/schemas/auth.schema";


import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const PasswordResetForm = () => {
  const router = useRouter();

  return (
    <Suspense>
      <THForm resolver={zodResolver(passwordResetValidationSchema)}>
        <div className="space-y-2 pb-4">
          <THInput radius="sm" name="email" label="Email Address" isRequired />

          <Button
            type="submit"
            color="primary"
            variant="solid"
            radius="sm"
            className="w-full"
          >
            Send mail
          </Button>
        </div>
      </THForm>
    </Suspense>
  );
};

export default PasswordResetForm;
