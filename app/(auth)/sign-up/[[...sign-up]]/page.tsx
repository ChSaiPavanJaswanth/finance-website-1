import Image from "next/image";
import { Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-4xl text-[#2E2A47]">Welcome back!</h1>
          <p className="text-1.5xl text-[#7E8CA0]">
            Log in or Sign up using your mail id
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full hidden bg-white lg:flex items-center justify-center">
        <Image
          src="/logoipsum-294.svg"
          height={100}
          width={100}
          alt="logo.svg"
        />
      </div>
    </div>
  );
}
