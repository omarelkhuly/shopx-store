// src/layout/MegaMenu.jsx
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCart } from "../core/hooks/useCart"
import { useWishlist } from "../core/hooks/useWishlist"

function MegaMenu() {
  const { cartItems } = useCart()
  const { wishlistItems, wishlistCount } = useWishlist()

  return (
    <ul className="mega-menu">

      <li>
        <Link to="/deals">
          Today's Deals
        </Link>
      </li>

      <li>
        <Link to="/electronics">
          Electronics
        </Link>
      </li>

      <li>
        <Link to="/mobiles">
          Mobile Phones
        </Link>
      </li>

      <li className="has-dropdown">
        <span>
          Categories <FontAwesomeIcon icon="chevron-down" />
        </span>

        <div className="dropdown">
          <Link to="/category/dolls-and-toys">Dolls and Toys</Link>
          <Link to="/category/fashion">Fashion</Link>
          <Link to="/category/housewares">Housewares</Link>
          <Link to="/category/sports">Sports</Link>
          <Link to="/category/appliances">Appliances</Link>
          <Link to="/category/game-zone">Game Zone</Link>
          <Link to="/category/grocery">Grocery</Link>
          <Link to="/category/beverages">Beverages</Link>
          <Link to="/category/pet-supplies">Pet Supplies</Link>
        </div>
      </li>

      {/* Wishlist Badge ❤️ */}
      <li>
        <Link to="/wishlist" className="menu-badge">
          Wishlist
          {/* {wishlistItems.length > 0 && (
            <span className="badge">{wishlistItems.length}</span>
          )} */}
        </Link>
      </li>

      {/* Cart Badge 🛒 */}
      <li>
        <Link to="/cart" className="menu-badge">
          Cart
          {/* {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )} */}
        </Link>
      </li>

      <li>
        <Link to="/offers">
          Offers
        </Link>
      </li>

    </ul>
  )
}

export default MegaMenu