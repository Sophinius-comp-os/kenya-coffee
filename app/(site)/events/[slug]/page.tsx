import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { fetchEvents } from "@/sanity/sanity.query";
import { Post } from "@/typings";
import { PostFooter } from "./PostFooter";
import PortableText from "react-portable-text";

import {
  WebDevelopmentIcon,
  TutorialIcon,
  BusinessIcon,
  ContentCreationIcon,
} from "@/components/CategoryIcons";
import { urlForImage } from "@/sanity/lib/image";
import Footer from "@/components/Footer/Footer";
import post from "@/sanity/schemas/post";

const iconOptions = {
  "Web Development": WebDevelopmentIcon,
  Business: BusinessIcon,
  "Content Creation": ContentCreationIcon,
  Tutorials: TutorialIcon,
};

export const generateStaticParams = async () => {
  const events: [Post] = await fetchEvents();

  return events.map((event) => ({ slug: event.slug.current }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const events: [Post] = await fetchEvents();

  const event = events.find((event) => event._id === params.slug);
  return { title: event?.title, description: event?.description };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const events: [Post] = await fetchEvents();
  const event = events.find((event) => event.slug.current === params.slug);

  return (
    <>
      <main>
        <article>
          {/* Article Header */}
          <header className="relative  py-16 sm:pt-24 lg:pt-28">
            <div className="absolute inset-x-0 bottom-0 h-1/4 "/>
            <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
              {/* <Link
                href={`/articles/${categorySlug}#articles`}
                className="group inline-flex items-center justify-center gap-3.5 text-base leading-5 tracking-wide text-sky-700 transition duration-200 ease-in-out hover:text-sky-600 sm:text-lg"
              >
                <CategoryIcon className="h-[18px] w-[18px] text-sky-700/90 transition duration-200 group-hover:text-sky-600 sm:h-5 sm:w-5" />
                {event.category}
              </Link> */}
              <h1 className="mt-6 text-center font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight">
                {event?.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-center text-2xl leading-8 text-slate-700">
                {event?.description}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 text-md text-slate-500">
                <span className="flex items-center gap-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.75"
                      stroke="currentColor"
                      className="h-8 w-8 text-slate-400"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  <time dateTime={event?.publishedAt} className='text-2xl'>
                    {format(parseISO(event?.publishedAt), "LLL d, yyyy")}
                  </time>
                </span>
                <span className="flex items-center gap-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.75"
                      stroke="currentColor"
                      className="h-8 w-8 text-slate-400"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {/* {`${event.timeToRead} minute read`} */}
                </span>
              </div>
              <div className="mx-auto mt-16 w-full max-w-4xl">
                <div
                    className="aspect-h-9 aspect-w-16 relative block w-full overflow-hidden rounded-3xl shadow-lg shadow-sky-100/50 md:aspect-h-2 md:aspect-w-3">
                  <Image
                      src={urlForImage(event?.mainImage).url()}
                      alt={event?.title}
                      fill={true}
                      className="w-full rounded-3xl object-cover"
                      sizes="(min-width: 1024px) 56rem, calc(100vw - 2.5rem)"
                  />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/10"></div>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto max-w-2xl dark:text-[#fff]">
              {/* <MdxContent code={event.body.code} /> */}
              <PortableText
                  content={event?.content}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  serializers={{
                    h1: (props) => <h1 className='dark:text-[#fff]' {...props} />,
                    h2: (props) => <h2 className='dark:text-[#fff]' {...props} />,
                    h3: (props) => <h3 className='dark:text-[#fff]' {...props} />,
                    h4: (props) => <h4 className='dark:text-[#fff]' {...props} />,

                    h5: (props) => <h5 className='dark:text-[#fff]' {...props} />,
                    h6: (props) => <h6 className='dark:text-[#fff]' {...props} />,
                    li: ({ children }) => <li className="dark:text-[#fff]">{children}</li>,
                    em: ({ children }) => <em className="dark:text-[#fff]">{children}</em>,
                    link:() => <link className='dark:text-[#fff]'></link>

                  }}
                  className='text-xl dark:text-[#fff]'
              />
            </div>
            {/*<PostFooter/>*/}
          </div>
        </article>
      </main>
    </>
  );
}

export const dynamicParams = false;
