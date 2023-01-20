import styles from "./Cart.module.css";
import MainPage from "../Cart/Mainpage";

const Cart=()=>
{
    return (
         <>
            <h1>Cart Page</h1>
            <div className={styles.cart_main_div}>
                <div className={styles.cart_top_div}>
                    <div className={styles.top_inner_div}>
                        100% Money Back Guarantee
                    </div>
                    <div className={styles.top_inner_div}>Free Shipping Within India</div>
                    <div className={styles.top_inner_div}>7 Day Return</div>
                    <div className={styles.top_inner_div}>Ships Worldwide</div>
                    <div className={styles.top_inner_div}>91-2200229090</div>

                </div>
                <div className={styles.cart_middle_div}>

                    <div className={styles.cart_left_div}>
                        <MainPage/>
                    </div>
                    <div className={styles.cart_right_div}></div>
                </div>
                

            </div>

        </>
    )
}
export default Cart