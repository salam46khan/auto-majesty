import { useLoaderData } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className="bg-orange-200">
            <div className="container mx-auto px-3 py-10">
                
                {
                    products.length == 0 ? <div className="p-10 mx-auto bg-base-100 rounded-lg text-center">
                        <h2 className="font-bold text-lime-400 text-4xl">Not Found this Brand</h2>
                        <p className="w-full md:w-2/3 mx-auto">When you choose Automajesty, you are not just buying a car; you are embarking on an automotive journey marked by luxury, quality, and exceptional service. So, try another</p>
                    </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            products.map(product => <ProductItem product={product} key={product._id}></ProductItem>)
                        }
                    </div>
                }

            </div>
        </div>
    );
};

export default Products;