"use client";

import { useUser } from "@clerk/nextjs";
type Props = {};

const WelcomeMsg = (props: Props) => {
  const { user, isLoaded } = useUser();
  console.log(user);
  return (
    <div className="capitalize">
      <h2 className="text-2xl lg:text-4xl font-medium text-white">
        Welcome back
        {isLoaded ? " , " : " "}
        {user?.firstName} 🤚
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        Overview your finatials{" "}
      </p>
    </div>
  );
};

export default WelcomeMsg;
