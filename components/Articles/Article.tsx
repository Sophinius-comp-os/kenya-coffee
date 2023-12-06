import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../lib/formatDate";

import clsx from "clsx";
import { useTheme } from "next-themes";

import {
  WebDevelopmentIcon,
  TutorialIcon,
  BusinessIcon,
  ContentCreationIcon,
} from "./CategoryIcons";

const iconOptions = {
  Traveling: WebDevelopmentIcon,
  Business: BusinessIcon,
  Villa: ContentCreationIcon,
  Diani: TutorialIcon,
};

export function Article({ article }) {
  console.log(article);
  const categorySlug = article.category.replace(/ /g, "-").toLowerCase();
  console.log(article.category);
  const CategoryIcon = iconOptions[article.category];
  console.log(CategoryIcon);

  const { theme, setTheme } = useTheme();
  return (
    <article
      className={clsx(
        "flex flex-col items-start justify-between rounded-2xl bg-slate-50 shadow-sm shadow-sky-100/50 ring-1 ",
        theme === "dark" ? "ring-white" : "ring-slate-100"
      )}
    >
      <div className="w-full px-4 pt-4">
        <Link
          href={`/articles/${article.slug}`}
          className="group aspect-h-9 aspect-w-16 relative block w-full overflow-hidden rounded-xl md:aspect-h-2 md:aspect-w-3"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill={true}
            className="w-full rounded-xl bg-slate-100 object-cover transition duration-300 group-hover:scale-105"
          />
          <div
            className={clsx(
              "absolute inset-0 rounded-xl ring-1 ring-inset ",
              theme === "dark" ? "ring-white" : "ring-slate-900/5"
            )}
          ></div>
        </Link>
      </div>

      <div className="group relative flex flex-1 flex-col px-5 pb-10 pt-8 xl:px-7">
        <Link
          href={`/articles/${categorySlug}`}
          className="group relative z-10 flex items-center gap-2.5 text-md  text-sky-700 transition duration-200 ease-in-out hover:text-sky-600"
        >
          <CategoryIcon className="h-4 w-4 text-sky-600" />
          {article.category}
        </Link>
        <div className="flex-1">
          <h3 className="mt-4 font-display text-xl font-medium leading-normal text-slate-900 decoration-slate-400 transition duration-200 ease-in-out group-hover:text-sky-900">
            <Link href={`/articles/${article.slug}`}>
              <span className="absolute inset-0"></span>
              {article.title}
            </Link>
          </h3>
          <p className="mt-3.5 line-clamp-3 text-md leading-7 text-slate-700">
            {article.description}
          </p>
        </div>
        <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.75"
              stroke="currentColor"
              className="h-5 w-5 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.75"
              stroke="currentColor"
              className="h-5 w-5 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {`${article.timeToRead} minute read`}
          </span>
        </div>
      </div>
    </article>
  );
}
