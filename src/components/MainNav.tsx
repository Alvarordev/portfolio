"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();

  const routes = [
    {
      title: "Home",
      path: "/",
      active: pathname === "/",
    },
    {
      title: "Proyectos",
      path: "/projects",
      active: pathname === "/projects",
    },
    {
      title: "Sobre mi",
      path: "/about",
      active: pathname === "/about",
    },
  ];

  return (
    <ul className="flex gap-8">
      {routes.map(({ title, path, active }) => (
        <li key={title}>
          <Link
            href={path}
            className={`${
              active ? "text-indigo-600" : ""
            } hover:text-indigo-600 transition-all duration-150 font-medium`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
