import { hyphenate } from 'hyphen/en'
import type { NextPage } from 'next'
import Markdown from 'react-markdown'
import { useAsync } from 'react-use'

import { Layout } from '~/components'
import content from '~/content/about.md'

const AboutPage: NextPage = () => {
  const { value } = useAsync(() => hyphenate(content))

  return (
    <Layout className='pt-75.5'>
      {!!value && (
        <div className='markdown'>
          <Markdown>{value}</Markdown>
        </div>
      )}
    </Layout>
  )
}

export default AboutPage
