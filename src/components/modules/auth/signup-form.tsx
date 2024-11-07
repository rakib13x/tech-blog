"use client";

import THDatePicker from "@/components/form/th-date-picker";
import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import THSelect from "@/components/form/th-select";
import { signUpValidationSchema } from "@/schemas/auth.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

const options = [
  {
    key: "Male",
    label: "Male",
  },
  {
    key: "Female",
    label: "Female",
  },
  {
    key: "Other",
    label: "Other",
  },
];

interface IProps {}

const SignUpForm: React.FC<IProps> = () => {
  const [isPassword, setIsPassword] = useState(true);
  const router = useRouter();

  return (
    <Suspense>
      <THForm resolver={zodResolver(signUpValidationSchema)}>
        <div className="space-y-2 mb-6">
          <THInput
            radius="sm"
            name="image"
            label="Profile Image"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
          />
          <THInput radius="sm" name="fullName" label="Full Name" isRequired />
          <THInput radius="sm" name="email" label="Email Address" isRequired />
          <THInput radius="sm" name="username" label="Username" isRequired />
          <div className="relative">
            <THInput
              radius="sm"
              name="password"
              label="Password"
              isRequired
              type={isPassword ? "password" : "text"}
            />
            <Button
              variant="light"
              size="sm"
              radius="full"
              isIconOnly
              onClick={() => setIsPassword(!isPassword)}
              type="button"
              className="absolute top-3 right-2 text-lg"
            >
              {isPassword ? <PiEyeLight /> : <PiEyeSlashLight />}
            </Button>
          </div>
          <THSelect
            label="Select Gender"
            radius="sm"
            size="md"
            variant="flat"
            name="gender"
            options={options}
            isRequired
          />
          <THDatePicker name="dateOfBirth" label="Date of Birth" isRequired />
          <Button
            // isLoading={isPending}
            type="submit"
            color="primary"
            variant="solid"
            radius="sm"
            className="w-full"
          >
            sign up
          </Button>
        </div>
      </THForm>
    </Suspense>
  );
};

export default SignUpForm;
