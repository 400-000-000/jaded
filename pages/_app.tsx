import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { type AppProps } from 'next/app'
import 'windi.css'

import '~/styles/index.css'

function App({ Component, pageProps, router }: AppProps) {
  const url = `https://jaded.site${router.route}`

  return (
    <>
      <DefaultSeo titleTemplate='%s - Jaded' title='Jaded' canonical={url} />
      <AnimatePresence>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1, type: 'ease-out' }}
          href='https://400000000.co'
          className={classNames(
            'fixed z-1 left-8 bottom-0 w-20 aspect-square animate-bounce'
            // pathname === '/' ? 'bottom-0' : '-bottom-1em'
          )}
        >
          <Icon400Million className='block w-full h-full transform scale-120 transition-transform hover:(scale-125 -translate-y-1/25)' />
          <span className='hidden'>400 Million</span>
        </motion.a>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </>
  )
}

export default App
