import { ICustomerInfoForm } from 'pages/Checkout/types/ICustomerInfoForm'
import { Control, useWatch } from 'react-hook-form'

function ContinueButton({
  onClick,
  control,
}: {
  onClick: () => void
  control: Control<ICustomerInfoForm> | undefined
}) {
  const fields = useWatch({
    name: [
      'email',
      'country',
      'firstName',
      'lastName',
      'address',
      'apartment',
      'city',
      'state',
      'zipCode',
      'phone',
    ],
    control,
  })

  const isDisabled = fields.some((field) => !field?.length)

  return (
    <div className='btn-row w-100 d-flex justify-content-end'>
      <button className='checkout-btn' onClick={onClick} disabled={isDisabled}>
        Continue to payment
      </button>
    </div>
  )
}

export default ContinueButton
