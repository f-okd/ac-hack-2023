import Link from "next/link";

import { Brand } from "./brand";
import { Drawer } from "./drawer";
import SearchBar from "./SearchBar";

export function NavBar() {
  return (
    <header className="container navbar items-stretch">
      <div className="navbar-start">
        <Drawer />
      </div>

      <div className="navbar-center">
        <Link
          href="/"
          className="btn btn-ghost btn-sm !text-lg normal-case md:btn-md md:!text-xl"
        >
          <Brand />
        </Link>
        <SearchBar />
      </div>

      <div className="navbar-end">
        <Link href="/mycourses" className="font-semibold">
          My Learning
        </Link>
      </div>
    </header>
  );
}
