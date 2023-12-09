"use client";

import { useRouter } from "next/navigation";

const tabs = [
  { name: "Computer Science", href: "/communities/org_2ZJJG3LoEb917YXI7Qd2jXDoC5V", current: true },
  { name: "Biology", href: "/communities/org_2WKkMK2nfJZyMS1dV7wlVE0ZRCo", current: false },
  { name: "Mathematics", href: "/communities/org_2WS74z9KKUPSgQAxH3WQ6qh9feY", current: false },
  { name: "Physics", href: "/communities/org_2ZJJKW87UKY3zu9A05C6ufCz2yS", current: false },
  { name: "Others", href: "/communities", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ResearchPostsFilter() {
  const router = useRouter();

  // Handler for when a new tab is selected
  const handleTabChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    // Redirect to the search page with the selected category as a query parameter
    router.push(`/search?category=${selectedCategory}`);
  };
  return (
    <div>
      <div className="sm:hidden mt-30 pt-30">
        <label
          htmlFor="tabs"
          className="sr-only"
        >
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 "
          defaultValue={tabs.find((tab) => tab.current)?.name || ""}
          onChange={handleTabChange}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="mt-30 pt-30 isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? "text-gray-900" : "text-gray-500 hover:text-gray-700",
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? "bg-transparent" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
