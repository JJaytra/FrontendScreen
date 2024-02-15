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
        <div className="mb-4 ">
          <Image src="../logo.svg" alt="logo" width={40} height={40} />
        </div>
        <div className="mt-8 p-3 rounded-lg hover:bg-slate-200">
          <IconBook />
        </div>
        <div className="mt-4 p-3 rounded-lg hover:bg-slate-200">
          <IconShieldCheck />
        </div>
      </div>
      {/* container 2 */}
      <div className="flex flex-col items-center">
        <div className="mt-auto mb-10 p-3 rounded-lg hover:bg-slate-200">
          <IconLayoutSidebarLeftExpandFilled />
        </div>
        <div className="mb-10 p-3 rounded-lg hover:bg-slate-200">
          <IconUserCircle />
        </div>
        <div className="mb-10 p-3 rounded-lg hover:bg-slate-200">
          <IconMoon />
        </div>
        <div className="mb-10 p-3 rounded-lg hover:bg-slate-200">
          <IconLogout />
        </div>
      </div>
    </div>
  );
};

export default Nav;
