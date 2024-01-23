"use client";
import clsx from "clsx";
import { useTheme } from "next-themes";

function Container({ className, ...props }) {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={clsx(
        "mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8",
        // theme === "light" ? "bg-dark" : "bg-light]",
        className
      )}
      {...props}
    />
  );
}

export default Container;
