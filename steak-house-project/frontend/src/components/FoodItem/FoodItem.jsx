import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

/**
 * FoodItem Component
 *
 * Represents a single food item with its details, including the option to add or remove it from the cart.
 *
 * Props:
 * - image: URL of the food item's image.
 * - name: Name of the food item.
 * - price: Price of the food item.
 * - desc: Description of the food item.
 * - id: Unique identifier for the food item.
 */
const FoodItem = ({ image, name, price, desc, id }) => {
    const [itemCount, setItemCount] = useState(0);

    // Access store context for cart operations and global settings
    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

    return (
        <div className="food-item">
            {/* Image and Cart Actions */}
            <div className="food-item-img-container">
                <img
                    className="food-item-image will-change-transform h-[250px] object-cover"
                    src={`${url}/images/${image}`}
                    alt={`${name}`}
                />

                {/* Conditional Rendering: Add button or counter */}
                {!cartItems[id] ? (
                    <img
                        className="add"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt="Add to Cart"
                    />
                ) : (
                    <div className="food-item-counter">
                        <img
                            className="cursor-pointer"
                            src={assets.remove_icon_red}
                            onClick={() => removeFromCart(id)}
                            alt="Remove Item"
                        />
                        <p className="will-change-transform">{cartItems[id]}</p>
                        <img
                            className="cursor-pointer"
                            src={assets.add_icon_green}
                            onClick={() => addToCart(id)}
                            alt="Add More"
                        />
                    </div>
                )}
            </div>

            {/* Food Information */}
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p className="will-change-transform">{name}</p>
                    <div className="flex max-w-max items-center">
                        {/* Star Rating */}
                        {[...Array(4)].map((_, index) => (
                            <svg
                                key={index}
                                className="w-4 h-4 text-orange-600 ms-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                        <svg
                            className="w-4 h-4 ms-1 text-gray-200"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                </div>

                {/* Description and Price */}
                <p className="food-item-desc will-change-transform">{desc}</p>
                <p className="food-item-price will-change-transform">
                    {currency}{price}
                </p>
            </div>
        </div>
    );
};

export default FoodItem;
