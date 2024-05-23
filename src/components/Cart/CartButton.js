import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {uiActions} from "../../store/ui-slice";

const CartButton = () => {
  const cartItems = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(uiActions.toggle())
  }
  
  return (
    <button onClick={handleToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
