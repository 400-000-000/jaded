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
              ? 'top-0 !duration-300 hover:translate-y-0.0675em'
              : pathname.startsWith('/about')
              ? 'top-1em'
              : '-top-4em'
          )}
          active={pathname.startsWith('/about')}
        >
          <Link href={pathname === '/about' ? '/' : '/about'}>
            <a
              className={classNames(
                'inline-block transform transition-transform duration-500',
                {
                  '!hover:(translate-y-0 scale-100 no-underline)':
                    pathname.startsWith('/about') && pathname !== '/about',
                  'group-hover:(-translate-y-0.0675em scale-90 line-through)':
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
              ? 'right-0 !duration-300 hover:-translate-x-0.0675em'
              : pathname.startsWith('/forum')
              ? 'right-1em'
              : '-right-4em'
          )}
          active={pathname.startsWith('/forum')}
        >
          <Link href={pathname === '/forum' ? '/' : '/forum'}>
            <a
              className={classNames(
                'inline-block transform rotate-90 -translate-x-0.5em transition-transform duration-500',
                {
                  '!hover:(-translate-x-0.5em scale-100 no-underline)':
                    pathname.startsWith('/forum') && pathname !== '/forum',
                  'group-hover:(-translate-x-0.4325em scale-90 line-through)':
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
              ? 'bottom-1em !duration-300 hover:-translate-y-0.0675em'
              : pathname.startsWith('/records')
              ? 'bottom-2em'
              : '-bottom-3em'
          )}
          active={pathname.startsWith('/records')}
        >
          <Link href={pathname === '/records' ? '/' : '/records'}>
            <a
              className={classNames(
                'inline-block transform transition-transform duration-500',
                {
                  '!hover:(translate-y-0 scale-100 no-underline)':
                    pathname.startsWith('/records') && pathname !== '/records',
                  'group-hover:(translate-y-0.0675em scale-90 line-through)':
                    pathname.startsWith('/records'),
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
              ? 'left-0 !duration-300 hover:translate-x-0.0675em'
              : pathname.startsWith('/contact')
              ? 'left-1em'
              : '-left-4em'
          )}
          active={pathname.startsWith('/contact')}
        >
          <Link href={pathname === '/contact' ? '/' : '/contact'}>
            <a
              className={classNames(
                'inline-block transform -rotate-90 translate-x-0.5em transition-transform duration-500',
                {
                  '!hover:(translate-x-0.5em scale-100 no-underline)':
                    pathname.startsWith('/contact') && pathname !== '/contact',
                  'group-hover:(translate-x-0.4325em scale-90 line-through)':
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
        className={classNames('relative z-1', className)}
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
