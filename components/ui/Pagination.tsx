"use client"
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';



export function Pagination({ itemCount, pageSize, currentPage}: Props ) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const changePage = (page:number) => {
        const params = new  URLSearchParams(searchParams);
        params.set('page', page.toString());
        router.push('?', + params.toString())
    }


    const pageCount = Math.ceil(itemCount/ pageSize)
    if(pageCount <=1){
        return null
    }


    return (
        <div className="mt-20 flex items-center justify-center gap-2">
      <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex h-10 w-20 items-center justify-center rounded-full bg-slate-50 text-sm font-medium text-slate-500/60 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5">
        Prev
      </button>
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
            <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-sm font-medium text-slate-700 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-700"
            >
                5
            </button>
            <button
                onClick={() => changePage(pageCount)}
                disabled={currentPage === pageCount}

                className="inline-flex h-10 w-20 items-center justify-center rounded-full bg-slate-50 text-sm font-medium text-slate-700 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-700"
            >
                Next
            </button>
        </div>
    )
}