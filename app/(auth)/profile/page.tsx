import { UserButton } from "@clerk/nextjs";

async function Page() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text text-slate-700">Profile</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}

export default Page;
