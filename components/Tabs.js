'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

function Tab({ tabName, directory }) {
  const isDefaultTab = tabName == null
  let tabSlug
  let nestedDirectory = ''
  if (!isDefaultTab) {
    tabSlug = tabName.replace(/ /g, '-').toLowerCase()
    nestedDirectory = '/categories'
  }
  const href = isDefaultTab
    ? `/${directory}`
    : `/${directory}${nestedDirectory}/${tabSlug}`
  const path = usePathname()
  const isActive = path === href
  if (tabName == null) {
    tabName = directory === 'articles' ? 'All Articles' : 'All Projects'
  }

  return (
    <li>
      <Link
        href={href}
        scroll={false}
        className={clsx(
          'inline-block rounded-full px-5 py-1.5 text-md font-medium transition',
          isActive
            ? 'bg-slate-50 text-sky-800 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5'
            : 'bg-white text-slate-700 duration-200 ease-in-out hover:bg-slate-50/95'
        )}
      >
        {tabName}
      </Link>
    </li>
  )
}

export function Tabs({ tabs, directory, className, ...props }) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0 })
  }, [])
  return (
    <ul className={clsx('flex flex-wrap items-center', className)} {...props}>
      <Tab directory={directory} />
      {tabs.map((tabName, index) => (
        <Tab
          tabName={tabName}
          directory={directory}
          key={`${directory}-tab-${index}`}
        />
      ))}
    </ul>
  )
}
