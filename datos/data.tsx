import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { gql, useMutation } from '@apollo/client'
import H1 from '@linktr.ee/component-library/H1'

import Messages from '@scripts/admin/component/Message'

import { validateName, validateEmail } from './validations'
import ErrorBoundary from '@shared/components/helpers/ErrorBoundary'
import EmailVerificationMessage from './EmailVerificationMessage'

interface UpdateUserInput {
  input: {
    name?: string
    email?: string
  }
}

interface UpdateUserResult {
  success?: boolean
}

const UPDATE_USER = gql`
  mutation ($input: UpdateUserInput!) {
    updateUser(input: $input) {
      success
    }
  }
`

interface Props {
  userId: string
  userRealName: string
  userEmail: string
  userEmailVerified: boolean
  userSignupMethod: string
  loading: boolean
}

const MyAccountInformationForm: React.FC<Props> = ({
  userRealName,
  userEmail,
  userEmailVerified,
  userSignupMethod,
  loading
}) => {
  const [isFormDirty, setFormDirty] = useState(false)
  const [focused, setFocused] = useState('')
  const [name, setName] = useState(userRealName ?? '')
  const [email, setEmail] = useState(userEmail)
  const [errors, setError] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    setName(userRealName ?? '')
    setEmail(userEmail)
  }, [userRealName, userEmail])

  const [updateUserInformation] = useMutation<UpdateUserResult, UpdateUserInput>(UPDATE_USER, {
    onCompleted: result => {
      console.log('user update result: ', result)
      Messages.get('useredit_success').flash(null, 1500)
      location.reload()
    },
    onError: ({ message }) => {
      if (message === 'Internal server error') {
        Messages.get('useredit_error').flash(null, 3000)
        location.reload()
        return
      }
      // otherwise it is always email error
      setError({ name: '', email: message })
    }
  })

  const handleInputChange = (field, event) => {
    let { value } = event.target

    if (!isFormDirty) setFormDirty(true)

    switch (field) {
      case 'name':
        setName(value)

        if (validateName({ value })) {
          setError({
            name: validateName({ value }) || '',
            email: errors.email
          })
        } else {
          setError({
            name: '',
            email: errors.email
          })
        }

        break
      case 'email':
        setEmail(value)

        // TODO - couldn't do an array.includes here as the node target library is old
        if (value !== 'privaterelay.appleid.com' && value !== 'icloud.com' && validateEmail({ value })) {
          setError({
            name: errors.name,
            email: validateEmail({ value }) || ''
          })
        } else {
          setError({
            name: errors.name,
            email: ''
          })
        }

        break
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateUserInformation({ variables: { input: { name, email } } })
  }

  const saveButtonEnabled = isFormDirty && !(errors.name || errors.email)

  Messages.init(document.querySelectorAll('[data-message]'))

  // TODO - couldn't do an array.includes here as the node target library is old
  const disableEmail =
    userSignupMethod === 'apple' || userSignupMethod === 'facebook' || userSignupMethod === 'google-oauth2' || false

  const signupMethodDisplayNames = {
    SMS: 'SMS',
    apple: 'Apple',
    facebook: 'Facebook',
    'google-oauth2': 'Google'
  }

  return (
    <div>
      <form className="section section--legacy" onSubmit={handleSubmit}>
        <div className="contact">
          <H1 className="pb-4" element="h2">
            My information
          </H1>
          {loading && <div className="h-40 w-full bg-white rounded mb-4" />}
          {!loading && (
            <div className="p-[20px] bg-white rounded">
              <div className="billing-name">
                <label htmlFor="name" className={classNames('active-input', errors.name && 'error')}>
                  <input
                    type="text"
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    className={classNames(
                      'field',
                      (name ?? '').trim() !== '' ? '' : 'is-empty',
                      focused === 'name' ? 'is-focused' : ''
                    )}
                    value={name ?? ''}
                    onChange={e => handleInputChange('name', e)}
                    placeholder="Enter your name"
                  />
                  <span>
                    <span>Name</span>
                  </span>
                </label>
                {errors.name && (
                  <div data-active-input-error data-name-errors className="active">
                    {errors.name}
                  </div>
                )}
              </div>
              <div className="billing-email">
                <label htmlFor="email" className={classNames('active-input', errors.email && 'error')}>
                  <input
                    type="email"
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className={classNames(
                      'field',
                      email.trim() !== '' ? '' : 'is-empty',
                      focused === 'email' ? 'is-focused' : ''
                    )}
                    value={email}
                    onChange={e => handleInputChange('email', e)}
                    placeholder="Enter your email address"
                    disabled={disableEmail}
                  />
                  <span>
                    <span>Email</span>
                  </span>
                </label>
                {errors.email && (
                  <div data-active-input-error data-name-errors className="active">
                    {errors.email}
                  </div>
                )}
                <ErrorBoundary boundaryName="EmailVerificationMessage">
                  <EmailVerificationMessage email={userEmail} verified={Boolean(userEmailVerified)} />
                </ErrorBoundary>
                <div>
                  <p className="text-sm text-heather mt-[8px]">
                    {disableEmail &&
                      `Your email can't be changed as you signed up using your ${signupMethodDisplayNames[userSignupMethod]} account.`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-[16px]">
          <button
            type="submit"
            className={classNames('button purple large', { disabled: !saveButtonEnabled })}
            disabled={!saveButtonEnabled || loading}
          >
            Save details
          </button>
        </div>
      </form>
      <div
        className="message"
        data-message
        data-message-id="useredit_error"
        data-message-text="There was an error updating your information. Please try again or contact us."
        data-message-type="error"
      ></div>
      <div
        className="message"
        data-message
        data-message-id="useredit_success"
        data-message-text="Thanks! Your information has been updated."
        data-message-type="success"
      ></div>
    </div>
  )
}

export default MyAccountInformationForm
