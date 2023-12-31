import { useContext} from "react";
import BrandItem from "../../../Components/BrandItem/BrandItem";
import { AuthContext } from "../../../Provider/AuthProvider";

const Brand = () => {

    const {brands} = useContext(AuthContext)
    
    return (
        <div className="bg-orange-100">
            <div className="container mx-auto px-3 py-10">
                <div className="pb-4 text-center">
                    <h2 className="text-4xl text-lime-400 font-bold">Brand Collection</h2>
                    <p className="w-full mx-auto md:w-2/5  my-2">
                        Automajesty was founded with a vision to create a platform that offers more than just a transaction
                    </p>
                </div>
                <div className="py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        brands.map(brand => <BrandItem key={brand.id} brand={brand}></BrandItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brand;