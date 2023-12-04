import clsx from "clsx";

function Container({ className, ...props }) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}

export default Container;
