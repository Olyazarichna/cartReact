// import Button from '../Button';

const CartInputForm =()=> {
//     const [name, setName] = useState('');
//     const [price, setPrice]  = useState('');
//     const [extendedGuarantee, setExtendedGuaranteee] = useState(false);

//     const handleNameChange = (e) => setName(e.target.value);
//     const handlePriceChange =(e) => setPrice(e.target.value);
//     // const handleEGChange =(e)=> set
    return(
        <div>
            <form>
                <label>
                    <span>name
                    </span>
                    <input type='text'>
                    </input>
                </label>
                <label>
                    <span>price
                    </span>
                    <input type='number'>
                    </input>
                </label>
                <label>
                    <span>extended 
                    </span>
                    <input type='number'>
                    </input>
                </label>
                <button type="submit">+add</button>
         {/* Button component  */}
            </form>
        </div>
    )
}

export default CartInputForm;