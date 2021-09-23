import Image from "next/image";
import NavbarItemButton from "./NavbarItemButton";

import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Navbar() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow max-w-2xl">
        <NavbarItemButton title="Home" Icon={HomeIcon} />
        <NavbarItemButton title="Trending" Icon={LightningBoltIcon} />
        <NavbarItemButton title="Verified" Icon={BadgeCheckIcon} />
        <NavbarItemButton title="Collections" Icon={CollectionIcon} />
        <NavbarItemButton title="Search" Icon={SearchIcon} />
        <NavbarItemButton title="Account" Icon={UserIcon} />
      </div>

      <Image
        className="object-contain"
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={200}
        height={100}
        alt="Hulu Clone"
      />
    </header>
  );
}

export default Navbar;
