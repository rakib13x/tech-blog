import { AcmeIcon } from "@/components/icons";
import SuspendedLoginForm from "@/components/modules/auth/login-form";
import SocialLogin from "@/components/modules/auth/social-login";
import Container from "@/components/ui/container";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

interface IProps {}

const LoginPage: React.FC<IProps> = () => {
  return (
    <section className="py-10 relative w-full overflow-hidden">
      <Container>
        <div className="w-full max-w-lg mx-auto mb-40 mt-10 lg:mb-40 lg:mt-10">
          <div className="space-y-4 flex flex-col items-center mb-8">
            <Link href="/">
              <AcmeIcon size={60} />
            </Link>
            <div>
              <h2 className="text-center text-3xl font-bold">User Login</h2>
            </div>
          </div>

          <SuspendedLoginForm />
          <div className="text-center mt-2 pb-4">
            <Link
              href="/forget-password"
              className="text-primary hover:underline"
            >
              Forgotten Password?
            </Link>
          </div>

          <SocialLogin />

          <Divider className="bg-default/50" />
          <div className="flex items-center justify-center mt-4 text-sm space-x-1 text-center">
            <span>Don't have an account?</span>
            <Link className="text-primary hover:underline" href="/signup">
              Sign Up
            </Link>
          </div>
          <div className="flex items-center justify-center mt-4 text-sm space-x-1 text-center text-red-500">
            <span>[Admin mail: rakib1xx@gmail.com]</span>
            <span>[Admin pass: Rakib1234]</span>
          </div>
          <div className="flex items-center justify-center mt-4 text-sm space-x-1 text-center text-red-500">
            <span>
              [when a user tries to sign up it shows a error toast ,but it's
              actually successfully sign up. please try to log in with those
              credentials,you will successfully logged in]
            </span>
          </div>
          <div className="flex items-center justify-center mt-4 text-sm space-x-1 text-center text-red-500">
            <span>
              [same goes for when a user tries to pay for premium membership,it
              shows a server crash but it paid successfully.hit back button and
              you will get premium membership.I will fix those problem once i
              get enought time.]
            </span>
          </div>
        </div>

        <div className="-z-50 hidden md:block">
          <div className="absolute h-14 w-[600px] rotate-[45deg] rounded-3xl bg-purple-600 opacity-30  filter -bottom-5 lg:bottom-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100 blur-2xl"></div>
          <div className="absolute  h-20 w-[600px] rotate-[45deg] rounded-3xl bg-primary-500 opacity-10  filter bottom-14  lg:bottom-32 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30  xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100 blur-2xl"></div>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
