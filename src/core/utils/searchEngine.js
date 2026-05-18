export function searchProducts(products, query) {

  if (!query) return []

  const q = query.toLowerCase()

  return products.filter((product) => {

    return (
      product.title.toLowerCase().includes(q) ||
      product.description?.toLowerCase().includes(q) ||
      product.category?.toLowerCase().includes(q)
    )

  })

}