import { FormspreeProvider } from '@formspree/react'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { type AppProps } from 'next/app'
import 'windi.css'

import '~/styles/fonts-fungis.css'
import '~/styles/fonts-karrik.css'
import '~/styles/fonts-helvetica.css'
import '~/styles/fonts-miedinger*.css'
import '~/styles/main.css'
import '~/styles/inputs.css'
import '~/styles/markdown.css'

function App({ Component, pageProps, router }: AppProps) {
  const url = `https://jaded.site${router.route}`

  return (
    <>
      <FormspreeProvider
        project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID!}
      >
        <DefaultSeo titleTemplate='%s - Jaded' title='Jaded' canonical={url} />
        <AnimatePresence>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 1, type: 'ease-out' }}
            href='https://400000000.co'
            className={classNames(
              'fixed z-10000 right-4 bottom-0 w-16 aspect-square sm:(right-8 w-20) animate-bounce'
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
      </FormspreeProvider>
    </>
  )
}

export default App
