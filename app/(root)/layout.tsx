import { Inter } from "next/font/google";
import "../globals.css";
import TopBar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import BottomBar from "@/components/shared/BottomBar";
import { ClerkProvider } from "@clerk/nextjs";
import Home from "./page";
import LoginModal from "@/components/shared/LoginModal";
import ResearchPostsFilter from "@/components/shared/ResearchPostsFilter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Research Connect",
  description: "Research Connect",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <ResearchPostsFilter />

          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl mt-20">
                <LoginModal />
                {children}
              </div>
            </section>
            {/* @ts-ignore */}

            <RightSidebar />
          </main>

          {/* <BottomBar /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
