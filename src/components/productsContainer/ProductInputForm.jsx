import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";


export default function ProductInputForm() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    quantity: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // convert to number price, and quantity
    if (name === "price" || name === "quantity") {
      value = parseFloat(value);
    }

    setProducts({
      ...products,
      [name]: value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    dispatch({
      type: ,
      payload: products,
    });
    // clear form input
    setProducts({
      name: "",
      category: "",
      image: "",
      price: "",
      quantity: "",
    });
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
