import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import "./ProductCss/ProductsLeft.css"
export const ProductsLeft = () => {
    const [query,setQuery]=useSearchParams("")
    const [active, setActive] = useState("");
    const [color,setColor]=useState(query.get("color")||"");
    const [price,setPrice]=useState(query.get("price")||"");
    
    useEffect(()=>{
        const queries={};
        if(price!=="")
            queries.price=price;
        if(color!=="")
            queries.color=color
        setQuery(queries)
    },[price,color,setQuery])
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
                        <input type="checkbox" onChange={()=>(price==="399 And Below")?setPrice(""):setPrice("399 And Below")} checked={price==="399 And Below"}/>
                        <span>399 And Below</span>
                    </div>
                    <div>
                        <input type="checkbox" onChange={()=>(price==="400 To 599")?setPrice(""):setPrice("400 To 599")} checked={price==="400 To 599"}/>
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
                        <input type="checkbox"  onChange={()=>(color==="white")?setColor(""):setColor("white")} checked={color==="white"} />
                        <span>White</span>
                    </div>
                    <div>
                        <input type="checkbox" onChange={()=>(color==="black")?setColor(""):setColor("black")} checked={color==="black"} />
                        <span>Black</span>
                    </div>
                    <div>
                        <input type="checkbox" onChange={()=>(color==="red")?setColor(""):setColor("red")} checked={color==="red"} />
                        <span>Red</span>
                    </div>
                    <div>
                        <input type="checkbox" onChange={()=>(color==="yellow")?setColor(""):setColor("yellow")} checked={color==="yellow"} />
                        <span>Yellow</span>
                    </div>
                    <div>
                        <input type="checkbox" onChange={()=>(color==="pink")?setColor(""):setColor("pink")} checked={color==="pink"}/>
                        <span>Pink</span>
                    </div>
                    <div>
                        <input type="checkbox" onChange={()=>(color==="multi")?setColor(""):setColor("multi")} checked={color==="multi"}/>
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
