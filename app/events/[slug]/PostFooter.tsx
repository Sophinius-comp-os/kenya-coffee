'use client'

import {
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'next-share'

function SocialIcon({ icon: Icon, ...props }) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 duration-200 hover:bg-slate-50"
      {...props}
    >
      <Icon className="h-3.5 w-3.5 fill-slate-500 transition group-hover:fill-slate-600" />
    </span>
  )
}

export function PostFooter() {
  const IS_SERVER = typeof window === 'undefined'
  const url = IS_SERVER ? '' : window.location.href

  return (
    <footer className="mx-auto max-w-2xl">
      <hr className="mt-14 h-px w-full pb-6 text-slate-300/75 sm:pb-4" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="pl-0.5 text-lg font-semibold tracking-wide text-slate-900 sm:pl-0">
          Share article
        </p>
        <div className="mt-2.5 flex gap-3 sm:mt-0 sm:gap-4">
          <button className="group flex h-10 items-center justify-center gap-3 rounded-full border border-slate-200 px-6 text-sm font-medium text-slate-600 duration-200 ease-in-out hover:bg-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 text-slate-500 transition duration-200 ease-in-out group-hover:text-slate-600"
            >
              <g
                strokeWidth="1.25"
                fill="none"
                stroke="currentCOlor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2.5" y="3.5" width="10" height="12"></rect>{' '}
                <polyline
                  points="4.5,0.5 15.5,0.5 15.5,13.5 "
                  stroke="currentCOlor"
                ></polyline>{' '}
                <line x1="5.5" y1="6.5" x2="9.5" y2="6.5"></line>{' '}
                <line x1="5.5" y1="9.5" x2="9.5" y2="9.5"></line>{' '}
                <line x1="5.5" y1="12.5" x2="9.5" y2="12.5"></line>
              </g>
            </svg>
            Copy link
          </button>
          <LinkedinShareButton url={url}>
            <SocialIcon icon={LinkedInIcon} />
          </LinkedinShareButton>
          <FacebookShareButton url={url}>
            <SocialIcon icon={FacebookIcon} />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <SocialIcon icon={TwitterIcon} />
          </TwitterShareButton>
        </div>
      </div>
    </footer>
  )
}
