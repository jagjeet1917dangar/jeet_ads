import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Hello sir jagjeet this side</h2>
      <Button>Subscribe to Jagjeet Dangar</Button>
      <UserButton/>
    </div>
  );
}
