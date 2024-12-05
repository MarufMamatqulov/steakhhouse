import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    url,
    currency,
    deliveryCharge,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  // State for region and order date
  const [region, setRegion] = useState('');
  const [orderDate, setOrderDate] = useState('');

  // Calculate Order Amount
  const orderAmount = getTotalCartAmount();

  // Region-based Discount and Tax Logic
  let discountRate = 0;
  let taxRate = 0;

  switch (region) {
    case 'Uzbekistan':
      discountRate = 0.03; // 3% Discount
      taxRate = 0.15; // 15% Tax
      break;
    case 'Kazakhstan':
      discountRate = 0.05; // 5% Discount
      taxRate = 0.20; // 20% Tax
      break;
    case 'Georgia':
      discountRate = 0.07; // 7% Discount
      taxRate = 0.12; // 12% Tax
      break;
    case 'Ukraine':
      discountRate = 0.10; // 10% Discount
      taxRate = 0.08; // 8% Tax
      break;
    case 'China':
      discountRate = 0.15; // 15% Discount
      taxRate = 0.18; // 18% Tax
      break;
    default:
      break;
  }

  // Calculate Discount and Tax
  const discount = orderAmount * discountRate;
  const tax = orderAmount * taxRate;
  const totalAmount = orderAmount - discount + tax; // Final Total

  // Handle form submission and navigate to PlaceOrder.jsx with data
  const handleSubmit = () => {
    if (!region || !orderDate) {
      toast.error('Please fill in both Order Date and Region!');
      return; // Prevent navigation if fields are not filled
    }

    const quantity = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0) - 2;


    navigate('/order', {
      state: {
        region,
        orderDate,
        discount,
        taxRate,
        tax,
        quantity, // Pass quantity here
      },
    });
  };

  return (
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                  <div key={index}>
                    <div className="cart-items-title cart-items-item">
                      <img src={url + "/images/" + item.image} alt={item.name} />
                      <p>{item.name}</p>
                      <p>{currency}{item.price}</p>
                      <div>{cartItems[item._id]}</div>
                      <p>{currency}{item.price * cartItems[item._id]}</p>
                      <p
                          className="cart-items-remove-icon"
                          onClick={() => removeFromCart(item._id)}
                      >
                        x
                      </p>
                    </div>
                    <hr />
                  </div>
              );
            }
            return null;
          })}
        </div>

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Order Details</h2>
            <div className="order-details">
              <div>
                <label htmlFor="order-date">Order Date:</label>
                <input
                    type="date"
                    id="order-date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="region">Region:</label>
                <select
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="">Select region</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="China">China</option>
                </select>
              </div>
            </div>

            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Order Amount</p>
                <p>{currency}{orderAmount.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Discount ({(discountRate * 100).toFixed(0)}%)</p>
                <p>-{currency}{discount.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Tax ({(taxRate * 100).toFixed(0)}%)</p>
                <p>{currency}{tax.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{currency}{totalAmount.toFixed(2)}</b>
              </div>
            </div>
            <button onClick={handleSubmit}>SUBMIT</button>
          </div>
        </div>
      </div>
  );
};

export default Cart;
