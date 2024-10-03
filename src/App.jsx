import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/productsContainer/Products";
import ProductInputForm from "./components/productsContainer/ProductInputForm";
import Cart from "./components/cart/Cart";
import { Provider } from "react-redux";
import store from "./redux/store"

export default function App() {
  const [isCartView, setIsCartView] = useState(false);

  function handleNavClick(view) {
    if (view === "home") {
      setIsCartView(false);
    } else if (view === "cart") {
      setIsCartView(true);
    }
  }

  // add products
  function handleProducts(products) {
    console.log(products);
  }

  return (
    <Provider store={store} >
      <Navbar onNavClick={handleNavClick} />
      <main className="py-16">
        <div className="productWrapper">
          {isCartView ? <Cart /> : <Products />}
          {!isCartView && <ProductInputForm onProducts={handleProducts} />}
        </div>
      </main>
    </Provider>
  );
}
