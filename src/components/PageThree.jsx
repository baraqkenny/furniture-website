import { useReducer} from 'react';
import furnitureItems from './furnitureItems';
import './PageThree.css';
import { cartReducer } from '../reducers/cartReducer';


const PageThree = () => {

  const initialState = {
    cart: []
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <section className="page-three-container">
      <h1 className="content-header">New Arrival</h1>
      {furnitureItems.map((item) => (
        <div key={item.id} className="content-three-header">
          <div className="content">
            <img src={item.image} className="item-image" alt="" />
            <h1>{item.title}</h1>
            <p>${item.price}.00</p>
              <button className="btn ">add to cart</button>

          </div>
        </div>
      ))}
    </section>
  );
}

export default PageThree
