import { searchProducts } from "../../../core/utils/searchEngine"

function SearchSuggestions({ query, products }) {

  const results = searchProducts(products, query)

  if (!query) return null

  return (
    <div className="search-suggestions">

      {results.length === 0 && (
        <p>No results found</p>
      )}

      {results.slice(0, 5).map((product) => (
        <div key={product.id} className="suggestion-item">
          {product.title}
        </div>
      ))}

    </div>
  )
}

export default SearchSuggestions