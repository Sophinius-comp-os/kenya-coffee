import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/ui/Header/Navbar";
import Provider  from "@/providers/theme-provider";
import Footer from "../../components/ui/Footer";
import classNames from "classnames";
import {cookies} from "next/headers";
import Template from "@/app/(site)/template";
import siteMetadata from '@/lib/siteMetaData'
import { ToastProvider } from '@/providers/toast-provider'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};


function getTheme() {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie ? themeCookie.value : "dark";
  return theme;
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const theme = getTheme() as string;
  return (
    <html lang="en"
          className={classNames(inter.className, 'scroll-smooth',theme)}
          style={{ colorScheme: theme }}
          suppressHydrationWarning
      >
      <body>
        <Provider>

          <Navbar />
          <Template>
            <ToastProvider />
          {children}
          </Template>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
