export type SetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => void

export type SetFieldTouched = (
  field: string,
  isTouched?: boolean | undefined,
  shouldValidate?: boolean | undefined
) => void
