import { SignIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function LoginModal() {
  return (
    <SignedOut>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in or Register to see all posts
            </h2>
            <p className="mt-5 text-center text-2xl leading-9 tracking-tight text-gray-900">
              Please sign in to view posts
            </p>
          </div>

          <form
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm leading-6"></div>
            </div>

            <div>
              <Link href="/login">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login or Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </SignedOut>
  );
}
