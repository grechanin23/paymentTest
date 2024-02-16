import { PropsWithChildren } from 'react'

export const WithFormGroupWrapper = ({
  withoutFormGroup,
  children,
}: PropsWithChildren<{ withoutFormGroup?: boolean }>) => {
  if (withoutFormGroup) {
    return <>{children}</>
  }
  return <div className='form-group'>{children}</div>
}
