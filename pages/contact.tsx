import { useForm } from '@formspree/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import type { NextPage } from 'next'
import Markdown from 'react-markdown'
import { useLocalStorage } from 'react-use'
import type { UnionToIntersection } from 'type-fest'
import * as Yup from 'yup'

import { Layout } from '~/components'
import content from '~/content/contact.md'

interface Submission {
  createdAt?: Date
  email: string
  name: string
  message: string
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  message: Yup.string().min(30).max(1000).required(),
  name: Yup.string().min(1).max(50).required(),
})

const ContactPage: NextPage = () => {
  const [{ createdAt, ...submission }, setSubmission] =
    useLocalStorage<Submission>(
      'contact-date',
      {
        email: '',
        message: '',
        name: '',
      },
      {
        deserializer: x => {
          const { createdAt, ...submission } = JSON.parse(x)
          return createdAt
            ? { createdAt: new Date(createdAt), ...submission }
            : submission
        },
        raw: false,
        serializer: x => JSON.stringify(x),
      }
    )

  const [, handleSubmit] = useForm('contactForm')

  return (
    <Layout className='px-8 py-16 pl-43.75 flex flex-col justify-center items-center space-y-8 children:(w-prose max-w-full)'>
      {!!content && (
        <section className='markdown'>
          <Markdown>{content}</Markdown>
        </section>
      )}
      <section>
        <h2 className='h2'>Introduce yourself</h2>
        <Formik
          initialValues={submission}
          validationSchema={validationSchema}
          onSubmit={async (values, { setErrors }) => {
            const { body } = await handleSubmit(values)
            const { errors } = body as Partial<UnionToIntersection<typeof body>>
            if (errors?.length)
              setErrors(
                errors
                  .filter((x): x is Required<typeof x> => !!x.field)
                  .reduce(
                    (acc, cur) => ({
                      ...acc,
                      [cur.field]: cur.message,
                    }),
                    {} as Parameters<typeof setErrors>[0]
                  )
              )
            else
              setSubmission({
                createdAt: new Date(),
                ...values,
              })
          }}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col space-y-4 children:max-w-[49ch] markdown'>
              <Field
                name='name'
                autocomplete='name'
                placeholder='Name'
                disabled={createdAt}
              />
              <ErrorMessage
                component='span'
                className='text-xs text-rose-400 !mt-1'
                name='name'
              />
              <Field
                name='email'
                autocomplete='email'
                placeholder='Email address'
                disabled={createdAt}
              />
              <ErrorMessage
                component='span'
                className='text-xs text-rose-400 !mt-1'
                name='email'
              />
              <Field
                as='textarea'
                name='message'
                autocomplete='off'
                placeholder='Message'
                disabled={createdAt}
              />
              <ErrorMessage
                component='span'
                className='text-xs text-rose-400 !mt-1'
                name='message'
              />
              {createdAt ? (
                <p className='text-xs opacity-50'>We got your submission</p>
              ) : (
                <input
                  type='submit'
                  disabled={!!createdAt || isSubmitting}
                  value={createdAt ? 'We got your submission' : 'Submit'}
                />
              )}
            </Form>
          )}
        </Formik>
      </section>
    </Layout>
  )
}

export default ContactPage
