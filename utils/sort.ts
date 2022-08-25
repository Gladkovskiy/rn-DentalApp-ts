//тип объекта в массиве по которому провести сортировку
export const byField = <T>(field: keyof T) => {
  return (a: T, b: T) => (a[field] > b[field] ? 1 : -1)
}
