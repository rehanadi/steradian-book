export const errorMessage = (err: any): String => {
  console.error(err)
  return err instanceof Error ? err.message : 'Something went wrong!'
}
