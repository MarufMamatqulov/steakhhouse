import React, { useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

/**
 * ExploreMenu Component
 *
 * Displays a menu category selection interface where users can explore different categories of menu items.
 *
 * Props:
 * - category: Current selected category.
 * - setCategory: Function to update the selected category.
 */
const ExploreMenu = ({ category, setCategory }) => {
    // Accessing the menu list from the global store context
    const { menu_list } = useContext(StoreContext);

    return (
        <div className="explore-menu" id="explore-menu">
            {/* Section Title */}
            <h1 className="text-4xl font-black">Explore our menu</h1>

            {/* Description */}
            <p className="explore-menu-text text-xl">
                Choose from a diverse menu featuring a delectable array of dishes.
                Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>

            {/* Menu Category List */}
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div
                        key={index}
                        className="explore-menu-list-item"
                        onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} // Toggle category selection
                    >
                        {/* Menu Image */}
                        <img
                            src={item.menu_image}
                            alt={`${item.menu_name} image`}
                            className={category === item.menu_name ? "active" : ""}
                            style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover',
                                willChange: 'auto'
                            }}
                        />
                        {/* Menu Name */}
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <hr />
        </div>
    );
};

export default ExploreMenu;
