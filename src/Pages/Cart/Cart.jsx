
import CartItem from "../../Components/CartItem/CartItem";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaTimes } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
    const [hide, setHide] = useState(false)

    // const { cart } = useContext(AuthContext);
    const cart = useLoaderData()

   
    const handleDelete = id => {

        fetch(`https://auto-majesty-server.vercel.app/remove/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    console.log('delete successful');
                    Swal.fire({
                        title: 'Successful!',
                        text: 'You are added this product successfuly',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    window.location.reload()
                }

            })
        console.log(id);

    }

    return (
        <div className="bg-orange-200">
            <div className="container mx-auto px-3 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {/* {
                        cart.map(cart => <CartItem key={cart._id} cart={cart}></CartItem>)
                    } */}

                    {
                        cart.map(loadCart => <div key={loadCart._id} className={hide ? 'hidden' : 'bg-base-100 p-3 relative'} >

                            <img className="w-full" src={loadCart.image ? loadCart.image : 'https://i.ibb.co/Dr8cBC7/not.png'} alt="" />
                            <div>
                                <h4 className="text-2xl font-semibold capitalize text-lime-400">{loadCart.name}</h4>
                                <h3 className="text-3xl font-thin text-orange-400">Price: {loadCart.price} tk</h3>
                                <p>Brand: {loadCart.brand}</p>
                            </div>
                            <button onClick={() => handleDelete(loadCart._id)} className='btn btn-circle absolute -top-3 -right-3'>

                                <FaTimes className='text-xl'></FaTimes>
                            </button>


                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;