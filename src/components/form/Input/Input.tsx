import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Path, UseFormRegister, FieldValues } from 'react-hook-form'

type InputProps<T extends FieldValues> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: Path<T>
  register: UseFormRegister<T>
  required: boolean
  withoutFormGroup?: boolean
}

export function Input<T extends FieldValues>({
  label,
  register,
  required,
  withoutFormGroup,
  ...restProps
}: InputProps<T>) {
  if (withoutFormGroup) {
    return (
      <input className='form-control checkout' {...restProps} {...register(label, { required })} />
    )
  }

  return (
    <div className='form-group'>
      <input className='form-control checkout' {...restProps} {...register(label, { required })} />
    </div>
  )
}
