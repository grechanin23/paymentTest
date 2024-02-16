import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Path, FieldValues, useFormState, UseFormReturn } from 'react-hook-form'
import { WithFormGroupWrapper } from '../WithFormGroupWrapper/WithFormGroupWrapper'

type InputProps<T extends FieldValues> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: Path<T>
  RHForm: UseFormReturn<T>
  withoutFormGroup?: boolean
}

export function Input<T extends FieldValues>({
  label,
  withoutFormGroup,
  RHForm,
  ...restProps
}: InputProps<T>) {
  const { control, register } = RHForm
  const { errors } = useFormState({
    control,
    name: label,
  })
  const errorMessage = errors?.[label]?.message
  return (
    <WithFormGroupWrapper withoutFormGroup={withoutFormGroup}>
      <div className='form-group'>
        <input
          className='form-control checkout'
          {...restProps}
          {...register(label, {
            required: restProps.required && 'required',
            ...(restProps.type === 'email' && {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            }),
          })}
        />
        {errorMessage && typeof errorMessage === 'string' && <span>{errorMessage}</span>}
      </div>
    </WithFormGroupWrapper>
  )
}
