import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/carts/actionCreators";



export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function handleAddCart() {
    dispatch(addCart(products));
  }

  return (
    <Fragment>
      <div className="productContainer" id="lws-productContainer">
        {products?.map((product) => (
          <div key={product?.id} className="lws-productCard">
            <img
              className="lws-productImage"
              src={product?.image}
              alt={product?.name}
            />
            <div className="p-4 space-y-2">
              <h4 className="lws-productName">{product?.name}</h4>
              <p className="lws-productCategory">{product?.category}</p>
              <div className="flex items-center justify-between pb-2">
                <p className="productPrice">
                  BDT <span className="lws-price">{product?.price}</span>
                </p>
                <p className="productQuantity">
                  QTY <span className="lws-quantity">{product?.quantity}</span>
                </p>
              </div>
              <button onClick={handleAddCart} className="lws-btnAddToCart">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
