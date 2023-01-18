import React from 'react'
import { useState } from 'react'
import "./ProductCss/ProductsLeft.css"
export const ProductsLeft = () => {
    const [active, setActive] = useState("");
    return (
        <div className='a-products-left'>
            {/*All Discount */}
            <div className='a-sortlist'>
                <div className={`a-sortlist-item-top ${(active === "AllDiscount") ? "a-sortlist-color" : ""}`} onClick={() => (active === "AllDiscount") ? setActive("") : setActive("AllDiscount")}>
                    <img src="/Images/tag.png" alt="" />
                    <span>All Discount</span>
                </div>
                <div className={`a-sortlist-item-bottom ${(active !== "AllDiscount") ? "a-sortlist-hide" : ""}`}>
                    <div>
                        <input type="checkbox" />
                        <span>Discounted Items</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Non Discounted Items</span>
                    </div>
                </div>
            </div>
            {/* Gender */}
            <div className='a-sortlist'>
                <div className={`a-sortlist-item-top ${(active === "Gender") ? "a-sortlist-color" : ""}`} onClick={() => (active === "Gender") ? setActive("") : setActive("Gender")}>
                    <img src="/Images/sex.png" alt="" />
                    <span>Gender</span>
                </div>
                <div className={`a-sortlist-item-bottom ${(active !== "Gender") ? "a-sortlist-hide" : ""}`}>
                    <div>
                        <input type="checkbox" />
                        <span>Male</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Female</span>
                    </div>
                </div>
            </div>
            {/* Discount*/}
            <div className='a-sortlist'>
                <div className={`a-sortlist-item-top ${(active === "Discount") ? "a-sortlist-color" : ""}`} onClick={() => (active === "Discount") ? setActive("") : setActive("Discount")}>
                    <img src="/Images/discount.png" alt="" />
                    <span>Discount</span>
                </div>
                <div className={`a-sortlist-item-bottom ${(active !== "Discount") ? "a-sortlist-hide" : ""}`}>
                    <div>
                        <input type="checkbox" />
                        <span>51%-60%</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>61% And Above</span>
                    </div>
                </div>
            </div>
            {/* Ocasion */}
            <div className='a-sortlist'>
                <div className={`a-sortlist-item-top ${(active === "Ocasion") ? "a-sortlist-color" : ""}`} onClick={() => (active === "Ocasion") ? setActive("") : setActive("Ocasion")}>
                    <img src="/Images/hanger.png" alt="" />
                    <span>Ocasion</span>
                </div>
                <div className={`a-sortlist-item-bottom ${(active !== "Ocasion") ? "a-sortlist-hide" : ""}`}>
                    <div>
                        <input type="checkbox" />
                        <span>Casual</span>
                    </div>
                </div>
            </div>
            {/* Sizes */}
            <div className='a-sortlist'>
                <div className={`a-sortlist-item-top ${(active === "Sizes") ? "a-sortlist-color" : ""}`} onClick={() => (active === "Sizes") ? setActive("") : setActive("Sizes")}>
                    <img src="/Images/measuring-tape.png" alt="" />
                    <span>Sizes</span>
                </div>
                <div className={`a-sortlist-item-bottom ${(active !== "Sizes") ? "a-sortlist-hide" : ""}`}>
                    <div>
                        <input type="checkbox" />
                        <span>M</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>S</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>L</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>XL</span>
                    </div>
                </div>
            </div>
            {/*  Price*/}
            <div className='a-sortlist'>
                <div className={`a-sortlist-item-top ${(active === "Price") ? "a-sortlist-color" : ""}`} onClick={() => (active === "Price") ? setActive("") : setActive("Price")}>
                    <img src="/Images/rupee-indian.png" alt="" />
                    <span>Price</span>
                </div>
                <div className={`a-sortlist-item-bottom ${(active !== "Price") ? "a-sortlist-hide" : ""}`}>
                    <div>
                        <input type="checkbox" />
                        <span>399 And Below</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>400 To 599</span>
                    </div>
                </div>
            </div>
            {/* Color */}
            <div className='a-sortlist'>
                <div className={`a-sortlist-item-top ${(active === "Color") ? "a-sortlist-color" : ""}`} onClick={() => (active === "Color") ? setActive("") : setActive("Color")}>
                    <img src="/Images/color-palette.png" alt="" />
                    <span>Color</span>
                </div>
                <div className={`a-sortlist-item-bottom ${(active !== "Color") ? "a-sortlist-hide" : ""}`}>
                    <div>
                        <input type="checkbox" />
                        <span>White</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Black</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Red</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Yellow</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Pink</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Multi</span>
                    </div>
                </div>
            </div>
            {/* Fit */}
            <div className='a-sortlist'>
                <div className='a-sortlist-item-top'>
                    <img src="/Images/dress.png" alt="" />
                    <span>Fit</span>
                </div>
            </div>
            {/* Sleeves */}
            <div className='a-sortlist'>
                <div className='a-sortlist-item-top'>
                    <img src="/Images/shirt.png" alt="" />
                    <span>Sleeves</span>
                </div>
            </div>
        </div>
    )
}
