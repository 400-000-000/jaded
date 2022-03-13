import type { NextPage } from 'next'
import Markdown from 'react-markdown'

import { Layout } from '~/components'
import content from '~/content/forum.md'

const ForumPage: NextPage = () => {
  return (
    <Layout className='px-8 py-16 pr-33.125 flex flex-col justify-center items-center children:(w-prose max-w-full)'>
      <div className='markdown'>
        <Markdown>{content}</Markdown>
      </div>
    </Layout>
  )
}

export default ForumPage
