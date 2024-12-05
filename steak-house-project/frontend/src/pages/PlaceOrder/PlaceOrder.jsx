import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
    const [payment, setPayment] = useState('cod');
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    });

    const {
        getTotalCartAmount,
        token,
        food_list,
        cartItems,
        url,
        setCartItems,
        currency,
        deliveryCharge,
    } = useContext(StoreContext);

    const navigate = useNavigate();
    const location = useLocation();

    const { region, orderDate, discount, taxRate, tax, quantity } = location.state || {
        region: '',
        orderDate: '',
        discount: 0,
        taxRate: 0,
        tax: 0,
        quantity: 0, // Add a default value for quantity
    };

    const subtotal = getTotalCartAmount();
    const totalAmount = subtotal - discount + tax;

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const placeOrder = async (e) => {
        e.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo['quantity'] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
            return null;
        });

        let orderData = {
            address: data,
            items: orderItems,
            amount: totalAmount,
            region,  // Pass region
            tax,
            orderDate,  // Pass orderDate
        };

        if (payment === 'stripe') {
            let response = await axios.post(url + '/api/order/place', orderData, { headers: { token } });
            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            } else {
                toast.error('Something Went Wrong');
            }
        } else {
            let response = await axios.post(url + '/api/order/placecod', orderData, { headers: { token } });
            if (response.data.success) {
                navigate('/myorders');
                toast.success(response.data.message);
                setCartItems({});
            } else {
                toast.error('Something Went Wrong');
            }
        }
    };

    return (
        <form onSubmit={placeOrder} className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>

                {/* Delivery form */}
                <div className="multi-field">
                    <input
                        type="text"
                        name="firstName"
                        onChange={onChangeHandler}
                        value={data.firstName}
                        placeholder="First name"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        onChange={onChangeHandler}
                        value={data.lastName}
                        placeholder="Last name"
                        required
                    />
                </div>

                <div className="multi-field">
                    <input
                        type="email"
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        onChange={onChangeHandler}
                        value={data.phone}
                        placeholder="Phone"
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        name="street"
                        onChange={onChangeHandler}
                        value={data.street}
                        placeholder="Street Address"
                        required
                    />
                </div>

                <div className="multi-field">
                    <input
                        type="text"
                        name="city"
                        onChange={onChangeHandler}
                        value={data.city}
                        placeholder="City"
                        required
                    />
                    <input
                        type="text"
                        name="state"
                        onChange={onChangeHandler}
                        value={data.state}
                        placeholder="State"
                        required
                    />
                </div>

                <div className="multi-field">
                    <input
                        type="text"
                        name="zipcode"
                        onChange={onChangeHandler}
                        value={data.zipcode}
                        placeholder="Zip Code"
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        onChange={onChangeHandler}
                        value={data.country}
                        placeholder="Country"
                        required
                    />
                </div>
            </div>

            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{currency}{subtotal.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Quantity</p>
                            <p>{quantity}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Discount (10%)</p>
                            <p>-{currency}{discount.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Tax ({taxRate * 100}%)</p>
                            <p>{currency}{tax.toFixed(2)}</p>
                        </div>
                        <hr />
                        {/* Region and Order Date */}
                        <div className="cart-total-details">
                            <p>Region</p>
                            <p>{region}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Order Date</p>
                            <p>{orderDate}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{currency}{totalAmount.toFixed(2)}</b>
                        </div>
                    </div>

                    <div className="payment">
                        <h2>Select Payment Method</h2>
                        <div onClick={() => setPayment("cod")} className="payment-option">
                            <label className="payment-label">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={payment === "cod"}
                                    onChange={() => setPayment("cod")}
                                />
                                <span>COD ( Cash on delivery )</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="place-order-button">
                    <button type="submit">PLACE ORDER</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
