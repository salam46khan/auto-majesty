import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const singleProduct = useLoaderData()
    
    const { name, brand, image, price, type, rating, description } = singleProduct;

    const handleCart = () =>{
        console.log(singleProduct);
        fetch('https://auto-majesty-server.vercel.app/cart', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(singleProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Successful!',
                        text: 'You are added this product successfuly',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="bg-orange-200">
            <div className="container mx-auto px-3 py-10 flex justify-center items-center">
                <div className="bg-base-100 shadow-lg rounded-xl p-10 flex flex-col md:flex-row gap-5 w-full">
                    <div className="w-full md:w-1/2">
                        <img className="w-full rounded-lg" src={image ? image : 'https://i.ibb.co/Dr8cBC7/not.png'} alt="img not found" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl uppercase font-bold text-lime-400">{name}</h2>
                        <hr />
                        <div className="space-y-2 mt-3">
                            <p className="text-xl text-orange-400">Price: {price} tk</p>
                            <p className="">Brand: <span className="uppercase font-bold">{brand}</span></p>
                            <p className="text-sm">Type: {type}</p>
                            <p className="text-sm">Rating: {rating}</p>
                            <p className="text-gray-400"> {description}</p>
                            <hr />
                        </div>
                        <div className="pt-4"> 
                            <button onClick={handleCart} className="btn bg-lime-400 hover:bg-lime-200">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;