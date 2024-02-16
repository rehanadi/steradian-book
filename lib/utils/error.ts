export const getErrorMessage = (err: any): String => {
  console.error(err)
  return err instanceof Error ? err.message : 'Something went wrong!'
}
