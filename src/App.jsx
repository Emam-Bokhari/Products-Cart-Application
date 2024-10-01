import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/productsContainer/Products";
import ProductInputForm from "./components/productsContainer/ProductInputForm";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="py-16">
        <div className="productWrapper">
          <Products />
          <ProductInputForm />
        </div>
      </main>
    </Fragment>
  );
}
