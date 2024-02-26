/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ProductDescription.css";

import { FaStar } from "react-icons/fa";

const ProductDescriptions = ({ desc, rev }) => {
    const [activeTab, setActiveTab] = useState("description");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="product-description-container">
            <ul className="product-description-titles">
                {[
                    "description",
                    "size",
                    "Additional Info",
                    `reviews(${rev})`,
                ].map((tab) => (
                    <li
                        key={tab}
                        className={activeTab === tab ? "border-active" : ""}
                        onClick={() => handleTabClick(tab)}
                    >
                        <h2>{tab.charAt(0).toUpperCase() + tab.slice(1)}</h2>
                    </li>
                ))}
            </ul>

            {activeTab === "description" && (
                <div className="product-description pd">
                    <p className="product-description-text">{desc}</p>
                </div>
            )}

            {activeTab === "size" && (
                <div className="product-size pd">
                    <table>
                        <thead>
                            <tr>
                                <th>Weight</th>
                                <th>Dimensions</th>
                                <th>Color</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="row1">
                                <td>0.5 kg</td>
                                <td>10x10x10 cm</td>
                                <td>Black</td>
                                <td>XL</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "Additional Info" && (
                <div className="product-additional-info pd">
                    <p className="product-size-text">
                        Additional Info sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            )}

            {activeTab.includes("reviews") && (
                <div className="product-review pd">

                    <div className="product-users-container">
                        <div className="product-review-user">
                            <div className="review-profile">
                                <img
                                    src="https://bit.ly/49tn7ul"
                                    alt="user" />
                                <h3>Marco Accardi</h3>
                            </div>
                            <div className="review-stars">
                                <p>5/5</p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p>Great product, would buy again</p>
                        </div>
                        <div className="product-review-user">
                            <div className="review-profile">
                                <img
                                    src="https://bit.ly/42TvTPV"
                                    alt="user" />
                                <h3>Carlo Trimarchi</h3>
                            </div>
                            <div className="review-stars">
                                <p>5/5</p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p>Arrivato come sempre velocemente</p>
                        </div>
                    </div>

                    <h4>More reviews...</h4>
                </div>
            )}
        </div>
    );
};

export default ProductDescriptions;
