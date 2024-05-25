import { twMerge } from "tailwind-merge";

export const Logo = ({ className }: { className?: string }) => (
  <a href="/">
    <img className={twMerge("w-[60px]", className)} src="/images/logo.png" />
  </a>
);
