import { OrganizationSwitcher, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

function TopBar() {
  return (
    <nav className="topbar">
      <Link
        href="/"
        className="flex items-center gap-4"
      >
        <h6>Research Connect</h6>
      </Link>

      <div className="flex items-center gap-1">
        <SignedIn>
          <div className="block ">
            <OrganizationSwitcher
              appearance={{
                elements: {
                  OrganizationSwitcherTrigger: "py-2 px-2",
                },
              }}
            />
          </div>
        </SignedIn>
        <SignedOut>
          <Link href="/login">
            <button className="login-button bg-slate-800 py-1 px-4 rounded text-white">Login</button>
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
}

export default TopBar;
