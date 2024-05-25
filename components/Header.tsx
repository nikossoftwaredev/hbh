"use client";
import { Logo } from "@/components/Logo";
import MobileHeader from "@/components/MobileHeader";
import { headerLinks } from "@/data/config";

const Header = () => {
  return (
    <header className="w-full z-50  bg-base-200 fixed max-h-[100px]">
      <nav className="w-full text-accent ">
        <span className="md:hidden">
          <MobileHeader />
        </span>
        <span className="hidden md:block">
          <ul className="p-4 w-full flex flex-wrap  md:flex-row justify-between items-center mr-1">
            <span className="flex gap-6 justify-center items-center w-full">
              <Logo />
              {headerLinks.map((linkConfig) => {
                return (
                  <li key={linkConfig.path}>
                    <a
                      href={linkConfig.path}
                      className={`font-bold text-lg hover:text-primary`}
                    >
                      {linkConfig.text}
                    </a>
                  </li>
                );
              })}
            </span>
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Header;
