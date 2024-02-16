import React from 'react'
import { render, screen } from '@testing-library/react'

import { useForm } from 'react-hook-form'
import { ICustomerInfoForm } from 'pages/Checkout/types/ICustomerInfoForm'
import CustomerContactsSection from './CustomerContactsSection'
import userEvent from '@testing-library/user-event'

const RenderCustomerContactsSection = () => {
  const customerInfoForm = useForm<ICustomerInfoForm>({
    mode: 'onBlur',
    defaultValues: {
      address: 'address',
      apartment: 'apartment',
      city: 'city',
      country: 'country',
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
      phone: '123',
      state: 'state',
    },
  })

  return (
    <CustomerContactsSection customerInfoForm={customerInfoForm} onContinuePaymentClick={jest.fn} />
  )
}

test('Continue to payment disable logic works correctly', async () => {
  render(<RenderCustomerContactsSection />)

  const continuePaymentBtn = screen.getByText(/Continue to payment/i)
  expect(continuePaymentBtn).toBeInTheDocument()
  expect(continuePaymentBtn).toHaveAttribute('disabled')

  const zipCodeInputField = screen.queryByPlaceholderText(/Zip code/i)
  expect(zipCodeInputField).toBeInTheDocument()
  await userEvent.type(zipCodeInputField as HTMLElement, 'Zip code')
  expect(zipCodeInputField).toHaveValue('Zip code')

  expect(continuePaymentBtn).not.toHaveAttribute('disabled')
})
