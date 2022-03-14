import type { NextPage } from 'next'
import Markdown from 'react-markdown'

import { Layout } from '~/components'
import content from '~/content/records.md'

const RecordsPage: NextPage = () => {
  return (
    <Layout className='pb-45.125'>
      <div className='markdown'>
        <Markdown>{content}</Markdown>
      </div>
    </Layout>
  )
}

export default RecordsPage
