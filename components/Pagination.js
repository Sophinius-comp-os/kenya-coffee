import Link from 'next/link'

export function Pagination() {
  return (
    <div className="mt-20 flex items-center justify-center gap-2">
      <span className="inline-flex h-10 w-20 items-center justify-center rounded-full bg-slate-50 text-sm font-medium text-slate-500/60 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5">
        Prev
      </span>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-sm font-medium text-sky-50 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5">
        1
      </span>
      <Link
        href="#"
        className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-sm font-medium text-slate-700 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-700 sm:inline-flex"
      >
        2
      </Link>
      <Link
        href="#"
        className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-sm font-medium text-slate-700 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-700 sm:inline-flex"
      >
        3
      </Link>
      <span
        href="#"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-sm font-medium text-slate-500/60 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5"
      >
        ...
      </span>
      <Link
        href="#"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-sm font-medium text-slate-700 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-700"
      >
        5
      </Link>
      <Link
        href="#"
        className="inline-flex h-10 w-20 items-center justify-center rounded-full bg-slate-50 text-sm font-medium text-slate-700 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-700"
      >
        Next
      </Link>
    </div>
  )
}
