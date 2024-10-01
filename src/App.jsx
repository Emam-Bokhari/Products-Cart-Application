import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/productsContainer/Products";
import ProductInputForm from "./components/productsContainer/ProductInputForm";
import Cart from "./components/cart/Cart";

export default function App() {
  const [isCartView, setIsCartView] = useState(false);

  function handleNavClick(view) {
    if (view === "home") {
      setIsCartView(false);
    } else if (view === "cart") {
      setIsCartView(true);
    }
  }

  return (
    <Fragment>
      <Navbar onNavClick={handleNavClick} />
      <main className="py-16">
        <div className="productWrapper">
          {isCartView ? <Cart /> : <Products />}
          {!isCartView && <ProductInputForm />}
        </div>
      </main>
    </Fragment>
  );
}
