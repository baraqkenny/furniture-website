import { useState } from 'react';
import './Cart.css';

const Cart = () => {
const [slideShow, setSlideShow] = useState(false);

  return (
    <div className="">
      <ion-icon
        onClick={() => setSlideShow(!slideShow)}
        className='cart-icon'
        name="cart-outline"
      ></ion-icon>
      {slideShow && (
        <div className="cart-container">
          <h1>hello people</h1>
          <h1>hello people</h1>
          <h1>hello people</h1>
          <h1>hello people</h1>
          <h1>hello people</h1>
        </div>
      )}
    </div>
  );
}

export default Cart
