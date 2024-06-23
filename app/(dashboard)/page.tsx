import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>this is an autheticated route</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
