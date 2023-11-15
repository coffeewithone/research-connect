import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
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
        <div className="block ">
          <SignedIn>
            {/* <SignOutButton>
              <div className="flex cursor-pointer pr-4"> Log Out</div>
            </SignOutButton> */}
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            elements: {
              OrganizationSwitcherTrigger: "py-2 px-2",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default TopBar;
