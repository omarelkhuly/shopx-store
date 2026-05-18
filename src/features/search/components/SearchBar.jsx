import { useState } from "react"

import SearchSuggestions from "./SearchSuggestions"

function SearchBar({ products }) {

  const [query, setQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setShowSuggestions(true)
        }}
      />

      {showSuggestions && (
        <SearchSuggestions
          query={query}
          products={products}
        />
      )}

    </div>
  )
}

export default SearchBar