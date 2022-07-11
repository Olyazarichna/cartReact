import PropTypes from 'prop-types';

const TotalAmount=({items})=>{
    const total = items.reduce((acc, item)=> acc*item.count + item.price, 0);
    return(
        <p>Total: {total}$</p>
    )
}
export default TotalAmount;

TotalAmount.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
       count: PropTypes.number.isRequired,
       price: PropTypes.number.isRequired,
    }))
}