import Image from 'next/image'

import { Container } from './Container'

import image from '@/images/portrait-02.jpg'
import rails from '@//images/logos/icons/rails.png'
import javascript from '@//images/logos/icons/javascript.png'
import python from '@//images/logos/icons/python.png'
import postgresql from '@//images/logos/icons/postgresql.png'
import tailwind from '@//images/logos/icons/tailwindcss.png'
import ruby from '@//images/logos/icons/ruby.png'
import avatar1 from '@/images/avatars/avatar-1.png'
import avatar2 from '@/images/avatars/avatar-2.png'
import avatar3 from '@/images/avatars/avatar-3.png'
import avatar4 from '@/images/avatars/avatar-4.png'
import avatar5 from '@/images/avatars/avatar-5.png'

const stack = [
  {
    name: 'Rails',
    experience: '7+ years of experience',
    logo: rails,
  },
  {
    name: 'Javascript',
    experience: '8+ years of experience',
    logo: javascript,
  },
  {
    name: 'Python',
    experience: '4 years of experience',
    logo: python,
  },
  {
    name: 'Postgresql',
    experience: '6 years of experience',
    logo: postgresql,
  },
  {
    name: 'Tailwind',
    experience: '3 years of experience',
    logo: tailwind,
  },
  {
    name: 'Ruby',
    experience: '9 years of experience',
    logo: ruby,
  },
]

const clientAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5]

export function Stack() {
  return (
    <section className="py-16 overflow-hidden bg-white sm:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2">
          <div className="lg:order-2">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-4xl font-semibold font-display text-slate-900 sm:text-5xl">
                A simple stack that you can{' '}
                <span className="relative whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={339}
                    height={31}
                    viewBox="0 0 339 31"
                    fill="none"
                    className="absolute top-[70%] left-1/2 h-[0.62em] w-auto -translate-x-1/2 fill-sky-200/90"
                  >
                    <mask
                      id="mask0_239_1184"
                      style={{ maskType: 'luminance' }}
                      maskUnits="userSpaceOnUse"
                      x={10}
                      y={0}
                      width={329}
                      height={31}
                    >
                      <path
                        d="M10.1475 0.918457H338.121V30.1173H10.1475V0.918457Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_239_1184)">
                      <path d="M280.105 20.3507C263.379 18.442 246.624 16.7484 229.848 15.2738C239.174 15.8156 248.495 16.3968 257.81 17.0606C257.836 17.0606 257.86 17.0642 257.883 17.0642C265.302 18.0796 272.713 19.1667 280.105 20.3507ZM166.373 6.05272C168.594 6.05272 170.812 6.04913 173.033 6.06348C179.547 6.10295 186.056 6.19982 192.566 6.34334C189.715 6.32181 186.867 6.29311 184.02 6.26799C179.368 6.22853 174.72 6.21059 170.068 6.19623C168.835 6.14242 167.604 6.09577 166.373 6.05272ZM94.3602 5.72621C110.973 4.66059 127.611 4.05063 144.252 3.89635C127.603 4.20491 110.975 4.84357 94.3602 5.72621ZM173.46 10.3583C164.324 10.0533 155.184 9.83802 146.042 9.6658C138.219 9.30341 130.391 8.97691 122.563 8.69704C129.414 8.59658 136.263 8.52482 143.112 8.47818C166.739 8.73651 190.358 9.9636 213.899 12.0769C200.42 11.3737 186.935 10.8068 173.46 10.3583ZM337.139 22.9484C315.186 20.096 293.134 17.8105 271.033 15.9555C250.91 12.9416 230.683 10.5377 210.396 8.79392C226.731 9.01996 243.09 9.41105 259.412 10.1968C270.803 11.5531 282.171 13.1102 293.502 14.9042C295.249 15.1805 295.777 13.2968 293.989 13.0134C291.621 12.6402 289.245 12.3101 286.874 11.9549C300.335 13.2466 313.779 14.7392 327.193 16.4506C329.3 16.7197 329.603 14.4844 327.512 14.1795C314.748 12.2994 301.913 10.9036 289.037 9.83802C271.243 8.09068 253.41 6.72366 235.554 5.71903C174.598 0.0608174 113.074 0.505725 52.18 7.15422C41.7917 7.49508 31.5097 8.49971 21.6034 10.8426C19.9864 11.2266 19.9631 12.2527 20.7275 12.877C20.2792 12.938 19.8335 13.0026 19.3879 13.0672C17.0013 13.3793 14.62 13.713 12.2412 14.079C9.20687 14.549 9.84432 17.8069 12.8735 17.3476C54.6805 10.9754 97.848 10.8355 140.458 11.8365C152.142 12.3532 163.821 12.9667 175.492 13.7058C227.335 16.9852 278.968 22.3851 330.337 29.6507C332.697 29.988 334.089 27.4226 331.345 26.8414C320.086 24.4661 308.772 22.2811 297.425 20.2718C297.71 20.2969 297.995 20.322 298.283 20.3472C305.025 20.9607 311.76 21.6173 318.497 22.299C321.936 22.647 325.377 22.9735 328.818 23.3036C330.298 23.4436 331.78 23.5907 333.259 23.7342C333.384 23.8347 333.542 23.9064 333.718 23.9172C334.944 23.9925 336.164 24.0679 337.385 24.1396C338.47 24.2042 337.921 23.0489 337.139 22.9484Z" />
                    </g>
                  </svg>

                  <span className="relative text-sky-700">always trust</span>
                </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                I've been a software developer for over 13 years, and while my
                stack has shifted over the years, I kept coming back to the same
                technologies. The following is the stack that I've developed &
                honed over the years as a software developer.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-12 sm:gap-3">
                {stack.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-4 py-6 overflow-hidden rounded-lg bg-slate-50 ring-1 ring-slate-900/5 sm:px-6"
                  >
                    <div className="flex gap-4 sm:gap-6">
                      <div className="flex items-center justify-center bg-white rounded-lg shadow-sm h-9 w-9 shrink-0 shadow-sky-100/75 ring-1 ring-slate-100/95 sm:h-11 sm:w-11">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          className="h-auto w-5 shrink-0 sm:w-[22px]"
                          sizes="(min-width: 640px) 22px, 1.25rem"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-base font-semibold font-display text-slate-900 sm:text-lg">
                          {tech.name}
                        </p>
                        <p className="mt-1 truncate text-md text-slate-600 sm:text-base">
                          {tech.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-xl pb-24 mx-auto lg:order-1 lg:mx-0 lg:max-w-none">
            <div className="relative w-full max-w-lg mx-auto lg:mr-auto lg:ml-0">
              <div className="aspect-w-5 aspect-h-7">
                <Image
                  src={image}
                  alt=""
                  className="object-cover object-left w-full h-full rounded-2xl"
                  sizes="(min-width: 640px) 32rem, calc(100vw - 2.5rem)"
                />
              </div>
              <div className="absolute max-w-xs p-8 -bottom-16 right-6 rounded-2xl bg-sky-700/95 backdrop-blur-sm xl:right-0 xl:bottom-10 xl:translate-x-1/4">
                <p className="text-2xl font-medium font-display text-sky-50">
                  <span className="text-[28px] font-bold text-white">55+</span>{' '}
                  Clients have loved my work
                </p>
                <div className="mt-6 flex -space-x-1.5 overflow-hidden">
                  {clientAvatars.map((avatar, index) => (
                    <Image
                      key={`avatar-${index}`}
                      className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-700/95"
                      src={avatar}
                      alt=""
                      sizes="2rem"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
