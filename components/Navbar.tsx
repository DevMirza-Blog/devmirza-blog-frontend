import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <span className="font-bold ml-2 text-primary">DevMirza Blog</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
