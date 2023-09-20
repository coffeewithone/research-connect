import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
