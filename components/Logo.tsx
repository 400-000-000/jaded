import classNames, { type Argument } from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Logo = ({
  active = true,
  children,
  className,
  layoutId,
}: {
  active?: boolean
  children: React.ReactNode
  className?: Argument
  layoutId?: string
}) => {
  return (
    <>
      <motion.div
        layoutId={layoutId}
        className={classNames('relative', className)}
      >
        <motion.div className='absolute inset-x-center top-0 leading-[0.75] px-1 all:leading-none'>
          {children}
          {!!active && (
            <>
              <div className='absolute -z-1 inset-center w-3/1 h-auto'>
                <Link href='/'>
                  <motion.div layoutId='logo'>
                    <a>
                      <IconJaded
                        className='w-full h-full animate-spin'
                        style={{ animationDuration: '60s' }}
                      />
                    </a>
                  </motion.div>
                </Link>
              </div>
              <motion.div
                aria-hidden
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                layoutId='circle'
                className='absolute -z-10 inset-center w-12/10 aspect-square'
              >
                <div className='inset-center w-full h-full rounded-full border-4 border-solid border-white group-hover:opacity-0 transition-all duration-500' />
              </motion.div>
            </>
          )}
        </motion.div>
      </motion.div>
    </>
  )
}
