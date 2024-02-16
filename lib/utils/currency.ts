export const formatPrice = (price: number): string => {
  return price.toLocaleString('in-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0, 
    minimumFractionDigits: 0
  })
}
