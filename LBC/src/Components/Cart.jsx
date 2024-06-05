import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REM, DEL } from "../Functions/Actions";
import emailjs from "@emailjs/browser";

const CartPage = () => {
  const cart = useSelector((c) => c.AllDATA);
  const dispatch = useDispatch();

  let amount = cart.length
    ? cart.map((item) => item.Price).reduce((prev, next) => prev + next)
    : 0;
  let discount = amount / 10;
  let total = amount - discount;

  const [productNames, setProductNames] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const form = useRef();

  useEffect(() => {
    if (cart.length) {
      const names = cart.map((item) => item.name).join(", ");
      setProductNames(names);
    }
  }, [cart]);

  const sendorder = (e) => {
    e.preventDefault();

    const email = form.current.email_Id.value;
    const mobileNo = form.current.mobile_no.value;
    const address = form.current.adres.value;

    if (!email || !mobileNo || !address) {
      alert("Please fill in all the fields");
      return;
    }

    emailjs
      .sendForm(
        "service_lcqv959",
        "template_cxk6ryf",
        form.current,
        "S8K3--flBHMyhLpC9"
      )
      .then(
        () => {
          setOrderConfirmed(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="cartpage">
      <h1>Cart Page</h1>
      <div className="cartpage_container">
        {!orderConfirmed && (
          <>
            <div className="cart">
              {cart.map((item) => (
                <div key={item.id} className="cart_item">
                  <img src={item.img} alt="product" className="cart_image" />
                  <p>Brand: {item.name}</p>
                  <p>Color: {item.color}</p>
                  <p>Price:₹ {item.Price}</p>
                  <button
                    onClick={() => dispatch(REM(item.id))}
                    className="btn remove_btn"
                  >
                    Remove from Cart
                  </button>
                </div>
              ))}
            </div>

            <form ref={form} onSubmit={sendorder}>
              <div className="data">
                <p>
                  Amount:₹ <span>{amount}</span>
                </p>
                <p>
                  Discount:₹ <span>{discount}</span>
                </p>
                <p>
                  Total:₹ <span>{total}</span>
                </p>
                <input
                  className="mt-1 cartinp"
                  type="email"
                  placeholder="Email"
                  name="email_Id"
                />
                <br />
                <input
                  className="mt-1 cartinp"
                  type="number"
                  name="mobile_no"
                  placeholder="Enter Mobile no"
                />
                <br />
                <input
                  className="mt-1 cartinp"
                  type="text"
                  name="adres"
                  placeholder="Enter Delivery Address"
                />
                <br />
                <input
                  className="mt-1 cartinp"
                  type="number"
                  name="amount"
                  value={total}
                  readOnly
                />
                <br />
                <input
                  className="mt-1 cartinp my-3"
                  type="text"
                  name="product_item"
                  value={productNames}
                  readOnly
                />
                <br />
                <button type="submit" value="Send" className="sign_up btn ms-1">
                  Confirm Order
                </button>
              </div>
            </form>
            <div className="asd">
              <button
                className="btn empty_btn mt-2 ms-1"
                onClick={() => dispatch(DEL())}
              >
                Empty Cart
              </button>
            </div>
          </>
        )}

        {orderConfirmed && (
          <img
            src="https://cdn.templates.unlayer.com/assets/1680499520525-131018-order-confirmed.gif"
            className="rounded mx-auto d-block"
            alt="Order Confirmed"
          />
        )}
      </div>
    </div>
  );
};

export default CartPage;
