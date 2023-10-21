import { useLoaderData } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

const Products = () => {
    const products = useLoaderData();
    console.log('from sss', products);
    return (
        <div className="bg-orange-200">
            <div className="container mx-auto px-3 py-10">
                <p>this is product page : {products.length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        products.map(product => <ProductItem product={product} key={product._id}></ProductItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;