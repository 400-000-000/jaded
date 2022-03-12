import type { NextPage } from 'next'

import { Layout } from '~/components'

const ContactPage: NextPage = () => {
  return (
    <Layout className='px-8 py-16 pl-43.75 flex flex-col justify-center items-center'>
      <div className='w-prose max-w-full border border-solid border-white'>
        contact
      </div>
    </Layout>
  )
}

export default ContactPage
