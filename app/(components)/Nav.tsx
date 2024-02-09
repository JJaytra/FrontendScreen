import React from "react";
import Image from "next/image";
import {
  IconBook,
  IconShieldCheck,
  IconLayoutSidebarLeftExpandFilled,
  IconUserCircle,
  IconMoon,
  IconLogout,
} from "@tabler/icons-react";

const Nav = () => {
  return (
    <div className="w-20 bg-nav p-4 h-full flex flex-col justify-between">
      {/* container 1 */}
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image src="../logo.svg" alt="logo" width={40} height={40} />
        </div>
        <div className="mb-4">
          <IconBook />
        </div>
        <div>
          <IconShieldCheck />
        </div>
      </div>
      {/* container 2 */}
      <div className="flex flex-col items-center">
        <div className="mt-auto mb-4">
          <IconLayoutSidebarLeftExpandFilled />
        </div>
        <div className="mb-4">
          <IconUserCircle />
        </div>
        <div className="mb-4">
          <IconMoon />
        </div>
        <div>
          <IconLogout />
        </div>
      </div>
    </div>
  );
};

export default Nav;
