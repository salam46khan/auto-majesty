import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';
const CartItem = ({cart}) => {
    const {image, name, price, brand, _id} = cart;
    
    
    const handleDelete = id =>{
        fetch(`https://auto-majesty-server.vercel.app/remove/${id}`,{
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
        console.log(id);
    }


    return (
        <div className="bg-base-100 p-3 relative">
            <img className="w-full" src={image ? image : 'https://i.ibb.co/Dr8cBC7/not.png'} alt="" />
            <div>
                <h4 className="text-2xl font-semibold capitalize text-lime-400">{name}</h4>
                <h3 className="text-3xl font-thin text-orange-400">Price: {price} tk</h3>
                <p>Brand: {brand}</p>
            </div>
            <button onClick={()=>handleDelete(_id)} className='btn btn-circle absolute -top-3 -right-3'>
                
                <FaTimes className='text-xl'></FaTimes>
            </button>
        </div>
    );
};
CartItem.propTypes = {
    cart: PropTypes.object,
    setLoadedCart: PropTypes.func
}
export default CartItem;