import type { NextPage } from 'next'
import Markdown from 'react-markdown'

import { Layout } from '~/components'
import content from '~/content/forum.md'

const ForumPage: NextPage = () => {
  return (
    <Layout className='pr-33.125'>
      <div className='markdown'>
        <Markdown>{content}</Markdown>
      </div>
    </Layout>
  )
}

export default ForumPage
