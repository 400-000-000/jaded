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
    <motion.div
      layoutId={layoutId}
      className={classNames('relative', className)}
    >
      <motion.div className='absolute inset-x-center top-0'>
        {children}
        {!!active && (
          <div className='absolute -z-1 inset-center w-3/1 h-auto'>
            <motion.div layoutId='logo'>
              <Link href='/'>
                <IconJaded
                  className='w-full h-full animate-spin'
                  style={{ animationDuration: '60s' }}
                />
              </Link>
            </motion.div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
