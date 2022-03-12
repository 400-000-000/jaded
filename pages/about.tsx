import type { NextPage } from 'next'
import Markdown from 'react-markdown'

import { Layout } from '~/components'
import content from '~/content/about.md'

const AboutPage: NextPage = () => {
  return (
    <Layout className='px-8 py-16 pt-75.5 flex flex-col justify-center items-center'>
      <div className='w-prose max-w-full'>
        <Markdown>{content}</Markdown>
      </div>
    </Layout>
  )
}

export default AboutPage
