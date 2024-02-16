import React from 'react'
import { statesList } from '../../data/statesList'
import { UseFormReturn } from 'react-hook-form'
import { ICustomerInfoForm } from '../../types/ICustomerInfoForm'
import { Input } from 'components/form/Input/Input'
import ContinueButton from '../ContinueButton'

function CustomerContactsSection({
  customerInfoForm,
  onContinuePaymentClick,
}: {
  customerInfoForm: UseFormReturn<ICustomerInfoForm>
  onContinuePaymentClick: () => void
}) {
  const { register } = customerInfoForm
  return (
    <>
      <div className='left-top-row w-100 d-flex flex-wrap justify-content-between'>
        <div className='checkout-title flex-auto'>Contact</div>
        <div className='email-box w-100 d-block'>
          <Input
            label='email'
            register={register}
            required
            type='email'
            className='form-control checkout'
            placeholder='Email'
          />
          <div className='checkbox-row w-100 d-block'>
            <label className='control control-checkbox'>
              Email me with news and offers
              <input type='checkbox' {...register('isMail')} />
              <div className='control-indicator'></div>
            </label>
          </div>
        </div>
      </div>
      <div className='checkout-form-section w-100 d-block'>
        <div className='checkout-title flex-auto'>Shipping address</div>
        <div className='checkout-form w-100 d-block'>
          <div className='row gx-3'>
            <div className='col-12'>
              <div className='form-group'>
                <select id='country' className='form-select checkout' {...register('country')}>
                  <option
                    data-code='US'
                    data-pure-numeric-postal-code='false'
                    value='United States'
                  >
                    United States
                  </option>
                </select>
              </div>
            </div>
            <div className='col-md-6'>
              <Input
                label='firstName'
                register={register}
                required
                type='text'
                className='form-control checkout'
                placeholder='First name (optional)'
              />
            </div>
            <div className='col-md-6'>
              <Input
                label='lastName'
                register={register}
                required
                type='text'
                className='form-control checkout'
                placeholder='Last name'
              />
            </div>
            <div className='col-md-12'>
              <Input
                label='address'
                register={register}
                required
                type='text'
                className='form-control checkout'
                placeholder='Address'
              />
            </div>
            <div className='col-md-12'>
              <Input
                label='apartment'
                register={register}
                required
                type='text'
                className='form-control checkout'
                placeholder='Apartment, suite, etc. (optional)'
              />
            </div>
            <div className='col-md-4'>
              <Input
                label='city'
                register={register}
                required
                type='text'
                className='form-control checkout'
                placeholder='City'
              />
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <select id='state' className='form-select checkout' {...register('state')}>
                  <option>State</option>

                  {statesList.map((state) => (
                    <option
                      key={state.value}
                      data-alternate-values={`[${state.name}]`}
                      value={state.value}
                    >
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <Input
                label='zipCode'
                register={register}
                required
                type='text'
                className='form-control checkout'
                placeholder='Zip code'
              />
            </div>
            <div className='col-12'>
              <Input
                label='phone'
                register={register}
                required
                type='tel'
                className='form-control checkout'
                placeholder='Phone'
              />
            </div>
          </div>
          <ContinueButton onClick={onContinuePaymentClick} control={customerInfoForm.control} />
        </div>
      </div>
    </>
  )
}

export default CustomerContactsSection
