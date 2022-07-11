// import {useState} from 'react';
import Loader from 'components/Loader/Loader';
import CartInputForm from 'components/CartInputForm/index';
import CartItemList from 'components/CartItemList/CartItemList';
import TotalAmount from 'components/TotalAmount/TotalAmount'

const initialState = [
    {id:'1', name:'printer', price:110, count:2},
    {id:'2', name:'Ram', price:30, count:0},
    {id:'3', name:'matherboard', price:150, count:1},
    {id:'4', name:'mouse', price:110, count:4},
];

const Cart =() => {
//     const []
//     const [items, setItems] = useState(initialState);

//     const handleRemoveItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id));

//     const handleDecrement= (id) => {
//         setItems((prev) => prev.map((item)=>item.id === id ? {
//             ...item,
//             count: item.count >0? item.count -1:0.
//         }
//         : item));

//         const handleIncrement =(id)=>{
//             setItems((prev) => prev.map((item)=>item.id === id ? {
//                 ...item,
//                 count: item.count +1.
//             }
//             : item))

        // }

        return (
            <div 
            // className = {style.cart}
            >
                <CartInputForm/>
                <Loader/>
                <CartItemList
                items={initialState}
                // onDecrement={handleDecrement}
                // onIncrement={handleIncrement}
                />
                <TotalAmount 
                items={initialState}
                />



            </div>
        )
//     }
}
 export default Cart;