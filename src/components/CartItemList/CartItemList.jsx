import CartItem from 'components/CartItem/CartItem';
import PropTypes from 'prop-types';
const CartItemList =({items})=>{
    return(
           <div className="cart-item-list">
               {items.map((item) => (
                   <CartItem key={item.id} item={item}/>
               ))}
        {/* <CartItem/>
        <CartItem/>
        <CartItem/> */}

    </div>
    )
 
}
export default CartItemList;

CartItemList.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.string.isRequired,

    }))
}