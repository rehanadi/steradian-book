export const getErrorMessage = (err: any): string => {
  console.error(err)
  return err instanceof Error ? err.message : 'Something went wrong!'
}
