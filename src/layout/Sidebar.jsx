import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <ul>

        <li>
          <Link to="/products">All Products</Link>
        </li>

        <li>
          <Link to="/categories">Categories</Link>
        </li>

        <li>
          <Link to="/offers">Offers</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;