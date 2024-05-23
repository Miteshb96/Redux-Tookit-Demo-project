import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = () => {
  const cartState = useSelector(state => state.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartState.items.map((cartItem) => {
            return <CartItem
              key={cartItem.id}
              item={{...cartItem, total: cartItem.totalPrice, id: cartItem.id}}
            />
          })}

        <li className={classes.item}>
          {` Total Cart Cost: ${cartState.totalAmount}`}
        </li>
      </ul>
    </Card>
  );
};

export default Cart;
