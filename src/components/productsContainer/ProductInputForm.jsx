import { Fragment, useState } from "react";

export default function ProductInputForm({ onProducts }) {
  const [products, setProducts] = useState({
    id: crypto.randomUUID(),
    name: "",
    category: "",
    image: "",
    price: "",
    quantity: "",
  });

  function handdleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    setProducts({
      ...products,
      [name]: value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    onProducts(products);
  }

  return (
    <Fragment>
      <div>
        {/* Product Input Form  */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
            {/* product name  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input
                className="addProductInput"
                id="lws-inputName"
                type="text"
                name="name"
                value={products.name}
                onChange={handdleChange}
                required
              />
            </div>
            {/* product category  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input
                className="addProductInput"
                id="lws-inputCategory"
                type="text"
                name="category"
                value={products.category}
                onChange={handdleChange}
                required
              />
            </div>
            {/* product image url  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input
                className="addProductInput"
                id="lws-inputImage"
                type="text"
                name="image"
                value={products.image}
                onChange={handdleChange}
                required
              />
            </div>
            {/* price & quantity container  */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* price  */}
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws-inputPrice"
                  name="price"
                  value={products.price}
                  onChange={handdleChange}
                  required
                />
              </div>
              {/* quantity  */}
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws-inputQuantity"
                  name="quantity"
                  value={products.quantity}
                  onChange={handdleChange}
                  required
                />
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={handleClick}
              type="submit"
              id="lws-inputSubmit"
              className="submit"
            >
              Add Product
            </button>
          </form>
        </div>
        {/* Product Input Form Ends  */}
      </div>
    </Fragment>
  );
}
