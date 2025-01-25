import React from "react";
const sidebarItems = [
    {
        label: "Dashboard",
        href: "#",
        icon: (
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-gauge"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M13.41 10.59l2.59 -2.59" /><path d="M7 12a5 5 0 0 1 5 -5" /></svg>
        ),
    }

];
const sideBar = () => {
    return (
        <div>
            <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
                <div>
                    <div className="inline-flex size-16 items-center justify-center">
                        <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                            L
                        </span>
                    </div>
                    <div className="border-t border-gray-100">
                        <ul className="space-y-1 border-t border-gray-100 pt-4">
                            {sidebarItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        {item.icon}
                                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                            {item.label}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
               <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                    <form action="#">
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                Logout
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default sideBar;
