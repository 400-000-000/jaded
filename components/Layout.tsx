import classNames, { type Argument } from 'classnames'
import { type Variants, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from '~/components'

const variants = {
  off: { opacity: 0, scale: 0.9, x: 0, y: 10 },
  on: { opacity: 1, scale: 1, x: 0, y: 0 },
}

export const Layout = ({
  children,
  className,
  title,
  description,
}: {
  children?: React.ReactNode
  className?: Argument
  title?: string
  description?: string
  variants?: Variants
}) => {
  const { pathname } = useRouter()

  return (
    <div>
      <NextSeo {...{ description, title }} openGraph={{ description, title }} />
      {pathname === '/' && (
        <div className='fixed inset-center w-full max-w-1/2 max-h-1/2 aspect-square'>
          <motion.div layoutId='logo' className='w-full h-full'>
            <IconJaded
              className='w-full h-full animate-spin'
              style={{ animationDuration: '60s' }}
            />
          </motion.div>
        </div>
      )}
      <header className='uppercase leading-none text-2xl children:(!fixed z-1000 transition-all duration-500 children:w-max)'>
        <Logo
          className={classNames(
            'group inset-x-center cursor-pointer hover:scale-105',
            pathname === '/'
              ? '-top-0.1875em !duration-300 hover:translate-y-0.0675em'
              : pathname.startsWith('/about')
              ? 'top-0.8125em'
              : '-top-4.1875em'
          )}
          active={pathname.startsWith('/about')}
        >
          <Link href={pathname === '/about' ? '/' : '/about'}>
            <a
              className={classNames(
                'inline-block transform translate-y-0.1875em transition-transform duration-500 hover:underline',
                {
                  '!hover:(scale-100 no-underline)':
                    pathname.startsWith('/about') && pathname !== '/about',
                  'group-hover:(scale-90 line-through)':
                    pathname.startsWith('/about'),
                }
              )}
            >
              Tired but here
            </a>
          </Link>
        </Logo>
        <Logo
          className={classNames(
            'group inset-y-center cursor-pointer hover:scale-105',
            pathname === '/'
              ? 'right-0.3125em !duration-300 hover:-translate-x-0.0675em'
              : pathname.startsWith('/forum')
              ? 'right-0.8125em'
              : '-right-4.1875em'
          )}
          active={pathname.startsWith('/forum')}
        >
          <Link href={pathname === '/forum' ? '/' : '/forum'}>
            <a
              className={classNames(
                'text-center inline-block transform rotate-90 -translate-x-0.1875em transition-transform duration-500 hover:underline',
                {
                  '!hover:(scale-100 no-underline)':
                    pathname.startsWith('/forum') && pathname !== '/forum',
                  'group-hover:(scale-90 line-through)':
                    pathname.startsWith('/forum'),
                }
              )}
            >
              Forum
            </a>
          </Link>
        </Logo>
        <Logo
          className={classNames(
            'group inset-x-center cursor-pointer hover:scale-105',
            pathname === '/'
              ? 'bottom-0.9375em !duration-300 hover:-translate-y-0.0675em'
              : pathname.startsWith('/records')
              ? 'bottom-1.9375em'
              : '-bottom-3.0625em'
          )}
          active={pathname.startsWith('/records')}
        >
          <Link href={pathname === '/records' ? '/' : '/records'}>
            <a
              className={classNames(
                'inline-block transform translate-y-0.1875em transition-transform duration-500 hover:underline',
                {
                  '!hover:(scale-100 no-underline)':
                    pathname.startsWith('/records') && pathname !== '/records',
                  'group-hover:(scale-90 line-through)':
                    pathname.startsWith('/records'),
                  'hover:translate-y-0': pathname === '/',
                }
              )}
            >
              Records
            </a>
          </Link>
        </Logo>
        <Logo
          className={classNames(
            'group inset-y-center cursor-pointer hover:scale-105',
            pathname === '/'
              ? 'left-0.5em  !duration-300 hover:translate-x-0.0675em'
              : pathname.startsWith('/contact')
              ? 'left-1em'
              : '-left-4em'
          )}
          active={pathname.startsWith('/contact')}
        >
          <Link href={pathname === '/contact' ? '/' : '/contact'}>
            <a
              className={classNames(
                'inline-block transform translate-x-0.1875em -rotate-90 transition-transform duration-500 hover:underline',
                {
                  '!hover:(scale-100 no-underline)':
                    pathname.startsWith('/contact') && pathname !== '/contact',
                  'group-hover:(scale-90 line-through)':
                    pathname.startsWith('/contact'),
                }
              )}
            >
              Contact
            </a>
          </Link>
        </Logo>
      </header>
      <motion.main
        variants={variants}
        className={classNames(
          'relative z-1 px-8 py-16 flex flex-col justify-center items-center children:(w-prose max-w-full)',
          className
        )}
        initial='off'
        animate='on'
        exit='off'
        transition={{ type: 'anticipate' }}
      >
        {children}
      </motion.main>
    </div>
  )
}
