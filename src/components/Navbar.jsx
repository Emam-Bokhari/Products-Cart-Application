import { Fragment } from "react";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";

export default function Navbar({ onNavClick }) {
  const carts = useSelector((state) => state.carts);
  
  console.log(carts)

  return (
    <Fragment>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a
            onClick={(event) => {
              event.preventDefault();
              onNavClick("home");
            }}
            href="index.html"
          >
            <img src={Logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a
              onClick={(event) => {
                event.preventDefault();
                onNavClick("home");
              }}
              href="#home"
              className="navHome"
              id="lws-home"
            >
              Home
            </a>
            <a
              onClick={(event) => {
                event.preventDefault();
                onNavClick("cart");
              }}
              href="cart.html"
              className="navCart"
              id="lws-cart"
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              {/* Display the total items in the cart */}
              <span id="lws-totalCart">0</span>
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
